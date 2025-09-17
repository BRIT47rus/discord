import { ThemeBrach } from '../ThemeOfCategory/ThemeBrach/ThemeBrach';
import shareImg from './share.png';
import './TitleCategory.css';
export const TitleCategory = ({ title, id }: { title: string; id: string }) => {
    return (
        <div className="title-category">
            <img src={shareImg} />
            {title}
            <ThemeBrach id={id} />
        </div>
    );
};
