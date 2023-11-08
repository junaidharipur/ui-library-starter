import React from "react";
import cx from "classnames";
import { getFirstLetters } from "../../utils/customfunctions";

export function TextAvatar({ size, label }: TextAvatarProps) {
    return (
        <div
            className={cx("flex justify-center align-middle items-center bg-primary rounded", {
                "w-6 h-6": size === "xs",
                "w-[38px] h-[38px]": size === "sm",
                "w-[42px] h-[42px]": size === "md",
                "w-[52px] h-[52px]": size === "lg",
                "w-20 h-20": size === "xl",
            })}
        >
            <span
                className={cx("text-white font-semibold", {
                    "text-xs": size === "xs",
                    "text-[14px] leading-[22px]": size === "sm",
                    "text-base": size === "md",
                    "text-xl": size === "lg",
                    "text-[28px] leading-[40px]": size === "xl",
                })}
            >
                {label && getFirstLetters(label)}{" "}
            </span>
        </div>
    );
}
interface TextAvatarProps {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    label?: string;
}
