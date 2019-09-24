import React, { useState, useRef } from "react";
import { useSpring, animated, config } from "react-spring";
import { Button } from "reactstrap";
import useOutsideClick from "./UseOutsideClick";
import "./ModalButton.scss";

const ModalButton = (props: any) => {
  const { open, isOpen } = props;
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
          <i className="far fa-times-circle fa-2x"></i>
          <h3>Modal Title</h3>
          <p>Modal text</p>
          <Button color="primary">Buton 1</Button>
          <Button color="danger">Buton 2</Button>
        </div>
      </animated.div>
    </>
  );
};

export default ModalButton;
