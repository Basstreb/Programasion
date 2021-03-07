import React from 'react';

class Button extends React.Component {
    state = {
        count: 0,
    }
    handleClick = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }
    handleClickRes = () => {
        this.setState({
            count: this.state.count - 1,
        })
    }
    render() {
        const { count } = this.state;
        return (
            <div>
                <h1>
                    Has hecho click {count} veces
                </h1>
                <button type="button" onClick={this.handleClick}>
                    Aumentar
                </button>
                <button type="button" onClick={this.handleClickRes}>
                    Disminutir
                </button>
            </div>
        )
    }
}

{/*const Button = props => {
    const { text, text2, algo } = props;
    return (
        <div>
            <button type="button">{props.text}</button>
            <button type="button">{text}</button>
            <button type="button">{text2}</button>
            <button type="button">{algo}</button>
        </div>
    )
}*/}

export default Button;
