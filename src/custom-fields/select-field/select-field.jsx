import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';
import Select from 'react-select';

const SelectField = (props) => {

    const { field, options, label, placeholder, disabled } = props
    const { name, value } = field;
    const selectedValue = options.find( option => option.value === value);

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
            ></Select>
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
