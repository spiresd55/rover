import React from 'react'
import TextField from '@material-ui/core/TextField';

const InputField = ({ input, label, type, meta: { touched, error }, custom = {} }) => (
    <div>
        <TextField
            value={input.value}
            label={label}
            placeholder={custom.helperText}
            helperText={(touched && error) ? error: "" }
            fullWidth={true}
            type={type}
            error={touched && error != undefined}
            {...input}
        />
    </div>
)

export default InputField;