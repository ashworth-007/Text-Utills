import React, { useState } from "react";
// import PropTypes from 'prop-types'; // If not using PropTypes

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const [color, setColor] = useState("black");

  const handleUpClick = () => {
    console.log("Upperclick was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const LowerCase = () => {
    console.log("Lowerclick was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const ChangeColor = () => {
    const newColor = color === "#808080" ? "red" : "#808080"; // Toggle between colors
    setColor(newColor);
    props.showAlert("Colour changed!", "success");
  };

  const clear = () => {
    setText("");
    props.showAlert("Text Cleared!", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
  };

  return (
    <>
      <div>
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h1>
        <div className="form-group" style={{ color: props.mode === "dark" ? "white" : "black" }}>
          <label htmlFor="myBox"></label>
          <textarea
            className="form-control"
            id="myBox"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#000000" : "white",
              color: props.mode === "dark" ? "white" : "black",
              // Remove one of the color definitions if necessary
            }}
            value={text}
            placeholder="Enter text here"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-2 mx-3" onClick={LowerCase}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={ChangeColor}>
          Change Color
        </button>
        <button className="btn btn-primary my-2 mx-3" onClick={handleCopy}>
          Copy Text
        </button>
        <div className="con">
          <button className="btn btn-danger my-3" onClick={clear}>
            Clear Text
          </button>
        </div>
      </div>

      <div className="container my-2" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read.</p>
      </div>
    </>
  );
}

// If using PropTypes
// TextForm.propTypes = {
//     heading: PropTypes.string.isRequired
// };
