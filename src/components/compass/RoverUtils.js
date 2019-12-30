import Compass from "./Compass";

const calculateNewPosition = (direction, coordinates, upperYBoundry, upperXBoundy) => {
    let newPosition;
    //Deconstruct the array
    const [x, y] = coordinates;
    if(direction === "N") {
        newPosition = [x, y + 1];
    }
    if(direction === "E") {
        newPosition = [x + 1, y];
    }
    if(direction === "S") {
        newPosition = [x, y -1];
    }
    if(direction === "W") {
        newPosition = [x - 1, y ];
    }

    //If the new position is out of the boundry, return original coordinates
    if( newPosition[0] > upperXBoundy ||
        newPosition[1] > upperYBoundry ||
        newPosition[0] < 0 ||
        newPosition[1] < 0 ) {
        return coordinates;
    }

    // Return the new calculated position
    return newPosition;
};

//Rover Algorithim
export const calculateRoverPosition = (upperRightCoordinates, roversPosition, commands, startingDirection = "N") => {
    const compass = new Compass(startingDirection);

    //The position the rover can move within
    const upperYBoundry = parseInt(upperRightCoordinates[1]);
    const upperXBoundry = parseInt(upperRightCoordinates[0]);

    const [x, y] = roversPosition;
    let currPosition = [parseInt(x), parseInt(y)];

    const points = [];
    points.push([...currPosition, compass.getPosition()]);

    commands.forEach((command) => {
        if(command === "L") {
            compass.moveLeft();
        }
        if(command === "R") {
            compass.moveRight();
        }
        if(command === "M") {
            currPosition = calculateNewPosition(
                compass.getPosition(),
                currPosition,
                upperYBoundry,
                upperXBoundry
            );
            points.push([...currPosition, compass.getPosition()]);
        }
    });

    return points;
};