import './Category.css';
import { ArrowIcon } from '../ArrowIcon/ArrowIcon';
import { ThemeOfCategory } from '../ThemeOfCategory/ThemeOfCategory';
export const Category = () => {
    return (
        <div className="category">
            <div className="category__name">
                test <ArrowIcon />
            </div>
            <ThemeOfCategory />
        </div>
    );
};
