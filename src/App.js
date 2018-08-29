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
        this.socket = io();


        // Setup a socket listener for incoming messages
        this.socket.on('newMessage', (msg) => {
            this.setState((prevState) => ({
                messages: prevState.messages.concat({
                    user: msg.user,
                    content: msg.body,
                })
            }));
        });

        // Setup a listener for users being connected
        this.socket.on('userConnected', (username) => {
            this.setState((prevState) => ({
                users: prevState.users.concat(username)
            }));
        });

        // Setup a listener for users being disconnected
        this.socket.on('userDisconnected', (username) => {
            this.setState((prevState) => ({
                users: prevState.users.filter((user) => user !== username)
            }));
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
