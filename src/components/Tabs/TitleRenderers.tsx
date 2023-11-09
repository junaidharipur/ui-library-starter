import * as React from "react";

import cx from "classnames";

import { Button } from "../Button/Button";
import { colors } from "../../utils/colors";
import { RendererProps } from "./Tabs";

export const DefaultRenderer = ({ title, isActive, activeTabHandler }: RendererProps) => {
    return (
        <p
            className={cx("inline-block first:ml-[25px] text-sm leading-6 font-medium cursor-pointer py-[9px] mx-5", {
                ["text-primary-text"]: !isActive,
                [`border-b-2 text-primary border-primary`]: isActive,
                ["border-b-2 border-white"]: !isActive,
            })}
            onClick={activeTabHandler}
        >
            {title}
        </p>
    );
};

export const ButtonRenderer = ({ title, isActive, activeTabHandler }: RendererProps) => {
    return (
        <Button
            style={{ borderColor: colors.stroke }}
            color={isActive ? "primary" : "tertiary"}
            variant={isActive ? "default" : "outlined"}
            onClick={activeTabHandler}
            className="my-3 first:ml-3 ml-[7px] bg-grey-2"
            size="Medium"
        >
            {title}
        </Button>
    );
};
