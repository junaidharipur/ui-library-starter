import "../../styles/tooltip.css";

import * as React from "react";

import cx from "classnames";

export function Tooltip({ children, description, direction, className, dark, title }: TooltipProps) {
    const getDirection = () => {
        switch (direction) {
            case "top":
            case "right":
            case "left":
                return `${direction}`;
            default:
                return `bottom`;
        }
    };
    return (
        <div className={cx(className)}>
            <div className={`tooltip-wrapper ${getDirection()}`}>
                <span className="relative">{children}</span>
                <div
                    className={cx({
                        "bg-dark-2   description": dark,
                        "bg-white  descriptionlight shadow-dropdown": !dark,
                    })}
                >
                    {title && title !== "" && (
                        <p
                            className={cx("text-sm leading-[22px] font-medium", {
                                "text-white": dark,
                                "text-dark": !dark,
                            })}
                        >
                            {title}
                        </p>
                    )}
                    <p
                        className={cx("text-[12px] font-normal", {
                            "text-dark-6": dark,
                            " text-dark-5": !dark,
                        })}
                    >
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

type position = "top" | "bottom" | "left" | "right";
interface TooltipProps {
    children: React.ReactNode;
    direction: position;
    description: string;
    dark: boolean;
    className?: string;
    title?: string;
}
