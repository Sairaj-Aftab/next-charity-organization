"use client";
import Image from "next/image";
import img from "@/assets/images/causes/group-african-kids-paying-attention-class.jpg";
import img2 from "@/assets/images/causes/poor-child-landfill-looks-forward-with-hope.jpg";
import img3 from "@/assets/images/causes/african-woman-pouring-water-recipient-outdoors.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";

function CauseSection() {
  return (
    <section className="section-padding" id="cause-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12 text-center mb-4">
            <h2>Our Causes</h2>
          </div>
          <Swiper
            breakpoints={{
              320: { slidesPerView: 1 }, // Small screens (e.g., mobile phones)
              576: { slidesPerView: 1 }, // Medium screens (e.g., tablets)
              768: { slidesPerView: 2 }, // Larger screens (e.g., small laptops)
              992: { slidesPerView: 3 }, // Desktop screens
            }}
            loop={true}
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper swiper-cause"
          >
            <SwiperSlide className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
              <div className="custom-block-wrap">
                <Image
                  src={img}
                  sizes="100vw"
                  alt="Kind Heart Charity"
                  className="custom-block-image img-fluid"
                />

                <div className="custom-block">
                  <div className="custom-block-body">
                    <h5 className="mb-3">Children Education</h5>

                    <p>
                      Lorem Ipsum dolor sit amet, consectetur adipsicing kengan
                      omeg kohm tokito
                    </p>

                    <div className="progress mt-4">
                      <div
                        className="progress-bar w-75"
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>

                    <div className="d-flex align-items-center my-2">
                      <p className="mb-0">
                        <strong>Raised:</strong>
                        $18,500
                      </p>

                      <p className="ms-auto mb-0">
                        <strong>Goal:</strong>
                        $32,000
                      </p>
                    </div>
                  </div>

                  <a href="donate.html" className="custom-btn btn">
                    Donate now
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
              <div className="custom-block-wrap">
                <Image
                  src={img2}
                  sizes="100vw"
                  alt="Kind Heart Charity"
                  className="custom-block-image img-fluid"
                />

                <div className="custom-block">
                  <div className="custom-block-body">
                    <h5 className="mb-3">Poverty Development</h5>

                    <p>
                      Sed leo nisl, posuere at molestie ac, suscipit auctor
                      mauris. Etiam quis metus tempor
                    </p>

                    <div className="progress mt-4">
                      <div
                        className="progress-bar w-50"
                        role="progressbar"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>

                    <div className="d-flex align-items-center my-2">
                      <p className="mb-0">
                        <strong>Raised:</strong>
                        $27,600
                      </p>

                      <p className="ms-auto mb-0">
                        <strong>Goal:</strong>
                        $60,000
                      </p>
                    </div>
                  </div>

                  <a href="donate.html" className="custom-btn btn">
                    Donate now
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
              <div className="custom-block-wrap">
                <Image
                  src={img3}
                  sizes="100vw"
                  alt="Kind Heart Charity"
                  className="custom-block-image img-fluid"
                />

                <div className="custom-block">
                  <div className="custom-block-body">
                    <h5 className="mb-3">Supply drinking water</h5>

                    <p>
                      Orci varius natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus
                    </p>

                    <div className="progress mt-4">
                      <div
                        className="progress-bar w-100"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>

                    <div className="d-flex align-items-center my-2">
                      <p className="mb-0">
                        <strong>Raised:</strong>
                        $84,600
                      </p>

                      <p className="ms-auto mb-0">
                        <strong>Goal:</strong>
                        $100,000
                      </p>
                    </div>
                  </div>

                  <a href="donate.html" className="custom-btn btn">
                    Donate now
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
              <div className="custom-block-wrap">
                <Image
                  src={img2}
                  sizes="100vw"
                  alt="Kind Heart Charity"
                  className="custom-block-image img-fluid"
                />

                <div className="custom-block">
                  <div className="custom-block-body">
                    <h5 className="mb-3">Poverty Development</h5>

                    <p>
                      Sed leo nisl, posuere at molestie ac, suscipit auctor
                      mauris. Etiam quis metus tempor
                    </p>

                    <div className="progress mt-4">
                      <div
                        className="progress-bar w-50"
                        role="progressbar"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>

                    <div className="d-flex align-items-center my-2">
                      <p className="mb-0">
                        <strong>Raised:</strong>
                        $27,600
                      </p>

                      <p className="ms-auto mb-0">
                        <strong>Goal:</strong>
                        $60,000
                      </p>
                    </div>
                  </div>

                  <a href="donate.html" className="custom-btn btn">
                    Donate now
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="custom-block-wrap">
              <Image
                src={img}
                sizes="100vw"
                alt="Kind Heart Charity"
                className="custom-block-image img-fluid"
              />

              <div className="custom-block">
                <div className="custom-block-body">
                  <h5 className="mb-3">Children Education</h5>

                  <p>
                    Lorem Ipsum dolor sit amet, consectetur adipsicing kengan
                    omeg kohm tokito
                  </p>

                  <div className="progress mt-4">
                    <div
                      className="progress-bar w-75"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>

                  <div className="d-flex align-items-center my-2">
                    <p className="mb-0">
                      <strong>Raised:</strong>
                      $18,500
                    </p>

                    <p className="ms-auto mb-0">
                      <strong>Goal:</strong>
                      $32,000
                    </p>
                  </div>
                </div>

                <a href="donate.html" className="custom-btn btn">
                  Donate now
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="custom-block-wrap">
              <Image
                src={img2}
                sizes="100vw"
                alt="Kind Heart Charity"
                className="custom-block-image img-fluid"
              />

              <div className="custom-block">
                <div className="custom-block-body">
                  <h5 className="mb-3">Poverty Development</h5>

                  <p>
                    Sed leo nisl, posuere at molestie ac, suscipit auctor
                    mauris. Etiam quis metus tempor
                  </p>

                  <div className="progress mt-4">
                    <div
                      className="progress-bar w-50"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>

                  <div className="d-flex align-items-center my-2">
                    <p className="mb-0">
                      <strong>Raised:</strong>
                      $27,600
                    </p>

                    <p className="ms-auto mb-0">
                      <strong>Goal:</strong>
                      $60,000
                    </p>
                  </div>
                </div>

                <a href="donate.html" className="custom-btn btn">
                  Donate now
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="custom-block-wrap">
              <Image
                src={img3}
                sizes="100vw"
                alt="Kind Heart Charity"
                className="custom-block-image img-fluid"
              />

              <div className="custom-block">
                <div className="custom-block-body">
                  <h5 className="mb-3">Supply drinking water</h5>

                  <p>
                    Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus
                  </p>

                  <div className="progress mt-4">
                    <div
                      className="progress-bar w-100"
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>

                  <div className="d-flex align-items-center my-2">
                    <p className="mb-0">
                      <strong>Raised:</strong>
                      $84,600
                    </p>

                    <p className="ms-auto mb-0">
                      <strong>Goal:</strong>
                      $100,000
                    </p>
                  </div>
                </div>

                <a href="donate.html" className="custom-btn btn">
                  Donate now
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default CauseSection;
