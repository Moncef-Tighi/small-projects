import React from "react"
import { Navigate } from "react-router-dom";
import { useState } from "react/cjs/react.production.min";

//Empty context 

// const AuthContext= React.createContext({
//     //On initialise avec des data par défaut pour avoir une meilleure autocomplétion
//     token : '',
//     isLoggedIn : '',
//     login : (token) => {},
//     logout : ()=> {},
//     permission : []
// })

// const AuthContextProvider = (props) => {
//     //C'est ce component qui gère la state     


        // const contextValue = objet avec les values du context
//     //Normalement faut wrap avec ce component, mais on a créé notre propre version du template.
//     return <AuthContext.Provider VALUE={contextValue}>{props.children}</AuthContext.Provider>
// }

const AuthContext= React.createContext({
    //On initialise avec des data par défaut pour avoir une meilleure autocomplétion
    token : '',
    isLoggedIn : '',
    login : (token) => {},
    logout : ()=> {},
    permissions : []
})

export const AuthContextProvider = (props) => {
    //C'est ce component qui gère la state     

    const [token, setToken] = useState(null);
    const userIsLoggedIn= !!token;

    const loginHandeler = (token)=> {
        setToken(token);
    } 

    const logoutHandeler = () => {
        setToken(null);
        Navigate('/');
    } 
    const contextValue = {
        token,
        isLoggedIn : userIsLoggedIn,
        login : loginHandeler,
        logout : logoutHandeler

    }

    //Normalement faut wrap avec ce component, mais on a créé notre propre version du template.
    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}


//On export le Provider pour l'utiliser une fois pour wrap l'app. On export le Context par défaut pour l'utiliser
//Autant de fois qu'on a besoin du context. Pour cela on utilise useContext et on lui passe le context en param
export default AuthContext