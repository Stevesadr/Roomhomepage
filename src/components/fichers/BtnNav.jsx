import React from "react";

const BtnNav = (props) => {
  return (
    <div className="font-secondfont relative w-fit cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-white after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
      {props.children}
    </div>
  );
};

export default BtnNav;
