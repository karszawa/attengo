import firebase from './firebase';

const provider = new firebase.auth.GoogleAuthProvider();

export const authentication = {
    signIn: () => {
        firebase.auth().signInWithPopup(provider).then();
    },

    signOut: () => {
        firebase.auth().signOut().then();
    },

    subscribe: (observer, error) => {
        firebase.auth().onAuthStateChanged(observer, error);

        return () => {
            firebase.auth().onAuthStateChanged(() => {});
        }
    },
};
