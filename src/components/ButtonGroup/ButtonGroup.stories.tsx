import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button/Button";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";

const meta: Meta<typeof Button> = {
    component: ButtonGroup,
    tags: ["autodocs"],
};

export default meta;
type GroupStory = StoryObj<typeof Button>;

export const Group: GroupStory = {
    args: {
        size: "Large",
    },
    argTypes: {},
    render: props => (
        <ButtonGroup {...props}>
            <ButtonGroup.Child active>About</ButtonGroup.Child>
            <ButtonGroup.Child>Profile</ButtonGroup.Child>
            <ButtonGroup.Child>Services</ButtonGroup.Child>
        </ButtonGroup>
    ),
};
