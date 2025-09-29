import React from "react";
import { Search, MapPin, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroSection: React.FC = () => {
  return (
    <section className="relative text-white py-20">
      
     <Swiper
  modules={[Autoplay, Pagination, Navigation]}
  autoplay={{ delay: 4000, disableOnInteraction: false }}
  pagination={{ clickable: true }}
  navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
  loop
  className="absolute inset-0 h-full w-full"
>
  {/* Slide 1 */}
  <SwiperSlide>
    <img
      src="/images/flights/flight1.jpg"
      alt="Flight 1"
      className="w-full h-full object-cover"
    />
  </SwiperSlide>

  {/* Slide 2 */}
  <SwiperSlide>
    <img
      src="/images/flights/flight2.jpg"
      alt="Flight 2"
      className="w-full h-full object-cover"
    />
  </SwiperSlide>

  {/* Slide 3 */}
  <SwiperSlide>
    <img
      src="/images/flights/flight3.jpg"
      alt="Flight 3"
      className="w-full h-full object-cover"
    />
  </SwiperSlide>

  {/* Arrows */}
  <div className="swiper-button-prev !text-white !w-12 !h-12 !left-4 after:!hidden flex items-center justify-center bg-black/40 rounded-full hover:bg-black/70 transition">
    <span className="text-2xl">‹</span>
  </div>
  <div className="swiper-button-next !text-white !w-12 !h-12 !right-4 after:!hidden flex items-center justify-center bg-black/40 rounded-full hover:bg-black/70 transition">
    <span className="text-2xl">›</span>
  </div>
</Swiper>


   
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Discover Your Next
          <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Adventure
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
          Book flights, hotels, trains, and holiday packages at the best prices.
          Your perfect journey starts here.
        </p>

        
        <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1 relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Where would you like to go?"
                className="w-full pl-12 pr-4 py-4 text-gray-700 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              />
            </div>
            <button className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 font-semibold text-lg">
              <Search className="w-5 h-5" />
              <span>Search</span>
            </button>
          </div>
        </div>

      
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold">2M+</div>
            <div className="text-sm md:text-base opacity-80">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold">500K+</div>
            <div className="text-sm md:text-base opacity-80">Hotels Worldwide</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold">200+</div>
            <div className="text-sm md:text-base opacity-80">Destinations</div>
          </div>
          <div className="text-center flex flex-col items-center">
            <div className="flex items-center space-x-1">
              <span className="text-2xl md:text-3xl font-bold">4.8</span>
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
            </div>
            <div className="text-sm md:text-base opacity-80">User Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
