import React, { useRef, useContext } from "react";
import { useSpring, animated, config } from "react-spring";
import { Button } from "reactstrap";
import useOutsideClick from "./UseOutsideClick";
import ModalContext from "./ModalContext";
import "./Modal.scss";

const Modal = () => {
  const { open, isOpen, title, content, buttonText } = useContext(ModalContext);

  const ref = useRef<HTMLInputElement>(null);
  useOutsideClick(ref, () => {
    if (isOpen) {
      open(false);
    }
  });

  const style = useSpring({
    transform: isOpen ? " translate3d(0,0px,0)" : "translate3d(0,-1300px,0)",
    // background: isOpen ? "white" : "#007bff",
    margin: isOpen ? "0 0" : "350px 0",
    color: isOpen ? "black" : "white",
    config: config.wobbly
  });

  return (
    <>
      <animated.div style={style} className="modal-wrapper" ref={ref}>
        <div className="modal-card">
          <i
            className="far fa-times-circle fa-2x"
            onClick={() => {
              open(false);
            }}
          ></i>
          <h3>{title}</h3>
          <p>{content}</p>
          <Button
            color="primary"
            className="acceptButton"
            onClick={() => {
              open(false);
            }}
          >
            {buttonText}
          </Button>
        </div>
      </animated.div>
    </>
  );
};

export default Modal;
