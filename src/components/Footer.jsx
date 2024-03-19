import React from "react";
import { Link } from "react-router-dom";
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Footer = () => {
  const openGoogleMaps = () => {
    const address =
      "Parihar crane service, Shop no 6, kochar glass chauraha, Sector A, Govindpura, Bhopal, Madhya Pradesh 462023";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div className="w-full h-[30vh] flex p-3 bg-gray-900 md:h-[20vh]" id="contact-section">
      <div className="footer-top  w-[40%] h-full text-zinc-50 border-r-2 p-2">
        <h1 className="font-semibold leading-none">Parihar Crane Service</h1>
        <p className="text-sm mt-2 leading-none font-light">
          Elevating projects with top-quality crane rentals and experienced
          operators for safe and efficient lifting solutions.
        </p>
      </div>
      <div className="footer-btm w-[60%] h-full flex justify-between px-2 text-zinc-50 overflow-hidden md:justify-evenly">
        <div>
          <h1>Company</h1>
          <ol className="font-light underline">
            <li>
              <Link onClick={() => scrollToSection("home-section")}>Home</Link>
            </li>
            <li>
              <Link onClick={() => scrollToSection("about-section")}>
                About
              </Link>
            </li>
            <li>
              <Link onClick={() => scrollToSection("services-section")}>
                 Service
              </Link>
            </li>
            <li>
              <Link onClick={() => scrollToSection("projects-section")}>
                Project
              </Link>
            </li>
            <li>
              <Link onClick={() => scrollToSection("testimonials-section")}>
                Testimonials
              </Link>
            </li>
          </ol>
        </div>

        <div>
          <h1>Get In Touch</h1>
          <ol className="font-light underline">
            <li onClick={openGoogleMaps}>Get Location</li>
            <li>
              <a href="tel:+917415356540">+91 74153 56540</a>
            </li>
            <li>
              <a href="mailto:dsingh12319@gmail.com">dsingh12319@gmail.com</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Footer;
