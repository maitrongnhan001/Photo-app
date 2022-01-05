import React from 'react';
import { useDispatch } from 'react-redux';
import Banner from '../../../components/banner/banner';
import PhotoForm from '../components/photoForm/photo-form';
import { addPhoto, updatePhoto } from '../photoSlice';
import './addEditPage.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Addeditpage = () => {
    const dispath = useDispatch();
    const navigate = useNavigate(); 
    const { photoId } = useParams();
    const isAddMode = !photoId;

    const editedPhoto = useSelector(state => state.photos.find(photo => {
        const id = parseInt(photoId)
        return photo.id === id;
    }));

    console.log(editedPhoto);

    const initialValues = isAddMode
    ? {
        title: '',
        category: null,
        photo: '',
    } 
    : editedPhoto;

    const handleSubmit = (value) => {
        return new Promise(resole => {
            setTimeout( () => {
                const action = isAddMode ? addPhoto(value) : updatePhoto(value);
                dispath (action);
        
                navigate('/photos');
                resole(true);
            }, 2000);

        });
    }

    return (
        <div className='photo-edit'>
            <Banner title='Pick your amazing photo 😎'></Banner>

            <div className='photo-edit__form'>
                <PhotoForm
                initialValues={initialValues}
                isAddMode={isAddMode}
                onSubmit={handleSubmit}
                ></PhotoForm>
            </div>
        </div>
    );
}

export default Addeditpage;
