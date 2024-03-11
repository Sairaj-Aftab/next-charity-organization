import Link from "next/link";

function CtaSection() {
  return (
    <section className="cta-section section-padding section-bg">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-5 col-12 ms-auto">
            <h2 className="mb-0">
              Make an impact. <br /> Save lives.
            </h2>
          </div>

          <div className="col-lg-5 col-12">
            <Link href="/donate" className="me-4">
              Make a donation
            </Link>

            <Link
              href="/#volunter-section"
              className="custom-btn btn smoothscroll"
            >
              Become a volunteer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
