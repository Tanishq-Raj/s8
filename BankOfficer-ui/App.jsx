
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyAssets from './officerPages/my Assets/MyAssets';
import Single from './officerPages/singlePage/single';
import Auction from './officerPages/auction/Auction';
import AssetsViwe from './officerPages/my Assets/AssetsView';
import AddAsset from './officerPages/add new asset/AddAsset';
import Profilepage from './officerPages/profilePage/ProfilePage';
import Profile2 from './officerPages/profile Settings/Profile2';
import AuctionLanding from './userPages/AuctionLanding';
import NavigationBar from './componentsUsers/navigationBar/NavigationBar';
// import Profile from './officerPages/profile Settings/Profile';
import PropTypes from "prop-types"; 
import SignUpPage from './userPages/SignUp';


function LayoutWithNavbar({ children }) {
  return (
    <>
      <NavigationBar/>
      {children}
    </>
  );
}

// PropTypes validation**
LayoutWithNavbar.propTypes = {
  children: PropTypes.node.isRequired,
};

function App() {
  // const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
      <Routes>
      {/* Routes with Navbar USER SIDE PAGES */}
      {/* <Route path="/sign-up" element={<SignUpPage/>} />
      <Route path="/" element={<LayoutWithNavbar><AuctionLanding /></LayoutWithNavbar>} /> */}

         {/* Routes without Navbar (OFFICER DASHBORD PAGES) */} 
         
        
       <Route path="/" element={<Profilepage/>} />
       <Route path="/myAssets" element={<MyAssets/>} />
       <Route path="/profile" element={<Profile2 />} />
       <Route path="/auction" element={<Auction />} />
       <Route path="/view" element={<AssetsViwe />} />
       <Route path="/property/:id" element={<Single />} />
       <Route path="/addNew" element={<AddAsset/>} />

       </Routes>
       </BrowserRouter>
  )
}

export default App
