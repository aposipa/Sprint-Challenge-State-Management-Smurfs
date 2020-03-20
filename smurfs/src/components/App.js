import React, { useEffect } from "react";
import { connect } from "react-redux";
import SmurfForm from './SmurfForm';
import SmurfTown from './TownSmurfs';
import { getSmurf } from '../actions';
import "./App.css";


const App = ({ message, smurfs, getSmurf }) => {
  useEffect(() => {
    getSmurf();
  }, [getSmurf]);

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <h2>{message}</h2>
        <SmurfTown />
        <SmurfForm />
      </div>
    );
  
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    message: state.message
  };
};

export default connect(mapStateToProps, { getSmurf })(App);
