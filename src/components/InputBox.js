// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';



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
        return (
            <input
                type="text"
                ref={(elem) => this.inputRef = elem}
                onKeyUp={this.onKeyUp} />
        );
    }

}



export default InputBox;
