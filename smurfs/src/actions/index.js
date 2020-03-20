import axios from "axios";

export const GET_SMURF = "GET_SMURF";
export const GET_SUCCEED = "GET_SUCCEED";
export const ADD_SUCCEED = "ADD_SUCCEED";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_FAIL = "ADD_FAIL";
export const GET_FAIL = "GET_FAIL";

export const getSmurf = () => dispatch => {
    dispatch({ type: GET_SMURF, payload: "Getting the town ready for new residents"});
    axios.get("http://localhost:3333/smurfs")
    .then(response => {
        console.log("this is the repsone from .get", response.data);
        dispatch({ type: GET_SUCCEED, payload: response.data });
    })
    .catch(error => {
        dispatch({ type: GET_FAIL, payload: error});
    });
};

export const addSmurf = smurf => dispatch => {
    dispatch({ type: ADD_SMURF, payload: "New Smurf is being added to town" });
    console.log("adding a smurf here", smurf);
    axios.post("http://localhost:3333/smurfs", smurf)
    .then(response => {
        console.log(".post response", response.data);
        dispatch({ type: ADD_SUCCEED, payload: response.data });
    })
    .catch(error => {
        console.log(".post error", error);
        dispatch({ type: ADD_FAIL, payload: error});
    });
};
