import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialization from "./firebase.initialization";

firebaseInitialization();

const useFirebase = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    //getting the email from input

    const getEmail = (e) =>{
        setEmail(e.target.value)
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
            }
            else{
                setUser({})
            }
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
        // e.preventDefault()
        // signInWithEmailAndPassword(auth, email, password)
        // .then((result)=>{
        //     setUser(result.user)
        // }).catch((err)=>{
        //     alert(err)
        // })
        return signInWithEmailAndPassword(auth, email, password)
    }


  return {googleSignIn,error, setError, auth, user, logOut, getEmail, getPassowrd, signUpWithEmail, signInWithEmail}
}


export default useFirebase;