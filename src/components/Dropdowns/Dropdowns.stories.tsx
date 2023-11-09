import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdowns";

const options = [
    {
        label: "option1",
        value: "option1",
    },
    {
        label: "option2",
        value: "option2",
    },
    {
        label: "option3",
        value: "option3",
    },
    {
        label: "option4",
        value: "option4",
    },
    {
        label: "option5",
        value: "option5",
    },
    {
        label: "option6",
        value: "option6",
    },
    {
        label: "option7",
        value: "option7",
    },
];
const getSelectedData = (data: string) => {
    console.log(data);
};
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
        variant: "Medium",
        options: options,
        outlined: true,
        defaultValue: options[2].value,
        getSelectedData: getSelectedData,
    },
    argTypes: {
        options: { control: false },
        variant: {
            defaultValue: { summary: "Medium" },
        },
        defaultValue: {
            defaultValue: { summary: "undefined" },
        },
        outlined: {
            control: { type: "boolean" },
            defaultValue: { summary: "true" },
        },
        getSelectedData: {
            defaultValue: { summary: "undefined" },
        },
    },
    render: props => <Dropdown {...props} />,
};
