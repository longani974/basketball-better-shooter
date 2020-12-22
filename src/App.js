import React, { useState, useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

import './App.css';
import ShootingScreen from './components/ShootingScreen/ShootingScreen';

firebase.initializeApp({
    apiKey: 'AIzaSyCrKHYH9NBo-HzgE2ztlE12A-QDdi4Qc2Q',
    authDomain: 'shooter-trainer.firebaseapp.com',
});

export const App = (props) => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccessWithAuthResult: () => false,
        },
    };

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setIsSignedIn(!!user);
        });
    }, []);

    return (
        <div className="App">
            {isSignedIn ? (
                <ShootingScreen />
            ) : (
                <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                />
            )}
        </div>
    );
};

export default App;
