import React from 'react'
import {Select, MenuItem, InputLabel, FormControl} from "@material-ui/core";

const SelectField = ({ input, label, type, meta: { touched, error }, custom = {} }) => (
    <FormControl className={"form-control"}>
        <InputLabel shrink>
            {label}
        </InputLabel>
        <Select
            value={input.value}
            label={label}
            placeholder={custom.helperText}
            fullWidth={true}
            {...input}
        >
            {custom.options.map(option => (<MenuItem value={option.value}>{option.label}</MenuItem>))}
        </Select>
    </FormControl>
);

export default SelectField;