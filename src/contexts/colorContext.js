import React, { Component } from "react";
const ColorContext = React.createContext();

class ColorContextProvider extends Component {
  state = {
    className: "slategrey"
  }

  

  changeColor = (event) => {
    // console.log(event)
    this.setState(prevState => {
            return {
                className:`${event.target.className}`
            }
        })

  }

  render(){
    return (
      <ColorContext.Provider
        value={{
          updateColor: this.state.className,
          changeColor: this.changeColor,
        }}
      >
        {this.props.children}
      </ColorContext.Provider>
    );
  }
}

export { ColorContextProvider, ColorContext };
