import React from 'react';
import Select from 'react-select';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';
import Images from '../../../../constants/images';


const PhotoForm = () => {
    return (
        <Form>
            <FormGroup>
                <Label for='titleId'>Title</Label>
                <Input name='title' id='titleId' placeholder='Eg: beautifull pictrue ...'></Input>
            </FormGroup>

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
}

export default PhotoForm;
