import React from 'react';

const AuthContext =React.createContext({
    isLoggedIn : false,
    onLogout: ()=>{} //la fonction est défini dans le Provider et non pas par défaut
});


export default AuthContext;  