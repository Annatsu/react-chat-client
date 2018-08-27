// React
import React, { Component } from 'react';

// Socket.io
import io from 'socket.io-client';


// Custom Components
import MessageContainer from './components/MessageContainer';
import Message from './components/Message';



class App extends Component {

    state = {
        messages: [
            { user: 'Annatsu', content: 'Hello guys!' },
            { user: 'Qu4dr4tus', content: 'Hi, howza goin?' },
            { user: 'Hipnode', content: 'typing...' }
        ]
    }


    componentDidMount() {
        // Creates an Socket.io instance.
        const socket = io();


        // Setups a socket listener for new messages
        socket.on('newMessage', (msg) => {
            alert('msg' + msg)
        });
    }


    render() {
        const { messages } = this.state;

        return (
            <div>
                {messages.map((msg, i) => (
                    <MessageContainer key={i} username={msg.user}>
                        <Message>{msg.content}</Message>
                    </MessageContainer>
                ))}
            </div>
        );
    }

}



export default App;
