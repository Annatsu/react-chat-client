// React
import React from 'react';
import './Container.css';


const AppContainer = ({
    className = '',
    children,
    ...rest
}) => (
    <div className={`app-container ${className}`} {...rest}>
        {children}
    </div>
);


const ChatContainer = ({
    className = '',
    children,
    ...rest
}) => (
    <div className={`chat-container ${className}`} {...rest}>
        {children}
    </div>
);



const UsersContainer = ({
    className = '',
    children,
    ...rest
}) => (
    <div className={`users-container ${className}`} {...rest}>
        {children}
    </div>
);



export default AppContainer;
export { ChatContainer, UsersContainer };
