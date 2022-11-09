import * as SC from "components/Button/Button.styled";
import css from "components/Button/Button.module.css";
import clsx from 'clsx';


export const Button = ({
    selected = false,
    type = "button",
    children,
    ...otherProps
}) => {
    return (
        <SC.Button 
            className={clsx(css.btn, {
                [css.isSelected]: selected
            })}
            type={type}
            {...otherProps}>
            {children}
        </SC.Button>
    );
};
