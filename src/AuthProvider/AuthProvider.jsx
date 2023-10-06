import { useState } from "react";
import { createContext } from "react";
import auth from "../Fairebase/fairebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect } from "react";
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [loadding, setLoadding] = useState(true)
const [user, setUser] = useState(null);


// register user 
 const creteUser = (email,password) =>{
    setLoadding(true)
    return createUserWithEmailAndPassword(auth, email, password);

 }

 // login user 

 const userLogin = (email,password) =>{
    setLoadding(true)
    return signInWithEmailAndPassword(auth,email,password)
 }
 
/// login via google
const gogoleProvider = new GoogleAuthProvider();
const googleLogin = () =>{
    setLoadding(true)
    return signInWithPopup(auth,gogoleProvider);
}
 
// login via github
const githubProvider = new GithubAuthProvider();
const githubLogin = () =>{
    setLoadding(true)
    return signInWithPopup(auth,githubProvider)
}

// observing user via on auth state 

    useEffect(()=>{
       const unSubscribe =  onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoadding(false)
       });

       return () => {
           unSubscribe()
       }
        
    },[user])

    // logOut
    const logOut = () =>{
        setLoadding(true)
        return signOut(auth)
    }
// load news via effect 
const [homeNews, setHomeNews] = useState([]);
    
useEffect(()=>{
    fetch('/public/news.json')
    .then(res => res.json())
    .then(data => setHomeNews(data))
},[])
   
    const authInfo = {user,creteUser,userLogin,logOut, googleLogin, githubLogin,homeNews,loadding}


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;