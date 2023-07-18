import React from "react";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      
      
      <ul>
        <li>
          <span>Good {good}</span>
        </li>
        <li>
          <span>Neutral {neutral}</span>
        </li>
        <li>
          <span>Bad {bad}</span>
        </li>
        <li>
          <span>Total {total}</span>
        </li>
        <li>
          <span>Positive feedbacks {positivePercentage}%</span>
        </li>
      </ul>
    </div>
  );
};

export default Statistics;
