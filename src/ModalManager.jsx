import React from "react";

import ModalOne from "./components/common/modal-one/ModalOne";
import ModalTwo from "./components/common/modal-two/ModalTwo";
import ModalThree from "./components/common/modal-three/ModalThree";

const ModalManager = ({ closeFn = () => null, modal = "" }) => (
  <>
    <ModalOne closeFn={closeFn} open={modal === "modal-one"} />

    <ModalTwo closeFn={closeFn} open={modal === "modal-two"} />

    <ModalThree closeFn={closeFn} open={modal === "modal-three"} />
  </>
);

export default ModalManager;
