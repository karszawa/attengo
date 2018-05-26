import { h } from "hyperapp";
import SignInButton from "./sign-in-button";

export default (props) => (
    <div>
        <div>
            Logo
        </div>

        { props.user ?
            <p>{ props.user.email }</p>
        :
            <SignInButton signInAction={props.signInAction} />
        }
    </div>
);
