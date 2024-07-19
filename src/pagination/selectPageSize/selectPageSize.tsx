import React from 'react';
import s from "./selectPageSize.module.scss";

type Props = {
    pageSize: number
    handlePageSizeChange: (e: any) => void
}

export const pageSizeVariants = [10, 20, 30, 50, 100];

export const SelectPageSize = ({pageSize, handlePageSizeChange}: Props) => {
    const options = pageSizeVariants.map(variant => (<option key={variant} value={variant}>{variant}</option>))
    return (
        <div className={s.selectNumber}>
            <span>Show</span>
            <select
                value={pageSize}
                onChange={handlePageSizeChange}
            >
                {options}
            </select>
            <span>on page</span>
        </div>
    );
};
