import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Toggle } from "./Toggle";

const meta: Meta<typeof Toggle> = {
    component: Toggle,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Warning: Story = {
    args: {
        checked: false,
    },
    argTypes: {},
    render: props => {
        const [checked, setChecked] = React.useState(false);

        return (
            <div>
                <Toggle checked={checked} defaultChecked={checked} setToggle={setChecked} {...props} />
                <p>Checked: {JSON.stringify(checked)}</p>
            </div>
        );
    },
};
