import React from 'react';
import './HandleThemeButton.scss';

interface Props {
  onClick: Function;
}

function HandleThemeButton({onClick}: Props) {
  return (
    <button onClick={() => onClick()}>Change theme</button>
  )
}

export default HandleThemeButton;
