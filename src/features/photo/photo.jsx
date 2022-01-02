import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './mainPage/mainPage';
import AddEditPage from './addEditPage/addEditPage';
import notFound from '../../components/notFound/notFound';

const Photo = (props) => {
    return (
        <div>
            <Routes>
                <Route exct path='/' element={<MainPage/>} />
                <Route path='/add' element={<AddEditPage />} />
                <Route path='/:photoId' element={<AddEditPage />} />
                <Route path='*' element={notFound} />
            </Routes>
        </div>
    );
}

export default Photo;
