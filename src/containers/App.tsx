import React, { useEffect, useState } from 'react';
import { useDispatch } from '../common/hooks/useDispatch';
import { getBatteries } from '../services/api';
import { academiesAdded } from '../slices/academiesSlice';
import { AcademiesLayout } from './AcademiesLayout';

export const App: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchBatteries = async () => {
            const data = await getBatteries();
            dispatch(academiesAdded(data));
            setIsLoading(false);
        };
        fetchBatteries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },        []);
       
    return (
        <div>{isLoading ? 
        <div>Loading</div> :
        <AcademiesLayout />
    }</div>
    );
};