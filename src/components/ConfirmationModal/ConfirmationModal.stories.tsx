import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ConfirmationModal } from "./ConfirmationModal";

const meta: Meta<typeof ConfirmationModal> = {
    component: ConfirmationModal,
    tags: ["autodocs"],
    parameters: {
        docs: {
            story: {
                height: "500px",
            },
        },
        backgrounds: {
            default: "grey",
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
type Story = StoryObj<typeof ConfirmationModal>;

export const Default: Story = {
    args: {
        title: "Your Message Sent Successfully",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    },
    argTypes: {},
    render: props => <ConfirmationModal {...props} />,
};
