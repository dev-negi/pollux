import * as React from "react";
import clsx from "clsx";

import "./CustomButton.css";
import Icon from "../Icon/Icon";
import CButton from "../interfaces/customButton.interface";

const CustomButton = React.forwardRef((props: CButton, ref: any) => {
  const {
    id,
    type,
    icon,
    label,
    loading,
    primary,
    onClick,
    className,
    disabled,
    secondary,
    children,
    ...other
  } = props;

  const color = [primary && "primary", secondary && "secondary"].filter(
    Boolean
  )[0];
  const classes = clsx("custom-button", color || "primary", className);
  return (
    <button
      {...other}
      type={type || "button"}
      disabled={loading || disabled}
      className={classes}
      ref={ref}
    >
      {icon && <Icon />}
      {label}
      {children}
    </button>
  );
});

export default CustomButton;
