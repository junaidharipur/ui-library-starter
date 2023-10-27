import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./dropdown";

const meta: Meta<typeof Dropdown> = {
    title: "Components/Form Dropdown",
    component: Dropdown,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
    render: props => <Dropdown {...props} />,
};
