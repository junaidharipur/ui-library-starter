import * as React from "react";

import { Tab } from "./Tab";
import { DefaultRenderer } from "./TitleRenderers";
import { TabContext } from "./Context";

export function Tabs({ children, titleRenderer: TitleRenderer = DefaultRenderer }: TabsProps) {
    const [titles, setTitles] = React.useState<string[]>([]);
    const [activeIndex, setActiveIndex] = React.useState<number>(0);

    const value = React.useMemo(() => ({ titles, setTitles, activeIndex, setActiveIndex }), [setTitles]);

    return (
        <TabContext.Provider value={value}>
            <TitleRenderer titles={titles} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            <div>{children}</div>
        </TabContext.Provider>
    );
}

interface TabsProps {
    children: React.ReactNode;
    titleRenderer?: React.FC<RendererProps>;
}

export interface RendererProps {
    titles: string[];
    activeIndex: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

Tabs.Tab = Tab;
export { Tab };
