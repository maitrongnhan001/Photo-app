import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import Select from 'react-select';
import { ErrorMessage } from 'formik';

const SelectField = (props) => {

    const { field, form, options, label, placeholder, disabled } = props
    const { name, value } = field;
    const selectedValue = options.find( option => option.value === value);

    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    const handleSelectOptionChange = (selectedOptions) => {
        const selectedValue = selectedOptions ? selectedOptions.value : selectedOptions;

        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        }

        field.onChange(changeEvent);
    }

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Select
                id={name}
                {...field}
                value={selectedValue}

                placeholder={placeholder}
                options={options}
                disabled={disabled}
                onChange={handleSelectOptionChange}

                className={showError ? 'is-invalid' : ''}
            ></Select>

            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}

SelectField.protoType = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array,
}

SelectField.defaultProps = {
    label: '',
    placeholder: '',
    disabled: false,
    options: []
}

export default SelectField;
