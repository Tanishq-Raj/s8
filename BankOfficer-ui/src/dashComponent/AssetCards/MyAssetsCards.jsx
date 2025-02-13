import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import properties from "../../dummyData"; // Import your dummy data
import './myAssetsCards.scss';

const MyAssetsCards = () => {
  const [showAll, setShowAll] = useState(false); // State to control whether to show all cards

 
  // Number of cards to show by default
  const defaultCardsToShow = 3;
  const cardsToDisplay = showAll ? properties : properties.slice(0, defaultCardsToShow);

  return (
    <div className="myAssetsCardsContainer">
      <div className="headerContainer2">
        <h2>My Assets</h2>
        <h3>Showing {cardsToDisplay.length} / {properties.length} results</h3>
      </div>
      <div className="cardsScrollContainer">
        <div className="assetsList">
          {cardsToDisplay.map((property) => (
            <div key={property.id} className="assetCard">
              <div className="cardHeader">
                <img src={property.imageUrl} alt={property.title} className="propertyImage" />
                <div className="userImageContainer">
                  <img src={property.profileImage} alt="User" className="userImage" />
                </div>
              
              </div>
              <div className="cardBody">
                <h4>{property.title}</h4>
                <p>{property.address}</p>
                <p>{property.auctionDate}</p>
                <a href={`/property/${property.id}`} className="viewButton">View now</a>
                {/* Corrected Link for navigation */}
                {/* <Link to={`/property/${property.id}`} className="viewButton">View now</Link> */}
              </div>
              {/* <div className="cardFooter">
                 <Link to={`/property/${property.id}`} className="viewButton">View now</Link>
              </div> */}
            </div>
          ))}
        </div>

        {/* "View All" button outside the scrollable container */}
        <div className="viewAllButton">
          {!showAll && (
            <button onClick={() => setShowAll(true)}>
              <Link to="/view">View All</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAssetsCards;
