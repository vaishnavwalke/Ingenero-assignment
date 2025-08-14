import React from "react";
import "./Checklist.css";
import { checklist_items } from "../../../../data";
const Checklist = ({ selectedChecklist, setSelectedChecklist }) => {
  const handleSelection = (item) => {
    const isAlreadyPresent = selectedChecklist?.includes(item);
    if (isAlreadyPresent) {
      const updatedList = selectedChecklist?.filter((data) => data !== item);
      setSelectedChecklist(updatedList);
    } else {
      setSelectedChecklist((prev) => [...prev, item]);
    }
  };

  const handleClear = () => {
    setSelectedChecklist([]);
  };

  return (
    <div className="checklist">
      <div className="checklist-top">
        <div>Disassembly Checklist {selectedChecklist?.length || ""}</div>
        <button onClick={handleClear}>Clear Selection</button>
      </div>
      <div className="list">
        {checklist_items?.map((item) => {
          return (
            <button
              onClick={() => handleSelection(item)}
              className={`selection-item ${
                selectedChecklist?.includes(item) ? "selected" : ""
              }`}
              key={item}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Checklist;
