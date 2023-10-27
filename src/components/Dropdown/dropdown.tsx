import React, { ReactElement } from "react";

type Props = {};

export function Dropdown(props: Props): ReactElement {
    return (
        <div>
            {" "}
            <select name="dropdown" id="dropdown" className="border border-purple-500 focus:ring-primary focus:outline-primary focus:border-primary rounded-md pl-3 py-3 w-full">
                <option className="bg-green-400 border border-green-950 rounded-lg" value="volvo">Volvo</option>
                <option className="bg-green-400 border border-green-950 rounded-lg"  value="saab">Saab</option>
                <option className="bg-green-400 border border-green-950 rounded-lg"  value="opel">Opel</option>
                <option className="bg-green-400 border border-green-950 rounded-lg"  value="audi">Audi</option>
            </select>
        </div>
    );
}
