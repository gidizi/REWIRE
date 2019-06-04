import React from 'react';
import './App.css';

import WhiteView from "./WhiteView"
import TealView from "./TealView"


const breakPoint = 768

class App extends React.Component {
  constructor(){
    super()
    this.state = { // smallScreen - offcourse more general tools are required for a real app with several breakpoints
      viewColor: "white",
      prevStateValues: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleBack = this.handleBack.bind(this)
    this.updateDimensions = this.updateDimensions.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    /*stores previous states, to allow future usage of back button for more genral porpuses,
    for cases with more then just 2 view theme colors (where it isn't possible to just altername),
    or even possibly at future pages with different state properties */
    this.setState(state => {
      const prevStateValues = [ ...state.prevStateValues, {[name] : state[name]}]
      return { prevStateValues, [name]: value }
    })   
  }

  handleBack(){ 
    if (this.state.prevStateValues.length !== 0){
      this.setState(state => {
        const prevStates = state.prevStateValues
        const lastState = prevStates[prevStates.length-1]
        const prevStateValues = prevStates.filter((item,i) => i !== prevStates.length-1)
        return { prevStateValues, ...lastState }
      })
    }
  }

  updateDimensions() {
    var w = window,
            d = document,
            documentElement = d.documentElement,
            body = d.getElementsByTagName('body')[0],
            width = w.innerWidth || documentElement.clientWidth || body.clientWidth
    if (((!this.state.smallScreen) && (width <= breakPoint)) ||
      ((width > breakPoint) && (this.state.smallScreen)) || (typeof this.state.smallScreen === 'undefined')){
      this.setState({smallScreen: (width <= breakPoint) ? true: false })
    }
  }

  componentDidMount() {
      window.addEventListener("resize", this.updateDimensions);
      this.updateDimensions()
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions);
  }

  render(){
    return (
      <div>
        {(this.state.viewColor === "white") ? <WhiteView smallScreen={this.state.smallScreen} handleChange={this.handleChange}
        handleBack={this.handleBack}/> :
        <TealView smallScreen={this.state.smallScreen} handleChange={this.handleChange}
        handleBack={this.handleBack}/>}
      </div>
    );
  }
}

export default App;
