import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./dropdown";

const options = [
    "option1",
    "option2",
    "option3",
    "option13",
    "option22",
    "option23",
    "option221",
    "option22",
    "option3",
];

const meta: Meta<typeof Dropdown> = {
    title: "Components/Form Dropdown",
    component: Dropdown,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
    args: {
        variant: "md",
        options: options,
        outlined: true,
        defaultValue: options[2],
    },
    render: props => <Dropdown {...props} />,
};
