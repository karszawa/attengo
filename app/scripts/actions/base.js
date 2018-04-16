import { location } from "@hyperapp/router";

export default {
    getState: () => state => state,
    location: location.actions,
};
