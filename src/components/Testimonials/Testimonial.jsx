import React, { useEffect } from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import AOS from "aos";
import StarRatings from "react-star-ratings"; // Importing the star ratings component

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100 });
  }, []);

  const clients = [
    {
      img: profilePic1,
      own: "Owner of E.Commerce Web",
      review:
        "Saqib Akhter exceeded my expectations with his exceptional social media post designs. His creativity and professionalism were evident in every detail, delivering stunning visuals that perfectly captured my brand's essence. Highly recommended!",
      rating: 5, // Rating out of 5
    },
    {
      img: profilePic2,
      own: "Facebook Content Creator",
      review:
        "Saqib Akhter did an outstanding job designing my Facebook posts! His creativity and attention to detail perfectly captured my brand's essence. The posts are eye-catching and professional, delivered on time and beyond my expectations.",
      rating: 4.5, // Rating out of 5
    },
    {
      img: profilePic3,
      own: "Youtuber",
      review:
        "Saqib Akhter nailed my YouTube thumbnail! It's eye-catching, on-brand, and exceeded my expectations. Highly recommended!",
      rating: 3.8, // Rating out of 5
    },
    {
      img: profilePic4,
      own: "Auton Software House",
      review:
        "Saqib Akhter designed an outstanding web interface for me! It’s sleek, user-friendly, and perfectly aligned with my vision. I’m thrilled with the results and highly recommend his expertise!",
      rating: 4, // Rating out of 5
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial" data-aos="fade-right">
      <div className="t-heading">
        <span>Clients </span>
        <span>FeedBack </span>
        <span>For My Service...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        speed={1000}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.own}</span>
                <StarRatings
                  rating={client.rating}
                  starRatedColor="orange"
                  numberOfStars={5}
                  name='rating'
                  starDimension="20px"
                  starSpacing="2px"
                />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;


