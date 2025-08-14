import { useState } from "react";
import DisassemblyContainer from "./disassembly-container/DisassemblyContainer";
import "./MainContainer.css";
import PartsList from "./parts-list/PartsList";
const MainContainer = ({ selectedId }) => {
  const [selectedPartIds, setSelectedPartIds] = useState([]);
  const [isReadyToRepair, setIsReadyToRepair] = useState(false);
  const [isReadyToAssemble, setIsReadyToAssemble] = useState(false);
  const [selectedChecklist, setSelectedChecklist] = useState([]);
  return (
    <div className="dashboard">
      <div className="selected-id">Electrolyzer Id : {selectedId}</div>
      <div className="selected-data">
        <PartsList
          setSelectedPartIds={setSelectedPartIds}
          selectedPartIds={selectedPartIds}
          isReadyToRepair={isReadyToRepair}
          isReadyToAssemble={isReadyToAssemble}
          selectedChecklist={selectedChecklist}
        />
        <DisassemblyContainer
          selectedChecklist={selectedChecklist}
          setSelectedChecklist={setSelectedChecklist}
          isReadyToRepair={isReadyToRepair}
          isReadyToAssemble={isReadyToAssemble}
          setIsReadyToAssemble={setIsReadyToAssemble}
          setIsReadyToRepair={setIsReadyToRepair}
          selectedId={selectedId}
          selectedPartIds={selectedPartIds}
        />
      </div>
    </div>
  );
};

export default MainContainer;
