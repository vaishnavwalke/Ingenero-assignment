import React from "react";
import "./DisassemblyContainer.css";
const DisassemblyContainer = ({ selectedPartIds, selectedId }) => {
  return (
    <div className="disassembly-container">
      {selectedId && selectedPartIds.length > 0 ? (
        <div>show data</div>
      ) : (
        <div className="text">
          Select an Electrolyzer ID and then Select one or more element part ID
          to start disassembly
        </div>
      )}
    </div>
  );
};

export default DisassemblyContainer;
