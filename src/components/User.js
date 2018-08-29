// React
import React from 'react';
import PropTypes from 'prop-types';



const User = ({
    name
}) => (
    <p>{name}</p>
);


User.propTypes = {
    name: PropTypes.string.isRequired
};


User.defaultProps = {
    name: '',
};



export default User;
