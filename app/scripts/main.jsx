import { app } from "hyperapp";
import actions from "./actions/base";
import View from "./containers/View";

import { location } from "@hyperapp/router";
import { authentication } from "./firebase/authentication";

const state = {
    user: null,
    accessToken: null,
    location: location.state,
};

const main = app(state, actions, View, document.body);

location.subscribe(main.location);

authentication.subscribe(main.updateUser);
