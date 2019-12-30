export const ERROR_TYPE = {
    REQUIRED: 'REQUIRED',
    PATTERN: 'PATTERN',
    MIN: 'MIN',
    MAX_LENGTH: 'MAX_LENGTH',
    MIN_LENGTH: 'MIN_LENGTH',
    MAX: 'MAX',
    LENGTH: 'LENGTH',
    GREATER_THAN: 'GREATER_THAN',
    LESS_THAN: 'LESS_THAN',
    IS_URL: 'IS_URL'
};

function validate(val, errorType) {
    switch (errorType.type) {
        case ERROR_TYPE.REQUIRED:
            return val != '' && val != undefined;
        case ERROR_TYPE.LENGTH:
            return val.length == errorType.val;
        case ERROR_TYPE.MAX:
            return (val <= errorType.val || val == undefined);
        case ERROR_TYPE.MIN:
            return (val >= errorType.val || val == undefined);
        case ERROR_TYPE.MAX_LENGTH:
            return val.length <= errorType.val;
        case ERROR_TYPE.MIN_LENGTH:
            return val.length >= errorType.val;
        case ERROR_TYPE.GREATER_THAN:
            return (val > errorType.val || val == undefined);
        case ERROR_TYPE.LESS_THAN:
            return (val < errorType.val || val == undefined);
        case ERROR_TYPE.PATTERN:
            return errorType.val.test(val)
    }
    return true;
}

export class ReduxFormValidator {

    validate(values, reduxValidators) {
        let errors = {};
        reduxValidators.forEach( (validator) => {
            let value = values[validator.fieldName];

            for(let i = 0; i < validator.errors.length; i++) {
                if(!validate(value, validator.errors[i])) {
                    errors[validator.fieldName] = validator.errorMessages[i];
                    break;
                }
            }
        });
        return errors;
    }
}