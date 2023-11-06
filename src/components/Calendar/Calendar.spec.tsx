import * as React from "react";

import { render } from "@testing-library/react";
import { Calendar } from "./Calendar";

test("Calendar component is rendering properly", async () => {
    const { container } = render(<Calendar />);

    expect(container).toMatchSnapshot();
});
