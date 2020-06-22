import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { typeScale } from "../utils";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,

  large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
  `,

  warning: () => `
    background: none;
    color: ${(props) => props.theme.status.warningColor};
    &:hover, &:focus {
      background-color: ${(props) => props.theme.status.warningHoverColor};
      outline: 3px solid ${(props) => props.theme.status.warningHoverColor};
      outline-offset: 2px;
      border: 2px solid transparent;
    }

    &:active {
      background-color: ${(props) => props.theme.status.warningActiveColor};
    }
  `,

  primaryButtonWarning: () => `
    background-color: ${(props) => props.theme.status.warningColor};
    color: ${(props) => props.theme.textColorInverted};
  `,

  secondaryButtonWarning: () => `
    border: 2px solid ${(props) => props.theme.status.warningColor};
  `,

  error: () => `
    background: none;
    color: ${(props) => props.theme.status.errorColor};
    &:hover, &:focus {
      background-color: ${(props) => props.theme.status.errorHoverColor};
      outline: 3px solid ${(props) => props.theme.status.errorHoverColor};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${(props) => props.theme.status.errorActiveColor};
    }
  `,

  primaryButtonError: () => `
    background-color: ${(props) => props.theme.status.errorColor};
    color: ${(props) => props.theme.textColorInverted};
  `,

  secondaryButtonError: () => `
    border: 2px solid ${(props) => props.theme.status.warningColor};
  `,

  success: () => `
    background: none;
    color: ${(props) => props.theme.status.successColor};
    &:hover, &:focus {
      background-color: ${(props) => props.theme.status.successHoverColor};
      outline: 3px solid ${(props) => props.theme.status.successHoverColor};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${(props) => props.theme.status.successActiveColor};
    }
  `,

  primaryButtonSuccess: () => `
    background-color: ${(props) => props.theme.status.successColor};
    color: ${(props) => props.theme.textColorInverted};
  `,

  secondaryButtonSuccess: () => `
    border: 2px solid ${(props) => props.theme.status.warningColor};
  `,
};

const Button = styled.button`
  padding: 8px 12px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${(props) => props.theme.primaryFont};
  transition: background-color 0.2s linear, color 0.2s linear,
    border 0.2s linear;

  &:hover {
    background-color: ${(props) => props.theme.primaryHoverColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${(props) => props.theme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${(props) => props.theme.primaryActiveColor};
    border-color: ${(props) => props.theme.primaryActiveColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }

  &:disabled {
    cursor: not-allowed;
    background: none;
    border: none;
    color: ${(props) => props.theme.disabledColor};
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  border: 2px solid transparent;
  color: ${(props) => props.theme.textColorOnPrimary};

  &:disabled {
    background-color: ${(props) => props.theme.disabledColor};
    border-color: ${(props) => props.theme.disabledColor};
    color: ${(props) => props.theme.textColorOnDisabled};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  background: none;
  border: 2px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.primaryColor};

  &:disabled {
    border: 2px solid ${(props) => props.theme.disabledColor};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  background: none;
  border: 2px solid transparent;
  color: ${(props) => props.theme.primaryColor};

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
