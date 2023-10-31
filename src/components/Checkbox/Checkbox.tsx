import * as React from "react";

import cx from "classnames";

import { Typography } from "../Typography/Typography";
import { UncheckedIcon } from "../icons/UncheckedIcon";
import { RectangularChecked } from "../icons/RectangularChecked";
import { CheckmarkedChecked } from "../icons/CheckmarkChecked";

export function Checkbox({ label, checked = false, boxType = "default", ...other }: CheckboxProps) {
    const [isChecked, setIsChecked] = React.useState(false);

    React.useEffect(() => {
        setIsChecked(checked);
    }, [checked]);

    const checkedIcon = boxType === "default" ? <RectangularChecked /> : <CheckmarkedChecked />;

    return (
        <div
            className={cx("flex items-center select-none cursor-pointer w-max")}
            onClick={() => setIsChecked(prev => !prev)}
        >
            <span className={cx("inline-block mr-[10px] cursor-pointer")}>
                {isChecked ? checkedIcon : <UncheckedIcon />}
            </span>
            {label && <Typography variant="body2-regular">{label}</Typography>}
            <input checked={isChecked} type="checkbox" className={cx("appearance-none opacity-0")} {...other} />
        </div>
    );
}

type CheckboxProps = CheckboxCustomProps & React.InputHTMLAttributes<HTMLInputElement>;
interface CheckboxCustomProps {
    label?: React.ReactNode;
    checked?: boolean;
    boxType?: "default" | "checkmark";
}
