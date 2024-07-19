import React from 'react';
import s from "./navigationButton.module.scss"
import clsx from "clsx";

type Props = {
    isDisabled: boolean
    type?: "prev" | "next"
    activePage: number
    handlePageNumberChange: (pageNumber: number) => () => void
}

export const NavigationButton = ({isDisabled, type = "prev", activePage, handlePageNumberChange}: Props) => {
    return (
        <button onClick={handlePageNumberChange(type === "prev" ? activePage - 1 : activePage + 1)}
                disabled={isDisabled}
                className={clsx(s.button, {
                    [s.disabled]: isDisabled,
                    [s.rotate]: type === "next"
                })}>
            <svg width="4.665771" height="9.334229" viewBox="0 0 4.66577 9.33423" fill="none"
                 xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs/>
                <path id="Vector"
                      d="M3.89 9.33C3.79 9.33 3.69 9.31 3.6 9.26C3.51 9.22 3.43 9.16 3.37 9.08L0.15 5.08C0.05 4.96 0 4.81 0 4.66C0 4.5 0.05 4.36 0.15 4.24L3.48 0.24C3.59 0.1 3.76 0.01 3.93 0C4.11 -0.02 4.28 0.04 4.42 0.15C4.56 0.26 4.64 0.42 4.66 0.6C4.67 0.78 4.62 0.95 4.51 1.09L1.53 4.66L4.41 8.24C4.49 8.33 4.54 8.45 4.56 8.58C4.57 8.71 4.55 8.83 4.5 8.95C4.44 9.06 4.36 9.16 4.25 9.23C4.14 9.3 4.01 9.33 3.89 9.33Z"
                      fillOpacity="1.000000" fillRule="nonzero"/>
            </svg>
        </button>
    );
};