import { NavLink } from 'react-router-dom';
import './button.css'

const Button = (props) => {

    const { children, onClick, className, width, height, to, variant, type, disabled } = props;

    return (
        to ? <NavLink
            to={to}
            variant={variant}
            className={variant ? `defaultLink
             ${variant === "ghost" ? className ? className : '' + " ghost" : "" ||
                    variant === "registr" ? className ? className : '' + " registr" : ""}`

                : "defaultLink"}
        >
            {children}
        </NavLink>
            :
            <button
                type={type ? type : "button"}
                onClick={onClick}
                style={{ width, height }}
                variant={variant}
                className={variant ? `defaultBtn  
                ${variant === "primary" ? className ? className : '' + " primary" : "" ||
                        variant === "outlin" ? className ? className : '' + " outlin" : ""}`

                    : "defaultBtn"}
                    
                disabled={disabled}
            >
                {children}
            </button>
    )
}

export default Button;