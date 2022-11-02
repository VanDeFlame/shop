import React, { FC, MouseEventHandler, ReactNode, ReactPortal } from "react";
import { createPortal } from "react-dom";
import './Modal.scss';

interface Props {
  children: ReactNode;
  onClose: MouseEventHandler<HTMLButtonElement>;
}

const Modal:FC<Props> = ({children, onClose}): ReactPortal => {
  const modal = document.getElementById('modal') as HTMLElement;
  
  return createPortal(
    <React.Fragment>
      <div className='Modal--background' />
      <div className='Modal--container'>
        <button className='Modal--toggleButton' onClick={onClose}>x</button>
        {children}
      </div>
    </React.Fragment>,

    modal
  )
}

export { Modal };
