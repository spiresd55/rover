import React from 'react'
import { Field, Form } from 'redux-form';
import InputField from "./InputField";
import SelectField from "./SelectField";
import {Button, Select} from "@material-ui/core";
import "./roverForm.scss";

export const RoverForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <Form onSubmit={handleSubmit} className="rover-form">
            <div>
                <Field
                    name="xBoundary"
                    type="number"
                    component={InputField}
                    label="Rover X Boundary"
                    custom={{helperText: "Enter a positive number"}}
                />
                <Field
                    name="yBoundary"
                    type="text"
                    component={InputField}
                    label="Rover Y Boundary"
                    custom={{helperText: "Enter a positive number"}}
                />
                <Field
                    name="startingDirection"
                    component={SelectField}
                    label="Starting Direction"
                    placeholder={"test"}
                    custom={{options: [
                        {label: "North", value: 'N'},    ,
                        {label: "East", value: 'E'},
                        {label: "South", value: 'S'},
                        {label: "West", value: 'W'},
                    ]}}
                />
                <Field
                    name="startingXPosition"
                    type="text"
                    component={InputField}
                    label="Rover Starting X Position"
                    custom={{helperText: "Enter a positive number"}}
                />
                <Field
                    name="startingYPosition"
                    type="text"
                    component={InputField}
                    label="Rover Starting Y Position"
                    custom={{helperText: "Enter a positive number"}}
                />
                <Field
                    name="commands"
                    type="text"
                    component={InputField}
                    label="Commands"
                    custom={{helperText: "L,R,M"}}
                />
                <Button type="submit" disabled={submitting} variant="contained" color={"primary"}>Simulate</Button>
                <Button type="button" disabled={pristine || submitting} onClick={reset} variant="outlined">Clear</Button>
            </div>
        </Form>
    )
};
