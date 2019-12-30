export const ROVER_ACTIONS = {
    SET_ROVER: "SET_ROVER",
    SET_ERROR: "SET_ERROR",
    CLOSE_ERROR: "CLOSE_ERROR"
};

export const RUN_SIMULATION = ({startingXPosition, startingYPosition, commands, xBoundary, yBoundary, startingDirection }) => {
    console.log(startingXPosition, xBoundary, startingYPosition, yBoundary);
     if(+startingXPosition > +xBoundary || +startingYPosition > +yBoundary) {
        return {
            type: ROVER_ACTIONS.SET_ERROR
        }
     }
     return {
          type: ROVER_ACTIONS.SET_ROVER,
          startingPosition: [startingXPosition, startingYPosition],
          commands: commands.split(','),
          boundaries: [xBoundary, yBoundary],
          direction: startingDirection,
     }
};

export const CLOSE_ERROR = () => {
  return {
      type: ROVER_ACTIONS.CLOSE_ERROR
  }
};