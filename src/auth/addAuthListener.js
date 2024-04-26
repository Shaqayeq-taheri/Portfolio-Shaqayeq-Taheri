import firebase from "firebase/compat/app";

export const addAuthListener = (callback)=>{  //our function is not async because it is using callback tool to allow whoever uses it to listen continuously 

    const onChange = (user)=>{
        if(user){    //the onauthchanges calls the callback that we provide if the user logged in
           
         callback({})
        }else{
            callback(null)   //returns null if the user logged out 
        }
    }
    return firebase.auth.onAuthStateChanged(onChange) // return unsubscribe func 
}