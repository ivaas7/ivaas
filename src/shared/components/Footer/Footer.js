import React from "react";
import "./../../Css/style.css";

const Footer = () => {
  return (
    <>
      <footer class="py-5">
        <div class="container py-lg-4 py-2">
          <div class="row footer-top">
            <div class="col-lg-4 footer-grid_section_1its footer-text">
              <div class="footer-title">
                <h3>About Us</h3>
              </div>
              <p class="mt-lg-4 mt-3 mb-4 pb-lg-2">
                Our excellent track record, quality service and fair pricing
                validate the same and we believe to establish long lasting
                relationship with our clients.
              </p>
              {/* <a href="/" class=" link-style p-0">
                Get a Quote
                <span class="fa fa-chevron-right"></span>
              </a> */}
            </div>
            <div class="col-lg-4 col-md-6 footer-grid_section_1its mt-lg-0 mt-5">
              <div class="footer-title">
                <h3>Contact Us</h3>
              </div>
              <div class="footer-text mt-4">
                <p>
                  <strong>Address :</strong> Delhi, India.
                </p>
                <p class="my-2">
                  <strong>Phone :</strong>{" "}
                  <a href="tel:83687 73751">83687 73751</a>
                </p>
                <p>
                  <strong>Email :</strong>{" "}
                  <a href="mailto:mehrahimashi3@gmail.com">
                    mehrahimashi3@gmail.com
                  </a>
                </p>
                {/* <ul class="top-right-info mt-4">
                  <li class="facebook-w3">
                    <a href="#facebbok">
                      <span class="fa fa-facebook-f"></span>
                    </a>
                  </li>
                  <li class="twitter-w3">
                    <a href="#twitter">
                      <span class="fa fa-twitter"></span>
                    </a>
                  </li>
                  <li class="google-w3">
                    <a href="#google">
                      <span class="fa fa-google-plus"></span>
                    </a>
                  </li>
                  <li class="dribble-w3">
                    <a href="#dribble">
                      <span class="fa fa-dribbble"></span>
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
            <div class="col-lg-4 col-md-6 footer-grid_section_1its footer-text mt-lg-0 mt-5">
              <div class="footer-title">
                <h3>Our Services</h3>
              </div>
              <ul className="ivaas-servies mt-4">
                <li>
                  <a href="/">Canada PR</a>
                </li>
                <li>
                  <a href="/">Canada Spouse Dependent</a>
                </li>
                <li>
                  <a href="/">Canada Super Visa</a>
                </li>
                <li>
                  <a href="/">UK Tourist</a>
                </li>
                <li>
                  <a href="/">USA Tourist</a>
                </li>
                <li>
                  <a href="/">Schengen Tourist</a>
                </li>
              </ul>
              {/* <div class="info-form-right mt-4 p-0">
                <p class="mb-4">
                  Enter your email and receive the latest news, updates and
                  special offers from us.
                </p>
                <form action="#" method="post">
                  <div class="form-group mb-2">
                    <input
                      type="email"
                      class="form-control"
                      name="Email"
                      placeholder="Email"
                      required=""
                    />
                  </div>
                  <button
                    type="submit"
                    class="btn btn-style btn-primary w-100 d-block ml-auto"
                  >
                    Subscribe
                  </button>
                </form>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
      <div class="cpy-right text-center py-4">
        <p>
          © 2022. All rights reserved | Design by{" "}
          <a href="http://ivaasoutsourcing.com"> IVAAS</a>{" "}
        </p>
      </div>
      <button onclick="topFunction()" id="movetop" title="Go to top">
        <span class="fas fa-level-up" aria-hidden="true"></span>
      </button>
    </>
  );
};

export default Footer;
