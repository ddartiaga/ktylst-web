import { Metadata } from "next";
import Script from 'next/script'
import Link from "next/link";

import "@/public/assets/css/plugins.css";
import "@/public/assets/css/style.css";
import Address from "./contact/Address";
import PhoneNumber from "./contact/PhoneNumber";

export const metadata: Metadata = {
  title: {
    template: "%s | Katalyst IT Services",
    default: "Katalyst IT Services | IT Equipments, Web & Mobile App Development & Cloud Consulting, System Maintenance & Skilled Manpower",
  },
  description: "Katalyst IT Services delivers end-to-end solutions—including IT equipment supply, web and mobile app development, cloud migration and consulting, system maintenance, and skilled IT manpower—to help businesses and organizations streamline operations and drive growth.",
  keywords: ["IT Equipments", "Uninterruptible Power Supply", "UPS", "Laptop", "Desktop", "Server", "Printer", "Scanner", "Web & Mobile App Development", "Cloud Migration", "Cloud Computing", "AWS Cloud Consulting", "IT Consulting", "System Maintenance", "Skilled Manpower"],
  authors: [{ name: "Katalyst IT Services", url: "https://katalysttechservices.com" }],
  creator: "Katalyst IT Services",
  publisher: "Katalyst IT Services",
}


export default async function RootLayout({ children }: { children: React.ReactNode }) {


  return (<html lang="en">
    <body>
      <div className="content-wrapper">
        <header className="wrapper bg-soft-primary">
          <nav className="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark caret-none">
            <div className="container flex-lg-row flex-nowrap align-items-center">
              <div className="navbar-brand w-100">
                <a href="./index.html">
                  {/* <img class="logo-dark" src="./assets/img/logo.png" srcset="./assets/img/logo@2x.png 2x" alt="" /> */}
                  <h6 className="logo-dark">KATALYST</h6>
                  {/* <img class="logo-light" src="./assets/img/logo-light.png" srcset="./assets/img/logo-light@2x.png 2x"
          alt="" /> */}
                  <h6 className="logo-light text-white">KATALYST</h6>
                </a>
              </div>
              <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
                <div className="offcanvas-header d-lg-none">
                  <h3 className="text-white fs-30 mb-0">KATALYST</h3>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                </div>
                <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/about">
                        About
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Services
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-item"
                            href="services/ict-equipment.html"
                          >
                            ICT Equipment Supply
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-item"
                            href="services/manpower-services.html"
                          >
                            Manpower Services
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-item"
                            href="services/software-development.html"
                          >
                            Software Development
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/partner-program" >
                        Partner Program
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/contact" >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                  {/* /.navbar-nav */}
                  <div className="offcanvas-footer d-lg-none">
                    <div>
                      <a
                        href="mailto:katalysttechservices@gmail.com"
                        className="link-inverse"
                      >
                        katalysttechservices@gmail.com
                      </a>
                      <br /> 0917-872-1024 <br />
                      {/* <nav class="nav social social-white mt-4">
              <a href="#"><i class="uil uil-twitter"></i></a>
              <a href="#"><i class="uil uil-facebook-f"></i></a>
              <a href="#"><i class="uil uil-dribbble"></i></a>
              <a href="#"><i class="uil uil-instagram"></i></a>
              <a href="#"><i class="uil uil-youtube"></i></a>
            </nav> */}
                      {/* /.social */}
                    </div>
                  </div>
                  {/* /.offcanvas-footer */}
                </div>
                {/* /.offcanvas-body */}
              </div>
              {/* /.navbar-collapse */}
              <div className="navbar-other w-100 d-flex ms-auto">
                <ul className="navbar-nav flex-row align-items-center ms-auto">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvas-info"
                    >
                      <i className="uil uil-info-circle" />
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <a
                      className="nav-link"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvas-search"
                    >
                      <i className="uil uil-search" />
                    </a>
                  </li> */}
                  <li className="nav-item d-lg-none">
                    <button className="hamburger offcanvas-nav-btn">
                      <span />
                    </button>
                  </li>
                </ul>
                {/* /.navbar-nav */}
              </div>
              {/* /.navbar-other */}
            </div>
            {/* /.container */}
          </nav>
          {/* /.navbar */}
          <div
            className="offcanvas offcanvas-end text-inverse"
            id="offcanvas-info"
            data-bs-scroll="true"
          >
            <div className="offcanvas-header">
              <h3 className="text-white fs-30 mb-0">Katalyst IT Services</h3>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body pb-6">
              <div className="widget mb-8">
                Welcome to <strong>Katalyst IT Services</strong> – your partner for
                innovation, growth, and digital transformation.
                <p className="mb-7 mt-7">
                  We provide cutting-edge ICT equipments, expert software development,
                  IT consulting, and manpower services to empower businesses in the
                  digital age.
                </p>
              </div>
              {/* /.widget */}
              <div className="widget mb-8">
                <h4 className="widget-title text-white mb-3">Contact Info</h4>
                <Address />
                <a href="mailto:>katalysttechservices@gmail.com">katalysttechservices@gmail.com</a>
                <PhoneNumber />
              </div>
              {/* /.widget */}
              <div className="widget mb-8">
                <h4 className="widget-title text-white mb-3">Learn More</h4>
                <ul className="list-unstyled">
                  {/* <li>
                    <a href="#">Our Story</a>
                  </li> */}
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/terms-and-conditions">Terms of Use</a>
                  </li>
                  <li>
                    <a href="/privacy-policy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </div>
              {/* /.widget */}
              {/* <div className="widget">
                <h4 className="widget-title text-white mb-3">Follow Us</h4>
                <nav className="nav social social-white">
                  <a href="#">
                    <i className="uil uil-twitter" />
                  </a>
                  <a href="#">
                    <i className="uil uil-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="uil uil-dribbble" />
                  </a>
                  <a href="#">
                    <i className="uil uil-instagram" />
                  </a>
                  <a href="#">
                    <i className="uil uil-youtube" />
                  </a>
                </nav>
              </div> */}
              {/* /.widget */}
            </div>
            {/* /.offcanvas-body */}
          </div>
          {/* /.offcanvas */}
          <div
            className="offcanvas offcanvas-top bg-light"
            id="offcanvas-search"
            data-bs-scroll="true"
          >
            <div className="container d-flex flex-row py-6">
              <form className="search-form w-100">
                <input
                  id="search-form"
                  type="text"
                  className="form-control"
                  placeholder="Type keyword and hit enter"
                />
              </form>
              {/* /.search-form */}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            {/* /.container */}
          </div>
          {/* /.offcanvas */}
        </header>
        {children}
      </div>
      <footer className="bg-navy text-inverse">
        <div className="container pt-12 pt-lg-6 pb-13 pb-md-15">
          <div className="row gy-6 gy-lg-0">
            <div className="col-md-4 col-lg-3">
              <div className="widget">
                <img
                  className="mb-4"
                  src="./assets/img/logo-light.png"
                  srcSet="./assets/img/logo-light@2x.png 2x"
                  alt=""
                />
                <p className="mb-4">
                  © KATALYST IT SERVICES<br className="d-none d-lg-block" />
                  All rights reserved.
                </p>
                {/* /.social */}
              </div>
              {/* /.widget */}
            </div>
            {/* /column */}
            <div className="col-md-4 col-lg-3">
              <div className="widget">
                <h4 className="widget-title text-white mb-3">Get in Touch</h4>
                <Address />
                <a href="mailto:#">katalysttechservices@gmail.com</a>
                <PhoneNumber />
              </div>
              {/* /.widget */}
            </div>
            {/* /column */}
            <div className="col-md-4 col-lg-3">
              <div className="widget">
                <h4 className="widget-title text-white mb-3">Learn More</h4>
                <ul className="list-unstyled  mb-0">
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="#">Our Story</a>
                  </li>
                  <li>
                    <a href="#">Projects</a>
                  </li>
                  <li>
                    <Link href="/terms-and-conditions">Terms and Conditions</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
              {/* /.widget */}
            </div>
            {/* /column */}
            <div className="col-md-12 col-lg-3">
              <div className="widget">
                <h4 className="widget-title text-white mb-3">Our Newsletter</h4>
                <p className="mb-5">
                  Subscribe to our newsletter to get our news &amp; deals delivered
                  to you.
                </p>
                <div className="newsletter-wrapper">
                  {/* Begin Mailchimp Signup Form */}
                  <div id="mc_embed_signup2">
                    <form
                      action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&id=b49ef47a9a"
                      method="post"
                      id="mc-embedded-subscribe-form2"
                      name="mc-embedded-subscribe-form"
                      className="validate dark-fields"
                      target="_blank"
                      noValidate={true}
                    >
                      <div id="mc_embed_signup_scroll2">
                        <div className="mc-field-group input-group form-floating">
                          <input
                            type="email"
                            defaultValue=""
                            name="EMAIL"
                            className="required email form-control"
                            placeholder="Email Address"
                            id="mce-EMAIL2"
                          />
                          <label htmlFor="mce-EMAIL2">Email Address</label>
                          <input
                            type="submit"
                            defaultValue="Join"
                            name="subscribe"
                            id="mc-embedded-subscribe2"
                            className="btn btn-primary "
                          />
                        </div>
                        <div id="mce-responses2" className="clear">
                          <div
                            className="response"
                            id="mce-error-response2"
                            style={{ display: "none" }}
                          />
                          <div
                            className="response"
                            id="mce-success-response2"
                            style={{ display: "none" }}
                          />
                        </div>
                        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                        <div
                          style={{ position: "absolute", left: "-5000px" }}
                          aria-hidden="true"
                        >
                          <input
                            type="text"
                            name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc"
                            tabIndex={-1}
                            defaultValue=""
                          />
                        </div>
                        <div className="clear" />
                      </div>
                    </form>
                  </div>
                  {/*End mc_embed_signup*/}
                </div>
                {/* /.newsletter-wrapper */}
              </div>
              {/* /.widget */}
            </div>
            {/* /column */}
          </div>
          {/*/.row */}
        </div>
        {/* /.container */}
      </footer>
      <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>

      <Script src="/assets/js/plugins.js" />
      <Script src="/assets/js/theme.js" />
    </body>
  </html>)
}