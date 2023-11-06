import React, { ChangeEvent, ReactElement } from "react";
import cx from "classnames";
import { Typography } from "../Typography/Typography";

interface InputProps {
    variant?: "success" | "error" | "normal";
    size?: "small" | "medium" | "large";
    label?: string;
    helperText?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    palceholder: string;
    type: string;
    icon?: React.ComponentType;
    name: string;
}

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
            <p
                className={cx("block text-dark", {
                    "text-lg font-medium ": size === "large",
                    "text-base font-medium leading-6": size === "medium",
                    "text-sm font-normal leading-6 ": size === "small",
                })}
            >
                <Typography variant="body2-regular">{label}</Typography>
            </p>
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
                            "border-stroke": variant === "normal",
                            "border-green": variant === "success",
                            "border-red": variant === "error",
                        },
                        {
                            "py-2 pl-5 pr-4 ": size === "large",
                            "py-[5px] pl-5 pr-4": size === "medium",
                            "py-[3px] pl-5 pr-4 ": size === "small",
                        },
                    )}
                    placeholder={palceholder}
                />
            </div>
            <p
                className={cx(" text-xs font-normal leading-5", {
                    "text-[#4B5563]": variant === "normal",
                    "text-green": variant === "success",
                    "text-red": variant === "error",
                })}
            >
                {helperText}
            </p>
        </div>
    );
}
