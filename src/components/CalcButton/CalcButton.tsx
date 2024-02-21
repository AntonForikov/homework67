import React from 'react';

interface Props {
  value: string
  flexBasic: string
  equal?: boolean
  onClick: React.MouseEventHandler
}
const CalcButton: React.FC<Props> = ({value, onClick, flexBasic, equal=false}) => {
  return (
    <div
      style={{flexBasis: `${flexBasic}%`}}
      className={equal ? 'btn btn-warning d-block' : 'btn btn-secondary d-block' }
      onClick={onClick}>
      {value}
    </div>
  );
};

export default CalcButton;