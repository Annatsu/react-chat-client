// React
import React, { Component } from 'react';

// Socket.io
import io from 'socket.io-client';


// Custom Components
import AppContainer, { ChatContainer, UsersContainer } from './components/Container';
import MessageList from './components/MessageList';
import UserList from './components/UsersList';



class App extends Component {

    state = {
        messages: [],
        users: []
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
        const { messages, users } = this.state;

        return (
            <AppContainer>
                <ChatContainer>
                    <MessageList messages={messages} />
                </ChatContainer>
                <UsersContainer>
                    <UserList users={users} />
                </UsersContainer>
            </AppContainer>
        );
    }

}



export default App;
