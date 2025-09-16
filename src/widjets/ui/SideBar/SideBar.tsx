import React from 'react';
import './SideBar.css';
import { ActiveBar } from './ui/ActiveBar/ActiveBar';
import { Category } from '../../../App/Shared';
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
        </div>
    );
};
