import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltips";

const meta: Meta<typeof Tooltip> = {
    title: "Components/Tooltip",
    component: Tooltip,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Left: Story = {
    args: {
        direction: "Left",
        description: "Tooltip on left",
        dark: true,
        classdiv: "flex justify-center",
    },
    render: props => (
        <Tooltip {...props}>
            {" "}
            <h2>Tooltip on left </h2>
        </Tooltip>
    ),
};
export const Right: Story = {
    args: {
        direction: "Right",
        description: "Tooltip on right",
        dark: true,
        classdiv: "flex justify-center",
    },
    render: props => (
        <Tooltip {...props}>
            {" "}
            <h2>Tooltip on right </h2>
        </Tooltip>
    ),
};
export const TopWithoutTitle: Story = {
    args: {
        direction: "Top",
        description: "The users wants to find a specific page or site.",
        dark: true,
        classdiv: "flex justify-center mt-[5rem] ",
    },
    render: props => (
        <Tooltip {...props}>
            {" "}
            <h2>Tooltip on top </h2>
        </Tooltip>
    ),
};
export const TopWithTitle: Story = {
    args: {
        direction: "Top",
        title: "Navigational",
        description: "The users wants to find a specific page or site.",
        dark: true,
        classdiv: "flex justify-center mt-[5rem] ",
    },
    render: props => (
        <Tooltip {...props}>
            {" "}
            <h2>Tooltip on top </h2>
        </Tooltip>
    ),
};
export const Bottom: Story = {
    args: {
        direction: "Bottom",
        description: "Tooltip on bottom",
        dark: true,
        classdiv: "flex justify-center ",
    },
    render: props => (
        <Tooltip {...props}>
            {" "}
            <h2>Tooltip </h2>
        </Tooltip>
    ),
};
