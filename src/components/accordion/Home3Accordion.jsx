import React from "react";

const Home3Accordion = () => {
  return (
    <>
      <div className="accordion-with-tab-section mb-120">
        <img
          src="/assets/img/home3/vector/accordion-with-tab-vector1.svg"
          alt=""
          className="vector1"
        />
        <img
          src="/assets/img/home3/vector/accordion-with-tab-vector2.svg"
          alt=""
          className="vector2"
        />
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="accordion-with-tab-img">
                <img src="/assets/img/home3/accordion-with-tab-img.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="accordion-with-tab-content">
                <h2>Why You Should Choose Our Travel Services.</h2>
                <div className="accordion-with-tab-wrap">
                  <ul
                    className="nav nav-pills"
                    id="pills-accordion-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="g-travel-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#g-travel"
                        type="button"
                        role="tab"
                        aria-controls="g-travel"
                        aria-selected="true"
                      >
                        General Travel
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="transportation-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#transportation"
                        type="button"
                        role="tab"
                        aria-controls="transportation"
                        aria-selected="false"
                      >
                        Transportation
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="payment-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#payment"
                        type="button"
                        role="tab"
                        aria-controls="payment"
                        aria-selected="false"
                      >
                        Payment
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-accordion-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="g-travel"
                      role="tabpanel"
                      aria-labelledby="g-travel-tab"
                    >
                      <div className="faq-content">
                        <div className="accordion" id="accordionTravel">
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="travelheadingOne"
                            >
                              <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#travelcollapseOne"
                                aria-expanded="true"
                                aria-controls="travelcollapseOne"
                              >
                                01. How do I book a trip with your agency?
                              </button>
                            </h2>
                            <div
                              id="travelcollapseOne"
                              className="accordion-collapse collapse show"
                              aria-labelledby="travelheadingOne"
                              data-bs-parent="#accordionTravel"
                            >
                              <div className="accordion-body">
                                Aptent taciti sociosqu ad litora torquent per
                                conubia nostra, per inci only Integer purus
                                onthis felis non aliquam.Mauris nec just vitae
                                ann auctor tol euismod sit amet non ipsul
                                growing this.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="travelheadingTwo"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#travelcollapseTwo"
                                aria-expanded="false"
                                aria-controls="travelcollapseTwo"
                              >
                                02. What payment methods do you accept?
                              </button>
                            </h2>
                            <div
                              id="travelcollapseTwo"
                              className="accordion-collapse collapse"
                              aria-labelledby="travelheadingTwo"
                              data-bs-parent="#accordionTravel"
                            >
                              <div className="accordion-body">
                                Aptent taciti sociosqu ad litora torquent per
                                conubia nostra, per inceptos only Integer purus
                                onthis placerat felis non aliquam.Mauris nec
                                justo vitae ante auctor tol euismod sit amet non
                                ipsul growing this Praesent commodo at massa
                                eget suscipit. Utani vitae enim velit.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="travelheadingThree"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#travelcollapseThree"
                                aria-expanded="false"
                                aria-controls="travelcollapseThree"
                              >
                                03. What is your cancellation policy?
                              </button>
                            </h2>
                            <div
                              id="travelcollapseThree"
                              className="accordion-collapse collapse"
                              aria-labelledby="travelheadingThree"
                              data-bs-parent="#accordionTravel"
                            >
                              <div className="accordion-body">
                                Aptent taciti sociosqu ad litora torquent per
                                conubia nostra, per inceptos only Integer purus
                                onthis placerat felis non aliquam.Mauris nec
                                justo vitae ante auctor tol euismod sit amet non
                                ipsul growing this Praesent commodo at massa
                                eget suscipit. Utani vitae enim velit.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="travelheadingFour"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#travelcollapseFour"
                                aria-expanded="false"
                                aria-controls="travelcollapseFour"
                              >
                                04. Can I make changes my reservation after
                                booking?
                              </button>
                            </h2>
                            <div
                              id="travelcollapseFour"
                              className="accordion-collapse collapse"
                              aria-labelledby="travelheadingFour"
                              data-bs-parent="#accordionTravel"
                            >
                              <div className="accordion-body">
                                Aptent taciti sociosqu ad litora torquent per
                                conubia nostra, per inceptos only Integer purus
                                onthis placerat felis non aliquam.Mauris nec
                                justo vitae ante auctor tol euismod sit amet non
                                ipsul growing this Praesent commodo at massa
                                eget suscipit. Utani vitae enim velit.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="transportation"
                      role="tabpanel"
                      aria-labelledby="transportation-tab"
                    >
                      <div className="faq-content">
                        <div className="accordion" id="accordionTransportation">
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="transportationheadingOne"
                            >
                              <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#transportationcollapseOne"
                                aria-expanded="true"
                                aria-controls="transportationcollapseOne"
                              >
                                01. How do I book a trip with your agency?
                              </button>
                            </h2>
                            <div
                              id="transportationcollapseOne"
                              className="accordion-collapse collapse show"
                              aria-labelledby="transportationheadingOne"
                              data-bs-parent="#accordionTransportation"
                            >
                              <div className="accordion-body">
                                Aptent taciti sociosqu ad litora torquent per
                                conubia nostra, per inci only Integer purus
                                onthis felis non aliquam.Mauris nec just vitae
                                ann auctor tol euismod sit amet non ipsul
                                growing this.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="transportationheadingTwo"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#transportationcollapseTwo"
                                aria-expanded="false"
                                aria-controls="transportationcollapseTwo"
                              >
                                02. What payment methods do you accept?
                              </button>
                            </h2>
                            <div
                              id="transportationcollapseTwo"
                              className="accordion-collapse collapse"
                              aria-labelledby="transportationheadingTwo"
                              data-bs-parent="#accordionTransportation"
                            >
                              <div className="accordion-body">
                                Aptent taciti sociosqu ad litora torquent per
                                conubia nostra, per inceptos only Integer purus
                                onthis placerat felis non aliquam.Mauris nec
                                justo vitae ante auctor tol euismod sit amet non
                                ipsul growing this Praesent commodo at massa
                                eget suscipit. Utani vitae enim velit.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="transportationheadingThree"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#transportationcollapseThree"
                                aria-expanded="false"
                                aria-controls="transportationcollapseThree"
                              >
                                03. What is your cancellation policy?
                              </button>
                            </h2>
                            <div
                              id="transportationcollapseThree"
                              className="accordion-collapse collapse"
                              aria-labelledby="transportationheadingThree"
                              data-bs-parent="#accordionTransportation"
                            >
                              <div className="accordion-body">
                                Aptent taciti sociosqu ad litora torquent per
                                conubia nostra, per inceptos only Integer purus
                                onthis placerat felis non aliquam.Mauris nec
                                justo vitae ante auctor tol euismod sit amet non
                                ipsul growing this Praesent commodo at massa
                                eget suscipit. Utani vitae enim velit.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="transportationheadingFour"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#transportationcollapseFour"
                                aria-expanded="false"
                                aria-controls="transportationcollapseFour"
                              >
                                04. Can I make changes my reservation after
                                booking?
                              </button>
                            </h2>
                            <div
                              id="transportationcollapseFour"
                              className="accordion-collapse collapse"
                              aria-labelledby="transportationheadingFour"
                              data-bs-parent="#accordionTransportation"
                            >
                              <div className="accordion-body">
                                Aptent taciti sociosqu ad litora torquent per
                                conubia nostra, per inceptos only Integer purus
                                onthis placerat felis non aliquam.Mauris nec
                                justo vitae ante auctor tol euismod sit amet non
                                ipsul growing this Praesent commodo at massa
                                eget suscipit. Utani vitae enim velit.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="payment"
                      role="tabpanel"
                      aria-labelledby="payment-tab"
                    >
                      <div className="faq-content">
                        <div className="accordion" id="accordionPayment">
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="paymentheadingOne"
                            >
                              <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#paymentcollapseOne"
                                aria-expanded="true"
                                aria-controls="paymentcollapseOne"
                              >
                                01. How do I book a trip with your agency?
                              </button>
                            </h2>
                            <div
                              id="paymentcollapseOne"
                              className="accordion-collapse collapse show"
                              aria-labelledby="paymentheadingOne"
                              data-bs-parent="#accordionPayment"
                            >
                              <div className="accordion-body">
                                Aptent taciti sociosqu ad litora torquent per
                                conubia nostra, per inci only Integer purus
                                onthis felis non aliquam.Mauris nec just vitae
                                ann auctor tol euismod sit amet non ipsul
                                growing this.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="paymentheadingTwo"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#paymentcollapseTwo"
                                aria-expanded="false"
                                aria-controls="paymentcollapseTwo"
                              >
                                02. What payment methods do you accept?
                              </button>
                            </h2>
                            <div
                              id="paymentcollapseTwo"
                              className="accordion-collapse collapse"
                              aria-labelledby="paymentheadingTwo"
                              data-bs-parent="#accordionPayment"
                            >
                              <div className="accordion-body">
                                Aptent taciti sociosqu ad litora torquent per
                                conubia nostra, per inceptos only Integer purus
                                onthis placerat felis non aliquam.Mauris nec
                                justo vitae ante auctor tol euismod sit amet non
                                ipsul growing this Praesent commodo at massa
                                eget suscipit. Utani vitae enim velit.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="paymentheadingThree"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#paymentcollapseThree"
                                aria-expanded="false"
                                aria-controls="paymentcollapseThree"
                              >
                                03. What is your cancellation policy?
                              </button>
                            </h2>
                            <div
                              id="paymentcollapseThree"
                              className="accordion-collapse collapse"
                              aria-labelledby="paymentheadingThree"
                              data-bs-parent="#accordionPayment"
                            >
                              <div className="accordion-body">
                                Aptent taciti sociosqu ad litora torquent per
                                conubia nostra, per inceptos only Integer purus
                                onthis placerat felis non aliquam.Mauris nec
                                justo vitae ante auctor tol euismod sit amet non
                                ipsul growing this Praesent commodo at massa
                                eget suscipit. Utani vitae enim velit.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="paymentheadingFour"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#paymentcollapseFour"
                                aria-expanded="false"
                                aria-controls="paymentcollapseFour"
                              >
                                04. Can I make changes my reservation after
                                booking?
                              </button>
                            </h2>
                            <div
                              id="paymentcollapseFour"
                              className="accordion-collapse collapse"
                              aria-labelledby="paymentheadingFour"
                              data-bs-parent="#accordionPayment"
                            >
                              <div className="accordion-body">
                                Aptent taciti sociosqu ad litora torquent per
                                conubia nostra, per inceptos only Integer purus
                                onthis placerat felis non aliquam.Mauris nec
                                justo vitae ante auctor tol euismod sit amet non
                                ipsul growing this Praesent commodo at massa
                                eget suscipit. Utani vitae enim velit.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home3Accordion;
