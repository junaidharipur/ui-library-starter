import React, { useState } from "react";
import { PopOverIcon } from "../icons/InputIcons";

type Props = { children: React.ReactNode; title: string; description: string };

export function Popover({ children, title, description }: Props) {
    const [isShow, setisShow] = useState(false);
    return (
        <div className="">
            <div className="cursor-pointer" onClick={() => setisShow(!isShow)}>
                {children}
            </div>
            {isShow && (
                <div className="w-auto max-w-[20rem]">
                    <div className="flex justify-center ">
                        <PopOverIcon />
                    </div>
                    <div className="bg-white shadow-popover py-5 rounded">
                        <h1 className="px-5 flex justify-center items-center text-dark text-lg font-semibold">
                            {title}{" "}
                        </h1>

                        <hr className="bg-black mt-3 mb-5" />
                        <div className="flex justify-center items-center align-middle px-5">
                            <p className=" text-primary-text text-[14px] leading-6 font-normal">{description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
