import React from "react";
import qr from "../../src/assets/qr.jpeg";
import "./Registration.css";

function Registration() {
  return (
    <>
      <div className="Registration_container">
        <div className="reg_heading_container">
          <p className="reg_heading">Registration</p>
        </div>
        <div className="reg_payment">
          <p className="payment_heading">Payment Procedure</p>
        </div>
        <div className="reg_list">
          <ul>
            <li>Pay the registration fee using the below payment methods and amount according to your category.</li>
            <li>After payment, fill out the <a href="#">Link to the form</a></li>
          </ul>
        </div>
        <div className="reg_fee">
          <p className="fee_heading">Registration Fee</p>
        </div>
        <div className="fee_container">
          <div className="grid-container">
            <div className="grid-heading">Participant Type</div>
            <div className="grid-heading">Indian Participants</div>
            <div className="grid-heading">Foreign Participants</div>
            <div className="grid-item">B.Tech with Research</div>
            <div className="grid-item">Rs. 1000/-</div>
            <div className="grid-item">$ 50</div>
            <div className="grid-item">FACULTY</div>
            <div className="grid-item">Rs. 2000/-</div>
            <div className="grid-item">$ 70</div>
            <div className="grid-item">INDUSTRY</div>
            <div className="grid-item">Rs. 3000/-</div>
            <div className="grid-item">$ 100</div>
          </div>
        </div>
        <div className="QR_Fee">
          <p className="QR_heading">Indian Participants Fee Payment (through UPI)</p>
        </div>
        <div className="QR_img">
          <a href="#"><img src={qr} alt="No image available" /></a>
        </div>
        <div className="QR_Fee">
          <p className="QR_heading">Foreign Participants Fee Information</p>
        </div>

      </div>
    </>
  );
}

export default Registration;
