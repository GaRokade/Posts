import Popup from "./createAccount.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPenToSquare, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
export const Home_page = () => {
  
  const [showPopup, setShowPopup] = useState(false);
  
  return (
    <header className="Header">
    <a href="https://dont-copy.netlify.app/">
      <img className="logo" src="Logo.svg" width="162.57px" height="24px" alt="Logo" />
    </a>
    <form className="search-form">
    <div className="search"><img src="search.svg" alt="search" /><input type="text"  placeholder="Search for your favorite group in ATG" /></div>
    </form>
    <button 
        className="btn custom-btn-create" 
        onClick={() => setShowPopup(true)} // Show popup on click
      >
        Create Account. <span className="text-primary">It's Free!</span>
      </button>

      {/* Show Popup Only When Needed */}
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
  </header>
  )
}

export const MainContent = () => {
  return (
    <div className="main-content">
      <div className="hero">
        <img className="hero-image" src="lady.jpg" alt="Hero" />
        <div className="overlay">
          <h1>Computer Engineering</h1>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </div>
    </div>
  );
};

import { useState } from "react";

export const Navbar = () => {
  const [joined, setJoined] = useState(false);

  const handleToggle = () => {
    setJoined((prev) => !prev);
  };
  const [activeTab, setActiveTab] = useState("All Posts(32)");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
    return (
        <>
        <div className="container">
        <div className="container" style={{ maxWidth: "1100px", margin: "0 auto" }}>
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {["All Posts(32)", "Article", "Event", "Education", "Job"].map((tab) => (
        <li className="nav-item" key={tab}>
          <a
            className="nav-link"
            href="#"
            onClick={() => handleTabClick(tab)}
            style={{
              fontWeight: activeTab === tab ? "bold" : "normal",
              borderBottom: activeTab === tab ? "2px solid black" : "none",
              color: activeTab === tab ? "black" : "gray",
              paddingBottom: "5px",
            }}
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>

          <button className="btn btn-secondary dropdown-toggle m-2"  type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Write Post
          </button>
         
        </div>

        <div
          onClick={handleToggle}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "40px",
            width: "115px",
            borderRadius: "10px",
            backgroundColor: joined ? "transparent" : "blue",
            color: joined ? "black" : "white",
            border: "1px solid grey",
          }}
        >
          {joined ? (
            <>
              <img src="leave.svg" alt="leave" />
              <span>Leave Group</span>
            </>
          ) : (
            <>
              <img src="join.svg" alt="join" />
              <span>Join Group</span>
            </>
          )}
        </div>
      </div>
    </nav>
  </div>
  <div className="articles">
      <div className="left">
      {cardsData.map((card) => (
            <Card key={card.id} data={[card]} />
          ))}
      </div>

      <div className="right">
        <LocationBox />
        <RecommendedGroups />
      </div>
    </div>
        </div>
        </>
    )
}



import "./Card.css"; // Make sure to style it properly

export const Card = ({ data }) => {
  return (
    <div className="card-container">
      {data.map((card) => (
        <div key={card.id} className="article-card">
          <img className="article-image" src={card.coverImage} alt="Cover" />
          <div className="article-body">
            <span className="category"> {card.type} </span>
            <h2 className="article-title">{card.title}</h2>
            {card.description && <p className="article-text">{card.description}</p>}
            {card.company && <p className="company">{card.company}</p>}
            <p className="location">📍 {card.location}</p>

            <button className={`action-btn ${card.buttonColor}`}>
              {card.buttonText}
            </button>

            <div className="article-footer">
              <div className="author">
                <img src={card.author.image} alt="Author" className="author-img" />
                <span className="author-name">{card.author.name}</span>
              </div>
              <span className="views">👁 {card.views} views</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const cardsData = [
  {
    id: 1,
    type: "Education",
    title:
      "Tax Benefits for Investment under National Pension Scheme launched by Government",
    description:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to reinvest...",
    author: {
      name: "Siddharth Goyal",
      image: "siddharth.jpg",
    },
    views: "1.4k",
    coverImage: "wood.jpg",
  },
  {
    id: 2,
    type: "Article",
    title: "What if famous brands had regular fonts? Meet RegulaBrands!",
    description:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei...",
    author: {
      name: "Siddharth Goyal",
      image: "lady.jpg",
    },
    views: "1.4k",
    coverImage: "nature.jpg",
  },
  {
    id:3,
    type: "Meetup",
    title: "Finance & Investment Elite Social Mixer @Lujiazui",
    date: "Fri, 12 Oct, 2018",
    location: "Ahmedabad, India",
    buttonText: "Visit Website",
    buttonColor: "red",
    author: {
      name: "Siddharth Goyal",
      image: "ghoyal.jpg",
    },
    views: "1.4k",
    coverImage: "car.jpg",
  },
  {
    id: 4,
    type: "Job",
    title: "Software Developer",
    company: "Innovaccer Analytics Private Ltd.",
    location: "Noida, India",
    buttonText: "Apply on Timejobs",
    buttonColor: "green",
    author: {
      name: "Siddharth Goyal",
      image: "siddharth.jpg",
    },
    views: "1.4k",
    coverImage: "job.jpg",
  },
  
];

const LocationBox = () => {
  return (
    <div className="location-box">
      <span className="location-container">
  <FontAwesomeIcon icon={faLocationDot} className="loca" />
  <span className="location-text">Enter Your Location</span>
  <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />
</span>

      <p className="info-text"> <FontAwesomeIcon icon={faCircleExclamation} className="info-icon" /> Your location will help us serve better and extend a personalized experience.</p>
    </div>
  );
};

const RecommendedGroups = () => {
  return (
    <div className="recommended-groups">
      <h3>👍 RECOMMENDED GROUPS</h3>
      <Group name="Leisure" />
      <Group name="Activism" />
      <Group name="MBA" />
      <Group name="Philosophy" />
      <a href="#" className="see-more">See More...</a>
    </div>
  );
};

const Group = ({ name }) => {
  return (
    <div className="group">
      <div className="group-info">
        <img src="rec.jpg" alt={name} className="group-img" />
        <span>{name}</span>
      </div>
      <button className="btn-follow">Follow</button>
    </div>
  );
};


export const Main = () => {
  return (
    <div>
      <Home_page />
        <MainContent />
        <Navbar />
    </div>
  )
}