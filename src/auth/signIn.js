import firebase from "firebase/compat/app";

export const signIn = async (email, password)=>{
try {
    
    firebase.auth().signInWithEmailAndPassword(email,password)
    return {} //
} catch (error) {
    throw new Error('Error in signing in...')
    
}
}