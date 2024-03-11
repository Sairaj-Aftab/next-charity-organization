import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-lg">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <Image
            src={logo}
            width={500}
            height={500}
            alt="Kind Heart Charity"
            className="logo img-fluid"
          />
          <span>
            Kind Heart Charity
            <small>Non-profit Organization</small>
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link click-scroll" href="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link click-scroll"
                href="/#our-story-section"
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link click-scroll" href="/#cause-section">
                Causes
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link click-scroll" href="/#volunter-section">
                Volunteer
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link click-scroll" href="/#news-listing">
                News
              </Link>
            </li>
            {/* <li className="nav-item dropdown">
              <Link
                className="nav-link click-scroll dropdown-toggle"
                href="/#news-listing"
                id="navbarLightDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                News
              </Link>

              <ul
                className="dropdown-menu dropdown-menu-light"
                aria-labelledby="navbarLightDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" href="/newsdetails/jfkdf43">
                    News Detail
                  </Link>
                </li>
              </ul>
            </li> */}

            <li className="nav-item">
              <Link className="nav-link click-scroll" href="/#section_6">
                Contact
              </Link>
            </li>

            <li className="nav-item ms-3">
              <Link
                className="nav-link custom-btn custom-border-btn btn"
                href="/donate"
              >
                Donate
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
