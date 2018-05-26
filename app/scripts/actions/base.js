import { location } from "@hyperapp/router";
import signInWithPopup from "../firebase/authentication";

function onSignInError(state, actions) {
    return (error) => {
        alert(`[ERROR] ${error.code}: ${error.message}`);
    };
}

export default {
    getState: () => state => state,
    location: location.actions,
    updateUser: (user) => () => ({ user: user }),
};
