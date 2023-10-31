import React from "react";
import { Button } from "../Button/Button";
import { colors } from "../../utils/colors";
type Props = {
    title: string;
    subtitle: string;
};

export function Cookies({ title, subtitle }: Props) {
    return (
        <div className="bg-grey-2 w-full h-auto flex justify-between border-stroke rounded-lg py-8 px-10">
            <div>
                <h1 className="text-black text-2xl font-semibold">{title}</h1>
                <p className="text-base font-normal text-primary-text">{subtitle}</p>
            </div>
            <div className="flex justify-end gap-4 h-auto items-center">
                <Button
                    style={{ padding: "12px 28px" }}
                    variant="default"
                    color="primary"
                    disabled={false}
                    size="Medium"
                >
                    Accept
                </Button>
                <Button
                    className="bg-white shadow-1"
                    style={{ border: "none", color: `${colors.primaryText}`, padding: "12px 28px" }}
                    variant="outlined"
                    color="tertiary"
                    disabled={false}
                    size="Medium"
                >
                    Close
                </Button>
            </div>
        </div>
    );
}
