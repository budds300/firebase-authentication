import {  createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,sendPasswordResetEmail, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, RecaptchaVerifier,signInWithPhoneNumber} from "firebase/auth"
import { auth } from '../firebase'
const userAuthContext = createContext()

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState("")

    const signUp = async(email, password) => { await createUserWithEmailAndPassword(auth, email, password) }
    const logIn = async(email, password) =>  {await signInWithEmailAndPassword(auth, email, password); console.log(email, password); }
    const restPassword = async(email) =>  {await sendPasswordResetEmail(auth, email,); console.log(email); }
    const logOut =async () => await signOut(auth)
    const googleSignIn =async () => {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider)
    }
    const setUpRecaptha = async (number)=>{
        const recaptchaVerifier =new RecaptchaVerifier('recaptcha-container', {})
        recaptchaVerifier.render()
        return await signInWithPhoneNumber(auth,number,recaptchaVerifier)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    return <userAuthContext.Provider value={{ user, signUp, logIn, logOut,googleSignIn,restPassword,setUpRecaptha }}>
        {children}
    </userAuthContext.Provider>
}
export function useUserAuth() {
    return useContext(userAuthContext)
}