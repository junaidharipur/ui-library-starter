import * as React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Dropdown } from "./dropdown";
const options = [
    "option1",
    "option2",
    "option3",
    "option13",
    "option22",
    "option23",
    "option221",
    "option22",
    "option3",
];

test("Input component should rendering properly.", async () => {
    render(<Dropdown variant="md" options={options} outlined={true} />);
});
test("Dropdown component renders with initial options", () => {
    render(<Dropdown variant="md" options={options} outlined={true} />);

    options.forEach(option => {
        const optionElement = screen.getByText(/option/i);
        expect(optionElement).toBeInTheDocument();
    });
});
