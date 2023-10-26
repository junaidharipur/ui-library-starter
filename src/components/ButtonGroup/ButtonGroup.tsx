import * as React from "react";

import cx from "classnames";

import { Button, ButtonProps } from "../Button/Button";

type Sizes = "Large" | "Small" | "Medium";

interface SizeContextType {
    value: Sizes;
}

const SizeContext = React.createContext<SizeContextType>({ value: "Large" });

export function ButtonGroup({ children, size = "Large" }: ButtonGroupProps) {
    return (
        <SizeContext.Provider value={{ value: size }}>
            <div className={cx("inline-block border rounded-md overflow-hidden")}>
                <div className={cx("flex items-center")}>{children}</div>
            </div>
        </SizeContext.Provider>
    );
}

export function ButtonGroupChild({ children, active = false, ...other }: ButtonChildProps & ButtonProps) {
    const { value: size } = React.useContext(SizeContext);

    const _baseStyles = { borderColor: "normal", borderRadius: 0, border: "none", borderRightWidth: 1 };
    const _unActiveStyles = !active ? { color: "normal" } : {};

    return (
        <div className={cx("border-r last:border-r-0")}>
            <Button
                size={size}
                variant={active ? "default" : "outlined"}
                style={{ ..._baseStyles, ..._unActiveStyles }}
                {...other}
            >
                {children}
            </Button>
        </div>
    );
}

ButtonGroup.Child = ButtonGroupChild;

export interface ButtonGroupProps {
    children: React.ReactNode;
    size?: Sizes;
}

interface ButtonChildProps {
    active?: boolean;
}
