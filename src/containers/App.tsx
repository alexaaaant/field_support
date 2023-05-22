import React, { useEffect, useState } from 'react';
import { useDispatch } from '../common/hooks/useDispatch';
import { getBatteries } from '../services/api';
import { academiesAdded } from '../slices/academiesSlice';
import { Layout } from './Layout';

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
        <div className="container">{
            isLoading ? 
                <div>Loading...</div> :
                <Layout />
        }</div>
    );
};