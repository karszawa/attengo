import { location } from "@hyperapp/router";
import signIn from "../firebase/authentication";

export default {
    getState: () => state => state,
    location: location.actions,
    signIn: signIn,
};
