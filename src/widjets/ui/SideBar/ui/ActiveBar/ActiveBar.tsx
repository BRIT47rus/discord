import { BoxIcon } from '../../../../../Shared/ui/BoxIcon/BoxIcon';
import { BrancheIcon } from '../../../../../Shared/ui/BrancheIcon/BrancheIcon';
import './ActiveBar.css';
export const ActiveBar = () => {
    return (
        <div className="active-bar">
            <div className="active-bar__title">
                <BoxIcon />
                <span>Новые</span>
            </div>
            <div className="active-bar__title">
                <BrancheIcon />
                <span>Ветки</span>
            </div>
        </div>
    );
};
