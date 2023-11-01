import * as React from "react";

interface AvatarIconProps {
    width: string;
    height: string;
}

//ONLINE ICON
export function AvatarOnline({ width, height }: AvatarIconProps) {
    return (
        <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="9.5" fill="#22AD5C" stroke="white" stroke-width="3" />
        </svg>
    );
}
