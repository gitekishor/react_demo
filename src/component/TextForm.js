import React, { useState } from "react";

export default function TextForm(props) {
  const [getText, setText] = useState("");

  const handleOnChange = (textData) => {
    setText(textData);
  };
  const handleClearText = () => {
    setText("");
  };
  const handleConvereteUpperCase = () => {
    setText(getText.toUpperCase());
  };
  const handleConvereteLowerCase = () => {
    setText(getText.toLowerCase());
  };
  function handleCopyText() {
    const element = document.querySelector("#exampleFormControlTextarea1");
    element.select();
    navigator.clipboard.writeText(element.value);
  }
  const handleConvereteCapitalCase = () => {
    let temp_text = getText;

    setText(temp_text.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase()));
  };
  const handleRemoveExtraSpaces = () => {
    let temp_text = getText;
    setText(temp_text.replace(/\s{2,}/g, " ").trim());
  };
  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">{props.textTitle}</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={getText}
          onChange={(e) => handleOnChange(e.target.value)}
        ></textarea>
      </div>
      <button
        type="button"
        onClick={handleConvereteUpperCase}
        className="btn btn-primary"
      >
        Upper Case
      </button>
      &nbsp;
      <button
        type="button"
        onClick={handleConvereteLowerCase}
        className="btn btn-primary"
      >
        Lower Case
      </button>
      &nbsp;
      <button
        type="button"
        onClick={handleCopyText}
        className="btn btn-primary"
      >
        Copy Text
      </button>
      &nbsp;
      <button
        type="button"
        onClick={handleConvereteCapitalCase}
        className="btn btn-primary"
      >
        First Letter Capital
      </button>
      &nbsp;
      <button
        type="button"
        onClick={handleRemoveExtraSpaces}
        className="btn btn-primary"
      >
        Remove Extra Spaces
      </button>
      &nbsp;
      <button
        type="button"
        onClick={handleClearText}
        className="btn btn-primary"
      >
        Clear Text
      </button>
      <h1>Preview</h1>
      <p>{getText}</p>
      <p>
        Total word <b>{getText.split(" ").length}</b> total character count{" "}
        <b>{getText.length}</b>
      </p>
    </form>
  );
}
