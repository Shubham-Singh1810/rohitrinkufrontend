export default function Home() {
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
              <slect className="form-control">
                <option>Chandigarh</option>
              </slect>

              <label>Full Name</label>
              <input className="form-control" />
              <label>Contact Number</label>
              <input className="form-control" />
              <label>Your City</label>
              <input className="form-control" />
              <label>Number of Kundali</label>
              <slect className="form-control">
                <option>1 (10 min)</option>
              </slect>
              <label>Extra Time</label>
              <input className="form-control" />
              <label>Select Date</label>
              <div className="mb-4 d-flex justify-content-between d-md-block">
                <button className="purpleBtn">20 Nov</button>
                <button className="whiteBtn mx-md-3">21 Nov</button>
                <button className="whiteBtn">22 Nov</button>
              </div>

              <div>
                <button className=" submitBtn" style={{ background: "#139F01" }}>
                  Submit
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      {/* booking section end */}
    </div>
  );
}
