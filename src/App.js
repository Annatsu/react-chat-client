// React
import React, { Component } from 'react';

// Socket.io
import io from 'socket.io-client';


// Custom Components



class App extends Component {

    componentDidMount() {
        // Creates an Socket.io instance.
        const socket = io();
    }


    render() {
        return (
            <div>My App</div>
        );
    }

}



export default App;
