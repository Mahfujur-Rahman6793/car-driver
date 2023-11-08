import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/Firebase.config';
import axios from 'axios';
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] =useState(true);
    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
        
    }
    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        const loggedUser = currentUser?.email || user?.email;
        setUser(currentUser);
        if(currentUser){
            axios.post('http://localhost:5000/jwt',loggedUser,{withCredentials:true})
            .then(res=>{
                console.log(res.data)
            })
        }
        setLoading(false);
            return () => {
                return unsubscribe();
            };
          });
    },[])
    const authinfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;