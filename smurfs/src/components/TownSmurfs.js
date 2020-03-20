import React from 'react';
import { connect } from "react-redux";

const SmurfTown = props => {
    return (
        <div className="smurf-town">
            {props.smurfs.map(item => {
                return (
                    <div className="smurf">
                        <p>Name: {`${item.name} Smurf`}</p>
                        <p>Age: {`${item.age} smurf years`}</p>
                        <p>Height: {`${item.height} cm`}</p>
                    </div>
                );
            })}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    };
};

export default connect(mapStateToProps, {})(SmurfTown);