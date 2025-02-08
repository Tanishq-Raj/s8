import "./propertyDetailForm.scss";
import PropTypes from "prop-types";

const PropertyDetailsForm = ({ nextStep }) => {
  return (
    <main className="propertyFormContainer">
      <div className="formContent">
        {/* Property Title */}
        <section className="formGroup">
          <label>Property Title:</label>
          <div className="inputWrapper">
            <input type="text" placeholder="Type the property name..." aria-label="Property Title" />
          </div>
        </section>

        {/* Category */}
        <section className="formGroup">
          <label>Category:</label>
          <div className="inputWrapper">
            <select aria-label="Category">
              <option value="">Select the category</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Industrial">Industrial</option>
              <option value="Agricultural">Agricultural</option>
            </select>
          </div>
        </section>

        {/* Auction Date */}
        <section className="formGroup">
          <label>Auction Date:</label>
          <div className="inputWrapper">
            <input type="text" placeholder="DD/MM/YYYY" aria-label="Auction Date" />
            <img src="/calendar.svg" className="inputIcon" alt="Calendar" />
          </div>
        </section>

        {/* Auction Time */}
        <section className="formGroup">
          <label>Auction Time:</label>
          <div className="inputWrapper">
            <input type="text" placeholder="e.g 10:00AM To 12:00AM" aria-label="Auction Time" />
          </div>
        </section>

        {/* Price */}
        <section className="formGroup">
          <label>Price:</label>
          <div className="inputWrapper">
            <input type="text" placeholder="Enter Price here" aria-label="Price" />
          </div>
        </section>

        {/* Description */}
        <section className="formGroup">
          <label>Description:</label>
          <textarea placeholder="Enter Description here..." aria-label="Description"></textarea>
        </section>
      </div>

      {/* Action Buttons */}
      <footer className="actions">
        <button className="cancelButton">
          <img src="/delete2.svg" className="buttonIcon" alt="Cancel" />
          Cancel
        </button>
        <button className="nextButton" onClick={nextStep}>
          <img src="/check2.svg" className="buttonIcon" alt="Next" />
          Next
        </button>
      </footer>
    </main>
  );
};

PropertyDetailsForm.propTypes = {
  nextStep: PropTypes.func.isRequired,
};

export default PropertyDetailsForm;
