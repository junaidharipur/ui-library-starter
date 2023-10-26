import * as React from "react";

import cx from "classnames";

import { colors } from "../../utils/colors";

export function Button({
    children,
    icon: Icon,
    variant = "default",
    color = "primary",
    size = "Large",
    disabled = false,
    style = {},
    ...other
}: ButtonProps) {
    const [isHovering, setIsHovering] = React.useState(false);

    const _defaultVariantStyles =
        variant === "default"
            ? {
                  background: colors[color],
                  color: "white",
              }
            : {};
    const _outlinedVariantStyles =
        variant === "outlined"
            ? {
                  color: colors[color],
                  borderColor: colors[color],
              }
            : {};
    const _disabledStyles = disabled
        ? { background: colors.greyLight, color: colors.greyDark, borderColor: "transparent" }
        : {};
    const _hoverStyles = isHovering
        ? { background: variant === "default" ? colors[`${color}Dark`] : colors[`${color}Light`] }
        : {};

    return (
        <button
            role="button"
            disabled={disabled}
            className={cx("rounded-md px-7 py-3 border font-medium text-black flex justify-center items-center", {
                ["text-white"]: variant === "default",
                ["text-base px-7 py-3 loading-6"]: size === "Large",
                ["text-base px-7 py-[8px] loading-6"]: size === "Medium",
                ["text-sm leading-[22px] px-7 py-[5px]"]: size === "Small",
            })}
            style={{
                ..._defaultVariantStyles,
                ..._outlinedVariantStyles,
                ..._disabledStyles,
                ..._hoverStyles,
                ...style,
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            {...other}
        >
            {Icon && (
                <span
                    className={cx("mr-2 w-5", {
                        ["w-[18px]"]: size === "Small",
                        ["text-grey-dark"]: disabled,
                    })}
                >
                    {Icon}
                </span>
            )}
            {children}
        </button>
    );
}

export type ButtonProps = CustomProps & React.ButtonHTMLAttributes<HTMLButtonElement>;
interface CustomProps {
    children: React.ReactNode;
    variant?: "default" | "outlined";
    color?: "primary" | "secondary" | "tertiary";
    size?: "Large" | "Medium" | "Small";
    disabled?: boolean;
    icon?: React.ReactNode;
    style?: React.CSSProperties;
}
