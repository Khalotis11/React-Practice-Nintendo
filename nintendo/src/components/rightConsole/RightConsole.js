import React from "react";
import "./rightConsole.css";

import { PlusSign } from "./PlusSign";
import { MainButton } from "./MainButton";
import { OperationButtons } from "./OperationButtons";
import { HomeButton } from "./HomeButton";

export const RightConsole = () => {
  return (
    <div className="right-constainer">
      <PlusSign />
      <OperationButtons />
      <OperationButtons />
      <MainButton />
      <HomeButton />
    </div>
  );
};
