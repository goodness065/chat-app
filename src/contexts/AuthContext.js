import React, {useContext, useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { onAuthStateChanged} from 'firebase/auth';
import {auth} from "../firebase";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const history = useHistory();


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
            setLoading(false);
            // alert(`${user.email} is Signed in`)
            
            if(user){ history.push("/chat")};
       
          })
    }, [user, history]);

    const value = {user};

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}