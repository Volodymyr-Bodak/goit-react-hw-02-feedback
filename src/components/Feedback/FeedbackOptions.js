import React from "react";
import styles from "components/Feedback/Feedback.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
          className={styles["feedback-button"]} // Use the CSS Module class name here
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
