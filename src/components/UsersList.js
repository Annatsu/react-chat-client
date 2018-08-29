// React
import React from 'react';
import PropTypes from 'prop-types';


// Custom Components
import User from './User';



const UserList = ({
    users
}) => (
    <ul>
        {users.map((user, i) => (
            <li key={i}>
                <User name={user} />
            </li>
        ))}
    </ul>
);


UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.string)
};


UserList.defaultProps = {
    users: []
};



export default UserList;
