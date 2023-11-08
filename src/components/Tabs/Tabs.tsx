import * as React from "react";

import cx from "classnames";

import { Tab } from "./Tab";
import { ButtonRenderer, DefaultRenderer } from "./TitleRenderers";
import { TabContext } from "./Context";

export function Tabs({ children, titleRenderer: TitleRenderer = DefaultRenderer }: TabsProps) {
    const [titles, setTitles] = React.useState<string[]>([]);
    const [activeIndex, setActiveIndex] = React.useState<number>(0);

    return (
        <TabContext.Provider value={{ titles, setTitles, activeIndex, setActiveIndex }}>
            <div className={cx("flex items-center")}>
                {titles.map((title, index) => (
                    <TitleRenderer
                        key={title + index}
                        isActive={index === activeIndex}
                        title={title}
                        activeTabHandler={() => setActiveIndex(index)}
                    />
                ))}
            </div>
            <div>{children}</div>
        </TabContext.Provider>
    );
}

interface TabsProps {
    children: React.ReactNode;
    titleRenderer?: React.FC<RendererProps>;
}

export interface RendererProps {
    title: string;
    isActive: boolean;
    activeTabHandler: () => void;
}

Tabs.Tab = Tab;
export { ButtonRenderer, Tab };
