import {createSelector} from "reselect";
import {calculateRoverPosition} from "../../components/compass/RoverUtils";

export const getRoverState = (state) => state.rover;

export const getBoundaries = createSelector([getRoverState], (rover) => {
   return rover.boundaries;
});

export const getRoverCoordinates = createSelector([getRoverState], (rover) => {
    const {boundaries, commands, startingPosition, direction} = rover;

    if(boundaries.length === 2 && commands.length > 0 && startingPosition.length === 2 && direction) {
        return calculateRoverPosition(boundaries, startingPosition, commands, direction);
    }

    return [];
});