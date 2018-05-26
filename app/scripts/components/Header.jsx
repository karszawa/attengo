import { h } from "hyperapp";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";

export default (props) => (
    <div>
        <div>
            Logo
        </div>

        { props.user ?
            [
                <p>{ props.user.email }</p>,
                <SignOutButton signOutAction={ props.signOutAction } />
            ]
        :
            <SignInButton signInAction={ props.signInAction } />
        }
    </div>
);
