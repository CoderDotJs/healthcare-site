import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut,updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialization from "./firebase.initialization";

firebaseInitialization();

const useFirebase = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const[name, setName] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    //getting the email from input

    const getEmail = (e) =>{
        setEmail(e.target.value)
    }

    //getting the name form input 

    const getName = (e) =>{
        setName(e.target.value)
        
    }

    //getting the password from input

    const getPassowrd = (e) =>{
        setPassword(e.target.value)
    }

    //google sign in witn popup

    const googleSignIn = () =>{
        return signInWithPopup(auth, provider)
    }

    //useing useEffect for on auth state change 

    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            if(user !== null){
                setUser(user)
                console.log(user?.displayName)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
    }, []);


    //log out function for sign in

    const logOut = () =>{
        signOut(auth)
        .then(() =>{
            setUser({});
        })
        .catch((err)=>{
            alert(err)
        })
    };



    //sign up with input form

    const signUpWithEmail = (e) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //sign in with input form 

    const signInWithEmail = (e) =>{
        
        return signInWithEmailAndPassword(auth, email, password)
    }


  return {
        googleSignIn,
        error, 
        setError, 
        auth, 
        user, 
        logOut,
        isLoading,
        setIsLoading,
        getEmail,
        getName,
        name,
        setName,
        updateProfile,
        getPassowrd, 
        signUpWithEmail, 
        signInWithEmail}
}


export default useFirebase;