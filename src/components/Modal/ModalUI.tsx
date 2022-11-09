import React from "react";
import { useModal } from "@hooks/useModal";
import './Modal.scss';
import { ShopContext } from "@components/Context";

function ModalUI() {
  const { modalComponent } = React.useContext(ShopContext);
  const { closeModal } = useModal();

  return (
    <React.Fragment>
      <div className='Modal--background'/>
      <div className='Modal--container'>
        <button className='Modal--toggleButton' onClick={closeModal}>x</button>
        { modalComponent }
      </div>
    </React.Fragment>
  )
}

export default ModalUI;