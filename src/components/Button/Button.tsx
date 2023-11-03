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
    className,
    fullWidth,
    ...other
}: ButtonProps) {
    const [isHovering, setIsHovering] = React.useState(false);

    const _defaultVariantStyles: React.CSSProperties =
        variant === "default"
            ? {
                  background:
                      color === "primary"
                          ? colors.primary
                          : color === "secondary"
                          ? colors.secondary
                          : color === "tertiary"
                          ? colors.dark
                          : "normal",
                  color: "white",
              }
            : {};
    const _outlinedVariantStyles: React.CSSProperties =
        variant === "outlined"
            ? {
                  color:
                      color === "primary"
                          ? colors.primary
                          : color === "secondary"
                          ? colors.secondary
                          : color === "tertiary"
                          ? colors.dark
                          : "normal",
                  borderColor:
                      color === "primary"
                          ? colors.primary
                          : color === "secondary"
                          ? colors.secondary
                          : color === "tertiary"
                          ? colors.dark
                          : "normal",
              }
            : {};
    const _disabledStyles: React.CSSProperties = disabled
        ? { background: colors.grey3, color: colors.dark5, borderColor: "transparent" }
        : {};

    const __defaultVariantHoverBackground =
        color === "primary"
            ? colors.blueDark
            : variant === "default" && color === "secondary"
            ? colors.tealDark
            : color === "tertiary"
            ? colors.primaryText
            : "noramal";

    const __outlinedVariantHoverBackground =
        color === "primary"
            ? colors.blueLight5
            : color === "secondary"
            ? colors.tealLight3
            : color === "tertiary"
            ? colors.grey4
            : "normal";

    const _hoverStyles: React.CSSProperties = isHovering
        ? {
              background: variant === "default" ? __defaultVariantHoverBackground : __outlinedVariantHoverBackground,
          }
        : {};

    return (
        <button
            role="button"
            disabled={disabled}
            className={cx(
                "rounded-md px-7 py-3 border font-medium text-black flex justify-center items-center",
                {
                    ["text-white"]: variant === "default",
                    ["text-base px-7 py-3 loading-6"]: size === "Large",
                    ["text-base px-7 py-[8px] loading-6"]: size === "Medium",
                    ["text-sm leading-[22px] px-7 py-[5px]"]: size === "Small",
                    ["w-full"]: fullWidth,
                },
                className,
            )}
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
                        ["text-grey-3"]: disabled,
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
    fullWidth?: boolean;
}
