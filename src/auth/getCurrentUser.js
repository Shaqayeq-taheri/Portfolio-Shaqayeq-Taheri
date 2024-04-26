import firebase from "firebase/compat/app";

export const getCurrentUser = ()=>{

    const user = firebase.auth().currentUser;
    if(!user) return null
    return {}
}