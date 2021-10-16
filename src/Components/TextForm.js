import React, { useState } from "react";

export default function TextForm(props) {
  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Upper case", "success");
  };
  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Lower case", "success");
  };
  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };

  const copyText = () => {
    let text = document.getElementById("text-area");
    // console.log(text);
    text.select();
    text.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied", "warning");
  };

  const handleChange = (event) => {
    console.log("successfully changed");
    setText(event.target.value);
  };

  const [text, setText] = useState(
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus minima eius, harum consequatur animi quae sint blanditiis repellat ratione cumque? Dolore, quis. Laborum similique magni voluptate suscipit, quod eum nihil repellendus reprehenderit qui, voluptatum, facilis molestias culpa minima! Rerum, delectus dolorem excepturi quidem eveniet aspernatur temporibus nostrum? Facilis velit, est magnam nobis possimus et nihil? Modi facere neque possimus ea, animi impedit minus ducimus ullam maxime cum quo at reprehenderit, sunt perspiciatis beatae. Quia sapiente id ea officia ab sequi commodi non, tenetur vel culpa eum quos minima quam perspiciatis magni repellat fugit eligendi voluptatum vitae consequuntur facere excepturi esse. Natus impedit quasi hic adipisci quod beatae minus, quae, voluptatibus iusto, vitae doloremque. Rerum nemo reprehenderit repellendus blanditiis aperiam quae necessitatibus possimus autem voluptatibus, velit omnis. Quidem beatae placeat excepturi numquam velit, dolorem blanditiis repellendus fugit tempora exercitationem, sint laboriosam, odit incidunt eos! Incidunt dolor nam veniam saepe doloribus iste."
  );

  return (
    <div className="container my-3 top-5">
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
      <button className="btn btn-primary mx-1 my-2" onClick={copyText}>
        Copy Text
      </button>
      {/* <button className="btn btn-primary mx-1 my-2" onClick={handleSelectAll}>
        Select All
      </button> */}
      <hr />
      <div className="container">
        <h1>Your Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.0083 * text.split(" ").length} minutes you took to read</p>
        <hr />
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
