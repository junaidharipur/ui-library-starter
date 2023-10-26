import cx from "classnames";
import React, { ReactElement } from "react";

interface InputProps {
    variant?: "success" | "error" | "normal";
    size?: "small" | "medium" | "large";
    label?: string;
    helperText?: string;
    value?: string;
    onChange?: () => void;
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
            <label
                aria-labelledby={name}
                htmlFor={name}
                className={cx("block", {
                    "text-lg font-medium ": size === "large",
                    "text-base font-medium leading-6": size === "medium",
                    "text-sm font-normal leading-6 ": size === "small",
                })}
            >
                {label}
            </label>
            <div className="relative">
                {Icon && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none cursor-pointer">
                        <Icon />
                    </div>
                )}
                <input
                    name={name}
                    type={type}
                    id={name}
                    value={value}
                    onChange={onChange}
                    className={cx(
                        "border text-green-90 placeholder-[##9CA3AF] text-sm rounded-md focus:ring-[#009AEE] focus:outline-[#009AEE] focus:border-[#009AEE] block w-full",
                        {
                            "border-[#DFE4EA]": variant === "normal",
                            "border-green-500": variant === "success",
                            "border-red-400": variant === "error",
                        },
                        {
                            "py-3 pl-5 pr-4 ": size === "large",
                            "py-2 pl-5 pr-4": size === "medium",
                            "py-[5px] pl-5 pr-4 ": size === "small",
                        },
                    )}
                    placeholder={palceholder}
                />
            </div>
            <p
                className={cx(" text-xs font-normal leading-5", {
                    "text-[#4B5563]": variant === "normal",
                    "text-green-400": variant === "success",
                    "text-red-400": variant === "error",
                })}
            >
                {helperText}
            </p>
        </div>
    );
}
