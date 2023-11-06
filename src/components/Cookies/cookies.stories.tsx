import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { Cookies } from "./cookies";

const meta: Meta<typeof Cookies> = {
    title: "Components/Cookiess",
    component: Cookies,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Cookies>;

export const Default: Story = {
    args: {
        title: "We use cookies",
        subtitle: "Please, accept these sweeties to continue enjoyin our site!",
    },
    render: props => <Cookies {...props} />,
};
