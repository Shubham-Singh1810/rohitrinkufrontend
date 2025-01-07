"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
export default function Home() {
  const [formData, setFormDta] = useState({
    location: "",
    fullName: "",
    contact: "",
    yourCity: "",
    noOfKundali: "",
    extraTime: "",
    bookingDate: "",
  });
  const handleSubmitBooking = async () => {
    if(formData.contact.length !=10){
      toast.error("Please enter a valid contact number")
      return
    }
    try {
      let response = await axios.post("https://rohitrinkuserver.vercel.app/api/booking/store", formData);
      if (response?.data.success) {
        toast.success(response?.data.message);
        setFormDta({
          location: "",
          fullName: "",
          contact: "",
          yourCity: "",
          noOfKundali: "",
          extraTime: "",
          bookingDate: "",
        });
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Internal Server Error");
    }
  };

  return (
    <div>
      {/* hero section start */}
      <div className="d-flex justify-content-center align-items-center w-100  heroSectionMain ">
        <div>
          <div className="d-flex justify-content-center">
            <img src="/profilePic.png" className="heroImage" />
          </div>
          <div className="mt-4 d-flex justify-content-center">
            <img src="/newLogo.png" className="brandLogo" />
          </div>
        </div>
      </div>
      {/* hero section end */}
      {/* about section start */}
      <div className="d-flex justify-content-center align-items-center w-100  aboutSectionMain py-5 py-md-0">
        <div className="row w-100 m-0 p-0  container">
          <div className="col-12 col-md-4 p-md-4">
            <h1 className="d-block d-md-none text-center mb-5">About US</h1>
            <img src="/profileCardImage.png" className="cardImage img-fluid" />
          </div>
          <div className="col-12 col-md-8 p-4">
            <h1 className="d-none d-md-block">About US</h1>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Class ultrices sodales senectus enim quis. Montes sit
              felis gravida erat varius. Lobortis semper taciti pretium duis interdum fermentum. Bibendum semper
              malesuada nunc magna imperdiet. Phasellus sed sodales imperdiet suscipit, mus laoreet commodo egestas.
              Luctus suscipit curabitur justo vulputate leo egestas sit ornare.
            </p>
          </div>
        </div>
      </div>
      {/* about section end */}

      {/* booking section start */}
      <div className="d-flex justify-content-center align-items-center w-100 bookingSectionMain">
        <div className="row w-100  container">
          <div className="col-12 col-md-8 px-md-4 px-2 py-5">
            <h1 className="mb-2">Booking Your Appointment</h1>
            <div className="col-md-7 ">
              <label>Select Location</label>
              <select className="form-control" value={formData?.location} onChange={(e) => setFormDta({ ...formData, location: e.target.value })}>
                <option value="">Select</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Delhi">Delhi</option>
              </select>
              <label>Full Name</label>
              <input className="form-control" value={formData?.fullName} onChange={(e) => setFormDta({ ...formData, fullName: e.target.value })} />
              <label>Contact Number</label>
              <input className="form-control" type="number" value={formData?.contact} onChange={(e) => setFormDta({ ...formData, contact: e.target.value })} />
              <label>Your City</label>
              <input className="form-control" value={formData?.yourCity} onChange={(e) => setFormDta({ ...formData, yourCity: e.target.value })} />
              <label>Number of Kundali</label>
              <select
                className="form-control"
                onChange={(e) => setFormDta({ ...formData, noOfKundali: e.target.value })}
                value={formData?.noOfKundali}
              >
                <option value="">Select</option>
                <option value="1">1 (10 min)</option>
                <option value="2">2 (20 min)</option>
                <option value="3">3 (30 min)</option>
                <option value="4">3 (40 min)</option>
              </select>
              <label>Extra Time</label>
              <input
                className="form-control"
                onChange={(e) => setFormDta({ ...formData, extraTime: e.target.value })}
                value={formData?.extraTime}
              />
              <label>Select Date</label>
              {/* <div className="mb-4 d-flex justify-content-between d-md-block">
                <button className="purpleBtn">20 Nov</button>
                <button className="whiteBtn mx-md-3">21 Nov</button>
                <button className="whiteBtn">22 Nov</button>
              </div> */}
              <input
                className="form-control mb-4"
                type="date"
                onChange={(e) => setFormDta({ ...formData, bookingDate: e.target.value })}
                value={formData?.bookingDate}
              />
              {formData?.location &&
              formData?.fullName &&
              formData?.contact &&
              formData?.bookingDate &&
              formData?.noOfKundali &&
              formData?.extraTime ? (
                <div className="w-100">
                  <button className=" submitBtn" style={{ background: "#139F01" }} onClick={handleSubmitBooking}>
                    Submit
                  </button>
                </div>
              ) : (
                <div className="w-100">
                  <button className=" submitBtn" style={{ background: "#139F01", opacity: "0.5" }}>
                    Submit
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* booking section end */}
      <ToastContainer />
    </div>
  );
}
