import React, { ReactElement } from "react";
import "./dropdown.css";
import { Icondropdown } from "../icons/InputIcons";
import cx from "classnames";

type OptionsProps = {
    options: string[];
    variant: "md" | "sm";
};

export function Dropdown({ options, variant }: OptionsProps): ReactElement {
    return (
        <div className="selectdiv">
            {" "}
            <select
                name="dropdown"
                id="dropdown"
                className={cx(
                    "text-tertiary-dark text-base border border-input-border-normal-500 focus:ring-primary focus:outline-primary focus:border-primary rounded-md  px-3  w-full",
                    {
                        "py-3": variant === "md",

                        "py-[5px]": variant === "sm",
                    },
                )}
            >
                {options?.map(option => (
                    <option value={option} className="py-3 cursor-pointer">
                        {option}
                    </option>
                ))}
            </select>
            {/* <div className="absolute right-5 top-7">
                <Icondropdown />
            </div> */}
        </div>
    );
}
