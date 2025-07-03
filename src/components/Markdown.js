import React, { useState, useEffect } from "react";

const Markdown = () => {
  let [value, setValue] = useState("");
  let [displayedValue, setDisplayedValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  useEffect(() => {
    setDisplayedValue(value);
  }, [value]);

  return (
    <div style={{
      display: "flex",
      height: "100vh",
    }}>
      <div style={{
        flex: 1,
        padding: "1rem",
        borderRight: "1px solid #ccc",
      }}>
        <textarea
          onChange={handleChange}
          value={value}
          style={{
            width: "100%",
            height: "100%",
            resize: "none",
            fontSize: "1rem",
            padding: "1rem",
            boxSizing: "border-box",
          }}
        />
      </div>
      <div style={{
        flex: 1,
        padding: "1rem",
        overflowY: "auto",
      }}>
        <span>{displayedValue}</span>
      </div>
    </div>
  );
};

export default Markdown;
