import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";
import { useState, useEffect } from "react";

const App = () => {
  const [marks, setMarks] = useState(() => {
    const savedMarks = window.localStorage.getItem("saved-marks");
    if (savedMarks !== null) {
      return JSON.parse(savedMarks);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  const totalFeedback = marks.good + marks.neutral + marks.bad;

  const feedbackRate = Math.round((marks.good / totalFeedback) * 100);

  useEffect(() => {
    window.localStorage.setItem("saved-marks", JSON.stringify(marks));
  }, [marks]);

  const updateFeedback = (feedbackType) => {
    setMarks((prevMarks) => ({
      ...prevMarks,
      [feedbackType]: prevMarks[feedbackType] + 1,
    }));
  };

  const resetState = () => {
    setMarks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        onUpdate={updateFeedback}
        totalFeedback={totalFeedback}
        resetState={resetState}
      />
      {totalFeedback > 0 ? (
        <Feedback
          {...marks}
          totalFeedback={totalFeedback}
          feedbackRate={feedbackRate}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
