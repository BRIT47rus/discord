import { useEffect, useRef, useState } from 'react';
import { ThemeBrach } from '../ThemeOfCategory/ThemeBrach/ThemeBrach';
import shareImg from './share.png';
import './TitleCategory.css';
import { useAnimate } from '../../../features/hooks';

export const TitleCategory = ({ title, id }: { title: string; id: string }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const { triggerAnimateIn, triggerAnimateEnter, triggerAnimateOut } =
        useAnimate(ref, 'title-category');
    useEffect(() => {
        triggerAnimateIn();
    }, []);
    return (
        <div className="title-category" ref={ref}>
            <img src={shareImg} alt="share" />
            {title.length > 20 ? title.slice(0, 20) + ' ...' : title}
            <ThemeBrach id={id} />
        </div>
    );
};
