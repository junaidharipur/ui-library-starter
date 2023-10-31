import React from "react";
import "./style.css";
import cx from "classnames";

type position = "top" | "bottom" | "left" | "right";
interface Props {
    children: React.ReactNode;
    direction: position;
    description: string;
    className: string;
    dark: boolean;
    classdiv: string
}

export function Tooltip({ children, description, direction, className,classdiv, dark }: Props) {
    const getDirection = () => {
        const appendedClass = className ? className : "";
        switch (direction) {
            case "top":
            case "right":
            case "left":
                return `${direction} ${appendedClass}`;
            default:
                return `bottom ${appendedClass}`;
        }
    };
    return (
        <div className={cx(classdiv)}>
            <div className={`tooltip-wrapper ${getDirection()}`}>
               {children}
                <div
                    className={cx({
                        "bg-dark-2 text-white description": dark,
                        "bg-white text-black descriptionlight shadow-dropdown": !dark,
                    })}
                >
                    {description}
                </div>
            </div>
        </div>
    );
}
