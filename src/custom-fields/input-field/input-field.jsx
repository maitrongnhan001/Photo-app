import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import { ErrorMessage } from 'formik';

const InputField = (props) => {

    const { field, form, type, label, placeholder, disabled } = props
    const { name } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Input
                id={name}
                {...field}
                placeholder={placeholder}
                type={type}
                disabled={disabled}

                invalid={showError}
            ></Input>

            <ErrorMessage name={name}  component={FormFeedback} />
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
