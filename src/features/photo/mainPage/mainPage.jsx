import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from 'reactstrap';
import { removePhoto } from '../photoSlice';
import Banner from '../../../components/banner/banner';
import Images from '../../../constants/images';
import PhotoList from '../components/photoList/photo-list';

const Mainpage = () => {
    const photos = useSelector(state => state.photos);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handlePhotoEditClick = (photo) => {
        const editPhotoUrl = `/photos/${photo.id}`;
        navigate(editPhotoUrl);
      }
    
      const handlePhotoRemoveClick = (photo) => {
        const removePhotoId = photo.id;
        const action = removePhoto(removePhotoId);
        dispatch(action);
      }

    return (
        <div className='photo-main'>
            <Banner title='Your awesome photo' backgroundUrl={Images.PINK_BG}></Banner>
            <Container className='text-center'>
                <div className='py-5'>
                    <Link to='/photos/add'>Add new photo</Link>
                </div>

                <PhotoList
                    photoList={photos}
                    onPhotoEditClick={handlePhotoEditClick}
                    onPhotoRemoveClick={handlePhotoRemoveClick}
                />
            </Container>
            
        </div>
    );
}

export default Mainpage;
