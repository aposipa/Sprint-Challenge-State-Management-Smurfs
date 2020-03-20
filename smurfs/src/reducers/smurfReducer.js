import { GET_SMURF, ADD_SMURF, ADD_SUCCEED, GET_SUCCEED, GET_FAIL, ADD_FAIL } from "../actions/index"

const initialState = {
    smurfs: [],
    message: ''
};

const smurfReducer = (state = initialState, action) => {
    console.log("**these are actions**", action.type, action.payload);
    switch(action.type) {
        case GET_SMURF:
            return {
                ...state,
                message: action.payload
            };
        case ADD_SMURF:
            return {
                ...state,
                message: action.payload
            }
        case ADD_SUCCEED: 
            return {
            message: "Smurf has been added", 
            smurfs: action.payload
            }
        case GET_SUCCEED:
            return {
                message: '',
                smurfs: action.payload
            }
        case GET_FAIL: 
            return {
                ...state,
                message: action.payload
            };
        case ADD_FAIL:
            return {
                ...state,
                message: action.payload
            }
        default:
            return state;
    }
};

export default smurfReducer;