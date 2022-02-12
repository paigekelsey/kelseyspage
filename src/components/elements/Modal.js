import React from "react";



function Modal(props) {
  const { showing, closeModal } = props;

  return (
    <>
    <div className={showing ? "overlaying" : "hiding"} onClick={closeModal} />
      <div className={showing ? "modaling" : "hiding"}>
        <button onClick={closeModal}>X</button>
        <h1>Modal heading</h1>
        <p>This is modal content</p>
      </div>
    </>
  );
}

export default Modal;