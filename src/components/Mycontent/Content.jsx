import React from 'react';
import video from '../../assets/imgs/video.mp4';

const Content = () => {
  return (
    <section className="flex justify-center items-center py-20">
      <video src={video} controls type="video/mp4" className=" w-2/3" />
    </section>
  );
};

export default Content;
