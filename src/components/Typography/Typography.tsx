import * as React from "react";

import cx from "classnames";

export function H1({ children }: { children: React.ReactNode }) {
    return <h1 className={cx("text-[30px] font-bold leading-[38px]")}>{children}</h1>;
}

export function H2({ children }: { children: React.ReactNode }) {
    return <h2 className={cx("text-[28px] font-semibold leading-[40px]")}>{children}</h2>;
}

export function H3({ children }: { children: React.ReactNode }) {
    return <h3 className={cx("text-[24px] font-semibold leading-[30px]")}>{children}</h3>;
}

export function H4({ children }: { children: React.ReactNode }) {
    return <h4 className={cx("text-[20px] font-semibold leading-[26px]")}>{children}</h4>;
}

export function Body1({
    children,
    variant,
}: {
    children: React.ReactNode;
    variant: "regular" | "medium" | "semibold" | "bold";
}) {
    const __fontWeight =
        variant === "regular"
            ? "font-normal"
            : variant === "medium"
            ? "font-medium"
            : variant === "semibold"
            ? "font-semibold"
            : variant === "bold" && "font-bold";

    return <p className={cx("text-lg leading-[26px]", __fontWeight)}>{children}</p>;
}

export function Body2({
    children,
    variant,
}: {
    children: React.ReactNode;
    variant: "regular" | "medium" | "semibold" | "bold";
}) {
    const __fontWeight =
        variant === "regular"
            ? "font-normal"
            : variant === "medium"
            ? "font-medium"
            : variant === "semibold"
            ? "font-semibold"
            : variant === "bold" && "font-bold";

    return <p className={cx("text-base leading-6", __fontWeight)}>{children}</p>;
}

export function Body3({
    children,
    variant,
}: {
    children: React.ReactNode;
    variant: "regular" | "medium" | "semibold" | "bold";
}) {
    const __fontWeight =
        variant === "regular"
            ? "font-normal"
            : variant === "medium"
            ? "font-medium"
            : variant === "semibold"
            ? "font-semibold"
            : variant === "bold" && "font-bold";

    return <p className={cx("text-sm leading-[22px]", __fontWeight)}>{children}</p>;
}

export function Body4({
    children,
    variant,
}: {
    children: React.ReactNode;
    variant: "regular" | "medium" | "semibold" | "bold";
}) {
    const __fontWeight =
        variant === "regular"
            ? "font-normal"
            : variant === "medium"
            ? "font-medium"
            : variant === "semibold"
            ? "font-semibold"
            : variant === "bold" && "font-bold";

    return <p className={cx("text-xs leading-5", __fontWeight)}>{children}</p>;
}

export function Typography({ children, variant = "body2-regular" }: TypographyProps) {
    if (variant === "h1") return <H1>{children}</H1>;
    if (variant === "h2") return <H2>{children}</H2>;
    if (variant === "h3") return <H3>{children}</H3>;
    if (variant === "h4") return <H4>{children}</H4>;

    if (variant === "body1-regular") return <Body1 variant="regular">{children}</Body1>;
    if (variant === "body1-medium") return <Body1 variant="medium">{children}</Body1>;
    if (variant === "body1-semibold") return <Body1 variant="semibold">{children}</Body1>;
    if (variant === "body1-bold") return <Body1 variant="bold">{children}</Body1>;

    if (variant === "body2-regular") return <Body2 variant="regular">{children}</Body2>;
    if (variant === "body2-medium") return <Body2 variant="medium">{children}</Body2>;
    if (variant === "body2-semibold") return <Body2 variant="semibold">{children}</Body2>;
    if (variant === "body2-bold") return <Body2 variant="bold">{children}</Body2>;

    if (variant === "body3-regular") return <Body3 variant="regular">{children}</Body3>;
    if (variant === "body3-medium") return <Body3 variant="medium">{children}</Body3>;
    if (variant === "body3-semibold") return <Body3 variant="semibold">{children}</Body3>;
    if (variant === "body3-bold") return <Body3 variant="bold">{children}</Body3>;

    if (variant === "body4-regular") return <Body4 variant="regular">{children}</Body4>;
    if (variant === "body4-medium") return <Body4 variant="medium">{children}</Body4>;
    if (variant === "body4-semibold") return <Body4 variant="semibold">{children}</Body4>;
    if (variant === "body4-bold") return <Body4 variant="bold">{children}</Body4>;

    return <Body2 variant="regular">{children}</Body2>;
}

interface TypographyProps {
    variant?:
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "body1-regular"
        | "body1-medium"
        | "body1-semibold"
        | "body1-bold"
        | "body2-regular"
        | "body2-medium"
        | "body2-semibold"
        | "body2-bold"
        | "body3-regular"
        | "body3-medium"
        | "body3-semibold"
        | "body3-bold"
        | "body4-regular"
        | "body4-medium"
        | "body4-semibold"
        | "body4-bold";
    children: React.ReactNode;
}
