import React from 'react';
import clsx from "clsx";
import s from "./numbersItem.module.scss";

type Props = {
    text: number | string
    isActive?: boolean
    isDisable?: boolean
    handlePageNumberItemClick?: () => void
}

export const NumbersItem = ({text, isActive = false, isDisable = false, handlePageNumberItemClick}:Props) => {
    return (
        <li>
            <button onClick={handlePageNumberItemClick && handlePageNumberItemClick}
                    disabled={isDisable}
                    className={clsx(s.button, {
                        [s.activeButton]: isActive,
                        [s.disabled]: isDisable
                    })}>
                {text}
            </button>
        </li>
    );
};

