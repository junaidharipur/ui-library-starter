import * as React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Cookies } from "./cookies";

test("Cookies component should rendering properly.", async () => {
    render(<Cookies title="We use cookies" subtitle="Please, accept these sweeties to continue enjoyin our site!" />);
});
