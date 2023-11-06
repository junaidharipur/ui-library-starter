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
    title: "Components/Dropdown",
    component: Dropdown,
    tags: ["autodocs"],
    parameters: {
        docs: {
            story: {
                height: "400px",
            },
        },
        backgrounds: {
            default: "white",
            values: [
                {
                    name: "white",
                    value: "#FFFFFF",
                },
                {
                    name: "grey",
                    value: "#E5E5E5",
                },
            ],
        },
    },
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
