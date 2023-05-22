import React from 'react';
import '../styles/academiesInfo.css';
import { useSelector } from '../common/hooks/useSelector';

export const AcademiesInfo: React.FC = () => {
    const { academies, selectedAcademy } = useSelector((store) => store.academies);

    const academy = selectedAcademy ? academies[selectedAcademy] : null;
    return (
            <div className="academies-info">
                {
                    academy ? 
                        <div className="academy-info">
                            <div className="academy-info__devices">
                                <span className="header">Devices Serial Number:</span>
                                <div className="academy-info__devices-list">
                                    {academy.devices.map((device) => {
                                        return (
                                            <div 
                                                className="academy-info_device" 
                                                key={device.serialNumber}
                                            >{device.serialNumber}</div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div> : 
                        <div className="academy-empty">Select an academy to check batteries levels</div>
                }
            </div>
    );
};