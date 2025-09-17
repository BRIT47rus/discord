import { Title } from '../Title/Title';
import './ThemeOfCategory.css';

export const ThemeOfCategory = () => {
    return (
        <div className="theme-category">
            <Title />
            <div className="theme-category__top">
                <div className="theme-category__line"></div>Windows
            </div>
            <div className="theme-category__top">
                <div className="theme-category__line"></div>Linux
            </div>
            <div className="theme-category__top">
                <div className="theme-category__line"></div>IOS
            </div>
        </div>
    );
};
