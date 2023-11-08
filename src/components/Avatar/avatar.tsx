import React from "react";
import { TextAvatar } from "./textavatar";
import { OnlineIcon } from "./onineIcon";

export function Avatar({ imgSrc, size, isIcon, label }: AvatarProps) {
    return (
        <div className="relative">
            {imgSrc ? (
                <img
                    className=" rounded"
                    src={imgSrc}
                    width={size === "xs" ? 24 : size === "sm" ? 38 : size === "md" ? 42 : size === "lg" ? 52 : 80}
                    height={size === "xs" ? 24 : size === "sm" ? 38 : size === "md" ? 42 : size === "lg" ? 52 : 80}
                />
            ) : (
                label && <TextAvatar size={size} label={label} />
            )}
            {isIcon && <OnlineIcon size={size} />}
        </div>
    );
}
interface AvatarProps {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    label?: string;
    imgSrc?: string;
    isIcon: boolean;
}
