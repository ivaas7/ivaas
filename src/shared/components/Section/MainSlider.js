import React from "react";
import "./../../Css/style.css";

const MainSlider = () => {
  return (
    <>
      <div className="container-fluid main-header-box">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="https://img.freepik.com/free-photo/visa-application-composition-with-canadian-flag_23-2149117799.jpg"
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="https://img.freepik.com/free-photo/visa-application-composition-with-canadian-flag_23-2149117799.jpg"
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="https://img.freepik.com/free-photo/visa-application-composition-with-canadian-flag_23-2149117799.jpg"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <section class="wthree-row py-5 about-main" id="about">
        <div class="container py-lg-5 py-md-4 py-2">
          <div class="row">
            <div class="col-lg-4 mb-lg-0 mb-5">
              <h3 class="title-small mb-2">
                Specialized in doing Tourist visa applications for different
                countries.
              </h3>
              <h3 class="title-big">IVAAS OUTSOURCING</h3>
              <p class="pt-4">
                is the fastest growing Immigration company specialized in
                providing services for people who are looking to migrate or
                settle in Canada, Australia, Europe. It is a one the leading
                Immigration Firm in India and trust worthy brand in Immigration
                Industry. We are specialized in Visa application for different
                countries.
              </p>
              <a
                href="about.html"
                class="btn btn-style btn-primary mt-lg-5 mt-4"
              >
                Read More
              </a>
            </div>
            <div class="col-lg-4 col-md-6 text-center">
              <div class="agileits-banner-info4">
                <img
                  src="https://img.freepik.com/free-photo/full-shot-woman-travel-concept_23-2149153259.jpg"
                  alt="follow"
                  class="img-fluid radius-image"
                />
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mt-md-0 mt-4">
              <span class="fa fa-quote-left" aria-hidden="true"></span>
              <p class="py-4 pl-3 d-inline about-right-text">
                Our motto is to give you the reliable and satisfactory service
                for your visa application. We have a team of visa experts who
                are specialized in filing applications for different countries
                as per the criteria. We have Knowledge about the application for
                most of Countries to apply for visa.
              </p>
              <h5 class="abt-right">
                Our Sevices are Affordable, Seamless &amp; Swiftly process
              </h5>
              <hr />
              <p class="">
                We're the best option for Canada Permanent visa application.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSlider;
