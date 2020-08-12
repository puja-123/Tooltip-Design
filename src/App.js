import React from 'react';
import Button from './Button';
import Tooltip from './Tooltip';
import CustomSelect from './CustomSelect';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tooltip_position: "top",
      is_selected : false
    }
    this.tooltipRef = React.createRef();
  }
 //method to change the is_selected value to true and set the tooltip componet to visible on the page
  onMouseOver= (e) =>{
    this.setState({  is_selected : true })
    this.tooltipRef.current.style.visibility = "visible";
  }

  //method to change the is_selected value to false and hide  the tooltip componet from the page
  onMouseOut = (e) =>{
    this.setState({  is_selected : false })
    this.tooltipRef.current.style.visibility = "hidden";
  }  
  //method to check user input for tooltip position and set the state
  onSelectChange = (e) =>{
    this.setState({ tooltip_position: e.target.value });
  }
  //render the app
  render(){
    const {tooltip_position} = this.state;
    return (
      <div className="App">
        <h1>Tooltip</h1>
        <CustomSelect 
          onSelectChange ={this.onSelectChange}
        />
        <Button 
          onMouseOver={this.onMouseOver} 
          onMouseOut ={this.onMouseOut}
        />
          <Tooltip
        tooltipRef={this.tooltipRef} 
        tooltip_position={tooltip_position}
        />
      </div>
    );
  }
  
}

export default App;

