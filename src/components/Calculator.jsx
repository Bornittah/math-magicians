import React from 'react';
import Button from './shared/Button/Button';
import './style.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="wrapper flex align-center justify-center">
        <div className="calculator">
          <div className="answer-display">
            <p>0</p>
          </div>
          <div className="row flex space-btn">
            <Button className="button gray-bg flex-1" text="AC" />
            <Button className="button gray-bg flex-1" text="+/-" />
            <Button className="button gray-bg flex-1" text="%" />
            <Button className="button orange-bg flex-1" text="/" />
          </div>
          <div className="row flex space-btn">
            <Button className="button gray-bg flex-1" text="7" />
            <Button className="button gray-bg flex-1" text="8" />
            <Button className="button gray-bg flex-1" text="9" />
            <Button className="button orange-bg flex-1" text="x" />
          </div>
          <div className="row flex space-btn">
            <Button className="button gray-bg flex-1" text="4" />
            <Button className="button gray-bg flex-1" text="5" />
            <Button className="button gray-bg flex-1" text="6" />
            <Button className="button orange-bg flex-1" text="-" />
          </div>
          <div className="row flex space-btn">
            <Button className="button gray-bg flex-1" text="1" />
            <Button className="button gray-bg flex-1" text="2" />
            <Button className="button gray-bg flex-1" text="3" />
            <Button className="button orange-bg flex-1" text="+" />
          </div>
          <div className="row flex space-btn">
            <Button className="button gray-bg flex-2" text="0" />
            <Button className="button gray-bg flex-1 " text="." />
            <Button className="button orange-bg flex-1 " text="=" />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
