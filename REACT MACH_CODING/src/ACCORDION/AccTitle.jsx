import "./AccTitle.css";

const AccTitle = ({ handleClick }) => {
  return (
    <div className="acctitle">
      <h3>Title Goes Here....</h3>
      <span onClick={handleClick} style={{ cursor: "pointer" }}>
        ⬇️
      </span>
    </div>
  );
};

export default AccTitle;
