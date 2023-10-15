//tooltip component
import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';

const TooltipComponent = (props) => {
  return (
    <div>
      <ReactTooltip id='tooltip' place='top' effect='solid' className='tooltip'>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </ReactTooltip>
    </div>
  );
};
export { TooltipComponent };
