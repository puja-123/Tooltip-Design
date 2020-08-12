import React from 'react';
//define Tooltip component
const Tooltip = (props) =>{
  let {
    tooltipRef,
    tooltip_position
  } = props;
  return (  
    <div id = "tooltip" ref={tooltipRef} className= {`${tooltip_position}`}>
        <div className = {` Arrow ${tooltip_position}Arrow`}></div>
        <div>{`${tooltip_position} ToolTip Component`}</div>
    </div>
    );
}
  export default Tooltip;