import React from "react";

function Peoples(props) {
  const sittingData = props.option[1];
  console.log(sittingData);
  return (
    <div className="dropdown-menu">
      <ul>
        {Object.values(sittingData).map((data, index) => (
          <li
            onClick={(e) => props.setSelected(e.target.textContent)}
            key={index}
          >
            {data}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Peoples;
