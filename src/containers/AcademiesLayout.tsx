import React from 'react';
import { AcademiesInfo } from '../components/AcademyInfo';
import { AcademiesList } from '../components/AcademyList';

export const AcademiesLayout: React.FC = () => {
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