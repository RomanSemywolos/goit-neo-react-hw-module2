import style from "./Options.module.css";

const Options = ({ onUpdate, totalFeedback, resetState }) => {
  return (
    <fieldset className={style.ratingButtons}>
      <legend className={style.srOnly}>leave your feedback</legend>
      <button onClick={() => onUpdate("good")} aria-label="good">
        Good
      </button>
      <button onClick={() => onUpdate("neutral")} aria-label="neutral">
        Neutral
      </button>
      <button onClick={() => onUpdate("bad")} aria-label="bad">
        bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={resetState} aria-label="reset">
          Reset
        </button>
      )}
    </fieldset>
  );
};

export default Options;
