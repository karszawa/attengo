import { h } from "hyperapp";

export default (props) => {
    return (
        <div>
            <button onclick={props.signInAction}>Sign in</button>
        </div>
    );
};
