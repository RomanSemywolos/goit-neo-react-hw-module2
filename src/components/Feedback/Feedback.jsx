import style from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, totalFeedback, feedbackRate }) => {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Rositive: {feedbackRate}%</li>
    </ul>
  );
};

export default Feedback;
