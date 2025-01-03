import "./AccContent.css";

const AccContent = ({ show }) => {
  console.log(show);

  return (
    <div className="acc-content" style={{ display: show ? "block" : "none" }}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta corporis
      sit repellat esse possimus a impedit tenetur deleniti et, rerum obcaecati
      eveniet enim itaque illum mollitia. Iure nobis ut voluptate!
    </div>
  );
};

export default AccContent;
