import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "../Alert/Alert";

const meta: Meta<typeof Alert> = {
    component: Alert,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Warning: Story = {
    args: {
        title: "Attention needed",
        severity: "warning",
    },
    argTypes: {},
    render: props => (
        <Alert {...props}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when
        </Alert>
    ),
};
