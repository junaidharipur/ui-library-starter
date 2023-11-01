import React from "react";
import cx from "classnames";
import { AvatarOnline } from "../icons/AvatarIcons";
import { getFirstLetters } from "../../utils/customfunctions";

interface AvatarProps {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    label?: string;
    imgSrc?: string;
    showIcon: boolean;
}

export function Avatar({ imgSrc, size, showIcon, label }: AvatarProps) {
    return (
        <div>
            {showIcon && (
                <div
                    className={cx("relative", {
                        "pl-5 top-1.5": size === "xs",
                        "pl-8 top-2.5": size === "sm",
                        "pl-9 top-[0.7rem]": size === "md",
                        "pl-11 top-[0.8rem]": size === "lg",
                        "pl-[4.2rem] top-[1rem]": size === "xl",
                    })}
                >
                    <AvatarOnline
                        width={
                            size === "xs"
                                ? "8"
                                : size === "sm"
                                ? "14"
                                : size === "md"
                                ? "16"
                                : size === "lg"
                                ? "18"
                                : "22"
                        }
                        height={
                            size === "xs"
                                ? "8"
                                : size === "sm"
                                ? "14"
                                : size === "md"
                                ? "16"
                                : size === "lg"
                                ? "18"
                                : "22"
                        }
                    />
                </div>
            )}

            {imgSrc ? (
                <img
                    className=" rounded"
                    src={imgSrc}
                    width={size === "xs" ? 24 : size === "sm" ? 38 : size === "md" ? 42 : size === "lg" ? 52 : 80}
                    height={size === "xs" ? 24 : size === "sm" ? 38 : size === "md" ? 42 : size === "lg" ? 52 : 80}
                />
            ) : (
                label && (
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
                )
            )}
        </div>
    );
}
