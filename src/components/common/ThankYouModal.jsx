import React, { useState } from "react";
import "./thankyou.css"
const ThankYouModal = ({showModal, setShowModal}) => {
  


  
  return (
    <>
{showModal && (
  <div
    className={`modal login-modal show ${showModal ? 'fade-in' : 'fade-out'}`}
    style={{
      display: 'flex', // Use Flexbox
      alignItems: 'center', // Center vertically
      justifyContent: 'center', // Center horizontally
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Modal backdrop
      height: '100vh', // Ensure it takes full viewport height
    }}
    tabIndex={-1}
    role="dialog"
    aria-labelledby="user-login-label"
    aria-hidden={!showModal}
    onClick={() => setShowModal(false)} // Close modal on clicking the backdrop
  >
    <div
      className="modal-dialog"
      role="document"
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal content
      style={{
        backgroundColor: '#fff', // Ensure modal content has its own background
        borderRadius: '8px', // Optional: rounded corners
      }}
    >
      <div className="modal-content">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '2rem 4rem',
          }}
        >
          <img
            src="/assets/img/home1/tick.png"
            style={{
              height: '5rem',
              width: '5rem',
              objectFit: 'cover',
            }}
            alt="Tick Icon"
          />
          <h1
            style={{
              fontSize: '2rem',
              marginTop: '1rem',
            }}
          >
            Thank You!
          </h1>
          <h6
            style={{
              fontWeight: '400',
              marginTop: '0.5rem',
              textAlign: 'center',
            }}
          >
            Your inquiry is successfully submitted
          </h6>
          <p
            style={{
              opacity: '50%',
              marginTop: '0.2rem',
              textAlign: 'center',
            }}
          >
            We will get back to you soon
          </p>
        </div>
      </div>
    </div>
  </div>
)}


    </>
  );
};

export default ThankYouModal;
