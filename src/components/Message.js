// React
import React from 'react';
import PropTypes from 'prop-types';
import './Message.css';



const Message = ({
    className = '',
    owner,
    content,
    ...rest
}) => (
    <div className={`chat-message ${className}`} {...rest}>
        <h4>{owner}</h4>
        <p>{content}</p>
    </div>
);


Message.propTypes = {
    owner: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};



export default Message;
