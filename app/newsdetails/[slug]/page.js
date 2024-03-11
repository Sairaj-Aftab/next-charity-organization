import Image from "next/image";
import img from "@/assets/images/news/medium-shot-volunteers-with-clothing-donations.jpg";
import img2 from "@/assets/images/news/africa-humanitarian-aid-doctor.jpg";
import img3 from "@/assets/images/news/close-up-happy-people-working-together.jpg";
import img4 from "@/assets/images/avatar/studio-portrait-emotional-happy-funny.jpg";
import img5 from "@/assets/images/avatar/pretty-blonde-woman-wearing-white-t-shirt.jpg";
import img6 from "@/assets/images/avatar/portrait-young-redhead-bearded-male.jpg";
import img7 from "@/assets/images/news/africa-humanitarian-aid-doctor.jpg";
import img8 from "@/assets/images/news/close-up-happy-people-working-together.jpg";
import NewsListing from "@/components/NewsListing";
import NewsSection from "@/components/NewsSection";

function NewsDetails() {
  return (
    <main>
      <section className="news-detail-header-section text-center">
        <div className="section-overlay"></div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <h1 className="text-white">News Detail</h1>
            </div>
          </div>
        </div>
      </section>

      <NewsSection />

      <NewsListing title="Related news" />
    </main>
  );
}

export default NewsDetails;
