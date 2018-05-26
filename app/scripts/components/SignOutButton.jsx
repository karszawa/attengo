import { h } from "hyperapp";

export default (props) => {
    return (
        <div>
            <button onclick={props.signOutAction}>Sign out</button>
        </div>
    );
};
