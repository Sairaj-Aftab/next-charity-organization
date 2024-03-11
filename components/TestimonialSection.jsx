// "use client";
// import Image from "next/image";
// import img from "@/assets/images/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg";
// import img2 from "@/assets/images/avatar/portrait-young-redhead-bearded-male.jpg";
// import img3 from "@/assets/images/avatar/pretty-blonde-woman-wearing-white-t-shirt.jpg";
// import img4 from "@/assets/images/avatar/studio-portrait-emotional-happy-funny.jpg";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// function TestimonialSection() {
//   return (
//     <section className="testimonial-section section-padding section-bg">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-8 col-12 mx-auto">
//             <h2 className="mb-lg-3">Happy Customers</h2>

//             <Swiper
//               loop={true}
//               slidesPerView={1}
//               spaceBetween={30}
//               autoplay={{
//                 delay: 2000,
//                 disableOnInteraction: true,
//               }}
//               // navigation={true}
//               modules={[Autoplay, Navigation]}
//               className="mySwiper"
//             >
//               <SwiperSlide className="carousel-inner">
//                 <div className="carousel-caption">
//                   <h4 className="carousel-title">
//                     Lorem Ipsum dolor sit amet, consectetur adipsicing kengan
//                     omeg kohm tokito charity theme
//                   </h4>

//                   <small className="carousel-name">
//                     <span className="carousel-name-title">Maria</span>, Boss
//                   </small>
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide className="carousel-inner">
//                 <div className="carousel-caption">
//                   <h4 className="carousel-title">
//                     Sed leo nisl, posuere at molestie ac, suscipit auctor mauris
//                     quis metus tempor orci
//                   </h4>

//                   <small className="carousel-name">
//                     <span className="carousel-name-title">Thomas</span>, Partner
//                   </small>
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide className="carousel-inner">
//                 <div className="custom-block-wrap">
//                   <Image
//                     src={img3}
//                     sizes="100vw"
//                     alt="Kind Heart Charity"
//                     className="custom-block-image img-fluid"
//                   />

//                   <div className="custom-block">
//                     <div className="custom-block-body">
//                       <h5 className="mb-3">Supply drinking water</h5>

//                       <p>
//                         Orci varius natoque penatibus et magnis dis parturient
//                         montes, nascetur ridiculus
//                       </p>

//                       <div className="progress mt-4">
//                         <div
//                           className="progress-bar w-100"
//                           role="progressbar"
//                           aria-valuenow="100"
//                           aria-valuemin="0"
//                           aria-valuemax="100"
//                         ></div>
//                       </div>

//                       <div className="d-flex align-items-center my-2">
//                         <p className="mb-0">
//                           <strong>Raised:</strong>
//                           $84,600
//                         </p>

//                         <p className="ms-auto mb-0">
//                           <strong>Goal:</strong>
//                           $100,000
//                         </p>
//                       </div>
//                     </div>

//                     <a href="donate.html" className="custom-btn btn">
//                       Donate now
//                     </a>
//                   </div>
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide className="carousel-inner">
//                 <div className="custom-block-wrap">
//                   <Image
//                     src={img2}
//                     sizes="100vw"
//                     alt="Kind Heart Charity"
//                     className="custom-block-image img-fluid"
//                   />

//                   <div className="custom-block">
//                     <div className="custom-block-body">
//                       <h5 className="mb-3">Poverty Development</h5>

//                       <p>
//                         Sed leo nisl, posuere at molestie ac, suscipit auctor
//                         mauris. Etiam quis metus tempor
//                       </p>

//                       <div className="progress mt-4">
//                         <div
//                           className="progress-bar w-50"
//                           role="progressbar"
//                           aria-valuenow="50"
//                           aria-valuemin="0"
//                           aria-valuemax="100"
//                         ></div>
//                       </div>

//                       <div className="d-flex align-items-center my-2">
//                         <p className="mb-0">
//                           <strong>Raised:</strong>
//                           $27,600
//                         </p>

//                         <p className="ms-auto mb-0">
//                           <strong>Goal:</strong>
//                           $60,000
//                         </p>
//                       </div>
//                     </div>

//                     <a href="donate.html" className="custom-btn btn">
//                       Donate now
//                     </a>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             </Swiper>
//             <div
//               id="testimonial-carousel"
//               className="carousel carousel-fade slide"
//               data-bs-ride="carousel"
//             >
//               <Swiper className="carousel-inner">
//                 <SwiperSlide className="carousel-item active">
//                   <div className="carousel-caption">
//                     <h4 className="carousel-title">
//                       Lorem Ipsum dolor sit amet, consectetur adipsicing kengan
//                       omeg kohm tokito charity theme
//                     </h4>

//                     <small className="carousel-name">
//                       <span className="carousel-name-title">Maria</span>, Boss
//                     </small>
//                   </div>
//                 </SwiperSlide>

//                 <SwiperSlide className="carousel-item">
//                   <div className="carousel-caption">
//                     <h4 className="carousel-title">
//                       Sed leo nisl, posuere at molestie ac, suscipit auctor
//                       mauris quis metus tempor orci
//                     </h4>

//                     <small className="carousel-name">
//                       <span className="carousel-name-title">Thomas</span>,
//                       Partner
//                     </small>
//                   </div>
//                 </SwiperSlide>

//                 <SwiperSlide className="carousel-item">
//                   <div className="carousel-caption">
//                     <h4 className="carousel-title">
//                       Lorem Ipsum dolor sit amet, consectetur adipsicing kengan
//                       omeg kohm tokito charity theme
//                     </h4>

//                     <small className="carousel-name">
//                       <span className="carousel-name-title">Jane</span>, Advisor
//                     </small>
//                   </div>
//                 </SwiperSlide>

//                 <SwiperSlide className="carousel-item">
//                   <div className="carousel-caption">
//                     <h4 className="carousel-title">
//                       Sed leo nisl, posuere at molestie ac, suscipit auctor
//                       mauris quis metus tempor orci
//                     </h4>

//                     <small className="carousel-name">
//                       <span className="carousel-name-title">Bob</span>,
//                       Entreprenuer
//                     </small>
//                   </div>
//                 </SwiperSlide>

//                 <ol className="carousel-indicators">
//                   <li
//                     data-bs-target="#testimonial-carousel"
//                     data-bs-slide-to="0"
//                     className="active"
//                   >
//                     <Image
//                       src={img}
//                       sizes="100vw"
//                       alt="Kind Heart Charity"
//                       className="img-fluid rounded-circle avatar-image"
//                     />
//                   </li>

//                   <li
//                     data-bs-target="#testimonial-carousel"
//                     data-bs-slide-to="1"
//                     className=""
//                   >
//                     <Image
//                       src={img2}
//                       sizes="100vw"
//                       alt="Kind Heart Charity"
//                       className="img-fluid rounded-circle avatar-image"
//                     />
//                   </li>

//                   <li
//                     data-bs-target="#testimonial-carousel"
//                     data-bs-slide-to="2"
//                     className=""
//                   >
//                     <Image
//                       src={img3}
//                       sizes="100vw"
//                       alt="Kind Heart Charity"
//                       className="img-fluid rounded-circle avatar-image"
//                     />
//                   </li>

//                   <li
//                     data-bs-target="#testimonial-carousel"
//                     data-bs-slide-to="3"
//                     className=""
//                   >
//                     <Image
//                       src={img4}
//                       sizes="100vw"
//                       alt="Kind Heart Charity"
//                       className="img-fluid rounded-circle avatar-image"
//                     />
//                   </li>
//                 </ol>
//               </Swiper>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default TestimonialSection;
