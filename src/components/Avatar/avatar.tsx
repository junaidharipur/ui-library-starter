import React from "react";
import cx from "classnames";
import { AvatarOnline } from "../icons/AvatarIcons";
import { getFirstLetters } from "../../utils/customfunctions";

interface AvatarProps {
    size?: "Extra Small" | "Small" | "Medium" | "Large" | "Extra Large";
    label?: string;
    imgSrc?: string;
    showIcon: boolean;
}

export function Avatar({ imgSrc, size, showIcon, label }: AvatarProps) {
    return (
        <div className="relative">
            {imgSrc ? (
                <img
                    className=" rounded"
                    src={imgSrc}
                    width={size === "Extra Small" ? 24 : size === "Small" ? 38 : size === "Medium" ? 42 : size === "Large" ? 52 : 80}
                    height={size === "Extra Small" ? 24 : size === "Small" ? 38 : size === "Medium" ? 42 : size === "Large" ? 52 : 80}
                />
            ) : (
                label && (
                    <div
                        className={cx("flex justify-center align-middle items-center bg-primary rounded", {
                            "w-6 h-6": size === "Extra Small",
                            "w-[38px] h-[38px]": size === "Small",
                            "w-[42px] h-[42px]": size === "Medium",
                            "w-[52px] h-[52px]": size === "Large",
                            "w-20 h-20": size === "Extra Large",
                        })}
                    >
                        <span
                            className={cx("text-white font-semibold", {
                                "text-xs": size === "Extra Small",
                                "text-[14px] leading-[22px]": size === "Small",
                                "text-base": size === "Medium",
                                "text-xl": size === "Large",
                                "text-[28px] leading-[40px]": size === "Extra Large",
                            })}
                        >
                            {label && getFirstLetters(label)}{" "}
                        </span>
                    </div>
                )
            )}
            {showIcon && (
                <div
                    className={cx("absolute", {
                        "pl-5 top-0": size === "Extra Small",
                        "pl-8 top-0": size === "Small",
                        "pl-9 top-0": size === "Medium",
                        "pl-11 top-0": size === "Large",
                        "pl-[4.2rem] top-0": size === "Extra Large",
                    })}
                >
                    <AvatarOnline
                        width={
                            size === "Extra Small"
                                ? "8"
                                : size === "Small"
                                ? "14"
                                : size === "Medium"
                                ? "16"
                                : size === "Large"
                                ? "18"
                                : "22"
                        }
                        height={
                            size === "Extra Small"
                                ? "8"
                                : size === "Small"
                                ? "14"
                                : size === "Medium"
                                ? "16"
                                : size === "Large"
                                ? "18"
                                : "22"
                        }
                    />
                </div>
            )}
        </div>
    );
}
