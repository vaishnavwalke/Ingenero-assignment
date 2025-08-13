import React,{useState} from "react";
import "./Container.css";
import SideBar from "../side-bar/SideBar";
import MainContainer from "../main-container/MainContainer";
const Container = () => {
    const [selectedId, setSelectedId]= useState('');
    const handleIdSelect=(id)={
        setSelectedId(id);
    }
  return (
    <div className="container">
      <SideBar handleIdSelect={handleIdSelect} />
      <MainContainer selectedId={selectedId}/>
    </div>
  );
};

export default Container;
