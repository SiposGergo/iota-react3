import React from "react";
import Logo from './facebook.svg'


export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.buttonRef = React.createRef();
    }

    componentDidMount() {
        if (this.props.id === 1)
            this.buttonRef.current?.focus();
    }

    render() {
        const { children, hidden, text, startIcon, endIcon, disabled } = this.props;
        return hidden ? null :
            <button
                disabled={disabled}
                ref={this.buttonRef}
                className={`btn ${disabled ? "disabled" : ''}`}
            >
                {startIcon && <img src={Logo} alt="icon" />}
                <span>{text ?? children}</span>
                {endIcon && <img src={Logo} alt="icon" />}
            </button >
    }
}
