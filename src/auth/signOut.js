import firebase from "firebase/compat/app";

export const signOut = async ()=>{

    try {
        await firebase.auth().signOut();
    } catch (error) {
        throw new Error('Error while signing out!')
    }
}