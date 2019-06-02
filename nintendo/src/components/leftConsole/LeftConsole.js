import React from "react";
import "./leftConsole.css";

import { MinusSign } from "./MinusSign";
import { MainButton } from "./MainButton";
import { OperationButtons } from "./OperationButtons";
import { SquareButton } from "./SquareButton";

export const LeftConsole = () => {
  return (
    <div className="left-constainer">
      <MinusSign />
      <MainButton />
      <OperationButtons />
      <OperationButtons />
      <SquareButton />
    </div>
  );
};
