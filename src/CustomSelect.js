import React from 'react';
//define Custom Select component
const CustomSelect= (props) => {
    const handleOnChange = props.onSelectChange;
    return (
        <div>
            <label for="select_position">Select Tooltip Position : </label>
            <select name="select_position" onChange={handleOnChange}>
                <option value="top" >Top</option>
                <option value="bottom" >Bottom</option>
                <option value="left" >Left</option>
                <option value="right" >Right</option>
            </select>
    
        </div>
        
        );
  }
  
  export default CustomSelect;