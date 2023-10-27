import React, { ReactElement, useState } from "react";
import { Icondropdownbottom, IcondropdownUp } from "../icons/InputIcons";
import cx from "classnames";

type OptionsProps = {
    options: string[];
    variant: "md" | "sm";
    outlined: boolean;
    defaultValue: string
};

export function Dropdown({ options, variant, outlined,defaultValue }: OptionsProps): ReactElement {

    const [showdropdown, setshowdropdown] = useState(false);
    const [value, setvalue] = useState(defaultValue);

    const Textclasses = {
        "text-base font-normal": variant === "md",
        "text-sm font-medium": variant === "sm",
    };

    return (
        <div className="relative">
            <div
                className={cx(
                    "  flex justify-between   text-base border border-input-border-normal-500 focus:ring-primary focus:outline-primary focus:border-primary rounded-md  px-3  w-full",
                    {
                        "py-3": variant === "md",

                        "py-[5px]": variant === "sm",
                        "bg-dark-8": !outlined,
                    },
                )}
                onClick={() => setshowdropdown(!showdropdown)}
            >
                <div className={cx("text-primary-text", Textclasses)}>{value}</div>
                <div
                    className={cx("cursor-pointer", {
                        "pt-2": variant === "md",

                        "py-[5px]": variant === "sm",
                    })}
                >
                    {!showdropdown ? <Icondropdownbottom /> : <IcondropdownUp />}
                </div>
            </div>
            {showdropdown && (
                <div
                    className={cx(
                        {
                            "top-12": variant === "md",

                            "top-10": variant === "sm",
                        },
                        "z-10 absolute  bg-white w-full flex flex-col gap-3 justify-between  py-3 border rounded-lg h-auto max-h-[20rem] overflow-auto mt-3 shadow-dropdown",
                    )}
                >
                    {options?.map(option => (
                        <p
                            className={cx("py-3 cursor-pointer hover:bg-primary pl-3 hover:text-white", Textclasses, {
                                "bg-primary text-white": value === option,
                                "text-primary-text": value !== option,
                            })}
                            onClick={() => {
                                setvalue(option);
                                setshowdropdown(false);
                            }}
                        >
                            {option}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
}
