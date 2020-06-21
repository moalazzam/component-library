import styled from "styled-components";
import { defaultTheme } from "../utils";
import { typeScale } from "../utils";

const Button = styled.button`
  padding: 8px 12px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${defaultTheme.primaryFont};
  transition: background-color 0.2s linear, color 0.2s linear,
    border 0.2s linear;

  &:hover {
    background-color: ${defaultTheme.primaryHoverColor};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${defaultTheme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${defaultTheme.primaryActiveColor};
    border-color: ${defaultTheme.primaryActiveColor};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:disabled {
    cursor: not-allowed;
    background: none;
    border: none;
    color: ${defaultTheme.disabledColor};
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  border: 2px solid transparent;
  color: ${defaultTheme.textColorOnPrimary};

  &:disabled {
    background-color: ${defaultTheme.disabledColor};
    border-color: ${defaultTheme.disabledColor};
    color: ${defaultTheme.textColorOnDisabled};
  }
`;

export const SecondaryButton = styled(Button)`
  border: 2px solid ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};

  &:disabled {
    border: 2px solid ${defaultTheme.disabledColor};
  }
`;

export const TertiaryButton = styled(Button)`
  border: 2px solid transparent;
  color: ${defaultTheme.disabledColor};
`;
