import React from 'react';
import './ModalTrueFalse.scss';

interface Props {
  msg: string;
  onAction?: Function;
  onClose?: Function;
}

function ModalTrueFalse({ msg, onAction, onClose }: Props) {
  return (
    <div className='ModalTrueFalse'>
      <h3>{msg}</h3>
      <button onClick={() => onAction!()}>Accept</button>
      <button onClick={() => onClose!()}>Cancel</button>
    </div>
  )
}

export default ModalTrueFalse;
