import React from 'react';
import UserList from './UserList';
import UserSearch from './UserSearch';

const HomePage = () => {
    return (
        <div>
            <UserSearch />
            <UserList />
        </div>
    );
};

export default HomePage;
