import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button as ReactButton } from "react-bootstrap";

const StyledButton = styled(ReactButton)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-family-sans-serif);
  font-weight: 600;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 4px;
  transition: all 0.5s ease-in-out;
  position: relative;
  &:hover {
    opacity: 0.82;
    outline: none;
  }
  &:focus {
    outline: none;
  }
  &.btn-secondary {
    background: transparent;
    border: 1px solid transparent;
    color: var(--primary);
    &:hover {
      border-color: transparent;
      color: (--white);
    }
  }
  &.btn-link {
    background: transparent;
    color: var(--primary);
    &:hover {
      background: var(--primary) !important;
      color: var(--white) !important;
    }
  }
`;

const Button = (props) => {
  return (
    <StyledButton {...props}>
      {props.iconPosition && props.iconPosition === "left" && props.withIcon && props.text ? (
        <i className="material-icons mr-1">{props.iconName}</i>
      ) : (
        ""
      )}
      {props.text && props.text}
      {props.iconPosition && props.iconPosition === "right" && props.withIcon && props.text ? (
        <i className="material-icons ml-1">{props.iconName}</i>
      ) : (
        ""
      )}
      {!props.iconPosition && props.withIcon && !props.text ? (
        <i className="material-icons">{props.iconName}</i>
      ) : (
        ""
      )}
    </StyledButton>
  );
};

Button.propTypes = {
  /** * no need to set for left position */
  iconPosition: PropTypes.oneOf(["left", "right"]),

  /** * set it true to show button icon */
  withIcon: PropTypes.bool,

  /** * If withIcon is true then add material icon name */
  iconName: PropTypes.oneOf(["add", "arrow_right_alt", "keyboard_arrow_right"]),

  /** * Button label' */
  text: PropTypes.string.isRequired,

  /** * Button Variant' */
  variant: PropTypes.oneOf(["primary", "secondary", "link"]),
};

Button.defaultProps = {
  iconPosition: "left",
  withIcon: false,
  text: "Primary",
  iconName: "add",
};
export default Button;
