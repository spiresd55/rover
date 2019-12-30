import React from 'react';
import RoverFormContainer from "../../components/form/RoverFormContainer";
import {Grid, Snackbar} from "@material-ui/core";
import Canvas from "../../components/canvas/Canvas";
import "./rover.scss";


const handleRoverSubmit = (values, actions) => {
    actions.RUN_SIMULATION(values);
};

const handleClose = (actions) => {
    actions.CLOSE_ERROR();
};

export default ({roverBoundaries, roverCommands, actions, coordinates, error}) => {
    const [xBoundary, yBoundary]= roverBoundaries;
    return (
        <Grid container={true}>
            {error && <Snackbar className={"error"} open={error.length > 0} autoHideDuration={6000} anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }} message={error}  onClose={() => handleClose(actions)}/>}
            <Grid item xs={12} md={4} padding={20} className="form-container">
                <RoverFormContainer onSubmit={values => handleRoverSubmit(values, actions)}/>
            </Grid>
            <Grid item xs={12} md={8}>
                {(xBoundary && yBoundary) &&
                    <Canvas xBoundary={xBoundary} yBoundary={yBoundary} coordinates={coordinates} />
                }
            </Grid>
        </Grid>
    )
};