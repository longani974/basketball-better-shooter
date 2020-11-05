import React, { Component } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

import "./App.css";
import ShootingScreen from "./components/ShootingScreen/ShootingScreen";

// function App() {
//   return (
//     <div className="App">
//       <ShootingScreen />
//     </div>
//   );
// }

firebase.initializeApp({
  apiKey: "AIzaSyCrKHYH9NBo-HzgE2ztlE12A-QDdi4Qc2Q",
  authDomain: "shooter-trainer.firebaseapp.com"
})


export class App extends Component {
  state={isSignedIn:false}

  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        this.setState({isSignedIn: !!user})
      })
  }
  

  render() {
    return (
    <div className="App">
      {this.state.isSignedIn ? 
      <ShootingScreen /> :
      (
        <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
      )
    }
      
    </div>)
  }
}


export default App;
