// React
import React, { Component } from 'react';

// Socket.io
import io from 'socket.io-client';


// Custom Components
import AppContainer, { ChatContainer, UsersContainer } from './components/Container';
import MessageList from './components/MessageList';



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
            <AppContainer>
                <ChatContainer>
                    <MessageList messages={messages} />
                </ChatContainer>
                <UsersContainer>

                </UsersContainer>
            </AppContainer>
        );
    }

}



export default App;
