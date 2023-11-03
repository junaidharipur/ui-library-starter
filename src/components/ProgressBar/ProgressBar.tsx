import * as React from "react";

import cx from "classnames";

export function ProgressBar({ percentage = 50 }: ProgressBarProps) {
    return (
        <div className={cx("bg-grey-10 w-full h-[7px] rounded-full overflow-hidden inline-block")}>
            <span
                style={{ width: `${percentage}%` }}
                className={cx("inline-block h-[7px] absolute bg-teal-light-4 rounded-full")}
            />
        </div>
    );
}

interface ProgressBarProps {
    percentage?: number;
}
