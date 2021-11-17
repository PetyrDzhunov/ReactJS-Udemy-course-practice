import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {

    const [users, setUsers] = useState([]);

    const addUserHandler = (name, age) => {
        const newUser = { name, age, id: Math.random().toString() };
        setUsers((prevUsers) => [...prevUsers, newUser]);
    };

    return (
        <div>
            <AddUser onAddUser={addUserHandler} />
            <UsersList users={users} />
        </div>
    );
}

export default App;
