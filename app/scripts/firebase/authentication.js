import firebase from './firebase';

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

function signInWithPopup() {
    return auth.signInWithPopup(provider);
}

export default signInWithPopup;
