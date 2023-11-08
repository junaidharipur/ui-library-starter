import * as React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Dropdown } from "./Dropdown";

const options = [
    {
        label: "option1",
        value: "option1",
    },
    {
        label: "option2",
        value: "option2",
    },
    {
        label: "option3",
        value: "option3",
    },
    {
        label: "option4",
        value: "option4",
    },
    {
        label: "option5",
        value: "option5",
    },
    {
        label: "option6",
        value: "option6",
    },
    {
        label: "option7",
        value: "option7",
    },
];

test("Input component should rendering properly.", async () => {
    render(<Dropdown variant="Medium" options={options} outlined={true} defaultValue={options[0]?.label} />);
});
test("Dropdown component renders with initial options", () => {
    render(<Dropdown variant="Medium" options={options} outlined={true} defaultValue={options[0]?.label} />);

    options.forEach(option => {
        const optionElement = screen.getByText(/option/i);
        expect(optionElement).toBeInTheDocument();
    });
});
