import React from "react";
import "./PartsList.css";
import { element_ids } from "../../../data.js";
import Idbox from "../../id-box/Idbox";
const PartsList = ({ selectedPartIds, setSelectedPartIds }) => {
  return (
    <div className="part-list">
      <div className="heading">
        <div>Position</div>
        <div>Elements Part ID</div>
        <button>Select All</button>
      </div>
      <div className="part-data">
        {element_ids.map((item) => {
          return (
            <div key={item.id} className="heading gap">
              <div>{item?.position}</div>
              <div className="list">
                <input
                  name={item.id}
                  id={item.id}
                  type="checkbox"
                  checked={""}
                  onChange={() => {}}
                />{" "}
                <Idbox id={item?.id} handleIdSelect={() => {}} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PartsList;
