import React, { useState } from "react";
import "./DisassemblyContainer.css";
import Checklist from "./checklist/Checklist";
import Popup from "../../popup/Popup";
const DisassemblyContainer = ({
  selectedPartIds,
  selectedId,
  isReadyToRepair,
  setIsReadyToRepair,
  isReadyToAssemble,
  setIsReadyToAssemble,
  setSelectedChecklist,
  selectedChecklist,
}) => {
  const [comments, setComments] = useState("");
  const [selectedPartComment, setSelectedPartComment] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [selection, setSelection] = useState("");

  const handleSend = () => {
    const data = {
      selectedId: selectedId,
      selectedPartIds: selectedPartIds,
      selectedChecklist: selectedChecklist,
      comments: comments,
      selectedPartComment: selectedPartComment,
    };
    console.log("send data->", data);
    setSelection("repair");

    setShowPopup(true);
  };

  const handleAssembly = () => {
    const data = {
      selectedId: selectedId,
      selectedPartIds: selectedPartIds,
      selectedChecklist: selectedChecklist,
      comments: comments,
      selectedPartComment: selectedPartComment,
    };
    console.log("Assembly data->", data);
    setSelection("assemble");

    setShowPopup(true);
  };

  const handleConfirmSend = () => {
    if (selection === "repair") setIsReadyToRepair(true);
    if (selection === "assemble") setIsReadyToAssemble(true);
    setSelectedPartComment({});
    setComments("");
    // setSelectedChecklist([]);
    setShowPopup(false);
    setSelection("");
  };

  return (
    <div className="disassembly-container">
      {selectedId && selectedPartIds.length > 0 ? (
        <div className="form-container">
          <div>
            <div>Cut out Comments</div>
            <textarea
              onChange={(e) => setComments(e.target.value)}
              cols={50}
              rows={5}
              placeholder="Cut out Comments here"
            />
          </div>
          <Checklist
            selectedChecklist={selectedChecklist}
            setSelectedChecklist={setSelectedChecklist}
          />
          <div className="comments-box">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "20%",
                gap: "0.5rem",
              }}
            >
              <div style={{ fontWeight: "bold" }}> Element Part ID</div>
              <div className="ids">
                {selectedPartIds?.map((item) => (
                  <div style={{ padding: "6px" }} key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                fontWeight: "bold",
                gap: "0.5rem",
              }}
            >
              <div>Comments</div>
              <div className="commentslist">
                {selectedPartIds?.map((item) => (
                  <div key={item}>
                    <input
                      id={item}
                      type="text"
                      placeholder="Write your comment"
                      style={{ width: "100%", padding: "6px" }}
                      onChange={(e) =>
                        setSelectedPartComment((prev) => ({
                          ...prev,
                          [item]: e.target.value,
                        }))
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="submit">
            <button onClick={handleSend} className="btn send">
              Send to Repair
            </button>
            <button onClick={handleAssembly} className="btn">
              Ready to Assemble
            </button>
          </div>
        </div>
      ) : (
        <div className="text">
          Select an Electrolyzer ID and then Select one or more element part ID
          to start disassembly
        </div>
      )}
      {showPopup && (
        <Popup
          selectedPartIds={selectedPartIds}
          handleConfirmSend={handleConfirmSend}
          setShowPopup={setShowPopup}
          isReadyToRepair={isReadyToRepair}
          isReadyToAssemble={isReadyToAssemble}
          selection={selection}
        />
      )}
    </div>
  );
};

export default DisassemblyContainer;
