import React, { useEffect } from "react";
import "./PartsList.css";
import { element_ids } from "../../../data.js";
import Idbox from "../../id-box/Idbox";
const PartsList = ({
  selectedPartIds,
  setSelectedPartIds,
  isReadyToRepair,
  isReadyToAssemble,
  selectedChecklist = [],
}) => {
  useEffect(() => {}, [selectedChecklist]);
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

  console.log(selectedChecklist, "selectedChecklist");
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
                  className={`checkbox ${
                    selectedPartIds?.includes(item.id) &&
                    (isReadyToRepair || isReadyToAssemble)
                      ? "isdisable"
                      : ""
                  }`}
                  disabled={
                    selectedPartIds?.includes(item.id) &&
                    (isReadyToRepair || isReadyToAssemble)
                  }
                />
                <Idbox
                  id={item?.id}
                  handleIdSelect={() => {}}
                  isSelected={selectedPartIds?.includes(item.id)}
                  isDisabled={isReadyToRepair || isReadyToAssemble}
                />
                {isReadyToRepair && selectedPartIds?.includes(item.id) && (
                  <div className="notify red">
                    Ready for Repair {` ${selectedChecklist?.length || ""}`}
                  </div>
                )}
                {isReadyToAssemble && selectedPartIds?.includes(item.id) && (
                  <div className="notify green">Ready for Assembly</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PartsList;
