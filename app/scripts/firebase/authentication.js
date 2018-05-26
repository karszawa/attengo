import firebase from './firebase';

const provider = new firebase.auth.GoogleAuthProvider();

function signInWithPopup() {
    return firebase.auth().signInWithPopup(provider);
}

export default signInWithPopup;
