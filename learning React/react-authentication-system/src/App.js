import React, { useState } from 'react';
import AddUser from './components/AddUser';
import UsersList from './components/UsersList';
import ErrorModal from './components/Error.modal';
import Wrapper from './components/Helpers/Wrapper';

function App() {

  const [users, setUsers]=useState([]);
  const [errors, setError]=useState('');

  const addUser= function(user) {
    if (!user.name.trim() || !user.age ) {
      return setError('empty');
    }
    if (user.age<0) {
      return setError('age');
    }
    setUsers( previous=> {
      return [...previous, user];
    } )
  }

  return (
    <Wrapper>
      <ErrorModal error={errors}/>
      <div>
          <AddUser onNewUser={addUser}/>
          <UsersList userList={users}/>
      </div>
    </Wrapper>
  );
}

export default App;
