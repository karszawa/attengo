import { h } from "hyperapp";
import { Route } from "@hyperapp/router";
import Header from "../components/header";
import Footer from "../components/footer";
import RecordIndex from "./record-index";
import RecordNew from "./record-new";

// const Home = () => <h2>Home</h2>
// const About = () => <h2>About</h2>
// const Topic = ({ match }) => <h3>{match.params.topicId}</h3>
// const TopicsView = ({ match }) => (
//     <div key="topics">
//         <h2>Topics</h2>
//         <ul>
//             <li>
//                 <Link to={`${match.url}/components`}>Components</Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/single-state-tree`}>Single State Tree</Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/routing`}>Routing</Link>
//             </li>
//         </ul>
//
//         {match.isExact && <h3>Please select a topic.</h3>}
//
//         <Route parent path={`${match.path}/:topicId`} render={Topic} />
//     </div>
// )

const view = (state, actions) => (
    <div>
        <Header user={ state.user } signInAction={actions.signIn} />

        <Route
            path="/"
            render={props => (
                <RecordIndex
                    getState={actions.getState}
                    props={props}
                />
            )}
        />
        <Route
            path="/records/new"
            render={props => (
                <RecordNew
                    getState={actions.getState}
                    props={props}
                />
            )}
        />
        <Route
            path="/session/new"
            render={props => (
                <SessionNew
                    getState={actions.getState}
                    props={props}
                />
            )}
        />

        <Footer />
    </div>
);

export default view;
