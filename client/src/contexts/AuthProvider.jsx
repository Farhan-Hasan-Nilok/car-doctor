import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth, onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth'
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const updateUserName = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user', currentUser);
            setUser(currentUser);
            setLoading(false);
            if (currentUser && currentUser.email) {
                const loggedUser = { email: currentUser.email }
                fetch('https://car-doctor-server-eight-ashy.vercel.app/authorization', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(loggedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // local storage is not the best place to store token
                        // httpOnly cookie is better than local storage
                        // after generating the token it will be set on localstorage
                        localStorage.setItem('car-doctor-token', data.token);

                    })
            } else {
                localStorage.removeItem('car-doctor-token');
            }
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUserName,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;