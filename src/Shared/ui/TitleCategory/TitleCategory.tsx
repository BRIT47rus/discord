import classNames from 'classnames';
import { ThemeBrach } from '../ThemeOfCategory/ThemeBrach/ThemeBrach';
import shareImg from './share.png';
import './TitleCategory.css';

export const TitleCategory = ({
    title,
    id,
    notification,
}: {
    title: string;
    id: string;
    notification: boolean;
}) => {
    return (
        <div className="title-category">
            <img src={shareImg} alt="share" />
            <span
                className={classNames({
                    'title-category__notification': notification,
                })}
            >
                {title.length > 20 ? title.slice(0, 20) + ' ...' : title}
            </span>
            <ThemeBrach id={id} />
        </div>
    );
};
