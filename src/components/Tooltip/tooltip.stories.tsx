import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./tooltip";

const meta: Meta<typeof Tooltip> = {
    title: "Components/Tooltip",
    component: Tooltip,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
    args: {
        direction: "right",
        description: "Tooltip on right",
        dark: true,
    },
    render: props => (
        <Tooltip {...props}>
            {" "}
            <button>Click me!</button>
        </Tooltip>
    ),
};
export const Left: Story = {
    args: {
        direction: "left",
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
        direction: "right",
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
export const Top: Story = {
    args: {
        direction: "top",
        description: "Tooltip on top",
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
        direction: "bottom",
        description: "Tooltip on bottom",
        dark: true,
        classdiv: "flex justify-center ",
    },
    render: props => (
        <Tooltip {...props}>
            {" "}
            <h2>Tooltip on bottom </h2>
        </Tooltip>
    ),
};
