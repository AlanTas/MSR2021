import React, { useState } from "react";

export const Checkboxes = () => {
  const [checkedIds, setCheckedIds] = useState(new Set(["everywhere"]));

  const handleCheck = ({ id, checked }) => {
    if (checked) {
      if (id === "everywhere") {
        checkedIds.clear();
      } else {
        checkedIds.delete("everywhere");
      }
      checkedIds.add(id);
    } else {
      checkedIds.delete(id);
    }
    setCheckedIds(new Set(checkedIds));
  };

  return (
    <form>
      <label>
        <input
          id="everywhere"
          type="checkbox"
          checked={checkedIds.has("everywhere")}
          onChange={(e) => handleCheck(e.target)}
        />{" "}
        Search everywhere
      </label>

      <label>
        <input
          id="option-1"
          type="checkbox"
          checked={checkedIds.has("option-1")}
          onChange={(e) => handleCheck(e.target)}
        />{" "}
        Option 1
      </label>

      <label>
        <input
          id="option-2"
          type="checkbox"
          checked={checkedIds.has("option-2")}
          onChange={(e) => handleCheck(e.target)}
        />{" "}
        Option 2
      </label>
    </form>
  );
};
