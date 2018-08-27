// React
import React from 'react';
import PropTypes from 'prop-types';
import './MessageContainer.css';



const MessageContainer = ({
    username,
    className = '',
    children,
    ...rest
}) => (
        <div className={`message-container ${className}`} {...rest}>
            <h4>{username}</h4>
            <ul>
                {children}
            </ul>
        </div>
    );


MessageContainer.propTypes = {
    username: PropTypes.string.isRequired,
};



export default MessageContainer;
