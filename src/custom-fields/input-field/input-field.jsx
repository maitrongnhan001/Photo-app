import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label } from 'reactstrap';

const InputField = (props) => {

    const { field, type, label, placeholder, disabled } = props
    const { name } = field;

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Input
                id={name}
                {...field}
                placeholder={placeholder}
                type={type}
                disabled={disabled}
            ></Input>
        </FormGroup>
    );
}

InputField.protoType = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.string
}

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false
}

export default InputField;
