
import React from "react";
import styles from 'components/Feedback/Section.module.css'

const Section = ({ title, children }) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className="section-content">{children}</div>
    </div>
  );
};

export default Section;
