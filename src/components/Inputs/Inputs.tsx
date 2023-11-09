import React, { ChangeEvent, ReactElement } from "react";
import cx from "classnames";
import { Typography } from "../Typography/Typography";

export function FormInput({
    variant,
    size,
    label,
    helperText,
    palceholder,
    value,
    type,
    icon: Icon,
    name,
    onChange,
}: InputProps): ReactElement {
    return (
        <div className="flex flex-col gap-[5px]">
            <span
                className={cx("block text-dark", {
                    "text-lg font-medium ": size === "Large",
                    "text-base font-medium leading-6": size === "Medium",
                    "text-sm font-normal leading-6 ": size === "Small",
                })}
            >
                <Typography variant="body2-regular">{label}</Typography>
            </span>
            <div className="relative">
                {Icon && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none cursor-pointer">
                        <Icon />
                    </div>
                )}
                <input
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    className={cx(
                        " border placeholder-input-placeholder text-base font-normal rounded-md focus:ring-primary focus:outline-primary focus:border-primary block w-full",
                        {
                            "border-stroke": variant === "Normal",
                            "border-green": variant === "Success",
                            "border-red": variant === "Error",
                        },
                        {
                            "py-2 pl-5 pr-4 ": size === "Large",
                            "py-[5px] pl-5 pr-4": size === "Medium",
                            "py-[3px] pl-5 pr-4 ": size === "Small",
                        },
                    )}
                    placeholder={palceholder}
                />
            </div>
            <p
                className={cx(" text-xs font-normal leading-5", {
                    "text-[#4B5563]": variant === "Normal",
                    "text-green": variant === "Success",
                    "text-red": variant === "Error",
                })}
            >
                {helperText}
            </p>
        </div>
    );
}

interface InputProps {
    variant?: "Success" | "Error" | "Normal";
    size?: "Small" | "Medium" | "Large";
    label?: string;
    helperText?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    palceholder: string;
    type: string;
    icon?: React.ComponentType;
    name: string;
}
