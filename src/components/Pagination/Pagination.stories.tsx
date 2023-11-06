import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
    title: "Components/Pagination",
    component: Pagination,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
    // args: {
    //     title: "Pagination Title",
    //     description:
    //         "Lorem ipsum dolor sit amet, consect adipiscing elit. Mauris facilisis congue exclamate justo nec facilisis.",
    // },
    render: props => (
        <Pagination />
    ),
};
