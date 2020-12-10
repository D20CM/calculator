import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        displayText: 1234567890
      };
      
    }
  
    render(){
  return (
    <div className="App">
     <h1>Scott's Shitty Calculator</h1>
     <h2>Git test</h2>
     <div id="calculator-frame">
      <div id="display">
        {this.state.displayText}
      </div>
      <div id="clear" className="pad">
        AC
      </div>
      <div className="operator pad" id="divide">/</div>
      <div className="operator pad" id="multiply">*</div>
      <div className="operator pad" id="add">+</div>
      <div className="operator pad" id="subtract">-</div>
      <div className="digit pad" id="nine">9</div>
      <div className="digit pad" id="eight">8</div>
      <div className="digit pad" id="seven">7</div>
      <div className="digit pad" id="six">6</div>
      <div className="digit pad" id="five">5</div>
      <div className="digit pad" id="four">4</div>
      <div className="digit pad" id="three">3</div>
      <div className="digit pad" id="two">2</div>
      <div className="digit pad" id="one">1</div>
      <div className="digit pad" id="zero">0</div>
      <div className="digit pad" id="decimal">.</div>
      <div className="pad" id="equals">=</div>


     </div>
    </div>
  );
}
}

export default App;
