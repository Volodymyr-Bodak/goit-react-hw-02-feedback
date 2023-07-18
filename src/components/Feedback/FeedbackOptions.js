import React, { Component } from "react";
import ReactDOM from "react-dom";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <div>
        {options.map((option) => (
          <button key={option} type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        ))}
      </div>
    );
  };
  export default FeedbackOptions