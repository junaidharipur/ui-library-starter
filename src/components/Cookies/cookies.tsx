import React from "react";
import { Button } from "../Button/Button";

type Props = {};

export function Cookies(props: Props) {
    return (
        <div className="bg-grey-2 w-full h-auto flex justify-between border-stroke rounded-lg py-8 px-10">
            <div>
                <h1 className="text-black text-2xl font-semibold">We use cookies</h1>
                <p className="text-base font-normal text-primary-text">
                    Please, accept these sweeties to continue enjoyin our site!
                </p>
            </div>
            <div className="flex justify-end gap-4 h-auto items-center">
                <Button variant="default" color="primary" disabled={false} size="Medium">
                    Accept
                </Button>
                <Button className="bg-white" variant="outlined" color="tertiary" disabled={false} size="Medium">
                    Close
                </Button>
            </div>
        </div>
    );
}
