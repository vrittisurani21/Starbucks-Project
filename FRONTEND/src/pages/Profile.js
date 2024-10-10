import React from 'react';

const Profile = () => {
  return (
    <>
    <div className="container mt-5">
      <h2 className="text-center text-light mb-4">Profile Information</h2>
      <div className="card bg-dark text-white shadow-lg">
        <div className="card-body">
          <form className="row g-3 needs-validation" noValidate>
            <div className="col-md-4 position-relative">
              <label htmlFor="validationTooltip01" className="form-label">First Name</label>
              <input type="text" className="form-control bg-secondary text-white" id="validationTooltip01" defaultValue="Vritti" required />
              <div className="valid-tooltip">Looks good!</div>
            </div>

            <div className="col-md-4 position-relative">
              <label htmlFor="validationTooltip02" className="form-label">Last Name</label>
              <input type="text" className="form-control bg-secondary text-white" id="validationTooltip02" defaultValue="Surani" required />
              <div className="valid-tooltip">Looks good!</div>
            </div>

            <div className="col-md-4 position-relative">
              <label htmlFor="validationTooltipUsername" className="form-label">Username</label>
              <div className="input-group has-validation">
                <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                <input type="text" className="form-control bg-secondary text-white" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required />
                <div className="invalid-tooltip">Please choose a unique and valid username.</div>
              </div>
            </div>

            <div className="col-md-6 position-relative">
              <label htmlFor="validationTooltip03" className="form-label">City</label>
              <input type="text" className="form-control bg-secondary text-white" id="validationTooltip03" required />
              <div className="invalid-tooltip">Please provide a valid city.</div>
            </div>

            <div className="col-md-3 position-relative">
              <label htmlFor="validationTooltip04" className="form-label">State</label>
              <select className="form-select bg-secondary text-white" id="validationTooltip04" required>
                <option selected disabled value="">Choose...</option>
                <option>Gujarat</option>
                <option>Rajasthan</option>
                <option>Maharashtra</option>
                <option>Himachal Pradesh</option>
                <option>Jammu Kashmir</option>
                <option>Tamil Nadu</option>
                <option>Assam</option>
              </select>
              <div className="invalid-tooltip">Please select a valid state.</div>
            </div>

            <div className="col-md-3 position-relative">
              <label htmlFor="validationTooltip05" className="form-label">Zip</label>
              <input type="text" className="form-control bg-secondary text-white" id="validationTooltip05" required />
              <div className="invalid-tooltip">Please provide a valid zip.</div>
            </div>

            <div className="col-12 text-center">
              <button className="btn btn-primary" type="submit">Submit Form</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;
