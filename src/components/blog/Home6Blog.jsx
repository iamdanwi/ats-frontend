import Link from "next/link";
import React from "react";

const Home6Blog = () => {
  return (
    <>
      <div className="home6-blog-section mb-120">
        <div className="container one">
          <div className="row mb-50">
            <div className="col-lg-12">
              <div className="section-title5 text-center">
                <span>
                  New Article
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                  >
                    <g opacity="0.8">
                      <path d="M9.06226 11.3626L8.55838 13.7263L6.22997 20.0004L7.61194 19.7701L14.0678 11.3277C14.979 11.296 15.8626 11.2471 16.6304 11.1713C20.1826 10.82 19.9984 10.0002 19.9984 10.0002C19.9984 10.0002 20.1826 9.18031 16.6304 8.829C15.8626 8.7529 14.9789 8.70407 14.0678 8.67261L7.61197 0.229974L6.22997 -6.01907e-07L8.55838 6.27416L9.06226 8.6378C7.87942 8.6555 7.07898 8.68244 7.07898 8.68244C7.07898 8.68244 5.44724 8.7201 2.92253 9.28895L0.864093 6.43364L-0.000128074 6.43364L0.615287 9.90529C0.504522 9.93924 0.504522 10.0611 0.615287 10.0951L-0.000128385 13.5667L0.864093 13.5667L2.92253 10.7117C5.44724 11.2806 7.07898 11.3177 7.07898 11.3177C7.07898 11.3177 7.87942 11.3449 9.06226 11.3626Z" />
                      <path d="M13.4102 13.2575L13.4102 14.1895L9.96575 14.1895L9.96575 13.2575L13.4102 13.2575ZM13.4102 5.81414L13.4102 6.7458L9.96595 6.7458L9.96595 5.81414L13.4102 5.81414ZM11.0863 16.385L11.0863 17.3167L7.90291 17.3167L7.90291 16.385L11.0863 16.385ZM11.0863 2.68689L11.0863 3.61885L7.90291 3.61885L7.90291 2.68689L11.0863 2.68689Z" />
                    </g>
                  </svg>
                </span>
                <h2>Latest Travel Info</h2>
              </div>
            </div>
          </div>
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-4 col-md-6">
              <div className="blog-card style-6">
                <div className="blog-card-img-wrap">
                  <Link href="/blog-details" className="card-img">
                    <img src="/assets/img/home6/blog-card-img1.jpg" alt="" />
                  </Link>
                  <Link href="/blog" className="date">
                    <span>
                      <strong>20</strong> <br /> August
                    </span>
                  </Link>
                </div>
                <div className="blog-card-content">
                  <div className="blog-card-content-top">
                    <ul>
                      <li>
                        By <Link href="/blog">Zakai Math</Link>
                      </li>
                      <li>
                        <Link href="/blog">Adventure</Link>
                      </li>
                    </ul>
                  </div>
                  <h5>
                    <Link href="/blog/blog-details">
                      semper nulla vestibul umdot vitae Morbi semper.
                    </Link>
                  </h5>
                  <div className="bottom-area">
                    <Link href="/blog/blog-details">
                      View Post
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={14}
                          height={12}
                          viewBox="0 0 14 12"
                          fill="none"
                        >
                          <path
                            d="M2.07617 8.73272L12.1899 2.89355"
                            strokeLinecap="round"
                          />
                          <path
                            d="M10.412 7.59764L12.1908 2.89295L7.22705 2.08105"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </Link>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={9}
                        height={12}
                        viewBox="0 0 9 12"
                      >
                        <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                      </svg>
                      5 Min Read
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-card style-6">
                <div className="blog-card-img-wrap">
                  <Link href="/blog-details" className="card-img">
                    <img src="/assets/img/home6/blog-card-img2.jpg" alt="" />
                  </Link>
                  <Link href="/blog" className="date">
                    <span>
                      <strong>18</strong> <br /> August
                    </span>
                  </Link>
                </div>
                <div className="blog-card-content">
                  <div className="blog-card-content-top">
                    <ul>
                      <li>
                        By <Link href="/blog">Locan Stany</Link>
                      </li>
                      <li>
                        <Link href="/blog">Tourism</Link>
                      </li>
                    </ul>
                  </div>
                  <h5>
                    <Link href="/blog/blog-details">
                      nisi laoreet Etiam fringilland mauris vitae arcu.
                    </Link>
                  </h5>
                  <div className="bottom-area">
                    <Link href="/blog/blog-details">
                      View Post
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={14}
                          height={12}
                          viewBox="0 0 14 12"
                          fill="none"
                        >
                          <path
                            d="M2.07617 8.73272L12.1899 2.89355"
                            strokeLinecap="round"
                          />
                          <path
                            d="M10.412 7.59764L12.1908 2.89295L7.22705 2.08105"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </Link>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={9}
                        height={12}
                        viewBox="0 0 9 12"
                      >
                        <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                      </svg>
                      5 Min Read
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-card style-6">
                <div className="blog-card-img-wrap">
                  <Link href="/blog-details" className="card-img">
                    <img src="/assets/img/home6/blog-card-img3.jpg" alt="" />
                  </Link>
                  <Link href="/blog" className="date">
                    <span>
                      <strong>16</strong> <br /> August
                    </span>
                  </Link>
                </div>
                <div className="blog-card-content">
                  <div className="blog-card-content-top">
                    <ul>
                      <li>
                        By <Link href="/blog">Kaiser Becio</Link>
                      </li>
                      <li>
                        <Link href="/blog">Wildlife</Link>
                      </li>
                    </ul>
                  </div>
                  <h5>
                    <Link href="/blog/blog-details">
                      Two newest daily Lufthansan flights connect.
                    </Link>
                  </h5>
                  <div className="bottom-area">
                    <Link href="/blog/blog-details">
                      View Post
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={14}
                          height={12}
                          viewBox="0 0 14 12"
                          fill="none"
                        >
                          <path
                            d="M2.07617 8.73272L12.1899 2.89355"
                            strokeLinecap="round"
                          />
                          <path
                            d="M10.412 7.59764L12.1908 2.89295L7.22705 2.08105"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </Link>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={9}
                        height={12}
                        viewBox="0 0 9 12"
                      >
                        <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                      </svg>
                      5 Min Read
                    </span>
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

export default Home6Blog;
