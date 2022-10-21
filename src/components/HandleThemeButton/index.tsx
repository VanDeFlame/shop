import React, { FC } from 'react';
import './HandleThemeButton.scss';

interface Props {
  onClick: Function;
}

const HandleThemeButton:FC<Props> = ({onClick}) => {
  return (
    <button onClick={() => onClick()}>Change theme</button>
  )
}

export { HandleThemeButton };
