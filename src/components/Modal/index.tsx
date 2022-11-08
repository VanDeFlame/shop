import React, { FC, ReactNode, ReactPortal } from "react";
import { createPortal } from "react-dom";
import { useModal } from "@hooks/useModal";
import './Modal.scss';
import { ShopContext } from "@components/Context";

const Modal:FC = (): ReactPortal => {
  const modal = document.getElementById('modal') as HTMLElement;
  const { modalComponent, toggleModal } = React.useContext(ShopContext);
  const { closeModal } = useModal();

  return createPortal(
    toggleModal &&
    <React.Fragment>
      <div className='Modal--background'/>
      <div className='Modal--container'>
        <button className='Modal--toggleButton' onClick={closeModal}>x</button>
        { modalComponent }
      </div>
    </React.Fragment>,

    modal
  )
}

export { Modal };
