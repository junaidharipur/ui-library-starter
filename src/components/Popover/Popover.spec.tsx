import * as React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Popover } from "./Popover";

test("Popover component should rendering properly.", async () => {
    const Popoverchild = <h2>popover Child</h2>;
    render(
        <Popover title="We use cookies" description="The users wants to find a specific page or site.">
            {Popoverchild}
        </Popover>,
    );
});
