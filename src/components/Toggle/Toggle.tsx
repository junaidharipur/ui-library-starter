import * as React from "react";

import cx from "classnames";

import { ToggleCheckedIcon } from "../icons/ToggleCheckedIcon";
import { ToggleCircularActiveIcon } from "../icons/ToggleCircularActiveIcon";
import { ToggleCircularUnActiveIcon } from "../icons/ToggleCircularUnActiveIcon";
import { ToggleCrossIcon } from "../icons/ToggleCrossIcon";

export function Toggle({ defaultChecked = false, setToggle, variant = "default" }: ToggleProps) {
    const [checked, setChecked] = React.useState(defaultChecked);

    const handleToggle = () => {
        setChecked(prev => !prev);
    };

    React.useEffect(() => {
        setToggle && setToggle(checked);
    }, [checked]);

    const Icon =
        variant === "default" ? (
            <span
                className={cx("w-7 h-7 rounded-full inline-block absolute top-1/2 translate-y-[-50%]", {
                    ["right-[2px] bg-white"]: checked,
                    ["left-[2px] bg-white"]: !checked,
                })}
            />
        ) : variant === "checkmark" ? (
            <span
                className={cx("rounded-full absolute top-1/2 translate-y-[-50%] flex items-center justify-start", {
                    ["right-[-2px]"]: checked,
                    ["left-[-2px]"]: !checked,
                })}
            >
                {checked ? <ToggleCheckedIcon /> : <ToggleCrossIcon />}
            </span>
        ) : (
            variant === "dual-circle" && (
                <span
                    className={cx("rounded-full absolute top-1/2 translate-y-[-50%] flex items-center justify-start", {
                        ["right-[-2px]"]: checked,
                        ["left-[-2px]"]: !checked,
                    })}
                >
                    {checked ? <ToggleCircularActiveIcon /> : <ToggleCircularUnActiveIcon />}
                </span>
            )
        );

    return (
        <div
            onClick={handleToggle}
            className={cx("h-8 w-[55px] bg-dark rounded-full relative cursor-pointer transition-all select-none", {
                ["bg-primary"]: checked && variant === "default",
                ["bg-grey-3 "]: checked && variant !== "default",
                ["bg-grey-3"]: !checked,
                ["bg-grey-8"]: variant === "dual-circle",
            })}
        >
            {Icon}
        </div>
    );
}

interface ToggleProps {
    defaultChecked?: boolean;
    setToggle?: React.Dispatch<React.SetStateAction<boolean>>;
    variant?: "default" | "checkmark" | "dual-circle";
}
