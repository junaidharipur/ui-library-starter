import * as React from "react";

import "react-calendar/dist/Calendar.css";
import "../../styles/calendar.css";

import cx from "classnames";
import ReactCalender from "react-calendar";
import { Button } from "../Button/Button";

export function Calendar({ value = new Date(), onChange, onRemoveClick, onDoneClick }: CalendarProps) {
    React.useEffect(() => {
        const elems = document.querySelector(".react-calendar__month-view__weekdays");
        const monthTitles: Element[] = Array.from((elems as any)?.children);

        monthTitles.forEach(cur => {
            const titlesElem: Element[] = Array.from((cur as any).children);

            titlesElem.forEach(item => {
                item.textContent = item.textContent?.slice(0, 2) || item.textContent;
            });
        });
    }, []);

    return (
        <div className={cx("shadow-4 inline-block overflow-hidden bg-white rounded-xl")}>
            <ReactCalender value={value} onChange={onChange} />
            <div className="flex items-center justify-between px-6 pt-2 pb-10">
                <Button onClick={onRemoveClick} className="mr-[5px]" fullWidth color="tertiary">
                    Remove
                </Button>
                <Button onClick={onDoneClick} className="ml-[5px]" fullWidth color="primary">
                    Done
                </Button>
            </div>
        </div>
    );
}

interface CalendarProps {
    value?: Date;
    onChange?: (...args: any) => any;
    onRemoveClick?: () => void;
    onDoneClick?: () => void;
}
