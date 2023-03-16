import { createContext, useEffect, useState } from 'react';
import { auth } from '~/firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';
import { clearCart } from '../redux/features/cartsSlice';
import { useDispatch } from 'react-redux';
export const userAuthContext = createContext();
function UserAuthContext({ children }) {
    const [user, setUser] = useState('');
    const dispatch = useDispatch();
    console.log(user);
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    const logOut = () => {
        dispatch(clearCart());
        signOut(auth);
    };
    const sigInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsub();
        };
    }, []);

    return (
        <userAuthContext.Provider value={{ user, signUp, signIn, logOut, sigInWithGoogle }}>
            {children}
        </userAuthContext.Provider>
    );
}

export default UserAuthContext;
