import * as React from "react";
import cx from "classnames";
import { Typography } from "../Typography/Typography";


export function FormInput({
    variant = "Default",
    size = "Small",
    label,
    helperText,
    palceholder,
    value,
    type = "text",
    icon: Icon,
    name,
    required,
    readOnly,
    className,
    onChange,
    onIconClick,
    className,
    style,
    disabled,
    readOnly,
    ...other
}: InputProps) {
    return (

        <div className="flex flex-col gap-[5px]">
            <span
                className={cx(
                    "text-dark flex gap-1",
                    {
                        "text-lg font-medium ": size === "Large",
                        "text-base font-medium leading-6": size === "Medium",
                        "text-sm font-medium leading-6 ": size === "Small",
                        "text-gray-500": readOnly,
                    },
                    className,
                )}
            >
                <p>{label}</p> {required && <span>*</span>}
            </span>

        <div className={`flex flex-col ${className}`}>
            {label && (
                <span
                    className={cx("block text-dark mb-[5px]", {
                        "text-lg font-medium ": size === "Large",
                        "text-base font-medium leading-6": size === "Medium",
                        "text-sm font-normal leading-6 ": size === "Small",
                    })}
                >
                    <Typography variant="body2">{label}</Typography>
                </span>
            )}

            <div className="relative">
                {Icon && (
                    <div
                        onClick={onIconClick}
                        className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none cursor-pointer"
                    >
                        <Icon />
                    </div>
                )}
                <input
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    style={style}
                    disabled={disabled}
                    readOnly={readOnly}
                    className={cx(
                        "border placeholder-input-placeholder text-base font-normal rounded-md focus:ring-primary focus:outline-primary focus:border-primary block w-full",
                        {
                            "border-stroke": variant === "Default",
                            "border-green": variant === "Success",
                            "border-red": variant === "Error",
                            "py-2 pl-5 pr-4 ": size === "Large",
                            "py-[5px] pl-5 pr-4": size === "Medium",
                            "py-[3px] pl-5 pr-4 ": size === "Small",
                            "bg-grey-3": readOnly,
                        },
                    )}
                    placeholder={palceholder}

                    readOnly={readOnly}
                    required={required}
                />
            </div>
            <p
                className={cx(" text-xs font-normal leading-5", {
                    "text-[#4B5563]": variant === "Default",
                    "text-green": variant === "Success",
                    "text-red": variant === "Error",
                    "text-gray-500": readOnly,
                })}
            >
                {helperText}
            </p>

                    {...other}
                />
            </div>
            {helperText && (
                <p
                    className={cx(" text-xs font-normal leading-5 mb-[5px]", {
                        "text-[#4B5563]": variant === "Default",
                        "text-green": variant === "Success",
                        "text-red": variant === "Error",
                    })}
                >
                    {helperText}
                </p>
            )}
        </div>
    );
}

interface InputProps {
    variant?: "Success" | "Error" | "Default";
    size?: "Small" | "Medium" | "Large";
    label?: string;
    helperText?: string;
    value?: string | ReadonlyArray<string> | number | undefined;
    onChange?: (_e: ChangeEvent<HTMLInputElement>) => void;
    palceholder?: string;
    type: "number" | "text" | "password" | "email" | "date" | "range";
    icon?: React.ComponentType;
    name?: string;
    required?: boolean;
    readOnly?: boolean;
    className?: string;
    value?: string;
    onChange?: (_e: React.ChangeEvent<HTMLInputElement>) => void;
    palceholder: string;
    type: string;
    icon?: React.ComponentType;
    name: string;
    onIconClick?: () => void;
    style?: React.CSSProperties;
    className?: string;
    readOnly?: boolean;
    disabled?: boolean;
}
