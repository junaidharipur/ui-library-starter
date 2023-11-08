import React from "react";
import cx from "classnames";
import { AvatarOnline } from "../icons/AvatarIcons";

export function OnlineIcon({ size }: OnlineIconProps) {
    return (
        <div
            className={cx("absolute", {
                "pl-5 top-0": size === "xs",
                "pl-8 top-0": size === "sm",
                "pl-9 top-0": size === "md",
                "pl-11 top-0": size === "lg",
                "pl-[4.2rem] top-0": size === "xl",
            })}
        >
            <AvatarOnline
                width={size === "xs" ? "8" : size === "sm" ? "14" : size === "md" ? "16" : size === "lg" ? "18" : "22"}
                height={size === "xs" ? "8" : size === "sm" ? "14" : size === "md" ? "16" : size === "lg" ? "18" : "22"}
            />
        </div>
    );
}
interface OnlineIconProps {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
}
