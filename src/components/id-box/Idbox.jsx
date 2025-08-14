import "./Idbox.css";
const Idbox = ({ id, handleIdSelect, selectedId, isSelected }) => {
  return (
    <div
      onClick={() => handleIdSelect(id)}
      className={`box ${selectedId === id || isSelected ? "selected" : ""}`}
    >
      {id}
    </div>
  );
};

export default Idbox;
