import { Button, Category } from '../../../Shared';
import './SideBar.css';
import { ActiveBar } from './ui/ActiveBar/ActiveBar';
export const SideBar = () => {
    return (
        <div className="sidebar">
            <div>Server name</div>
            <ActiveBar />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Button text="START" onClick={() => null} />
        </div>
    );
};
