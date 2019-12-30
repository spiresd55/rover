import {ROVER_ACTIONS} from "../actions/RoverActions";

const defaultState = {
    boundaries: [],
    startingPosition: [],
    commands: [],
    direction: "",
    error: "",
};

const reducer = function(state=defaultState, action ) {
    let newState = {...state};

    switch(action.type) {
        case ROVER_ACTIONS.SET_ROVER:
            newState.commands = action.commands;
            newState.startingPosition = action.startingPosition;
            newState.boundaries = action.boundaries;
            newState.direction = action.direction;
            newState.error = "";
            break;
        case ROVER_ACTIONS.SET_ERROR:
            newState.error = "Starting Position Of The Rover Falls Out Of The Provided Boundaries";
            break;
        case ROVER_ACTIONS.CLOSE_ERROR:
            newState.error = "";
            break;
        default:
            return state;
    }

    return newState;
};

export default reducer;