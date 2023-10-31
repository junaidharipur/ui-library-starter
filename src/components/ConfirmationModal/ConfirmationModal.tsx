import * as React from "react";

import cx from "classnames";

import { colors } from "../../utils/colors";

import { Typography } from "../Typography/Typography";
import { Button } from "../Button/Button";

export function ConfirmationModal({ title, desc }: ConfirmationModalProps) {
    return (
        <div
            className={cx(
                "absolute left-1/2 translate-x-[-50%] top-[20vh] translate-y-[-50%]",
                "w-[530px] rounded-[20px] p-[50px] shadow-2 bg-white z-50",
                "flex flex-col justify-center items-center",
            )}
        >
            <Typography variant="h3">{title}</Typography>
            <span className={cx("inline-block w-[90px] h-[3px] bg-primary rounded-xl mt-[18px]")} />
            <div className="mt-6 text-center text-primary-text">
                <Typography variant="body2-regular">{desc}</Typography>
            </div>
            <div className={cx("w-full flex items-center justify-between mt-[35px]")}>
                <Button
                    className="mr-[9px]"
                    fullWidth
                    variant="outlined"
                    color="tertiary"
                    style={{ borderColor: colors.stroke }}
                >
                    Cancel
                </Button>
                <Button className="ml-[9px]" fullWidth style={{ borderColor: colors.stroke }}>
                    View Details
                </Button>
            </div>
        </div>
    );
}

interface ConfirmationModalProps {
    title?: string;
    desc?: string;
}
