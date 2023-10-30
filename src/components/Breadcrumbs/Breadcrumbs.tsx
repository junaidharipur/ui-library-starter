import * as React from "react";

import cx from "classnames";

import { ChevronRightIcon } from "../icons/ChevronRightIcon";
import { colors } from "../../utils/colors";

export function Breadcrumbs({
    items,
    currentItemRenderer: Renderer,
    className,
    color = colors.primaryText,
    activeColor = colors.primary,
    ...other
}: BreadcrumbsProps) {
    return (
        <div className={cx("mr flex items-center leading-6 font-medium text-base rounded-lg", className)} {...other}>
            {items.map(({ path, icon: Icon, text }, index) => (
                <div
                    key={path + index}
                    style={{
                        color:
                            items.length !== index + 1
                                ? color
                                : activeColor && items.length !== index
                                ? activeColor
                                : colors.primary,
                    }}
                    className={cx("py-[25px] first:pl-[30px] flex items-center mr-3")}
                >
                    {Icon && (
                        <span className="mr-2">
                            <Icon fill={color} />
                        </span>
                    )}
                    <div className={cx("mr-3")}>
                        <Renderer path={path} text={text} icon={Icon} />
                    </div>
                    {items.length !== index + 1 && <ChevronRightIcon fill={color} />}
                </div>
            ))}
        </div>
    );
}

export type BreadcrumbsItem = {
    path: string;
    text: string;
    icon?: React.FC<{ fill?: string }>;
};
interface BreadcrumbsProps {
    items: BreadcrumbsItem[];
    currentItemRenderer: React.FC<BreadcrumbsItem>;
    className?: string;
    color?: string;
    activeColor?: string;
}
