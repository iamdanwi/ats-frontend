import Breadcrumb from "@/components/common/Breadcrumb";
import Newslatter from "@/components/common/Newslatter";
import Footer from "@/components/footer/Footer3";
import Header from "@/components/header/Header";
import Topbar from "@/components/topbar/Topbar";
import SelectComponent from "@/uitils/SelectComponent";
import image3 from "../../../../public/image/count-3.png";
import Image from "next/image";
import "./visasdetail.css";
import "@/components/stylebook/Footer.css";
export const metadata = {
  title: "ATS - tour & travel",
  description: "ATS is a Tour and Travel Agency",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
const page = () => {
  return (
    <>
      <Topbar />
      <Header />
      <Breadcrumb pagename="Visa Details" pagetitle="Visa Details" />
      <div className="visa-details-pages pt-120 mb-120 visa-dtl-cstm">
        <div className="container">
          <div className="row g-lg-4 gy-5 visas-row-cstm">
            <div className="col-lg-8">
              <div className="visa-thumb">
                <Image src={image3} alt="FI" height={423} width={856} />
              </div>
              <div className="visa-title">
                <h3>Electronic Visa Adult with Fan with Travel Insurance.</h3>
              </div>
              <ul className="visa-meta">
                <li>
                  <span>Country :</span> New York
                </li>
                <li>
                  <span>Visa Type :</span> Tourist
                </li>
                <li>
                  <span>Maximum Sta ys :</span> 30 Days
                </li>
                <li>
                  <span>Processing Time :</span> 7-10 Working Day
                </li>
                <li>
                  <span>Validity :</span> 60 Days
                </li>
                <li>
                  <span>Visa Mode :</span> Electronic
                </li>
              </ul>
              <div className="visa-required-document mb-50">
                <div className="document-list">
                  <h3>View Required Documents</h3>
                  <h6>
                    <span>*</span>Required Documents for Electronic Visa (Adult)
                    with Insurance
                  </h6>
                  <ul>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={16}
                        viewBox="0 0 18 16"
                      >
                        <path d="M8.21008 15.9998C8.15563 15.9998 8.10177 15.9885 8.05188 15.9664C8.002 15.9444 7.95717 15.9122 7.92022 15.8719L0.104874 7.34121C0.0527746 7.28433 0.0182361 7.21337 0.00548549 7.137C-0.00726514 7.06063 0.00232503 6.98216 0.0330824 6.9112C0.0638398 6.84025 0.11443 6.77988 0.178662 6.73748C0.242893 6.69509 0.31798 6.67251 0.394731 6.6725H4.15661C4.21309 6.67251 4.26891 6.68474 4.32031 6.70837C4.37171 6.73201 4.41749 6.76648 4.45456 6.80949L7.06647 9.84167C7.34875 9.2328 7.89519 8.21899 8.85409 6.98363C10.2717 5.15733 12.9085 2.47141 17.4197 0.0467428C17.5069 -0.000110955 17.6084 -0.0122714 17.704 0.0126629C17.7996 0.0375972 17.8825 0.0978135 17.9363 0.181422C17.9901 0.26503 18.0109 0.365952 17.9946 0.46426C17.9782 0.562568 17.9259 0.651115 17.848 0.712418C17.8308 0.726001 16.0914 2.10818 14.0896 4.63987C12.2473 6.96965 9.79823 10.7792 8.59313 15.6973C8.57196 15.7837 8.52272 15.8604 8.45327 15.9153C8.38382 15.9702 8.29816 16 8.20996 16L8.21008 15.9998Z" />
                      </svg>{" "}
                      Passport Scan Copy: Clearly scanned Passport copy
                      required. Minimum of 6 months validity required from the
                      arrival date.
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={16}
                        viewBox="0 0 18 16"
                      >
                        <path d="M8.21008 15.9998C8.15563 15.9998 8.10177 15.9885 8.05188 15.9664C8.002 15.9444 7.95717 15.9122 7.92022 15.8719L0.104874 7.34121C0.0527746 7.28433 0.0182361 7.21337 0.00548549 7.137C-0.00726514 7.06063 0.00232503 6.98216 0.0330824 6.9112C0.0638398 6.84025 0.11443 6.77988 0.178662 6.73748C0.242893 6.69509 0.31798 6.67251 0.394731 6.6725H4.15661C4.21309 6.67251 4.26891 6.68474 4.32031 6.70837C4.37171 6.73201 4.41749 6.76648 4.45456 6.80949L7.06647 9.84167C7.34875 9.2328 7.89519 8.21899 8.85409 6.98363C10.2717 5.15733 12.9085 2.47141 17.4197 0.0467428C17.5069 -0.000110955 17.6084 -0.0122714 17.704 0.0126629C17.7996 0.0375972 17.8825 0.0978135 17.9363 0.181422C17.9901 0.26503 18.0109 0.365952 17.9946 0.46426C17.9782 0.562568 17.9259 0.651115 17.848 0.712418C17.8308 0.726001 16.0914 2.10818 14.0896 4.63987C12.2473 6.96965 9.79823 10.7792 8.59313 15.6973C8.57196 15.7837 8.52272 15.8604 8.45327 15.9153C8.38382 15.9702 8.29816 16 8.20996 16L8.21008 15.9998Z" />
                      </svg>{" "}
                      Photo Specification: Passport Size Photo with White
                      Background (clear scanned Copy required)
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={16}
                        viewBox="0 0 18 16"
                      >
                        <path d="M8.21008 15.9998C8.15563 15.9998 8.10177 15.9885 8.05188 15.9664C8.002 15.9444 7.95717 15.9122 7.92022 15.8719L0.104874 7.34121C0.0527746 7.28433 0.0182361 7.21337 0.00548549 7.137C-0.00726514 7.06063 0.00232503 6.98216 0.0330824 6.9112C0.0638398 6.84025 0.11443 6.77988 0.178662 6.73748C0.242893 6.69509 0.31798 6.67251 0.394731 6.6725H4.15661C4.21309 6.67251 4.26891 6.68474 4.32031 6.70837C4.37171 6.73201 4.41749 6.76648 4.45456 6.80949L7.06647 9.84167C7.34875 9.2328 7.89519 8.21899 8.85409 6.98363C10.2717 5.15733 12.9085 2.47141 17.4197 0.0467428C17.5069 -0.000110955 17.6084 -0.0122714 17.704 0.0126629C17.7996 0.0375972 17.8825 0.0978135 17.9363 0.181422C17.9901 0.26503 18.0109 0.365952 17.9946 0.46426C17.9782 0.562568 17.9259 0.651115 17.848 0.712418C17.8308 0.726001 16.0914 2.10818 14.0896 4.63987C12.2473 6.96965 9.79823 10.7792 8.59313 15.6973C8.57196 15.7837 8.52272 15.8604 8.45327 15.9153C8.38382 15.9702 8.29816 16 8.20996 16L8.21008 15.9998Z" />
                      </svg>{" "}
                      Previous Visa copy: If traveler has previous travel
                      history on countries like Thailand, Malaysia, Singapore,
                      USA, UK and so on, need those clear VISA scanned copy.
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={16}
                        viewBox="0 0 18 16"
                      >
                        <path d="M8.21008 15.9998C8.15563 15.9998 8.10177 15.9885 8.05188 15.9664C8.002 15.9444 7.95717 15.9122 7.92022 15.8719L0.104874 7.34121C0.0527746 7.28433 0.0182361 7.21337 0.00548549 7.137C-0.00726514 7.06063 0.00232503 6.98216 0.0330824 6.9112C0.0638398 6.84025 0.11443 6.77988 0.178662 6.73748C0.242893 6.69509 0.31798 6.67251 0.394731 6.6725H4.15661C4.21309 6.67251 4.26891 6.68474 4.32031 6.70837C4.37171 6.73201 4.41749 6.76648 4.45456 6.80949L7.06647 9.84167C7.34875 9.2328 7.89519 8.21899 8.85409 6.98363C10.2717 5.15733 12.9085 2.47141 17.4197 0.0467428C17.5069 -0.000110955 17.6084 -0.0122714 17.704 0.0126629C17.7996 0.0375972 17.8825 0.0978135 17.9363 0.181422C17.9901 0.26503 18.0109 0.365952 17.9946 0.46426C17.9782 0.562568 17.9259 0.651115 17.848 0.712418C17.8308 0.726001 16.0914 2.10818 14.0896 4.63987C12.2473 6.96965 9.79823 10.7792 8.59313 15.6973C8.57196 15.7837 8.52272 15.8604 8.45327 15.9153C8.38382 15.9702 8.29816 16 8.20996 16L8.21008 15.9998Z" />
                      </svg>{" "}
                      Flight and hotel reservations booking with dates clearly
                      stated (DO NOT purchase until visa approval)
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={16}
                        viewBox="0 0 18 16"
                      >
                        <path d="M8.21008 15.9998C8.15563 15.9998 8.10177 15.9885 8.05188 15.9664C8.002 15.9444 7.95717 15.9122 7.92022 15.8719L0.104874 7.34121C0.0527746 7.28433 0.0182361 7.21337 0.00548549 7.137C-0.00726514 7.06063 0.00232503 6.98216 0.0330824 6.9112C0.0638398 6.84025 0.11443 6.77988 0.178662 6.73748C0.242893 6.69509 0.31798 6.67251 0.394731 6.6725H4.15661C4.21309 6.67251 4.26891 6.68474 4.32031 6.70837C4.37171 6.73201 4.41749 6.76648 4.45456 6.80949L7.06647 9.84167C7.34875 9.2328 7.89519 8.21899 8.85409 6.98363C10.2717 5.15733 12.9085 2.47141 17.4197 0.0467428C17.5069 -0.000110955 17.6084 -0.0122714 17.704 0.0126629C17.7996 0.0375972 17.8825 0.0978135 17.9363 0.181422C17.9901 0.26503 18.0109 0.365952 17.9946 0.46426C17.9782 0.562568 17.9259 0.651115 17.848 0.712418C17.8308 0.726001 16.0914 2.10818 14.0896 4.63987C12.2473 6.96965 9.79823 10.7792 8.59313 15.6973C8.57196 15.7837 8.52272 15.8604 8.45327 15.9153C8.38382 15.9702 8.29816 16 8.20996 16L8.21008 15.9998Z" />
                      </svg>{" "}
                      Processing time 7 working days.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="widget-title mb-30">
                FAQ - General Visa Information:
              </h4>
              <div className="faq-content">
                <div className="accordion" id="accordionTravel">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="travelheadingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#travelcollapseOne"
                        aria-expanded="true"
                        aria-controls="travelcollapseOne"
                      >
                        01. Can I fill in my visa application in a language
                        other than English?
                      </button>
                    </h2>
                    <div
                      id="travelcollapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="travelheadingOne"
                      data-bs-parent="#accordionTravel"
                    >
                      <div className="accordion-body">
                        No. At Present our online application system only
                        supports applications made in English.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="travelheadingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#travelcollapseTwo"
                        aria-expanded="false"
                        aria-controls="travelcollapseTwo"
                      >
                        02. Will I be able to access the online application
                        system using my computer?
                      </button>
                    </h2>
                    <div
                      id="travelcollapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="travelheadingTwo"
                      data-bs-parent="#accordionTravel"
                    >
                      <div className="accordion-body">
                        We are doing our best to support as many computers,
                        operating systems and internet browsers as possible but
                        due to the technologies we use for our online
                        application system, there are certain browsers we
                        exclude due to their age or design. Currently our site
                        is tested at IE 5.0 or later and Mozilla Firefox 3.5 or
                        later.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="travelheadingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#travelcollapseThree"
                        aria-expanded="false"
                        aria-controls="travelcollapseThree"
                      >
                        03. Can I save my application mid-way through the
                        application process?
                      </button>
                    </h2>
                    <div
                      id="travelcollapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="travelheadingThree"
                      data-bs-parent="#accordionTravel"
                    >
                      <div className="accordion-body">
                        Yes. You can save your online visa application wherever
                        you see the "Save &amp; Exit" icon. To login again and
                        complete your application, you will require your unique
                        "Visa Application Id". This number will have been sent
                        to the email address that you supplied in your
                        application security details.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="travelheadingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#travelcollapseFour"
                        aria-expanded="false"
                        aria-controls="travelcollapseFour"
                      >
                        04. I do not understand one of the questions. What can I
                        do?
                      </button>
                    </h2>
                    <div
                      id="travelcollapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="travelheadingFour"
                      data-bs-parent="#accordionTravel"
                    >
                      <div className="accordion-body">
                        Throughout the online form we have added "More Info"
                        icons to some questions that might require further
                        guidance.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="travelheadingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#travelcollapseFive"
                        aria-expanded="false"
                        aria-controls="travelcollapseFive"
                      >
                        05. I made a mistake on one of my answers. Can I change
                        it?
                      </button>
                    </h2>
                    <div
                      id="travelcollapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="travelheadingFive"
                      data-bs-parent="#accordionTravel"
                    >
                      <div className="accordion-body">
                        If you didn't submit your application finally you can do
                        the change. After submitting the application you can't
                        change it.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="travelheadingSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#travelcollapseSix"
                        aria-expanded="false"
                        aria-controls="travelcollapseSix"
                      >
                        06. The date I entered is not being accepted. What is
                        the correct format?
                      </button>
                    </h2>
                    <div
                      id="travelcollapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="travelheadingSix"
                      data-bs-parent="#accordionTravel"
                    >
                      <div className="accordion-body">
                        All date fields in our forms are set up in the following
                        format: dd/mm/yyyy (for example 21/08/2011).
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="travelheadingSevene">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#travelcollapseSevene"
                        aria-expanded="false"
                        aria-controls="travelcollapseSevene"
                      >
                        07. I have not received my Completed Application
                        confirmation email. Can you resend it to me?
                      </button>
                    </h2>
                    <div
                      id="travelcollapseSevene"
                      className="accordion-collapse collapse"
                      aria-labelledby="travelheadingSevene"
                      data-bs-parent="#accordionTravel"
                    >
                      <div className="accordion-body">
                        Yes. But please check first that your inbox has not
                        treated our email confirmation as SPAM and that you have
                        given us the correct email address. If you have not
                        received your confirmation email after 24 hours please
                        contact us through Complain and Feedback link.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="travelheadingEight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#travelcollapseEight"
                        aria-expanded="false"
                        aria-controls="travelcollapseEight"
                      >
                        08. I am unable to retrieve my application. What can I
                        do?
                      </button>
                    </h2>
                    <div
                      id="travelcollapseEight"
                      className="accordion-collapse collapse"
                      aria-labelledby="travelheadingEight"
                      data-bs-parent="#accordionTravel"
                    >
                      <div className="accordion-body">
                        This could be because you did not save your application
                        by selecting the "Save &amp; Exit" option flagged by the
                        following image on the application form or your did not
                        retrieve your application within 7 days of last saving
                        it. If you are sure you saved your application in the
                        last seven days, empty your browser cache(temporary
                        internet files) and try again.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="visa-sidebar mb-30">
                <div className="banner2-card mb-48">
                  <img src="/assets/img/activities/tele-cal.jpg" alt="" />
                </div>
                <div className="sidebar-top text-center">
                  <h4>Cost Summary</h4>
                  <h6>
                    $7836/ <span>per person</span>
                  </h6>
                  <p>Arrange your trip in advance - book this room now!</p>
                </div>
                <div className="inquery-form">
                  <div className="form-title">
                    <h4>Inquiry Form</h4>
                    <p>
                      Complete form for complaints or service inquiries; expect
                      prompt response via phone/email.
                    </p>
                  </div>
                  <form>
                    <div className="form-inner mb-20">
                      <label>
                        Full Name <span>*</span>
                      </label>
                      <input type="text" placeholder="Enter your full name" />
                    </div>
                    <div className="form-inner mb-20">
                      <label>Email Address</label>
                      <input
                        type="email"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div className="form-inner mb-20">
                      <label>
                        Phone Number <span>*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="form-inner mb-70">
                      <label>
                        Visa Type <span>*</span>
                      </label>
                      <SelectComponent
                        options={["Tourist", "Business visa", "Student visa"]}
                        placeholder={["Select Visa"]}
                      />
                    </div>
                    <div className="form-inner mb-70">
                      <label>
                        Country <span>*</span>
                      </label>
                      <SelectComponent
                        options={["Australia", "Brazil", "Bangladesh"]}
                        placeholder={["Select Country"]}
                      />
                    </div>
                    <div className="form-inner mb-30">
                      <label>
                        Write Your Massage <span>*</span>
                      </label>
                      <textarea
                        placeholder="Write your quiry"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-inner">
                      <button type="submit" className="primary-btn1 two">
                        Submit Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
