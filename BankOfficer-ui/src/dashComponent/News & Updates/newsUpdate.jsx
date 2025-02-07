import "./newsUpdate.scss";
import { useNavigate } from "react-router-dom";

const News = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="image-container">
        <img
          loading="lazy"
          src="/welcomeM.png" // Use your desired image here
          alt="News"
          className="image"
        />
        <button
          className="exploreNowButton"
          // onClick={() => (window.location.href = "https://example.com")}
          onClick={() => navigate("/")}
        >
         Home Page
        </button>
      </div>
    </div>
  );
};

export default News;
