import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: 0,
      workboard: "",
      result: ""
    };
    this.handleClear = this.handleClear.bind(this);
    this.numberInput = this.numberInput.bind(this);
    this.operatorInput = this.operatorInput.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
    
  }

  handleClear() {
    this.setState({
      displayText: 0,
      workboard: ""
    });
    let currentButton = document.getElementById("clear");
  currentButton.style.boxShadow = "1px 1px 1px 0px rgba(0,0,0,0.76)";
  currentButton.style.backgroundColor = "#ffa273";
  setTimeout(function(){currentButton.style.boxShadow = ""; currentButton.style.backgroundColor = ""}, 300);
    
  }

  handleEquals(){
    let result = eval(this.state.workboard);
    console.log(result);
    this.setState({
      displayText: result,
      workboard: result
    })
  }

  operatorInput(selectedOperator){
    this.setState({
      workboard: this.state.workboard + selectedOperator,
      displayText: selectedOperator
    })
  }

  numberInput(enteredValue) {
    if(enteredValue === "."){
      
      let displayStr = this.state.displayText.toString();
      
      if(displayStr.indexOf('.') !== -1) {
        alert("no double decimals allowed");
        return;
      }
      else {
        this.setState({
          displayText:  this.state.displayText + "" + enteredValue,
          workboard: this.state.workboard + enteredValue
        });
      }
      
    }

    else if (this.state.displayText === 0  && this.state.displayText[0] !== "."){
      this.setState({
        displayText: enteredValue,
        workboard: this.state.workboard + enteredValue
      })
    }

    else{
    this.setState({
      displayText:  this.state.displayText + "" + enteredValue,
      workboard: this.state.workboard + enteredValue
    });
  }
  }


  render() {
    return (
      <div className="App">
        <h1>Scott's Shitty Calculator</h1>
        
        
        <div id="calculator-frame">
          <div id="display">
          <div id="workboard">{this.state.workboard}</div>
            {this.state.displayText}
          </div>
          <div id="clear" className="pad" onClick={this.handleClear}>
            AC
      </div>
      <OperatorPad id="divide" operation="/" action={this.operatorInput}/>
      <OperatorPad id="multiply" operation="*" action={this.operatorInput}/>
      <OperatorPad id="add" operation="+" action={this.operatorInput}/>
      <OperatorPad id="subtract" operation="-" action={this.operatorInput}/>
          
          
          <DigitPad number={9} id="nine" action={this.numberInput}/>
          <DigitPad number={8} id="eight" action={this.numberInput}/>
          <DigitPad number={7} id="seven" action={this.numberInput}/>
          <DigitPad number={6} id="six" action={this.numberInput}/>
          <DigitPad number={5} id="five" action={this.numberInput}/>
          <DigitPad number={4} id="four" action={this.numberInput}/>
          <DigitPad number={3} id="three" action={this.numberInput}/>
          <DigitPad number={2} id="two" action={this.numberInput}/>
          <DigitPad number={1} id="one" action={this.numberInput}/>
          <DigitPad number={0} id="zero" action={this.numberInput}/>
          <DigitPad number={"."} id="decimal" action={this.numberInput}/>

          <EqualsPad id="equals" operation="=" action={this.handleEquals}/>
         


        </div>
      </div>
    );
  }
}
export default App;



class DigitPad extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
  this.props.action(this.props.number)
  let currentButton = document.getElementById(this.props.id);
  currentButton.style.boxShadow = "1px 1px 1px 0px rgba(0,0,0,0.76)";
  currentButton.style.backgroundColor = "white";
  setTimeout(function(){currentButton.style.boxShadow = ""; currentButton.style.backgroundColor = ""}, 300);
  }

  render() {
    return (
      <div className="digit pad" id={this.props.id} onClick={this.handleClick}>{this.props.number}</div>
    )
  }


}

class OperatorPad extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
  this.props.action(this.props.operation)
  let currentButton = document.getElementById(this.props.id);
  currentButton.style.boxShadow = "1px 1px 1px 0px rgba(0,0,0,0.76)";
  currentButton.style.backgroundColor = "#a1c5ff";
  setTimeout(function(){currentButton.style.boxShadow = ""; currentButton.style.backgroundColor = ""}, 300);
  }

  render() {
    return (
      <div className="operator pad" id={this.props.id} onClick={this.handleClick}>{this.props.operation}</div>
    )
  }


}
class EqualsPad extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
  this.props.action(this.props.operation);
  let currentButton = document.getElementById(this.props.id);
  currentButton.style.boxShadow = "1px 1px 1px 0px rgba(0,0,0,0.76)";
  currentButton.style.backgroundColor = "#94ff82";
  setTimeout(function(){currentButton.style.boxShadow = ""; currentButton.style.backgroundColor = ""}, 300);
  }

  render() {
    return (
      <div className="pad" id={this.props.id} onClick={this.handleClick}>{this.props.operation}</div>
    )
  }


}
