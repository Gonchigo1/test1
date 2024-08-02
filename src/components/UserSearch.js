import React, { useState } from 'react';
import { getUserByName } from '../services/userService';

const UserSearch = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState(null);

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getUserByName(name).then(response => {
            setUser(response.data);
        }).catch(error => {
            console.error('Error fetching user:', error);
            setUser(null);
        });
    };
    return (
        <div>
            <h1>Search User by name</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={handleChange} />
                </div>
                <button type="submit">Search</button>
            </form>
            {user && (
                <div>
                    
                    <h2>User Details:</h2>
                    <p><b>Name: </b> {user.name}</p>
                    <p><b>Email: </b> Email: {user.email}</p>
                    <p><b>Description: </b>{user.description}</p>

                </div>
            
            )}
            {user === null && <p>User not found.</p>}
        </div>
    );
};

export default UserSearch;