import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{
          padding: "8px",
          background: "white",
          cursor: "pointer",
          border: "2px solid #000",
          position: "fixed",
          top: "16px",
          right: "16px",
        }}
        onClick={() => setUseDarkTheme(false)}
      >
        Default theme
      </button>
      <button
        style={{
          padding: "8px",
          background: "white",
          cursor: "pointer",
          border: "2px solid #000",
          position: "fixed",
          top: "16px",
          right: "180px",
        }}
        onClick={() => setUseDarkTheme(true)}
      >
        Dark theme
      </button>
      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <PrimaryButton modifiers={["large"]}>Mohammad</PrimaryButton>
        <SecondaryButton modifiers={["large"]}>Love</SecondaryButton>
        <TertiaryButton modifiers={["large"]}>Maryam</TertiaryButton>
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
