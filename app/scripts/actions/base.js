import { location } from "@hyperapp/router";
import signInWithPopup from "../firebase/authentication";

const signIn = (state, actions) => {
    console.log('Sign in');
    signInWithPopup().then(result => {
        const user = result.user;
        const token = result.credential.accessToken;

        actions.updateAuth(user, token);
    }).catch(error => {
        alert(`[ERROR] ${error.code}: ${error.message}`);
    });
};

export default {
    getState: () => state => state,
    location: location.actions,
    signIn: () => signIn,
    updateAuth: (user, accessToken) => state => ({ user: user, accessToken: accessToken }),
};
