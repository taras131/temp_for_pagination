import {Pagination} from './pagination';
import React from "react";
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta<typeof Pagination> = {
    title: 'Components/Pagination',
    component: Pagination,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const PaginationStory: Story = {
    args: {
        totalCount: 601,
        activePage: 1,
        pageSize: 10,
    },
    render: (args) => {
        const [activePage, setActivePage] = React.useState(args.activePage);
        const [pageSize, setPageSize] = React.useState(args.pageSize);
        return (
            <Pagination
                totalCount={args.totalCount}
                activePage={activePage}
                setActivePage={setActivePage}
                pageSize={pageSize}
                setPageSize={setPageSize}
            />
        );
    },
};