// React
import React from 'react';


// Custom Components
import AppContainer, { ChatContainer, UsersContainer } from './components/Container';
import MessageList from './components/MessageList';
import UserList from './components/UsersList';
import InputBox from './components/InputBox';



const AuthenticatedApp = ({
    users,
    messages,
    onSendMessage,
}) => (
        <AppContainer>
            <ChatContainer>
                <MessageList messages={messages} />
                <InputBox onSubmit={onSendMessage} />
            </ChatContainer>
            <UsersContainer>
                <UserList users={users} />
            </UsersContainer>
        </AppContainer>
    );



export default AuthenticatedApp;
