"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import moment from "moment";

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
  const [btnLoader, setBtnLoader]=useState(false)
  const handleSubmitBooking = async () => {
    setBtnLoader(true)
    if (formData.contact.length != 10) {
      toast.error("Please enter a valid contact number");
      return;
    }
    const addFormData = new FormData();
    addFormData.append("location", formData?.location);
    addFormData.append("fullName", formData?.fullName);
    addFormData.append("contact", formData?.contact);
    addFormData.append("yourCity", formData?.yourCity);
    addFormData.append("noOfKundali", formData?.noOfKundali);
    addFormData.append("extraTime", formData?.extraTime);
    addFormData.append("bookingDate", JSON.stringify(selectedDates));
    try {
      const response = await axios.post("https://rohitrinkuserver.vercel.app/api/booking/store", addFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
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
        setSelectedDates([]);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Internal Server Error");
    }
    setBtnLoader(false)
  };
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateChange = (e) => {
    if (selectedDates.length < 3) {
      const date = e.target.value;
      if (date && !selectedDates.includes(date)) {
        // Add the selected date to the array
        setSelectedDates((prevDates) => [...prevDates, date]);
      }
    }
  };

  const removeDate = (dateToRemove) => {
    // Remove a date from the array
    setSelectedDates((prevDates) => prevDates.filter((date) => date !== dateToRemove));
  };
  
  return (
    <div>
      {/* hero section start */}
      {/* <div className="d-flex justify-content-center align-items-center w-100  heroSectionMain ">
        <div>
          <div className="d-flex justify-content-center">
            <img src="/profilePic.png" className="heroImage" />
          </div>
          <div className="mt-4 d-flex justify-content-center">
            <img src="/newLogo.png" className="brandLogo" />
          </div>
        </div>
      </div> */}
      {/* hero section end */}
      {/* about section start */}
      {/* <div className="d-flex justify-content-center align-items-center w-100  aboutSectionMain py-5 py-md-0">
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
      </div> */}
      {/* about section end */}

      {/* booking section start */}
      <div className="d-flex justify-content-center align-items-center w-100 bookingSectionMain">
        <div className="row w-100  container">
          <div className="col-12 col-md-12 px-md-4 px-2 py-5">
            <h1 className="mb-2">Booking Your Appointment</h1>
            <div className="row  col-12 p-0 m-0">
            <div className="col-md-5 order-lg-1 order-2 px-0 ">
              <label>Select Location</label>
              <select
                className="form-control"
                value={formData?.location}
                onChange={(e) => setFormDta({ ...formData, location: e.target.value })}
              >
                <option value="">Select</option>
                <option value="Jalandhar">Jalandhar</option>
              </select>
              <label>Full Name</label>
              <input
                className="form-control"
                value={formData?.fullName}
                onChange={(e) => setFormDta({ ...formData, fullName: e.target.value })}
              />
              <label>Contact Number</label>
              <input
                className="form-control"
                type="number"
                value={formData?.contact}
                onChange={(e) => setFormDta({ ...formData, contact: e.target.value })}
              />
              <label>Your City</label>
              <input
                className="form-control"
                value={formData?.yourCity}
                onChange={(e) => setFormDta({ ...formData, yourCity: e.target.value })}
              />
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
                <option value="4">4 (40 min)</option>
              </select>
              <label>Extra Time (Rs 500/5 Min after 10 Min Fee)</label>
              
              <select
                className="form-control"
                onChange={(e) => setFormDta({ ...formData, extraTime: e.target.value })}
                value={formData?.extraTime}
              >
                <option value="">Select</option>
                <option value="5">5 min</option>
                <option value="10">10 min</option>
                <option value="15">15 min</option>
                <option value="20">20 min</option>
                <option value="25">25 min</option>
                <option value="30">30 min</option>
              </select>
              <div>
                <label>Select upto 3 Dates</label>
                <input className="form-control mb-4" type="date" onChange={handleDateChange} />
              </div>
              <div className="mb-4 mt-3 d-flex">
                {selectedDates?.map((date, index) => {
                  return (
                    <button key={index} className="purpleBtn me-2">
                      {moment(date).format("Do MMM")}{" "}
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/9068/9068699.png"
                        style={{ height: "20px" }}
                        onClick={() => removeDate(date)}
                      />
                    </button>
                  );
                })}
              </div>

              {formData?.location &&
              formData?.fullName &&
              formData?.contact &&
              formData?.noOfKundali &&
              selectedDates?.length > 0 &&
              formData?.extraTime ? (
                <div className="w-100">
                  {btnLoader ?  <button className=" submitBtn" style={{ background: "#139F01", opacity:"0.5" }}>
                    Saving ...
                  </button>: <button className=" submitBtn" style={{ background: "#139F01" }} onClick={handleSubmitBooking}>
                    Submit
                  </button>}
                 
                </div>
              ) : (
                <div className="w-100">
                  <button className=" submitBtn" style={{ background: "#139F01", opacity: "0.5" }}>
                    Submit
                  </button>
                </div>
              )}
            </div>
            <div className="col-md-7 d-flex justify-content-end order-lg-2 order-1 ">
              <div className="w-100">
              <div className="d-flex justify-content-center">
            <img src="/profilePic.png" className="heroImage" />
          </div>
          <div className="mt-4 d-flex justify-content-center">
            <img src="/newLogo.png" className="brandLogo" />
          </div>
              </div>
          
        </div>
            </div>
            
          </div>
        </div>
      </div>
      {/* booking section end */}
      <ToastContainer />
    </div>
  );
}
