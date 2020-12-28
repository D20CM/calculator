import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: ""
    };
    this.handleClear = this.handleClear.bind(this);
    this.numberInput = this.numberInput.bind(this);
    
  }

  handleClear() {
    this.setState({
      displayText: 0
    });
  }

  numberInput(enteredValue) {

    if (this.state.displayText[0] == 0  && this.state.displayText[1] !== "."){
      this.setState({
        displayText: this.state.displayText.substring(1) + "" + enteredValue
      })
    }

    else{
    this.setState({
      displayText:  this.state.displayText + "" + enteredValue
    });
  }
  }


  render() {
    return (
      <div className="App">
        <h1>Scott's Shitty Calculator</h1>
        <h2>Git test</h2>
        <div id="calculator-frame">
          <div id="display">
            {this.state.displayText}
          </div>
          <div id="clear" className="pad" onClick={this.handleClear}>
            AC
      </div>
          <div className="operator pad" id="divide">/</div>
          <div className="operator pad" id="multiply">*</div>
          <div className="operator pad" id="add">+</div>
          <div className="operator pad" id="subtract">-</div>
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
          <div className="pad" id="equals">=</div>


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
  }

  render() {
    return (
      
      <div className="digit pad" id={this.props.id} onClick={this.handleClick}>{this.props.number}</div>
      
    )
  }
}
