import React, { useState } from "react";
import "./SideBar.css";
import { CiSearch } from "react-icons/ci";
import { electrolyzer_ids } from "../../data.js";
import Idbox from "../id-box/Idbox";

const SideBar = ({handleIdSelect}) => {
  const [searchedId, setSearchId] = useState("");
  const [ids, setIds] = useState(electrolyzer_ids);
  const handleChange = (e) => {
    setSearchId(e.target.value);
  };
  return (
    <div className="sidebar">
      <div>Available Electrolyte IDs</div>
      <div className="input-box">
        <CiSearch />
        <input
          type="text"
          value={searchedId}
          onChange={handleChange}
          placeholder="Search Electrolyte ID"
        />
      </div>
      <div className='result-ids'>
        {ids
          ?.filter((id) =>
            id.toString().includes(searchedId.toString())
          )
          .map((id, index) => (
            <Idbox onClick={()=>handleIdSelect(id)} key={index} id={id} />
          ))}
      </div>
    </div>
  );
};

export default SideBar;
