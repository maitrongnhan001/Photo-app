import React from 'react';
import Banner from '../../../components/banner/banner';
import PhotoForm from '../components/photoForm/photo-form';
import './addEditPage.scss';

const Addeditpage = () => {
    return (
        <div className='photo-edit'>
            <Banner title='Pick your amazing photo 😎'></Banner>

            <div className='photo-edit__form'>
                <PhotoForm></PhotoForm>
            </div>
        </div>
    );
}

export default Addeditpage;
