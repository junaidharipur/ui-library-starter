import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Breadcrumbs, BreadcrumbsItem } from "../Breadcrumbs/Breadcrumbs";

import { HomeIcon } from "../icons/HomeIcon";

const meta: Meta<typeof Breadcrumbs> = {
    component: Breadcrumbs,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

const items: BreadcrumbsItem[] = [
    {
        path: "#",
        text: "Home",
    },
    {
        path: "##",
        text: "Projects",
    },
    {
        path: "###",
        text: "Marketing",
    },
];

const itemsWithHomeIcon: BreadcrumbsItem[] = [
    {
        path: "#",
        text: "Home",
        icon: props => <HomeIcon {...props} />,
    },
    {
        path: "##",
        text: "Projects",
    },
    {
        path: "###",
        text: "Marketing",
    },
];

const BreadcrumbsRenderer = ({ path, text, icon }: BreadcrumbsItem) => {
    return <a href={path}>{text}</a>;
};

export const Default: Story = {
    args: {
        currentItemRenderer: BreadcrumbsRenderer,
        items,
    },
    argTypes: {},
    render: props => <Breadcrumbs {...props} />,
};

export const WithHomeIcon: Story = {
    args: {
        currentItemRenderer: BreadcrumbsRenderer,
        items: itemsWithHomeIcon,
    },
    argTypes: {},
    render: props => <Breadcrumbs {...props} />,
};

export const WithPrimaryBackground: Story = {
    args: {
        currentItemRenderer: BreadcrumbsRenderer,
        items: itemsWithHomeIcon,
        className: "bg-primary",
        color: "white",
        activeColor: "white",
    },
    argTypes: {},
    render: props => <Breadcrumbs {...props} />,
};

export const WithTertiaryBackground: Story = {
    args: {
        currentItemRenderer: BreadcrumbsRenderer,
        items: itemsWithHomeIcon,
        className: "bg-black",
        color: "white",
        activeColor: "white",
    },
    argTypes: {},
    render: props => <Breadcrumbs {...props} />,
};
