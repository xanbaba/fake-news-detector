import {auth} from "./firebase.ts"

import {
    sendSignInLinkToEmail as firebaseSendSignInLink,
    isSignInWithEmailLink,
    signInWithEmailLink,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth"


const actionCodeSettings = {
    url: window.location.origin + '/complete-signin',
    handleCodeInApp: true,
}

export const sendSignInLinkToEmail = async (email: string) => {
    return firebaseSendSignInLink(auth, email, actionCodeSettings)
}

export const completeSignInWithEmailLink = async (email: string, emailLink: string) => {
    return signInWithEmailLink(auth, email, emailLink)
}

export const checkIsSignInWithEmailLink = (url: string) => {
    return isSignInWithEmailLink(auth, url)
}

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    return signInWithPopup(auth, provider)
}

export const signOutUser = () => {
    return auth.signOut()
}