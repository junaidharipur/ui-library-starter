import * as React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Button from "./Button";

test("loads and displays greeting", async () => {
    // ARRANGE
    render(<Button />);

    // ACT
    // await userEvent.click(screen.getByText("Load Greeting"));
    // await screen.findByRole("heading");

    // ASSERT
    expect(screen.getByRole("button")).toHaveTextContent("hellow");
});
