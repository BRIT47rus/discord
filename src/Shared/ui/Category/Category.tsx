import './Category.css';
import { ArrowIcon } from '../ArrowIcon/ArrowIcon';
import { ThemeOfCategory } from '../ThemeOfCategory/ThemeOfCategory';
import type { TSection } from '../../../features/types';
import { useState, type FC } from 'react';

export const Category: FC<TSection> = ({ title, collapse, id }) => {
    const [notOpen, setNotOpen] = useState(!collapse);
    const handleOpenClick = () => {
        setNotOpen((prev) => !prev);
    };

    return (
        <div className="category">
            <div className="category__name" onClick={handleOpenClick}>
                {title.trim().length ? title : 'Тема'} <ArrowIcon />
            </div>

            {notOpen && <ThemeOfCategory id={id} />}
        </div>
    );
};
