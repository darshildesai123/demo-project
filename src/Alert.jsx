import React from "react";
import { FaTimes } from "react-icons/fa";

function Alert({ show, onClose }) {
  return (
    <>
      {show && (
        <div className="box">
          <h2>Login Successfully </h2>

          <div className="icons">
            <FaTimes onClick={onClose} />
          </div>
        </div>
      )}

      {/* <button>submit</button> */}
    </>
  );
}

export default Alert;
