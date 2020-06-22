import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./utils";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";

const App = () => (
  <div>
    <PrimaryButton modifiers={["small", "success", "primaryButtonSuccess"]}>
      Hello world
    </PrimaryButton>
    <SecondaryButton modifiers={["large", "warning", "secondaryButtonWarning"]}>
      Goodbye world
    </SecondaryButton>
    <TertiaryButton modifiers={["error", "tertiaryButtonError"]}>
      Hey world
    </TertiaryButton>
    <GlobalStyle />
  </div>
);

ReactDOM.render(<App />, document.querySelector("#root"));
