import './Category.css';
import { ArrowIcon } from '../ArrowIcon/ArrowIcon';
import { ThemeOfCategory } from '../ThemeOfCategory/ThemeOfCategory';
import type { TSection } from '../../../features/types';
import { useRef, useState, type FC } from 'react';
import classNames from 'classnames';
import { useAnimate } from '../../../features/hooks';

export const Category: FC<TSection> = ({ title, collapse, id }) => {
    const [notOpen, setNotOpen] = useState(!collapse);
    const [showContent, setShowContent] = useState(!collapse); // задержка удаления
    const ref = useRef<HTMLDivElement | null>(null);

    const duration = 300;
    const { triggerAnimateIn, triggerAnimateEnter, triggerAnimateOut } =
        useAnimate(ref, 'theme-category', duration);

    const handleOpenClick = () => {
        if (notOpen) {
            triggerAnimateOut();
            setTimeout(() => setShowContent(false), duration); // таймаут равен длине анимации
        } else {
            setShowContent(true);
            triggerAnimateIn();
            setTimeout(() => triggerAnimateEnter(), duration);
        }
        setNotOpen((prev) => !prev);
    };

    return (
        <div className="category">
            <div className="category__name" onClick={handleOpenClick}>
                {title.trim().length ? title : 'Тема'}
                <ArrowIcon
                    className={classNames({ category__arrow: notOpen })}
                />
            </div>
            {showContent && <ThemeOfCategory id={id} ref={ref} />}
        </div>
    );
};
