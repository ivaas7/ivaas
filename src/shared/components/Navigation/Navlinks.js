import React from "react";
const Navlinks = (props) => {
  return (
    <>
      <header id="site-header" class="fixed-top">
        <section class="w3l-header-4">
          <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light">
              <h1>
                <a class="navbar-brand" href="/">
                  <img src={props.logo} alt="" width="80px" height="auto" />{" "}
                  ivaas
                </a>
              </h1>
              <button
                class="navbar-toggler collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="fas icon-expand fa-bars"></span>
                <span class="fas icon-close fa-times"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <a class="nav-link" href="/">
                      Home{" "}
                    </a>
                  </li>
                  <li class="nav-item @@about__active">
                    <a class="nav-link" href="/">
                      About
                    </a>
                  </li>
                  <li class="nav-item @@services__active">
                    <a class="nav-link" href="/">
                      Services
                    </a>
                  </li>
                  <li class="nav-item @@contact__active">
                    <a class="nav-link" href="/">
                      Contact
                    </a>
                  </li>
                </ul>
                {/* <ul class="navbar-nav search-right mt-lg-0 mt-2">
                  <li class="nav-item mr-2" title="Search">
                    <a href="/" class="btn search-search">
                      <span class="fa fa-search" aria-hidden="true"></span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="/"
                      class="btn btn-primary d-none d-lg-block btn-style mr-3"
                    >
                      Request a Quote
                    </a>
                  </li>
                </ul> */}

                {/* <!-- //toggle switch for light and dark theme -->
              <!-- search popup --> */}
                {/* <div id="search" class="pop-overlay">
                  <div class="popup">
                    <form action="error.html" method="GET" class="d-sm-flex">
                      <input
                        type="search"
                        placeholder="Search.."
                        name="search"
                        required="required"
                        autofocus
                      />
                      <button type="submit">
                        <span class="fa fa-search"></span>
                      </button>
                      <a class="close" href="#">
                        &times;
                      </a>
                    </form>
                  </div>
                </div> */}
                {/* <!-- /search popup --> */}
              </div>
              {/* <!-- toggle switch for light and dark theme --> */}
              {/* <div class="mobile-position">
                <nav class="navigation">
                  <div class="theme-switch-wrapper">
                    <label class="theme-switch" for="checkbox">
                      <input type="checkbox" id="checkbox" />
                      <div class="mode-container">
                        <i class="gg-sun"></i>
                        <i class="gg-moon"></i>
                      </div>
                    </label>
                  </div>
                </nav>
              </div> */}
            </nav>
          </div>
        </section>
      </header>
    </>
  );
};

export default Navlinks;
