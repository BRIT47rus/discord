import { TitleCategory } from '../TitleCategory/TitleCategory';
import './ThemeOfCategory.css';
// interface Props {
//     // onClick: VoidFunction;
// }
export const ThemeOfCategory = () => {
    return (
        <div className="theme-category">
            <TitleCategory />
            <div className="theme-category__content">
                <div className="theme-category__top">
                    <div className="theme-category__line"></div>
                    Windows
                </div>
                <div className="theme-category__top">
                    <div className="theme-category__line"></div>Linux
                </div>
                <div className="theme-category__top">
                    <div className="theme-category__line"></div>IOS
                </div>
            </div>
        </div>
    );
};
