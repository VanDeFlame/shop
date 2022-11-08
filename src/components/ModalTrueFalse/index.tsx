import React, { FC } from 'react';
import './ModalTrueFalse.scss';

interface Props {
  msg: string;
  onAction?: Function;
  onClose?: Function;
}

const ModalTrueFalse:FC<Props> = ({ msg, onAction, onClose }) => {
  return (
    <div className='ModalTrueFalse'>
      <h3>{msg}</h3>
      <button onClick={() => onAction!()}>Accept</button>
      <button onClick={() => onClose!()}>Cancel</button>
    </div>
  )
}

export { ModalTrueFalse };
