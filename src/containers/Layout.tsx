import React from 'react';
import '../styles/layout.css';
import { AcademiesInfo } from '../components/AcademiesInfo';
import { AcademiesList } from '../components/AcademiesList';

export const Layout: React.FC = () => {
    return (
        <div className="layout">
            <div className="layout__main">
                <AcademiesList />
            </div>
            <div className="layout__extra">
                <AcademiesInfo />
            </div>
        </div>
    );
};