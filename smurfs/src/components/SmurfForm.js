import React, { useState } from 'react';
import { addSmurf } from "../actions/index";
import { connect } from "react-redux";

const SmurfForm = props => {
    const [smurf, setSmurf] = useState({ name: "", age: "", height: "" });

    const handleChange = event => {
        setSmurf({ ...smurf, [event.target.name]: event.target.value });
    };
    const handleSubmit = event => {
        event.preventDefault();
        props.addSmurf(smurf);
        setSmurf({ name: "", age: "", height: "" })
    };

    return (
        <div className="smurf-form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input 
                name="name"
                type="text"
                placeholder="Smurf Name Here"
                onChange={handleChange}
                value={smurf.name}
                />

                <label htmlFor="age">Age: </label>
                <input 
                name="age"
                type="text"
                placeholder="Smurf Age Here"
                onChange={handleChange}
                value={smurf.age}
                />

                <label htmlFor="height">Height: </label>
                <input 
                name="height"
                type="text"
                placeholder="Smurf Height Here"
                onChange={handleChange}
                value={smurf.height}
                />
            <button type="submit">Submit Smurf!</button>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    };
};

export default connect(mapStateToProps, { addSmurf })(SmurfForm);