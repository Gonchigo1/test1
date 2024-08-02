import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../services/userService';
import { useNavigate } from 'react-router-dom';
import "./UserList.css"


const UserList = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getUsers().then(response => {
            setUsers(response.data);
        }).catch(error => {
            console.error('Error fetching users:', error);
        });
    }, []);
    
    const handleEdit = (id) => {
        navigate(`/edit/${id}`); 
    };

    const handleDelete = (id) => {
        deleteUser(id)
            .then(() => {
                setUsers(users.filter(user => user.id !== id));
            })
            .catch(error => {
                console.error('Error deleting user:', error);
            });
    };

    const handleCreate = () => {
        navigate('/create'); 
    };

    
    
    return (
        <div>
            <h1>Users :</h1>
        <div>

          

                
        <button onClick={handleCreate}>Create New User</button> 

        </div>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <b>Name :</b>{user.name} 
                        <div>
                        </div>
                        <b>Email :</b> {user.email}
                        <div>
                        </div>
                        <b>Description :</b>{user.description} 
                        <div>
                        <button onClick={() => handleEdit(user.id)}>Edit</button>
                        <button className='delete'  onClick={() => handleDelete(user.id)}>Delete</button>
                  
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
