import * as React from "react";

import cx from "classnames";

import { colors } from "../../utils/colors";

import { WarningIcon } from "../icons/WarningRedIcon";
import { Typography } from "../Typography/Typography";
import { Button } from "../Button/Button";

export function ConfirmationModal({
    title,
    desc,
    position = "top-center",
    actionButtonText = "View Details",
    onActionButtonClick,
    icon: Icon,
    open = false,
    onClose,
    iconBgColor = colors.redLight5,
    actionButtonBgColor = colors.primary,
}: ConfirmationModalProps) {
    const [_open, set_Open] = React.useState(open || false);

    React.useEffect(() => {
        set_Open(open);
    }, [open]);

    const handleCloseClick = () => {
        set_Open(prev => !prev);
        onClose && onClose();
    };

    return (
        <div
            className={cx(
                "absolute translate-x-[-50%] translate-y-[-50%]",
                "w-[530px] rounded-[20px] p-[50px] shadow-2 bg-white z-50",
                {
                    ["left-1/2 top-[22vh]"]: position === "top-center",
                    ["left-1/2 top-1/2"]: position === "center",
                    ["flex flex-col justify-center items-center"]: _open,
                    ["hidden"]: !_open,
                },
            )}
        >
            {Icon && (
                <div style={{ background: iconBgColor }} className={cx("p-[18px] rounded-full mb-[22px]")}>
                    {<Icon />}
                </div>
            )}
            <Typography variant="h3">{title}</Typography>
            {!Icon && <span className={cx("inline-block w-[90px] h-[3px] bg-primary rounded-xl mt-[18px]")} />}
            {desc && (
                <div className="mt-6 text-center text-primary-text">
                    <Typography variant="body2-regular">{desc}</Typography>
                </div>
            )}
            <div className={cx("w-full flex items-center justify-between mt-[35px]")}>
                <Button
                    className="mr-[9px]"
                    fullWidth
                    variant="outlined"
                    color="tertiary"
                    onClick={handleCloseClick}
                    style={{ borderColor: colors.stroke }}
                >
                    Cancel
                </Button>
                <Button
                    className="ml-[9px]"
                    fullWidth
                    onClick={onActionButtonClick}
                    style={{
                        borderColor: colors.stroke,
                        background: actionButtonBgColor,
                    }}
                >
                    {actionButtonText}
                </Button>
            </div>
        </div>
    );
}

interface ConfirmationModalProps {
    title: string;
    open?: boolean;
    desc?: string;
    icon?: React.FC;
    actionButtonText?: string;
    actionButtonBgColor?: string;
    iconBgColor?: string;
    position?: "top-center" | "center";
    onActionButtonClick?: () => void;
    onClose?: () => void;
}
