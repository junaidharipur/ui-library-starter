import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { FormInput } from "./Inputs";
import { InfoSuccess, Iconeye, InfoError, InfoNormal } from "../icons/InputIcons";

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
        variant: "Normal",
        helperText: "This is Helper Text",
        palceholder: "A Form Field",
        type: "text",
        size: "Small",
        name: "defaultform",
        value: "",
        onChange: value => console.log(value), // Add this line to handle the change event
    },
    render: props => <FormInput {...props} />,
};

export const InputWithIcon: Story = {
    args: {
        label: "Form Field 01",
        variant: "Normal",
        helperText: "This is Helper Text",
        palceholder: "Type Your Password",
        size: "Small",
        type: "password",
        icon: Iconeye,
        name: "pass",
    },
    render: props => <FormInput {...props} />,
};
export const SuccessInputWithIcon: Story = {
    render: props => (
        <FormInput
            label="Form Field 01"
            variant="Success"
            helperText="This is Helper Text"
            palceholder="Type Your Text"
            size="Medium"
            type="text"
            icon={InfoSuccess}
            name="success"
        />
    ),
};
export const ErrorInputWithIcon: Story = {
    render: props => (
        <FormInput
            label="Form Field 2"
            variant="Error"
            helperText="This is Helper Text"
            palceholder="Type Your Text"
            size="Medium"
            type="text"
            icon={InfoError}
            name="error"
        />
    ),
};
export const NormalInputWithIcon: Story = {
    render: props => (
        <FormInput
            label="Form Field 3"
            variant="Normal"
            helperText="This is Helper Text"
            palceholder="Type Your Text"
            size="Medium"
            type="text"
            icon={InfoNormal}
            name="normal"
        />
    ),
};
