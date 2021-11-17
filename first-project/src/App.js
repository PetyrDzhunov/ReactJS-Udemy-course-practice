import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {

    const [users, setUsers] = useState([]);

    const onAddUserHandler = (name, age) => {
        const newUser = { name, age };
        setUsers([...users, newUser]);
    };

    return (
        <div>
            <AddUser onAddUser={onAddUserHandler} />
            <UsersList users={users} />
        </div>
    );
}

export default App;
