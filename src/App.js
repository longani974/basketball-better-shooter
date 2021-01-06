import React, { useState, useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

import './App.css';
import ShootingScreen from './components/ShootingScreen/ShootingScreen';

const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyCrKHYH9NBo-HzgE2ztlE12A-QDdi4Qc2Q',
    authDomain: 'shooter-trainer.firebaseapp.com',
    databaseURL: 'https://shooter-trainer.firebaseio.com',
    projectId: 'shooter-trainer',
    storageBucket: 'shooter-trainer.appspot.com',
    messagingSenderId: '308008047922',
    appId: '1:308008047922:web:fb911546cb2039745c732b',
});

export const App = (props) => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [token, setToken] = useState(null);

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
        firebaseApp.auth().onAuthStateChanged((user) => {
            if (user) {
                user.getIdToken().then((accessToken) => {
                    setToken(accessToken);
                });
                setIsSignedIn(!!user);
            } else {
                console.log('pouet');
            }
        });
    }, [setToken]);

    return (
        <div className="App">
            {isSignedIn ? (
                <ShootingScreen token={token} />
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
