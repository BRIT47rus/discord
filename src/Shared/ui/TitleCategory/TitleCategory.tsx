import shareImg from './share.png';
import './TitleCategory.css';
export const TitleCategory = ({ title }: { title: string }) => {
    return (
        <div className="title-category">
            <img src={shareImg} />
            {title}
        </div>
    );
};
