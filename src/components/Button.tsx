import * as React from "react";

function Button() {
    const [dis, setDis] = React.useState(false);

    return (
        <button disabled={dis} role="button" onClick={() => setDis(true)}>
            hellow
        </button>
    );
}

export default Button;
