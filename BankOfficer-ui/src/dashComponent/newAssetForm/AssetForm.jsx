import { useState } from "react";
import "./assetForm.scss";

const AssetForm = () => {
  const [formData, setFormData] = useState({
    category: "",
    auctionDate: "",
    auctionTime: "",
    area: "",
    price: "",
    description: "",
    contact: "",
    nearbyPlaces: "",
    latitude: "",
    longitude: "",
    city: "", // Added missing fields
    state: "",
    enquiryUrl: "",
    borrower: "",
    amountDue: "",
    deposit: "",
    bidInc: "",
    inspectDate: "",
    inspectTime: "",
    message: "", // Added message field
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [showPopup, setShowPopup] = useState(false); // State for pop-up message
  
  const handleSave = () => {
    // Validate that all required fields are filled
    const isFormValid = Object.values(formData).every((value) => value.trim() !== "");

    if (!isFormValid) {
      alert("Please fill in all fields before saving.");
      return;
    }

    console.log("Saving Data: ", formData);
    
    // Show pop-up message
    setShowPopup(true);

    // Hide the pop-up after 2 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  const handleCancel = () => {
    setFormData({
      category: "",
      auctionDate: "",
      auctionTime: "",
      area: "",
      price: "",
      description: "",
      contact: "",
      nearbyPlaces: "",
      latitude: "",
      longitude: "",
      city: "",
      state: "",
      enquiryUrl: "",
      borrower: "",
      amountDue: "",
      deposit: "",
      bidInc: "",
      inspectDate: "",
      inspectTime: "",
      message: "",
    });
  };

  return (
    <div className="asset-form">
      <div className="form-group">
        <label>Category:</label>
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="">Select the category of the asset</option>
          <option value="Residential">Residental</option>
          <option value="Commercial">Commercial</option>
          <option value="Industrial">Industrial</option>
        </select>
      </div>

      <div className="form-group">
        <label>Auction type:</label>
        <select name="auctionType" value={formData.auctionType} onChange={handleChange}>
          <option value="">Auction type</option>
          <option value="Normal">Normal</option>
          <option value="E-auction">E-auction</option>
        </select>
      </div>

      <div className="form-group">
        <label>Auction Date:</label>
        <input type="date" name="auctionDate" value={formData.auctionDate} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Auction Time:</label>
        <input type="text" name="auctionTime" placeholder="Enter time" value={formData.auctionTime} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Area (per sqft):</label>
        <input type="number" name="area" placeholder="Enter asset area" value={formData.area} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Price:</label>
        <input type="number" name="price" placeholder="Enter Reserve Price in Rs." value={formData.price} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Description:</label>
        <textarea name="description" placeholder="Enter asset description" value={formData.description} onChange={handleChange}></textarea>
      </div>

      <div className="form-group">
        <label>Address:</label>
        <input type="text" name="address" placeholder="Enter asset full address" value={formData.address} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>City:</label>
        <input type="text" name="city" placeholder="City name" value={formData.city} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>State:</label>
        <input type="text" name="state" placeholder="State name" value={formData.state} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Enquiry Url:</label>
        <input type="text" name="enquiryUrl" placeholder="Enquiry url" value={formData.enquiryUrl} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Borrower/Mortgagor/Guarantors:</label>
        <input type="text" name="borrower" placeholder="Enter name" value={formData.borrower} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label> Amount Due:</label>
        <input type="number" name="amountDue" placeholder="Enter amount due" value={formData.amountDue} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label> Earnest Money Deposit:</label>
        <input type="text" name="deposit" placeholder="Enter deposit amount " value={formData.deposit} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label> Bid Increase Amount:</label>
        <input type="text" name="bidInc" placeholder="Enter amount " value={formData.bidInc} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label> Property Inspection Date:</label>
        <input type="date" name="inspectDate" placeholder="Enter date to visit " value={formData.inspectDate} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label> Property Inspection Time:</label>
        <input type="text" name="inspectTime" placeholder="Enter time to visit " value={formData.inspectTime} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Contact No:</label>
        <input type="number" name="contact" placeholder="Enter your contact number" value={formData.contact} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Nearby Places:</label>
        <input type="text" name="nearbyPlaces" placeholder="Enter Nearby Places" value={formData.nearbyPlaces} onChange={handleChange} />
      </div>

      <div className="form-group location">
        <label>Location:</label>
        <input type="number" name="latitude" placeholder="Enter Latitude" value={formData.latitude} onChange={handleChange} />
        <input type="number" name="longitude" placeholder="Enter Longitude" value={formData.longitude} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Message:</label>
        <textarea name="message" placeholder="Any important message to the bidders" value={formData.message} onChange={handleChange}></textarea>
      </div>

      <div className="button-group">
        <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
        <button className="save-btn" onClick={handleSave}>Save</button>
      </div>

       {/* Pop-up Message */}
       {showPopup && (
        <div className="popupMessage">
          <p> Asset Saved Successfully!</p>
        </div>
      )}
    </div>
  );
};

export default AssetForm;
