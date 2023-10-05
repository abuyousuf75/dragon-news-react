import { useState } from "react";
import { createContext } from "react";
import auth from "../Fairebase/fairebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect } from "react";
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);


// register user 
 const creteUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth, email, password);

 }

 // login user 

 const userLogin = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
 }
 
/// login via google
const gogoleProvider = new GoogleAuthProvider();
const googleLogin = () =>{
    return signInWithPopup(auth,gogoleProvider);
}
 
// login via github
const githubProvider = new GithubAuthProvider();
const githubLogin = () =>{
    return signInWithPopup(auth,githubProvider)
}

// observing user via on auth state 

    useEffect(()=>{
       const unSubscribe =  onAuthStateChanged(auth,currentUser=>{
            console.log(user)
            setUser(currentUser);
       });

       return () => {
           unSubscribe()
       }
        
    },[user])

    // logOut
    const logOut = () =>{
        return signOut(auth)
    }

   
    const authInfo = {user,creteUser,userLogin,logOut, googleLogin, githubLogin}


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;