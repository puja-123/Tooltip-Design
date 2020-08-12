import React from 'react';
//define Button component
const Button = (props) => {
  const {
    onMouseOver,
    onMouseOut
  } = props;
  return (    
    <div >
      <button className="tootip_button" onMouseOver={onMouseOver} onMouseOut= {onMouseOut}><div className="img-div"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5dO6yVpLojNDhfEga-jWLCbPGItcJuP-A9g&usqp=CAU"></img></div>Hover over me</button>
    </div>
    
  );
  }
  
  export default Button;