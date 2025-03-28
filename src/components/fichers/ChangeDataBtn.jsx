import React, { useEffect } from "react";
import lefticon from "../../assets/images/icon-angle-left.svg";
import righticon from "../../assets/images/icon-angle-right.svg";

const ChangeDataBtn = (props) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowLeft") {
        props.next();
      } else if (event.key === "ArrowRight") {
        props.past();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  return (
    <div className="absolute bottom-0 right-0 md:left-0">
      <div className="w-28 bg-black flex  items-center justify-center">
        <div
          className="w-1/2 flex items-center justify-center p-3 hover:bg-darkgray cursor-pointer"
          onClick={props.next}
        >
          <img src={lefticon} alt="left" />
        </div>
        <div
          className="w-1/2 flex items-center justify-center p-3 hover:bg-darkgray cursor-pointer"
          onClick={props.past}
        >
          <img src={righticon} alt="right" />
        </div>
      </div>
    </div>
  );
};

export default ChangeDataBtn;
