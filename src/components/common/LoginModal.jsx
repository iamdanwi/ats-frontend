import React, { useState } from "react";
import axios from 'axios';
import ReactFlagsSelect from "react-flags-select";
import { customLabels } from "@/hooks/CommonFunctions";
import "./login.css"

const LoginModal = () => {
  const currentDate = new Date();
  const apiKeyEmail = process.env.NEXT_PUBLIC_EMAIL_API_KEY;
  const [selected, setSelected] = useState("AE");

  const formattedDate = currentDate.toLocaleString(); 
  const [leadFormDetails, setLeadFormDetails] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    countryCode:""
  }); 
  
  const [errors, setErrors] = useState({});

  // Handle change in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLeadFormDetails({
      ...leadFormDetails,
      [name]: value,
    });
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!leadFormDetails?.name.trim()) newErrors.name = "Name is required";
    if (leadFormDetails?.email.trim() && !/\S+@\S+\.\S+/.test(leadFormDetails.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!leadFormDetails?.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    else if (!leadFormDetails.countryCode) {
      newErrors.phone = "Country code is required.";
    }
    if (!leadFormDetails?.service) newErrors.service = "Service selection is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const [formPartToShow, setFormPartToShow] = useState(1)
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      sendEmail()
      setFormPartToShow(2)
      // You can add further code here for form submission
    }
  };
  const sendEmail = async () => {
    const apiKey = apiKeyEmail
    const apiUrl = "https://api.brevo.com/v3/smtp/email";
  
    // Prepare email data
    const emailData = {
      to: [{ email: "holidays@atstourstravels.com" }], // Replace with the recipient's email address
      subject : `ATS new Leads - ${formattedDate}`,
      textContent: "This is the plain text content of your email.",
      htmlContent: `
        <div style=" line-height: 1.6; color: #fff; padding: 20px; background-color: #006370; border-radius: 10px;">
          <h1 style="color: #fff; font-size: 24px; text-align: center;">New Lead Details</h1>
          </div>
          <p style="margin: 8px 0; font-size:20px ; "><strong>Name:</strong> ${leadFormDetails?.name}</p>
          <p style="margin: 8px 0;  font-size:20px ; "><strong>Email:</strong> ${leadFormDetails?.email}</p>
          <p style="margin: 8px 0;  font-size:20px ; "><strong>Phone:</strong> ${leadFormDetails?.countryCode + leadFormDetails?.phone}</p>
          <p style="margin: 8px 0;  font-size:20px ; "><strong>Service:</strong> ${leadFormDetails?.service}</p>
          <p style="margin: 8px 0;  font-size:20px ; "><strong>Message:</strong> ${leadFormDetails?.message}</p>
      `,
      sender: { email: "holidays@atstourstravels.com", name: "ATS" },
    };
    
  
    try {
      const response = await axios.post(apiUrl, emailData, {
        headers: {
          "api-key": apiKey,
          "Content-Type": "application/json",
        },
      });
  
      console.log("Email sent successfully:", response.data);
      setErrors({});
    } catch (error) {
      console.error("Error sending email:", error);
      // setShowErrorMessage("Failed to send email. Please try again.");
    }
  };
  

  return (
    <>
      <div
        className="modal login-modal"
        id="user-login"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
  {formPartToShow == 1 ? <div className="modal-body">
                <div className="login-registration-form">
                  <div className="form-title">
                    <h2>Get in touch with us</h2>
                    <p>Enter your details.</p>
                  </div>
                <form onSubmit={handleSubmit}>
        <div className="form-inner mb-3">
          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            value={leadFormDetails?.name}
            onChange={handleChange}
          />
          {errors?.name && <span className="error-text">{errors?.name}</span>}
        </div>

        <div className="form-inner mb-3">
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={leadFormDetails?.email}
            onChange={handleChange}
          />
          {errors?.email && <span className="error-text">{errors?.email}</span>}
        </div>

        <div className="form-inner mb-3"
        
       >
     <div  style={{ display: "flex", gap: "10px" }}>
        <ReactFlagsSelect
                              className="react-select-select-phone"
                              selected={selected}
                              showSelectedLabel={false}
                              optionsSize={13}
                              
                              customLabels={customLabels}
                              countries={Object.keys(customLabels)}
                              placeholder="+"
                              selectedSize={14}
                              onSelect={(code) => {
                                console.log(code)
                                setLeadFormDetails({ ...leadFormDetails, countryCode: customLabels[code].secondary })
                                setSelected(code)
                              }
                              }

                            />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number (with country code) *"
            value={leadFormDetails?.phone}
            onChange={handleChange}
          />
        </div>

          {errors?.phone && <span className="error-text">{errors?.phone}</span>}
        </div>

        <div className="form-inner mb-3">
          <select
            className="custom-select"
            name="service"
            value={leadFormDetails?.service}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Your Service
            </option>
            <option value="Holiday Packages">Holiday Packages</option>
            <option value="Flights">Flights</option>
            <option value="Umrah">Umrah</option>
            <option value="Activities">Activities</option>
            <option value="Hotel Booking">Hotel Booking</option>
            <option value="Visa">Visa</option>
            <option value="Cab Service">Cab Service</option>
          </select>
          {errors?.service && <span className="error-text">{errors?.service}</span>}
        </div>

        <div className="form-inner mb-10">
          <textarea
            name="message"
            placeholder="Message"
            value={leadFormDetails?.message}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="login-btn mb-25 home-button">
          Inquire Now
        </button>
      </form>
                </div>
              </div>:
              
              <div style={{
                display:"flex",
                alignItems:"center",
                flexDirection:"column",
                justifyContent:"center",
                padding:"2rem 4rem"
              }}>
  <img src="/assets/img/home1/tick.png" style={{
    height:"5rem",
    width:"5rem",
    objectFit:"cover"
  }}/>
  <h1 style={{
    fontSize:"2rem",
    marginTop:"1rem"
  }}>Thank You!</h1>
  <h6 style={{
    fontWeight:"400",
    marginTop:"0.5rem",
    textAlign:'center'

  }}>You inquery is successfully submitted</h6>
  <p style={{
    opacity:"50%",
    marginTop:"0.2rem"

  }}>We will get back to you soon</p>
                </div>
              }
              



            </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
