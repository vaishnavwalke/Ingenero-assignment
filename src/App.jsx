import "./App.css";
import Container from "./components/container/Container";
import Header from "./components/header/Header";
import "./index.css";
import React from "react";

function App() {
  return (
    <div className="main-container">
      <Header />
      <div className="title">Disassembly Electrolyzer</div>
      <Container />
    </div>
  );
}

export default App;
