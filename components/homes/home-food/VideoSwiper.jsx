"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

const videos = [
  { id: 1, src: "/videos/video1.mp4" },
  { id: 2, src: "/videos/video2.mp4" },
  { id: 3, src: "/videos/video3.mp4" },
  { id: 4, src: "/videos/video4.mp4" },
  { id: 5, src: "/videos/video2.mp4" },
  { id: 6, src: "/videos/video3.mp4" },
  { id: 7, src: "/videos/video1.mp4" },
  { id: 8, src: "/videos/video4.mp4" },
  { id: 9, src: "/videos/video3.mp4" },
];

const VideoSwiper = () => {
  return (
    <>
    <div
          className="flat-title text-center wow fadeInUp"
          data-wow-delay="0s"
        >
          <span className="title" style={{fontSize:"40px",color:"#A31D1D",fontWeight:"700"}}>Taste the Tradition, Watch the Craft</span>
          <span className="text-gray-700 block" style={{fontSize:"20px"}}>"Watch our journey unfold—where age-old recipes meet passion, perfection, and pure indulgence."</span>
        </div>
    <div className="video-swiper-container">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={2} /* Adjust for smaller screens */
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        breakpoints={{
          640: { slidesPerView: 4 }, // Medium screens
          1024: { slidesPerView: 6 }, // Large screens
        }}
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
            <div className="video-wrapper">
              <video src={video.src} autoPlay loop muted playsInline />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
};

export default VideoSwiper;
