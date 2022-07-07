import React from 'react';
import Button from './shared/Button/Button';
import calculate from './logic/calculate';
import './style.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClick = this.onClick.bind(this);
  }

  onClick = (e) => {
    this.setState((data) => calculate(data, e.target.value));
  };

  render() {
    const { next, total } = this.state;
    return (
      <div className="wrapper flex align-center justify-center">
        <div className="calculator">
          <div className="answer-display">
            <p>{next || total || 0}</p>
          </div>
          <div className="row flex space-btn">
            <Button
              className="button gray-bg flex-1"
              value="AC"
              onClick={this.onClick}
            />
            <Button
              className="button gray-bg flex-1"
              value="+/-"
              onClick={this.onClick}
            />
            <Button
              className="button gray-bg flex-1"
              value="%"
              onClick={this.onClick}
            />
            <Button
              className="button orange-bg flex-1"
              value="&#247;"
              onClick={this.onClick}
            />
          </div>
          <div className="row flex space-btn">
            <Button
              className="button gray-bg flex-1"
              value="7"
              onClick={this.onClick}
            />
            <Button
              className="button gray-bg flex-1"
              value="8"
              onClick={this.onClick}
            />
            <Button
              className="button gray-bg flex-1"
              value="9"
              onClick={this.onClick}
            />
            <Button
              className="button orange-bg flex-1"
              value="x"
              onClick={this.onClick}
            />
          </div>
          <div className="row flex space-btn">
            <Button
              className="button gray-bg flex-1"
              value="4"
              onClick={this.onClick}
            />
            <Button
              className="button gray-bg flex-1"
              value="5"
              onClick={this.onClick}
            />
            <Button
              className="button gray-bg flex-1"
              value="6"
              onClick={this.onClick}
            />
            <Button
              className="button orange-bg flex-1"
              value="-"
              onClick={this.onClick}
            />
          </div>
          <div className="row flex space-btn">
            <Button
              className="button gray-bg flex-1"
              value="1"
              onClick={this.onClick}
            />
            <Button
              className="button gray-bg flex-1"
              value="2"
              onClick={this.onClick}
            />
            <Button
              className="button gray-bg flex-1"
              value="3"
              onClick={this.onClick}
            />
            <Button
              className="button orange-bg flex-1"
              value="+"
              onClick={this.onClick}
            />
          </div>
          <div className="row flex space-btn">
            <Button
              className="button gray-bg flex-2"
              value="0"
              onClick={this.onClick}
            />
            <Button
              className="button gray-bg flex-1 "
              value="."
              onClick={this.onClick}
            />
            <Button
              className="button orange-bg flex-1 "
              value="="
              onClick={this.onClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
