import Image from "next/image";
import img from "@/assets/images/portrait-volunteer-who-organized-donations-charity.jpg";

function AboutSection() {
  return (
    <section className="about-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-5 col-12">
            <Image
              src={img}
              sizes="100vw"
              alt="Kind Heart Charity"
              className="about-image ms-lg-auto bg-light shadow-lg img-fluid"
            />
          </div>

          <div className="col-lg-5 col-md-7 col-12">
            <div className="custom-text-block">
              <h2 className="mb-0">Sandy Chan</h2>

              <p className="text-muted mb-lg-4 mb-md-4">Co-Founding Partner</p>

              <p>
                Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg
                kohm tokito Professional charity theme based
              </p>

              <p>
                You are not allowed to redistribute this template ZIP file on
                any other template collection website. Please contact TemplateMo
                for more information.
              </p>

              <ul className="social-icon mt-4">
                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-twitter"></a>
                </li>

                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-facebook"></a>
                </li>

                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-instagram"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
