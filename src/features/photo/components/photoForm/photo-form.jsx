import InputField from 'custom-fields/input-field/input-field';
import SelectField from 'custom-fields/select-field/select-field';
import { Formik, Form, FastField } from 'formik';
import React from 'react';
import Select from 'react-select';
import { FormGroup, Label, Button } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';
import Images from '../../../../constants/images';


const PhotoForm = () => {
    const initialValues = {
        title: '',
        category: null
    }


    return (
        <Formik initialValues={initialValues} >
            {formikProps => {
                //do something here ...
                const { values } = formikProps;
                console.log(values);

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
                        <FormGroup>
                            <Label for='categoryId' >Category</Label>
                            <Select
                                id="categoryId"
                                name="category"

                                placeholder="What your photo category?"
                                options={PHOTO_CATEGORY_OPTIONS}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="categogyId">Photo</Label>

                            <div>
                                <Button type="button" outline color="primary">Random a photo</Button>
                            </div>

                            <div>
                                <img width="200px" height="200px" src={Images.COLORFUL_BG} alt="colorful_bg" />
                            </div>
                        </FormGroup>

                        <FormGroup>
                            <Button color="primary">Add to album</Button>
                        </FormGroup>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default PhotoForm;
