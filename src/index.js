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
    <PrimaryButton disabled>Hello world</PrimaryButton>
    <SecondaryButton disabled>Goodbye world</SecondaryButton>
    <TertiaryButton disabled>Hey world</TertiaryButton>
    <GlobalStyle />
  </div>
);

ReactDOM.render(<App />, document.querySelector("#root"));
