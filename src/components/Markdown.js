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
    <div className="app" style={{ display: "flex", height: "100vh" }}>
      <div
        style={{
          flex: 1,
          padding: "1rem",
          borderRight: "1px solid #ccc",
        }}
      >
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
      <div
        className="preview"
        style={{
          flex: 1,
          padding: "1rem",
          overflowY: "auto",
        }}
      >
        <h1>{displayedValue}</h1>
      </div>
    </div>
  );
};

export default Markdown;




// import React, { useState, useEffect } from "react";
// import { marked } from "marked"; // 👈 Import markdown parser

// const Markdown = () => {
//   let [value, setValue] = useState("");
//   let [displayedValue, setDisplayedValue] = useState("");

//   function handleChange(e) {
//     setValue(e.target.value);
//   }

//   useEffect(() => {
//     setDisplayedValue(value);
//   }, [value]);

//   return (
//     <div className="app" style={{ display: "flex", height: "100vh" }}>
//       <div
//         style={{
//           flex: 1,
//           padding: "1rem",
//           borderRight: "1px solid #ccc",
//         }}
//       >
//         <textarea
//           onChange={handleChange}
//           value={value}
//           style={{
//             width: "100%",
//             height: "100%",
//             resize: "none",
//             fontSize: "1rem",
//             padding: "1rem",
//             boxSizing: "border-box",
//           }}
//         />
//       </div>

//       {/* Markdown Preview */}
//       <div
//         className="preview"
//         style={{
//           flex: 1,
//           padding: "1rem",
//           overflowY: "auto",
//         }}
//         dangerouslySetInnerHTML={{ __html: marked(displayedValue) }} // 👈 Convert markdown to HTML
//       />
//     </div>
//   );
// };

// export default Markdown;
