import * as SC from "./Button.styled";

export const Button = ({
    selected = false,
    type = "button",
    children,
    ...otherProps
}) => {
    return (
        <SC.Button
            selected={selected}
            type={type}
            {...otherProps}>
            {children}
        </SC.Button>
    );
};
