import * as React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Avatar } from "./Avatar";

test("Avatar component should rendering properly.", async () => {
    render(
        <Avatar
            showIcon={true}
            size="Extra Small"
            imgSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />,
    );
});
