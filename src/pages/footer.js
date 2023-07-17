import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-white text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div>
            <a href="https://m.facebook.com/login/?locale=en_GB" className="me-4 link-secondary">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/i/flow/login" className="me-4 link-secondary">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.google.com/" className="me-4 link-secondary">
              <i className="fab fa-google"></i>
            </a>
            <a href="https://www.instagram.com/accounts/login/" className="me-4 link-secondary">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/kinza-amjad-b1158826a/" className="me-4 link-secondary">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/login" className="me-4 link-secondary">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary"></i> special offers
                </h6>
                <p>
              Enjoy discounts and special offers designed to make your comfortable stay,more afffordable.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">contact us</h6>
                <p>
                  <a href="#!" className="text-reset">
                    +92 3333 55555 66
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                  033477888888
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    kinza.amjad#@gamil.com
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                  
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">meny link</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Place order
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Need Help?
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3 text-secondary"></i> Lahore,
                  Pakistan, 55745
                </p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary"></i>
                  kinza.amjad@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3 text-secondary"></i> +92-00000000
                </p>
                <p>
                  <i className="fas fa-print me-3 text-secondary"></i> + 01 234
                  567 89
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
        >
          © 2021 Copyright || KINZA Amjad
        </div>
      </footer>
    </>
  );
};

export default Footer;
