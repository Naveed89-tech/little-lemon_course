import React from "react";
import Sitting from "./Sitting";

function Menu({ selected, setSelected }) {
  const menuData = ["STEAKS", "SNACKS", "BREAKFAST", "HI-TEA", "DINNER"];
  return (
    <div className="dropdown-menu">
      <ul>
        {menuData.map((data) => (
          <li onClick={(e) => setSelected(e.target.textContent)}>{data}</li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
