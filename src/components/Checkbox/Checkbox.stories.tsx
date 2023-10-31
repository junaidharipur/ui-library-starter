import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
    component: Checkbox,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    args: {
        label: "Checkbox Text",
        checked: true,
    },
    argTypes: {},
    render: props => {
        return <Checkbox value={"ABC"} {...props} />;
    },
};
