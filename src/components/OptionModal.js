import React from "react";
import ReactModal from "react-modal";

const OptionModal = (props) => {
  // ReactModal.setAppElement(el)
  return (
    <ReactModal
      onRequestClose={ props.handleClearIsSelected }
      isOpen={ !!props.isSelected }
      contentLabel="Selected Option"
      appElement={document.getElementById('app')}
    >
      <h3>The Option that was selected!</h3>
      { props.isSelected && <p>{ props.isSelected }</p> }
      <button  onClick={props.handleClearIsSelected} >Let's do it!</button>
    </ReactModal>
  )
}

export default OptionModal;