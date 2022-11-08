import React, { ReactElement, useContext } from "react";
import { ShopContext } from "@components/Context";

function useModal() {
  const { setToggleModal, setModalComponent } = useContext(ShopContext);

  const openModal = (children: ReactElement, callback: Function) => {
    const modalChildren = React.cloneElement(
      children,
      {
        onAction: (...arg: any) => { callback(...arg); closeModal(); },
        onClose: closeModal
      }
    )
    setToggleModal(true);
    setModalComponent(modalChildren)
  }

  const closeModal = () => {
    setTimeout(() => setToggleModal(false), 500)
  }

  return {
    openModal,
    closeModal
  }
}

export { useModal };