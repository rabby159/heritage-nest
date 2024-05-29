import React from 'react';
import frame1 from '../../assets/frame1.jpeg';
import frame2 from '../../assets/frame2.jpeg';
import playButton from '../../assets/playbutton.png'

const Property = () => {
    return (
        <div className='mx-20 grid grid-cols-1 md:grid-cols-2 mb-10'>
            <div>
                    <img className='w-[485px] h-[400px] rounded' src={frame1} alt="frame1 img" />
                    <img className='w-[452px] h-[240px] rounded ml-28 -mt-32' src={frame2} alt="frame2 img" />
                    {/* <img className='ml-96 -mt-80 ' src={playButton} alt="" /> */}
                    <div className='relative '>
                        <div className='absolute left-96 w-24 -mt-72 ml-16'>
                            <img src={playButton} alt="" />
                        </div>
                    </div>
            </div>
            <div>
                    
            </div>
        </div>
    );
};

export default Property;