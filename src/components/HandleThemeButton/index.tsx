import React, { FC } from 'react'; 

interface Props {
  onClick: Function;
}

const HandleThemeButton:FC<Props> = ({onClick}) => {
  return (
    <button onClick={() => onClick()}>Change theme</button>
  )
}

export { HandleThemeButton };
