import React from 'react';
import '../styles/academiesList.css';
import { useSelector } from '../common/hooks/useSelector';
import { academySelected } from '../slices/academiesSlice';
import { useDispatch } from '../common/hooks/useDispatch';

interface AcademiesListProps {}

export const AcademiesList: React.FC<AcademiesListProps> = (props) => {
  const { academiesPrioritized, selectedAcademy } = useSelector(
    (store) => store.academies
  );
  const dispatch =  useDispatch();

  const onClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!(event.target instanceof HTMLDivElement)) {
      return;
    }
    const dataset = event.target.dataset;
    
    if (!dataset.academy) {
      return;
    }
    dispatch(academySelected(+(dataset.id as string)));
  };

  return (
    <div className="academies-list" onClick={onClickHandler}>
      <span className="header">Academies ID:</span>
      <div className="academies-list__container">
        {academiesPrioritized.map((academy) => (
          <div 
            className={`academies-list__academy ${selectedAcademy === academy ? 'academies-list__academy_selected' : ''}`}
            key={academy}
            data-academy={true}
            data-id={academy}
          >{academy}</div>
        ))}
      </div>
    </div>
  );
};
