import { useState } from "react";

const FormItems = ({ object }) => {
  const [underline, setUnderline] = useState();

  const inputHandel = (e) => {
    setUnderline(e.target.checked);
  };

  return (
    <div>
      <ul className="vol">
        <input
          type="checkbox"
          onChange={inputHandel}
          style={{ cursor: "pointer" }}
        />
        <li
          style={{
            textDecoration: underline ? "line-through" : "",
            color: underline ? "red" : "",
          }}
        >
          {object}
        </li>
      </ul>
    </div>
  );
};

export default FormItems;
