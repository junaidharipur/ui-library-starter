import * as React from "react";

import cx from "classnames";

import { Typography } from "../Typography/Typography";

export function Tag({ children, disabled = false }: TagProps) {
    return (
        <button
            disabled={disabled}
            className={cx(
                "py-[5px] px-[14px] rounded-md text-black inline-block cursor-pointer box-border",
                "focus:border-stroke focus:border-2 focus:bg-grey-9 focus:text-black",
                "hover:bg-primary hover:text-white",
                {
                    ["bg-grey-3 text-primary-text"]: disabled,
                    ["bg-grey-9"]: !disabled,
                },
            )}
        >
            <Typography variant="body2-regular">{children}</Typography>
        </button>
    );
}

interface TagProps {
    children?: React.ReactNode;
    disabled?: boolean;
}
