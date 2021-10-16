import React, { useState } from "react";

export default function TextForm(props) {
  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Upper case','success')
  };
  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Lower case','success')
  };
  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert('Text Cleared','success')
  };

  const handleChange = (event) => {
    console.log("successfully changed");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter your text");

  return (
    <div className="container my-3 ">
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h1>{props.heading}</h1>
        </label>
        <textarea
          value={text}
          className="form-control"
          id="text-area"
          rows="8"
          onChange={handleChange}
        ></textarea>
      </div>

      <button className="btn btn-primary mx-1 my-2" onClick={upperCase}>
        Change to Upper Case
      </button>
      <button className="btn btn-primary mx-1 my-2" onClick={lowerCase}>
        Change to Lower Case
      </button>
      <button className="btn btn-primary mx-1 my-2" onClick={clearText}>
        Clear Text
      </button>
      {/* <button className="btn btn-primary mx-1 my-2" onClick={handleSelectAll}>
        Select All
      </button> */}

      <div className="container">
        <h1>Your Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
