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
    <PrimaryButton>Hello world</PrimaryButton>
    <SecondaryButton>Goodbye world</SecondaryButton>
    <TertiaryButton>Hey world</TertiaryButton>
    <GlobalStyle />
  </div>
);

ReactDOM.render(<App />, document.querySelector("#root"));
