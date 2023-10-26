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

export function Alert({ children, severity = "info", title }: AlertProps) {
    const _severityTypeStypes: React.CSSProperties =
        severity === "info"
            ? { background: colors.blueLight, borderLeft: `6px solid ${colors.blue}` }
            : severity === "warning"
            ? { background: colors.yellowLight, borderLeft: `6px solid ${colors.yellow}` }
            : severity === "success"
            ? { background: colors.greenLight, borderLeft: `6px solid ${colors.green}` }
            : severity === "error"
            ? { background: colors.redLight, borderLeft: `6px solid ${colors.red}` }
            : {};

    const _iconColorStyles: React.CSSProperties =
        severity === "info"
            ? { background: colors.blue }
            : severity === "warning"
            ? { background: colors.yellow }
            : severity === "success"
            ? { background: colors.green }
            : severity === "error"
            ? { background: colors.red }
            : {};

    const _headingTextStyles: React.CSSProperties =
        severity === "info"
            ? { color: colors.infoTitle }
            : severity === "warning"
            ? { color: colors.warningTitle }
            : severity === "success"
            ? { color: colors.successTitle }
            : severity === "error"
            ? { color: colors.errorTitle }
            : {};

    const _descTextStyles: React.CSSProperties =
        severity === "info"
            ? { color: colors.infoText }
            : severity === "warning"
            ? { color: colors.warningText }
            : severity === "success"
            ? { color: colors.successText }
            : severity === "error"
            ? { color: colors.errorText }
            : {};

    const Icon = () => {
        if (severity === "success") return <CheckmarkCircleIcon />;
        else if (severity === "warning") return <WarningIcon />;
        else if (severity === "error") return <CrossCircleIcon />;
        else if (severity === "info") return <InformationAltIcon />;
    };

    return (
        <div className={cx("p-[35px] rounded-lg flex items-start")} style={{ ..._severityTypeStypes }}>
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
                    <CloseIcon className={cx("absolute top-0 right-0 w-5 cursor-pointer")} />
                </div>
                <p style={{ ..._descTextStyles }} className={cx("text-base leading-6 font-normal")}>
                    {children}
                </p>
            </div>
        </div>
    );
}

interface AlertProps {
    severity?: "error" | "warning" | "info" | "success";
    title: string;
    children: React.ReactNode;
}
