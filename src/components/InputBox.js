// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './InputBox.css';



class InputBox extends Component {

    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    };


    onKeyUp = (e) => {
        if (e.key === 'Enter' && this.inputRef.value !== '') {
            this.props.onSubmit(this.inputRef.value);
            this.inputRef.value = '';
        }
    }


    render() {
        const {
            children,
            className = '',
            ...rest
        } = this.props;

        return (
            <input
                type="text"
                className={`chat-input-box ${className}`}
                ref={(elem) => this.inputRef = elem}
                onKeyUp={this.onKeyUp}
                {...rest} />
        );
    }

}



export default InputBox;
