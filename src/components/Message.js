// React
import React from 'react';
import './Message.css';



const Message = ({
    className = '',
    children,
    ...rest
}) => (
    <li className={`chat-message ${className}`} {...rest}>
        {children}
    </li>
);



export default Message;
