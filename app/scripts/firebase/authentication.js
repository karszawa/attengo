import firebase from './firebase';

const provider = new firebase.auth.GoogleAuthProvider();

function signIn() {
    return firebase.auth().signInWithPopup(provider);
}

export default signIn;

// firebase.auth().signInWithPopup(provider).then((result) => {
//    const token = result.credential.accessToken;
//    const user = result.user;
//
//
// }).catch((error) => {
//     alert(error.code + error.message);
// });
