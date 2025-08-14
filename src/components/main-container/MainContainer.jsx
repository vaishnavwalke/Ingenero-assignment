import { useState } from "react";
import DisassemblyContainer from "./disassembly-container/DisassemblyContainer";
import "./MainContainer.css";
import PartsList from "./parts-list/PartsList";
const MainContainer = ({ selectedId }) => {
  const [selectedPartIds, setSelectedPartIds] = useState([]);
  return (
    <div className="dashboard">
      <div className="selected-id">Electrolyzer Id : {selectedId}</div>
      <div className="selected-data">
        <PartsList
          setSelectedPartIds={setSelectedPartIds}
          selectedPartIds={selectedPartIds}
        />
        <DisassemblyContainer selectedId={selectedId} selectedPartIds={selectedPartIds} />
      </div>
    </div>
  );
};

export default MainContainer;
