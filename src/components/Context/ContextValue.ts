import { ReactNode } from "react";

export interface ContextValue {
  toggleModal: boolean,
  setToggleModal: Function,
  modalComponent: ReactNode,
  setModalComponent: Function,
}