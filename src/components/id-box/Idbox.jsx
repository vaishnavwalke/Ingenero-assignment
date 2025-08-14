import "./Idbox.css";
const Idbox = ({ id, handleIdSelect, selectedId, isSelected, isDisabled }) => {
  return (
    <div
      onClick={() => handleIdSelect(id)}
      className={`box ${selectedId === id || isSelected ? "selected" : ""} ${
        selectedId === id && isDisabled ? "disabled" : ""
      }`}
    >
      {id}
    </div>
  );
};

export default Idbox;
