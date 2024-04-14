import React from 'react';

export const LandingPageVideo = () => {
    // URL of the video hosted on Cloudinary
    const videoUrl = 'https://res.cloudinary.com/dh2vyeo41/video/upload/f_auto:video,q_100/v1/videos/HeyU_Landing_Page_Video_fm92rg';

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <video width="100%" height="400px" controls autoPlay>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag
            </video>
        </div>
    )
}