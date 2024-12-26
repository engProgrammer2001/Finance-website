import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import { FaStar, FaRegStar } from "react-icons/fa"; 

// Import SwiperCore and register the modules
SwiperCore.use([Autoplay, Navigation, Pagination]);

const Testimonial = () => {
  const testimonials = [
    {
      image: "/assets/Testimonial/t2.png",
      name: "Rohit Kumar",
      message:
        "I got a personal loan through Samast Bharat Finance, and the process was very smooth. Their team is helpful and quick. Thank you!",
      service: "Personal Loan",
      rating: 5,
    },
    {
      image: "/assets/Testimonial/t6.png",
      name: "Ashok Singh",
      message:
        "Samast Bharat Finance helped me secure a loan for my business. The entire experience was easy, and I am happy with their service.",
      service: "Business Loan",
      rating: 4,
    },
    {
      image: "/assets/Testimonial/t3.png",
      name: "Sushma Singha",
      message:
        "I wanted to save for my child’s education. Their savings plan is simple and fits my needs perfectly. Highly recommended!",
      service: "Savings Plan",
      rating: 5,
    },
    {
      image: "/assets/Testimonial/t5.png",
      name: "Sulekha Singh",
      message:
        "Their loan repayment process is very convenient, and the support team is always there to help. Great service!",
      service: "Loan Repayment Assistance",
      rating: 4,
    },
    {
      image: "/assets/Testimonial/7.png",
      name: "Krishna Bansal",
      message:
        "Thanks to FB-Finance, I now have a better understanding of how to invest my money. Their team explained everything very clearly.",
      service: "Investment Plans",
      rating: 5,
    },
    {
      image: "/assets/Testimonial/t8.jpeg",
      name: "Nagendra Marathi",
      message:
        "I used their EMI calculator to plan my loan. It’s super easy to use and saved me a lot of time. Great tool!",
      service: "EMI Calculator",
      rating: 4,
    },
    {
      image: "/assets/Testimonial/t11.png",
      name: "Rajni Rathor",
      message:
        "Their home loan process was quick and hassle-free. I am very happy with my decision to choose Samast Bharat Finance.",
      service: "Home Loan",
      rating: 5,
    },
    {
      image: "/assets/Testimonial/t4.png",
      name: "Suneeta Baghel",
      message:
        "Samast Bharat Finance has excellent customer service. They guided me step-by-step for my car loan. Highly satisfied!",
      service: "Car Loan",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-slate-700" />);
      }
    }
    return <div className="flex space-x-1 mb-2">{stars}</div>;
  };
  return (
    <div className="testimonial-section px-6 lg:py-0 text-white">
      <h2 className="text-center text-4xl font-bold mb-8 text-shadow">
        What Our Clients Say
      </h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 2500 }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-slide">
            <div className="flex flex-col bg-slate-300 p-6 rounded-lg shadow-2xl hover:shadow-xl transition-shadow duration-300">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white shadow-lg"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {testimonial.name}
              </h3>
              {renderStars(testimonial.rating)}
              <p className="text-lg text-gray-600 italic mb-4">
                {testimonial.message}
              </p>
              <span className="text-sm text-gray-500">
                Service: {testimonial.service}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
