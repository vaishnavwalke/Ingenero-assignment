import React from "react";
import "./Popup.css";
import { MdClose } from "react-icons/md";
const Popup = ({
  setShowPopup,
  handleConfirmSend,
  isReadyToAssemble,
  isReadyToRepair,
  selectedPartIds,
}) => {
  return (
    <div className="popup-container">
      <div className="dialogbox">
        <div className="dialog-heading">
          <div style={{ padding: "8px", fontWeight: "bold" }}>
            Confirm Status
          </div>
          <MdClose onClick={() => setShowPopup(false)} size={20} />
        </div>
        <div>
          Update Status of Element Part ID{" "}
          {selectedPartIds?.map((item) => (
            <span key={item}>{`${item}`}</span>
          ))}{" "}
          to {isReadyToRepair && "Ready to Repair"}{" "}
          {isReadyToAssemble && "Ready for Assembly"}
        </div>
        <div className="footer">
          <button
            style={{
              backgroundColor: "lightgray",
              color: "red",
              border: "none",
              padding: "4px",
              cursor: "pointer",
            }}
            onClick={() => setShowPopup(false)}
          >
            Cancel
          </button>
          <button
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              padding: "4px",
              cursor: "pointer",
            }}
            onClick={handleConfirmSend}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
