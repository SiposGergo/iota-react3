import React from "react";
import Logo from './facebook.svg'


export default class Button extends React.Component {
    state = { clickCount: 0 }

    onButtonClicked = () => {
        // this.setState({ clickCount: this.state.clickCount + 1 })
        this.setState((state) => ({ clickCount: state.clickCount + 1 }))
    }

    render() {
        const { children, hidden, text, startIcon, endIcon, disabled } = this.props;
        return hidden ? null :
            <button
                onClick={this.onButtonClicked}
                disabled={disabled}
                className={`btn ${disabled ? "disabled" : ''}`}
            >
                {startIcon && <img src={Logo} alt="icon" />}
                <span>{text ?? children} -{this.state.clickCount}</span>
                {endIcon && <img src={Logo} alt="icon" />}
            </button>
    }
}
