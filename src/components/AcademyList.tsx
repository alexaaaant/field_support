import React from 'react';
import { useSelector } from '../common/hooks/useSelector';

interface AcademiesListProps {}

export const AcademiesList: React.FC<AcademiesListProps> = (props) => {
  const academies = useSelector(
    (store) => store.academies.academiesPrioritized
  );

  return (
    <div className="academies-list">
      Academies:
      {academies.map((academy) => (
        <div className="academies-list__academy" key={academy}>{academy}</div>
      ))}
    </div>
  );
};
