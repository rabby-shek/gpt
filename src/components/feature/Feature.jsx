import React from "react";
import "./feature.css";
/**
 *
 * @param {title} param1 //feature title
 * @param {text} param2 //text for feature
 * @component
 * @returns {JSX.Element} => A ReactJs Component
 */
const Feature = ({ title, text }) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
