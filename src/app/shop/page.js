import Breadcrumb from "@/components/common/Breadcrumb";
import Link from "next/link";
export const metadata = {
  title: "ATS - tour & travel",
  description:
    "ATS is a Tour and Travel Agency",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const page = () => {
  return (
    <>
      <Breadcrumb pagename="Shop" pagetitle="Shop" />
      <div className="shop-section pt-120 mb-120">
        <div className="container">
          <div className="row g-md-4 gy-5">
            <div className="col-lg-4 col-md-6">
              <div className="product-card">
                <div className="product-card-img">
                  <Link href="/shop/product-details">
                    <img src="/assets/img/innerpage/product-img1.jpg" alt="" />
                    <div className="batch">
                      <span>-15%</span>
                    </div>
                  </Link>
                  <div className="cart-area">
                    <Link href="/shop/cart" className="add-cart-btn">
                      <i className="bi bi-bag-check" /> Add To Cart
                    </Link>
                  </div>
                </div>
                <div className="product-card-content">
                  <h6>
                    <Link href="/shop/product-details">Leather Bag</Link>
                  </h6>
                  <span>
                    $150.00 <del>$200.00</del>
                  </span>
                  <div className="rating">
                    <ul>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <span>(50)</span>
                  </div>
                </div>
                <span className="for-border" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="product-card">
                <div className="product-card-img">
                  <Link href="/shop/product-details">
                    <img src="/assets/img/innerpage/product-img2.jpg" alt="" />
                    <div className="batch">
                      <span>-10%</span>
                    </div>
                  </Link>
                  <div className="cart-area">
                    <Link href="/shop/cart" className="add-cart-btn">
                      <i className="bi bi-bag-check" /> Add To Cart
                    </Link>
                  </div>
                </div>
                <div className="product-card-content">
                  <h6>
                    <Link href="/shop/product-details">Beach Hat</Link>
                  </h6>
                  <span>
                    $110.00 <del>$150.00</del>
                  </span>
                  <div className="rating">
                    <ul>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <span>(50)</span>
                  </div>
                </div>
                <span className="for-border" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="product-card">
                <div className="product-card-img">
                  <Link href="/shop/product-details">
                    <img src="/assets/img/innerpage/product-img3.jpg" alt="" />
                    <div className="batch">
                      <span>-5%</span>
                    </div>
                  </Link>
                  <div className="cart-area">
                    <Link href="/shop/cart" className="add-cart-btn">
                      <i className="bi bi-bag-check" /> Add To Cart
                    </Link>
                  </div>
                </div>
                <div className="product-card-content">
                  <h6>
                    <Link href="/shop/product-details">Winter Cap</Link>
                  </h6>
                  <span>
                    $90.00 <del>$120.00</del>
                  </span>
                  <div className="rating">
                    <ul>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <span>(50)</span>
                  </div>
                </div>
                <span className="for-border" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="product-card">
                <div className="product-card-img">
                  <Link href="/shop/product-details">
                    <img src="/assets/img/innerpage/product-img4.jpg" alt="" />
                    <div className="batch">
                      <span>-8%</span>
                    </div>
                  </Link>
                  <div className="cart-area">
                    <Link href="/shop/cart" className="add-cart-btn">
                      <i className="bi bi-bag-check" /> Add To Cart
                    </Link>
                  </div>
                </div>
                <div className="product-card-content">
                  <h6>
                    <Link href="/shop/product-details">Beach Slippers</Link>
                  </h6>
                  <span>
                    $100.00 <del>$130.00</del>
                  </span>
                  <div className="rating">
                    <ul>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <span>(50)</span>
                  </div>
                </div>
                <span className="for-border" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="product-card">
                <div className="product-card-img">
                  <Link href="/shop/product-details">
                    <img src="/assets/img/innerpage/product-img5.jpg" alt="" />
                    <div className="batch">
                      <span>-3%</span>
                    </div>
                  </Link>
                  <div className="cart-area">
                    <Link href="/shop/cart" className="add-cart-btn">
                      <i className="bi bi-bag-check" /> Add To Cart
                    </Link>
                  </div>
                </div>
                <div className="product-card-content">
                  <h6>
                    <Link href="/shop/product-details">Tiny Torchlight</Link>
                  </h6>
                  <span>
                    $80.00 <del>$100.00</del>
                  </span>
                  <div className="rating">
                    <ul>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <span>(50)</span>
                  </div>
                </div>
                <span className="for-border" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="product-card">
                <div className="product-card-img">
                  <Link href="/shop/product-details">
                    <img src="/assets/img/innerpage/product-img6.jpg" alt="" />
                    <div className="batch">
                      <span>-12%</span>
                    </div>
                  </Link>
                  <div className="cart-area">
                    <Link href="/shop/cart" className="add-cart-btn">
                      <i className="bi bi-bag-check" /> Add To Cart
                    </Link>
                  </div>
                </div>
                <div className="product-card-content">
                  <h6>
                    <Link href="/shop/product-details">Sleeping Bag</Link>
                  </h6>
                  <span>
                    $120.00 <del>$180.00</del>
                  </span>
                  <div className="rating">
                    <ul>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <span>(50)</span>
                  </div>
                </div>
                <span className="for-border" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="product-card">
                <div className="product-card-img">
                  <Link href="/shop/product-details">
                    <img src="/assets/img/innerpage/product-img7.jpg" alt="" />
                    <div className="batch">
                      <span>New</span>
                    </div>
                  </Link>
                  <div className="cart-area">
                    <Link href="/shop/cart" className="add-cart-btn">
                      <i className="bi bi-bag-check" /> Add To Cart
                    </Link>
                  </div>
                </div>
                <div className="product-card-content">
                  <h6>
                    <Link href="/shop/product-details">Trendy Sunglass</Link>
                  </h6>
                  <span>$130.00</span>
                  <div className="rating">
                    <ul>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <span>(50)</span>
                  </div>
                </div>
                <span className="for-border" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="product-card">
                <div className="product-card-img">
                  <Link href="/shop/product-details">
                    <img src="/assets/img/innerpage/product-img8.jpg" alt="" />
                    <div className="batch">
                      <span>-8%</span>
                    </div>
                  </Link>
                  <div className="cart-area">
                    <Link href="/shop/cart" className="add-cart-btn">
                      <i className="bi bi-bag-check" /> Add To Cart
                    </Link>
                  </div>
                </div>
                <div className="product-card-content">
                  <h6>
                    <Link href="/shop/product-details">
                      Adventure Binoculars
                    </Link>
                  </h6>
                  <span>
                    $150.00 <del>$200.00</del>
                  </span>
                  <div className="rating">
                    <ul>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <span>(50)</span>
                  </div>
                </div>
                <span className="for-border" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="product-card">
                <div className="product-card-img">
                  <Link href="/shop/product-details">
                    <img src="/assets/img/innerpage/product-img9.jpg" alt="" />
                    <div className="batch">
                      <span>-5%</span>
                    </div>
                  </Link>
                  <div className="cart-area">
                    <Link href="/shop/cart" className="add-cart-btn">
                      <i className="bi bi-bag-check" /> Add To Cart
                    </Link>
                  </div>
                </div>
                <div className="product-card-content">
                  <h6>
                    <Link href="/shop/product-details">Cosy Neck Pillow</Link>
                  </h6>
                  <span>
                    $110.00 <del>$150.00</del>
                  </span>
                  <div className="rating">
                    <ul>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <span>(50)</span>
                  </div>
                </div>
                <span className="for-border" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
