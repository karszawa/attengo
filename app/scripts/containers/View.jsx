import { h } from "hyperapp";
import { Route } from "@hyperapp/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RecordIndex from "./RecordIndex";
import RecordNew from "./RecordNew";
import { authentication } from "../firebase/authentication";

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

const View = (state, actions) => (
    <div>
        <Header
            user={ state.user }
            signInAction={ authentication.signIn }
            signOutAction={ authentication.signOut }
        />

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

export default View;
