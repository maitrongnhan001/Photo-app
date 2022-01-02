import React from 'react';
import Banner from '../../../components/banner/banner';
import Images from '../../../constants/images';

const Mainpage = () => {
    return (
        <div className='photo-main'>
            <Banner title='Your awesome photo' backgroundUrl={Images.PINK_BG}></Banner>
        </div>
    );
}

export default Mainpage;
