import React, {Component} from 'react';

import firebase from './firebase'
import CapturePage from "./pages/CapturePage";


//Can have a router component


class App extends Component {

    state = {
        signedIn: true
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const {isAnonymous, uid} = user;
                console.log(`There is a user detected. ${isAnonymous} ${uid}`);
            } else {
                console.log("User is not authenticated");
                firebase.auth().signInAnonymously().catch((err) => {
                    console.error("An error occured when signing in");
                })
            }
        });
    }

    render() {
        return (
            <div>

                <CapturePage/>

            </div>
        );
    }
}

export default App;
