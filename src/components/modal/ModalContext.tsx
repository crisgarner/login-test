import { createContext, Dispatch } from "react";

interface ModalContextInterface {
  isOpen: boolean;
  open: Dispatch<boolean>;
  title: string;
  setTitle: Dispatch<string>;
  content: string;
  setContent: Dispatch<string>;
  buttonText: string;
  setButtonText: Dispatch<string>;
}

const ModalContext = createContext<ModalContextInterface>({
  isOpen: false,
  open: () => {},
  title: "",
  setTitle: () => {},
  content: "",
  setContent: () => {},
  buttonText: "",
  setButtonText: () => {}
});

export const ModalProvider = ModalContext.Provider;
export const ModalConsumer = ModalContext.Consumer;
export default ModalContext;
