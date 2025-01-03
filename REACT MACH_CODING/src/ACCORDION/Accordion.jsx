import { useState } from "react";
import AccContent from "./AccContent";
import AccTitle from "./AccTitle";

const Accordion = ({ num }) => {
  const [active, setActive] = useState(new Array(num).fill(false));

  function handleClick(i) {
    const newArr = [...active];
    for (let j = 0; j < newArr.length; j++) {
      if (j != i && newArr[j]) {
        newArr[j] = false;
      }
    }
    newArr[i] = !newArr[i];
    setActive(newArr);
  }

  return (
    <div style={{ width: "30%" }}>
      {active.map((show, i) => {
        return (
          <>
            <div style={{ border: "solid red 2px" }}>
              <AccTitle
                handleClick={() => {
                  handleClick(i);
                }}
              />
              <AccContent show={show} />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Accordion;
