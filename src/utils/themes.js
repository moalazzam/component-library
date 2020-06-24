import { neutral, blue, yellow, green, red } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryFont: primaryFont,
  textColor: neutral[600],
  textColorInverted: neutral[100],
  primaryColor: blue[300],
  primaryHoverColor: blue[200],
  primaryActiveColor: blue[100],
  textColorOnPrimary: neutral[100],
  disabledColor: neutral[400],
  textColorOnDisabled: neutral[300],
  status: {
    warningColor: yellow[100],
    warningHoverColor: yellow[200],
    warningActiveColor: yellow[300],
    errorColor: red[100],
    errorHoverColor: red[200],
    errorActiveColor: red[300],
    successColor: green[100],
    successHoverColor: green[200],
    successActiveColor: green[300],
  },
};

export const darkTheme = {
  primaryFont: primaryFont,
  textColor: blue[300],
  textColorInverted: neutral[100],
  primaryColor: neutral[100],
  primaryHoverColor: neutral[200],
  primaryActiveColor: neutral[300],
  textColorOnPrimary: blue[300],
  disabledColor: neutral[400],
  textColorOnDisabled: neutral[300],
  status: {
    warningColor: yellow[100],
    warningHoverColor: yellow[200],
    warningActiveColor: yellow[300],
    errorColor: red[100],
    errorHoverColor: red[200],
    errorActiveColor: red[300],
    successColor: green[100],
    successHoverColor: green[200],
    successActiveColor: green[300],
  },
};
