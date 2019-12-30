import React from 'react';
import {reduxForm} from 'redux-form';
import {RoverForm} from "./RoverForm";
import {ReduxFormValidator, ERROR_TYPE} from "../../utils/ReduxFormValidator";

//Rover Form Validation Rules
const reduxFormValidator = new ReduxFormValidator();

const validate = (values) => {
    let errors = reduxFormValidator.validate(values, [
        {
            fieldName: 'xBoundary',
            errors: [
                {type: ERROR_TYPE.REQUIRED},
                {type: ERROR_TYPE.MIN, val: 1},
                {type: ERROR_TYPE.MAX, val: 100}
            ],
            errorMessages: [
                'xBoundary is required',
                'xBoundary must be greater than 0',
                'xBoundary must be less than equal to 100'
            ]
        },
        {
            fieldName: 'yBoundary',
            errors: [
                {type: ERROR_TYPE.REQUIRED},
                {type: ERROR_TYPE.MIN, val: 1},
                {type: ERROR_TYPE.MAX, val: 100}
            ],
            errorMessages: [
                'yBoundary is required',
                'yBoundary must be greater than 0',
                'yBoundary must be less than equal to 100'
            ]
        },
        {
            fieldName: 'startingXPosition',
            errors: [
                {type: ERROR_TYPE.REQUIRED},
                {type: ERROR_TYPE.MIN, val: 1},
                {type: ERROR_TYPE.MAX, val: 100}
            ],
            errorMessages: [
                'Starting X position is required',
                'Starting X position must be greater than 0',
                'Starting X position must be less than equal to 100'
            ]
        },
        {
            fieldName: 'startingYPosition',
            errors: [
                {type: ERROR_TYPE.REQUIRED},
                {type: ERROR_TYPE.MIN, val: 0},
                {type: ERROR_TYPE.MAX, val: 100}
            ],
            errorMessages: [
                'Starting Y position is required',
                'Starting Y position must be greater than 0',
                'Starting Y position must be less than equal to100'
            ]
        },
        {
            fieldName: 'commands',
            errors: [
                {type: ERROR_TYPE.REQUIRED},
                {type: ERROR_TYPE.PATTERN, val: /^[LMR](?:,[LMR])*$/gm}
            ],
            errorMessages: [
                'Commands are required',
                'Commands must follow patter L,R,M'
            ]
        },
    ]);

    return errors;
};

const ReduxFormContainer = reduxForm({
    form: 'roverBoundaries',
    initialValues: {
        startingDirection: "N"
    },
    validate
})(RoverForm);

export default ReduxFormContainer;