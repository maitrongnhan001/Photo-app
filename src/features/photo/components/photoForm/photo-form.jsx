import InputField from 'custom-fields/input-field/input-field';
import RandomPhotoField from 'custom-fields/random-photo-field/random-photo-field';
import SelectField from 'custom-fields/select-field/select-field';
import { Formik, Form, FastField } from 'formik';
import React from 'react';
import { FormGroup, Button } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';
import * as yup from 'yup';


const PhotoForm = () => {
    const initialValues = {
        title: '',
        category: null,
        photo: '',
    }

    const validationSchema = yup.object().shape({
        title: yup.string().required('This field is required'),

        category: yup.number().required().nullable(),

        photo: yup.string().when('category', {
            is: 1,
            then: yup.string().required('This field is required'),
            otherwise: yup.string().notRequired()
        })
    });


    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={values => console.log('Submit: ', values)}
        >
            {formikProps => {
                //do something here ...
                const { errors } = formikProps;
                console.log(errors);
                return (
                    <Form>
                        <FastField
                            name='title'
                            component={InputField}

                            label='Title'
                            placeholder='Eg: beautifull pictrue ...'
                        />

                        <FastField
                            name='category'
                            component={SelectField}

                            label='Category'
                            placeholder="What your photo category?"
                            options={PHOTO_CATEGORY_OPTIONS}
                        ></FastField>

                        <FastField
                            name='photo'
                            component={RandomPhotoField}
                            label='Photo'
                        ></FastField>

                        <FormGroup>
                            <Button type='submit' color="primary">Add to album</Button>
                        </FormGroup>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default PhotoForm;
