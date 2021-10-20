import React, { useEffect, useState } from 'react';
import InitializeAuthentication from '../../Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";



InitializeAuthentication();

const useFirebase = () => {
const [user, setUser] = useState({})

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
                setUser({});
            }
          });
    },[])

    const registerWithEmail = (name, email, password) => {
        // console.log(email, password)
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setUser(result.user);
            updateName(name)
        })
        console.log(name, email, password)
        
    }
    const updateName = (name) => {
    updateProfile(auth.currentUser, {displayName: name})
        .then((result) => {})
    }

    const loginWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setUser(result.user);
        })
    }

    const createUserWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            setUser(result.user);
        })
    }

    const Logout = () => {
    signOut(auth)
    .then((result) => {})
    
    }

    console.log(user)
    return {
        getAuth,
        user,
        registerWithEmail,
        loginWithEmail,
        createUserWithGoogle,
        Logout,
    };
};

export default useFirebase;