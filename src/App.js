// React
import React, { Component } from 'react';


// Socket.io
import io from 'socket.io-client';


// Components
import AuthenticatedApp from './AuthenticatedApp';
import SignUp from './SignUp';


class App extends Component {

    constructor() {
        super();

        // Creates a Socket.io instance.
        this.socket = io();
        this.initListeners();

        this.state = {
            userAuthenticated: false,
            messages: [],
            users: [],
        };
    }

    initListeners() {
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
        this.socket.on('userConnected', ({ username }) => {
            this.setState((prevState) => ({
                users: prevState.users.concat(username)
            }));
        });


        // Setup a listener for users being disconnected
        this.socket.on('userDisconnected', ({ username }) => {
            this.setState((prevState) => ({
                users: prevState.users.filter((user) => user !== username)
            }));
        });


        // Setup a listener for when the user has been logged in
        this.socket.on('login', ({ users }) => {
            this.setState({
                users,
                userAuthenticated: true
            });
        });
    }


    sendMessage = (message) => {
        this.socket.emit('sendMessage', message);
    }


    render() {
        const { userAuthenticated, users, messages } = this.state;

        if (userAuthenticated)
            return (
                <AuthenticatedApp
                    socket={this.socket}
                    users={users}
                    messages={messages}
                    onSendMessage={this.sendMessage} />
            );
        else
            return <SignUp socket={this.socket} />
    }

}



export default App;
