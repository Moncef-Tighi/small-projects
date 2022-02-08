import React, { useState } from 'react';
import AddUser from './components/AddUser';
import UsersList from './components/UsersList';

function App() {

  const [users, setUsers]=useState([]);
  const addUser= function(user) {
    setUsers( previous=> {
      return [...users, user];
    } )

  }

  return (
    <div>
        <AddUser onNewUser={addUser}/>
        <UsersList userList={users}/>
    </div>
  );
}

export default App;
