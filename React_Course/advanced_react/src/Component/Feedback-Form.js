import React from "react";

const FeedbackForm = (props) => {
  return (
    <div>
      <form onSubmit={props.feedbackHandleSubmit}>
        <fieldset>
          <h2>Feedback form</h2>
          <div>
            <label htmlFor="score">Score: {props.value} ****</label>
            <input
              type="range"
              name="score"
              id="score"
              min="0"
              max="10"
              value={props.value}
              onChange={props.handleChange}
            />
          </div>

          <div className="Field">
            <label htmlFor="comment">Comment:</label>
            <textarea
              id="comment"
              name="comment"
              value={props.commentValue}
              onChange={props.commentHandleChange}
            />
          </div>

          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default FeedbackForm;
