import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { FormInput } from "./FormInput";
import { Iconeye } from "../icons/Iconeye";

const meta: Meta<typeof FormInput> = {
    title: "Components/Forms Inputs",
    component: FormInput,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FormInput>;

export const Default: Story = {
    args: {
        label: "Form Field",
        variant: "normal",
        helperText: "This is Helper Text",
        palceholder: "A Form Field",
        type: "text",
        size: "small",
        name: "formfield",
    },
    render: props => <FormInput {...props} />,
};

export const InputWithIcon: Story = {
    args: {
        label: "Form Field",
        variant: "normal",
        helperText: "This is Helper Text",
        palceholder: "Type Your Password",
        size: "small",
        type: "password",
        icon: Iconeye,
        name: "pass",
    },
    render: props => <FormInput {...props} />,
};
