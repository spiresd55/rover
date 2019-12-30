import {connect} from "react-redux";
import Rover from "./Rover";
import {getBoundaries, getRoverCoordinates} from "../../store/selectors/RoverSelectors";
import {getFormValues} from "redux-form";
import {bindActionCreators} from "redux";
import * as roverActions from "../../store/actions/RoverActions";

const mapStateToProps = (state) => {
    const {error} = state.rover;
    return {
        roverBoundaries: getBoundaries(state),
        roverCommands: getFormValues("roverCommands")(state),
        coordinates: getRoverCoordinates(state),
        error,
    };
};
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({...roverActions}, dispatch)}
);

const RoverView = connect(mapStateToProps, mapDispatchToProps)(Rover);

export default RoverView;