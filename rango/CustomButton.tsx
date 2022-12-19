import * as React from "react";

const CustomButton = React.forwardRef((props: CButton, ref: any)) => {
    const { label, icon, loading, className, children } = props;

    const color = [];

    return (<button
        >
            {icon && <Icon />}
            {label}
            {children}
        </button>)

}

export default CustomButton;