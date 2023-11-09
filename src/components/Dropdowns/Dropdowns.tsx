import * as React from "react";

import cx from "classnames";

import { Icondropdownbottom, IcondropdownUp } from "../icons/InputIcons";

export function Dropdown({
    options = [],
    variant,
    outlined,
    defaultValue,
    getSelectedData,
}: DropdownProps): React.ReactElement {
    const [showdropdown, setshowdropdown] = React.useState(false);
    const [value, setvalue] = React.useState(defaultValue);

    return (
        <div className="relative">
            <div
                className={cx(
                    "flex justify-between text-base border border-input-border-normal-500 focus:ring-primary focus:outline-primary focus:border-primary rounded-md  px-3  w-full",
                    {
                        "py-2 px-5": variant === "Large",
                        "py-[5px] px-5": variant === "Medium",
                        "py-[3px] px-4": variant === "Small",
                        "bg-dark-8": !outlined,
                    },
                )}
                onClick={() => setshowdropdown(!showdropdown)}
            >
                <div
                    className={cx("text-primary-text", {
                        "text-base font-normal": variant === "Medium",
                        "text-sm font-medium": variant === "Small",
                    })}
                >
                    {value}
                </div>
                <div
                    className={cx("cursor-pointer", {
                        "pt-[0.6rem]": variant === "Large",
                        "pt-2": variant === "Medium",
                        "pt-[0.5rem]": variant === "Small",
                    })}
                >
                    {!showdropdown ? <Icondropdownbottom /> : <IcondropdownUp />}
                </div>
            </div>
            {showdropdown && (
                <div
                    className={cx(
                        "z-10 absolute bg-white w-full flex flex-col gap-3 justify-between  py-3 border rounded-lg h-auto max-h-[20rem] overflow-auto mt-3 shadow-dropdown",
                        {
                            "top-12": variant === "Medium",
                            "top-10": variant === "Small",
                        },
                    )}
                >
                    {options?.map((option, index) => (
                        <p
                            key={index}
                            className={cx("py-3 cursor-pointer hover:bg-primary pl-3 hover:text-white", {
                                "text-base font-normal": variant === "Medium",
                                "text-sm font-medium": variant === "Small",
                                "bg-primary text-white": value === option?.value,
                                "text-primary-text": value !== option?.value,
                            })}
                            onClick={() => {
                                setvalue(option?.label);
                                setshowdropdown(false);
                                getSelectedData && getSelectedData(option?.value);
                            }}
                        >
                            {option?.label}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
}

interface DropdownProps {
    options: { value: string; label: string }[];
    variant: "Medium" | "Small" | "Large";
    outlined: boolean;
    defaultValue: string;
    getSelectedData?: (_data: string) => void;
}
