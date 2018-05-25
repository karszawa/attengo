import { app } from "hyperapp";
import { location } from "@hyperapp/router";
import actions from "./actions/base";
import view from "./containers/view";

const state = {
    user: null,
    location: location.state,
};

const main = app(state, actions, view, document.body);

const unsubscribe = location.subscribe(main.location);
