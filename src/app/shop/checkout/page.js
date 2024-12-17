import Breadcrumb from "@/components/common/Breadcrumb";
import QuantityCounter from "@/uitils/QuantityCounter";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumb pagename="Checkout" pagetitle="Checkout" />
      <div className="checkout-page pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-6">
              <div className="inquiry-form">
                <div className="title">
                  <h4>Billing Information</h4>
                </div>
                <form>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-inner mb-30">
                        <label>Full Name*</label>
                        <input type="text" placeholder="Jackson Mile" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-30">
                        <label>Phone*</label>
                        <input type="text" placeholder="Ex- +880-13* ** ***" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-30">
                        <label>Email (Optional)</label>
                        <input type="email" placeholder="Ex- info@gmail.com" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-inner mb-30">
                        <label>Address*</label>
                        <input type="text" placeholder="Dhaka, Bangladesh" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-30">
                        <label>Street Address*</label>
                        <input type="text" placeholder="Your Street" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-30">
                        <label>Postal Code*</label>
                        <input type="text" placeholder="City Postal" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-inner mb-30">
                        <label>Short Notes*</label>
                        <textarea
                          placeholder="Write Something..."
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-inner">
                        <label className="containerss">
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span className="text">
                            Save this information for next time
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="inquiry-form">
                <div className="title">
                  <h4>Order Summary</h4>
                </div>
                <form>
                  <div className="cart-menu">
                    <div className="cart-body">
                      <ul>
                        <li className="single-item">
                          <div className="item-area">
                            <div className="main-item">
                              <div className="item-img">
                                <img
                                  src="/assets/img/innerpage/product-img2.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="content-and-quantity">
                                <div className="content">
                                  <div className="price-and-btn d-flex align-items-center justify-content-between">
                                    <span>$234</span>
                                    <button type="reset" className="close-btn">
                                      <i className="bi bi-x" />
                                    </button>
                                  </div>
                                  <h6>
                                    <Link href="/shop/product-details">
                                      Beach Hat
                                    </Link>
                                  </h6>
                                </div>
                                <QuantityCounter dcrIcon="bx bx-minus" incIcon="bx bx-plus"/>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="single-item">
                          <div className="item-area">
                            <div className="main-item">
                              <div className="item-img">
                                <img
                                  src="/assets/img/innerpage/product-img6.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="content-and-quantity">
                                <div className="content">
                                  <div className="price-and-btn d-flex align-items-center justify-content-between">
                                    <span>$150</span>
                                    <button type="reset" className="close-btn">
                                      <i className="bi bi-x" />
                                    </button>
                                  </div>
                                  <h6>
                                    <a href="#">Sleeping Bag</a>
                                  </h6>
                                </div>
                                <QuantityCounter dcrIcon="bx bx-minus" incIcon="bx bx-plus"/>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="cart-footer">
                      <div className="pricing-area">
                        <ul>
                          <li>
                            <span>Sub Total</span>
                            <span>$468</span>
                          </li>
                          <li>
                            <span>Offer (20%)</span>
                            <span>$56</span>
                          </li>
                        </ul>
                        <ul className="total">
                          <li>
                            <span>Total</span>
                            <span>$425</span>
                          </li>
                        </ul>
                      </div>
                      <div className="choose-payment-method">
                        <h6>Select Payment Method</h6>
                        <div className="payment-option">
                          <ul>
                            <li className="paypal active">
                              <img
                                src="/assets/img/innerpage/icon/payPal.svg"
                                alt=""
                              />
                              <div className="checked">
                                <i className="bi bi-check" />
                              </div>
                            </li>
                            <li className="stripe">
                              <img
                                src="/assets/img/innerpage/icon/stripe.svg"
                                alt=""
                              />
                              <div className="checked">
                                <i className="bi bi-check" />
                              </div>
                            </li>
                            <li className="offline">
                              <img
                                src="/assets/img/innerpage/icon/offline.svg"
                                alt=""
                              />
                              <div className="checked">
                                <i className="bi bi-check" />
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="pt-25"
                          id="StripePayment"
                          style={{ display: "none" }}
                        >
                          <div className="row g-4">
                            <div className="col-md-12">
                              <div className="form-inner">
                                <label>Card Number</label>
                                <input
                                  type="text"
                                  placeholder="1234 1234 1234 1234"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-inner">
                                <label>Expiry</label>
                                <input type="text" placeholder="MM/YY" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-inner">
                                <label>CVC</label>
                                <input type="text" placeholder="CVC" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-inner">
                        <button className="primary-btn1" type="submit">
                          Place Order
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
