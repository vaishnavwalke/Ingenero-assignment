import "./Idbox.css";
const Idbox = ({ id, handleIdSelect, selectedId }) => {
  return (
    <div
      onClick={() => handleIdSelect(id)}
      className={`box ${selectedId === id ? "selected" : ""}`}
    >
      {id}
    </div>
  );
};

export default Idbox;
