// React
import React, { Component } from 'react';


class SignUp extends Component {

    state = {
        error: null
    }

    componentDidMount() {
        const { socket } = this.props;

        socket.on('invalidUsername', ({ username }) => {
            this.setState({
                error: `${username} is either invalid or is taken.`
            });
        });
    }

    componentWillUnmount() {
        const { socket } = this.props;

        socket.off('invalidUsername');
    }


    onKeyUp = (e) => {
        const username = this.inputRef.value;
        if (e.key === 'Enter' && username !== '')
            this.props.socket.emit('newUser', username);
    }


    render() {
        const { error } = this.state;

        return (
            <div style={{}}>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <input
                    type="text"
                    ref={(elem) => this.inputRef = elem}
                    style={{}}
                    onKeyUp={this.onKeyUp} />
            </div>
        );
    }

}



export default SignUp;
