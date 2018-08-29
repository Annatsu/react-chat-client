// React
import React from 'react';
import PropTypes from 'prop-types';


// Custom Components
import Message from './Message';



const MessageList = ({
    messages,
    className = '',
    ...rest
}) => (
        <ul className={`message-list ${className}`} {...rest}>
            {messages.map((msg, i) => (
                <li key={i}>
                    <Message
                        owner={msg.user}
                        content={msg.content} />
                </li>
            ))}
        </ul>
    );


MessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        user: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
    }))
};


MessageList.defaultProps = {
    messages: []
};



export default MessageList;
