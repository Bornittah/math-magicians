import React, { useState } from 'react';
import Button from './shared/Button/Button';
import calculate from './logic/calculate';
import './style.css';

const Calculator = () => {
  const [data, setData] = useState(0);
  const onClick = (e) => {
    setData((data) => calculate(data, e.target.value));
  };
  return (
    <div className="wrapper flex align-center justify-center">
      <div className="calculator">
        <div className="answer-display">
          <p>{data.next || data.total || 0}</p>
        </div>
        <div className="row flex space-btn">
          <Button
            className="button gray-bg flex-1"
            value="AC"
            onClick={onClick}
          />
          <Button
            className="button gray-bg flex-1"
            value="+/-"
            onClick={onClick}
          />
          <Button
            className="button gray-bg flex-1"
            value="%"
            onClick={onClick}
          />
          <Button
            className="button orange-bg flex-1"
            value="&#247;"
            onClick={onClick}
          />
        </div>
        <div className="row flex space-btn">
          <Button
            className="button gray-bg flex-1"
            value="7"
            onClick={onClick}
          />
          <Button
            className="button gray-bg flex-1"
            value="8"
            onClick={onClick}
          />
          <Button
            className="button gray-bg flex-1"
            value="9"
            onClick={onClick}
          />
          <Button
            className="button orange-bg flex-1"
            value="x"
            onClick={onClick}
          />
        </div>
        <div className="row flex space-btn">
          <Button
            className="button gray-bg flex-1"
            value="4"
            onClick={onClick}
          />
          <Button
            className="button gray-bg flex-1"
            value="5"
            onClick={onClick}
          />
          <Button
            className="button gray-bg flex-1"
            value="6"
            onClick={onClick}
          />
          <Button
            className="button orange-bg flex-1"
            value="-"
            onClick={onClick}
          />
        </div>
        <div className="row flex space-btn">
          <Button
            className="button gray-bg flex-1"
            value="1"
            onClick={onClick}
          />
          <Button
            className="button gray-bg flex-1"
            value="2"
            onClick={onClick}
          />
          <Button
            className="button gray-bg flex-1"
            value="3"
            onClick={onClick}
          />
          <Button
            className="button orange-bg flex-1"
            value="+"
            onClick={onClick}
          />
        </div>
        <div className="row flex space-btn">
          <Button
            className="button gray-bg flex-2"
            value="0"
            onClick={onClick}
          />
          <Button
            className="button gray-bg flex-1 "
            value="."
            onClick={onClick}
          />
          <Button
            className="button orange-bg flex-1 "
            value="="
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
