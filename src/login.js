import React, { useState } from "react";
import "./login.css";
import {Link, useHistory} from "react-router-dom";
import { auth } from "./firebase";
import firebase from "firebase";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export default function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");

    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
        signInSuccessUrl: "/",
        // We will display Google and Facebook as auth providers.
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        
        ]
      };

    const signIn = event => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push("/")
        })
        .catch(error => alert(error.message))

    }

    const register = event => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            console.log(auth);
            if (auth) {
                history.push("/")
            }
        })
        .catch(error => alert(error.message))

    }

    return (
        <div className="login">
            <img src="" alt=""/>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail or Phone</h5>
                    <input type="text" placeholder="enter your email or phone number" value={email} onChange={event => setEmail(event.target.value)} />
                    <h5>Password</h5>
                    <input type="password" placeholder="password" value={password} onChange={event => setpassword(event.target.value)} />
                    <button type="submit" onClick={signIn} className="login_signInButton">Sign In</button>
                </form>
                <p>
                    the term and conditions of website
                </p>

                <button onClick={register} className="login_registerButton">Create your account</button>

                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
            </div>
            
        </div>
    )
}
