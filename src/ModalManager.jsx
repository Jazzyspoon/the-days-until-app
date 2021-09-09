import React from "react";

import XmasModal from "./components/ChristmasModal/ChristmasModal";
import NewYearsDayModal from "./components/NewYearsDayModal/NYDayModal";
import EasterModal from "./components/EasterModal/EasterModal";

const ModalManager = ({ closeFn = () => null, modal = "" }) => (
  <div>
    <NewYearsDayModal closeFn={closeFn} open={modal === "modal-one"} />

    <XmasModal closeFn={closeFn} open={modal === "modal-two"} />

    <EasterModal closeFn={closeFn} open={modal === "modal-three"} />
  </div>
);

export default ModalManager;
