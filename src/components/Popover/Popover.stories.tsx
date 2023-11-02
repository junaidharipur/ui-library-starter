import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./Popover";

const meta: Meta<typeof Popover> = {
    title: "Components/Popover",
    component: Popover,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
    args: {
        title: "Popover Title",
        description:
            "Lorem ipsum dolor sit amet, consect adipiscing elit. Mauris facilisis congue exclamate justo nec facilisis.",
    },
    render: props => (
        <Popover {...props}>
            {" "}
            <h2>Popover </h2>
        </Popover>
    ),
};
