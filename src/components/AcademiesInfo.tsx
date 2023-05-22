import React, { useMemo } from 'react';
import '../styles/academiesInfo.css';
import { useSelector } from '../common/hooks/useSelector';

export const AcademiesInfo: React.FC = () => {
    const { academies, selectedAcademy } = useSelector((store) => store.academies);

    const academy = selectedAcademy ? academies[selectedAcademy] : null;
    
    const sortedDevices = useMemo(() => {
        if (academy?.devices) {
            return [...academy.devices].sort((a, b) => b.wearLevel - a.wearLevel);
        }
        return [];
    },                            [academy?.devices]);
    return (
            <div className="academies-info">
                {
                    academy ? 
                        <div className="academy-info">
                            <div className="academy-info__devices">
                                <span className="academy-info__devices-serial">
                                        Devices serial number (wear level)
                                </span>
                                <div className="academy-info__devices-list">
                                    {sortedDevices.map((device) => {
                                        return (
                                            <div 
                                                className="academy-info_device" 
                                                key={device.serialNumber}
                                            >
                                                {device.serialNumber} 
                                                <span className="academy-info_device-level">
                                                    ({device.wearLevel.toFixed(2)})
                                                </span>
                                            </div>
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