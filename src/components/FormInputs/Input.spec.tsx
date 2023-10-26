import * as React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { FormInput } from "./FormInput";

test("Input component should rendering properly.", async () => {
    render(<FormInput name="formfiled" palceholder="Input placeholder" type="normal" />);
});

test("renders label and placeholder correctly", () => {
    render(<FormInput name="formfiled" label="Test Label" palceholder="Test Placeholder" type="normal" />);
    const ElemgetByLabelText = screen.getByLabelText(/Test Label/i);
    const ElemgetByPlaceholderText = screen.getByPlaceholderText("Test Placeholder");

    expect(ElemgetByLabelText).toBeInTheDocument();
    expect(ElemgetByPlaceholderText).toBeInTheDocument();
});
