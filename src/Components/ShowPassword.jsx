import React, { useState } from "react";

const ShowPassword = ({onChange}) => {
  const [show, setShow] = useState(false);

  const togglePassword = (state)=>{
    setShow(state)
    onChange(state)
  }
  return (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      {!show && (
        <div className="custom-radio" onClick={()=>togglePassword(true)}>
          <span className="custom-radio__box"></span>
          <span className="custom-radio__label">Show</span>
        </div>
      )}

      {show && (
        <div className="custom-radio" onClick={()=>togglePassword(false)}>
          <span className="custom-radio__box custom-radio__box--selected"></span>
          <span className="custom-radio__label">Hide</span>
        </div>
      )}
    </div>
  );
};

export default ShowPassword;
