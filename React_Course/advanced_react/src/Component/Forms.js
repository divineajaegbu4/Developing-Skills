import React from "react";

const Forms = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <fieldset>
          <div className="Field">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              placeholder="name"
              name="name"
              value={props.value}
              onChange={props.handleChange}
            />
          </div>

       
          <button type="submit" disabled={props.disabled}>
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Forms;
