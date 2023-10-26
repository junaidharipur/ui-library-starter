import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { colors } from "../../utils/colors";

import { Button } from "./Button";
import { PlusIcon } from "../icons/PlusIcon";

const meta: Meta<typeof Button> = {
    component: Button,
    tags: ["autodocs"],
}; 

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        variant: "default",
        color: "primary",
        disabled: false,
        size: "Large",
    },
    argTypes: {
        color: {
            options: ["primary", "secondary", "tertiary"],
            control: { type: "radio" },
        },
        disabled: {
            control: { type: "boolean" },
        },
    },
    render: props => <Button {...props}>Button</Button>,
};

export const Outlined: Story = {
    args: {
        variant: "outlined",
        color: "primary",
        disabled: false,
        size: "Large",
    },
    argTypes: {
        color: {
            options: ["primary", "secondary", "tertiary"],
            control: { type: "radio" },
        },
        disabled: {
            control: { type: "boolean" },
        },
        size: {
            options: ["Large", "Medium", "Small"],
            control: { type: "radio" },
        },
    },
    render: props => <Button {...props}>Button</Button>,
};

export const IconDefault: Story = {
    args: {
        variant: "default",
        color: "primary",
        disabled: false,
        size: "Large",
    },
    argTypes: {
        color: {
            options: ["primary", "secondary", "tertiary"],
            control: { type: "radio" },
        },
        disabled: {
            control: { type: "boolean" },
        },
        size: {
            options: ["Large", "Medium", "Small"],
            control: { type: "radio" },
        },
    },
    render: props => (
        <Button
            icon={<PlusIcon fill={props.variant === "outlined" ? colors[props.color || "primary"] : "white"} />}
            {...props}
        >
            Button
        </Button>
    ),
};

export const IconOutlined: Story = {
    args: {
        variant: "outlined",
        color: "primary",
        disabled: false,
        size: "Large",
    },
    argTypes: {
        color: {
            options: ["primary", "secondary", "tertiary"],
            control: { type: "radio" },
        },
        disabled: {
            control: { type: "boolean" },
        },
        size: {
            options: ["Large", "Medium", "Small"],
            control: { type: "radio" },
        },
    },
    render: props => (
        <Button
            icon={<PlusIcon fill={props.variant === "outlined" ? colors[props.color || "primary"] : "white"} />}
            {...props}
        >
            Button
        </Button>
    ),
};
