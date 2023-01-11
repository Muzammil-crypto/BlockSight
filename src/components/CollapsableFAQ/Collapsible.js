import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import style from "./styles.module.scss";
export const Collapsible = ({ question, answer }) => {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };
  return (
    <div className={style.mainDiv}>
      <div className={style.questionDiv} onClick={toggle}>
        <div>
          <h4 className={style.question}>{question}</h4>
        </div>
        <div className={style.downArrow}>
          {open ? (
            <MdKeyboardArrowDown size={30} color={"#0364E1"} />
          ) : (
            <MdKeyboardArrowUp size={30} color={"#0364E1"} />
          )}
        </div>
      </div>
      {open && (
        <div className={style.answerDiv}>
          <p className={style.answer}>{answer}</p>
        </div>
      )}
    </div>
  );
};
