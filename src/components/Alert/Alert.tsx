import * as React from "react";

import cx from "classnames";

import { colors } from "../../utils/colors";
import { CloseIcon } from "../icons/CloseIcon";
import { WarningIcon } from "../icons/WarningIcon";
import { CheckmarkCircleIcon } from "../icons/CheckmarkCircleIcon";
import { CrossCircleIcon } from "../icons/CrossCircleIcon";
import { InformationAltIcon } from "../icons/InformationAltIcon";

function IconContainer({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
    return (
        <div className={`inline-block rounded-md p-2 mr-[22px]`} style={{ ...style }}>
            {children}
        </div>
    );
}

export function Alert({ children, kind = "info", title, onCloseClick }: AlertProps) {
    const _kindTypeStyles: React.CSSProperties =
        kind === "info"
            ? { background: colors.blueLight6, borderLeft: `6px solid ${colors.blueDark}` }
            : kind === "warning"
            ? { background: colors.yellowLight4, borderLeft: `6px solid ${colors.yellow}` }
            : kind === "success"
            ? { background: colors.greenLight6, borderLeft: `6px solid ${colors.green}` }
            : kind === "error"
            ? { background: colors.redLight6, borderLeft: `6px solid ${colors.red}` }
            : {};

    const _iconColorStyles: React.CSSProperties =
        kind === "info"
            ? { background: colors.blueDark }
            : kind === "warning"
            ? { background: colors.yellow }
            : kind === "success"
            ? { background: colors.green }
            : kind === "error"
            ? { background: colors.red }
            : {};

    const _headingTextStyles: React.CSSProperties =
        kind === "info"
            ? { color: colors.infoText }
            : kind === "warning"
            ? { color: colors.warningText }
            : kind === "success"
            ? { color: colors.successText }
            : kind === "error"
            ? { color: colors.dangerText }
            : {};

    const _descTextStyles: React.CSSProperties =
        kind === "info"
            ? { color: colors.primaryText }
            : kind === "warning"
            ? { color: colors.yellowLight5 }
            : kind === "success"
            ? { color: colors.primaryText }
            : kind === "error"
            ? { color: colors.redLight }
            : {};

    const Icon = () => {
        if (kind === "success") return <CheckmarkCircleIcon />;
        else if (kind === "warning") return <WarningIcon />;
        else if (kind === "error") return <CrossCircleIcon />;
        else if (kind === "info") return <InformationAltIcon />;
    };

    return (
        <div className={cx("p-[35px] rounded-lg flex items-start")} style={{ ..._kindTypeStyles }}>
            <IconContainer style={{ ..._iconColorStyles }}>
                <Icon />
            </IconContainer>
            <div className={cx("w-full")}>
                <div className={cx("relative")}>
                    <h4
                        style={{ ..._headingTextStyles }}
                        className={cx("leading-[26px] font-semibold text-lg mb-[14px]")}
                    >
                        {title}
                    </h4>
                    <div onClick={onCloseClick} className={cx("absolute top-0 right-0 w-5 cursor-pointer")}>
                        <CloseIcon />
                    </div>
                </div>
                <p style={{ ..._descTextStyles }} className={cx("text-base leading-6 font-normal")}>
                    {children}
                </p>
            </div>
        </div>
    );
}

interface AlertProps {
    kind?: "error" | "warning" | "info" | "success";
    title: string;
    children: React.ReactNode;
    onCloseClick?: () => void;
}
