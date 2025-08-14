import React from "react";
import "./PartsList.css";
import { element_ids } from "../../../data.js";
import Idbox from "../../id-box/Idbox";
const PartsList = ({ selectedPartIds, setSelectedPartIds }) => {
  const handleCheckboxChange = (id) => {
    if (selectedPartIds?.includes(id)) {
      setSelectedPartIds((prev) => prev.filter((item) => item !== id));
    } else {
      setSelectedPartIds((prev) => [...prev, id]);
    }
  };
  const handleSelectAll = () => {
    let allIds = element_ids?.map((item) => item.id);
    if (
      selectedPartIds?.every((item, index) => item === allIds[index]) &&
      selectedPartIds?.length !== 0
    ) {
      setSelectedPartIds([]);
    } else {
      setSelectedPartIds(allIds);
    }
  };
  return (
    <div className="part-list">
      <div className="heading">
        <div>Position</div>
        <div>Elements Part ID</div>
        <button onClick={handleSelectAll}>Select All</button>
      </div>
      <div className="part-data">
        {element_ids?.map((item) => {
          return (
            <div key={item.id} className="heading gap">
              <div>{item?.position}</div>
              <div className="list">
                <input
                  name={item.id}
                  id={item.id}
                  type="checkbox"
                  checked={selectedPartIds?.includes(item.id) ? true : false}
                  onChange={() => handleCheckboxChange(item.id)}
                  className="checkbox"
                />
                <Idbox
                  id={item?.id}
                  handleIdSelect={() => {}}
                  isSelected={selectedPartIds?.includes(item.id)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PartsList;
