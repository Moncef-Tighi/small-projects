import React from 'react';
import AddUser from './components/AddUser';

function App() {

  const addUser= function(user) {

  }
  
  return (
    <div>
        <AddUser onNewUser={addUser}/>
    </div>
  );
}

export default App;
