import React, { useState } from "react"; // ✅ Correct useState import
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Popup.css";
import { FaFacebook, FaGoogle } from "react-icons/fa";


const Popup = ({ onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/login",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setMessage(res.data.message);

      // ✅ Store auth token securely
      localStorage.setItem("authToken", res.data.token);

      // ✅ Close popup and navigate to home
       navigate("/");
    } catch (error) {
      console.error("❌ Login Error:", error.response?.data || error);
      setMessage(error.response?.data?.message || "Error logging in");
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        {/* Close button, calls onClose when clicked */}
        <button className="close-btn" onClick={onClose ? onClose : () => navigate("/")}>
  &times;
</button>



        <p className="header-text">
          Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
        </p>
        
        <h2>Sign In</h2>
        <p className="signin-text">
          Don't have an account yet? <a href="/popup">Create new for free</a>
        </p>

        <div className="popup-content">
          <div className="form">
          <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
              <button className="create-btn" type="submit">
                Sign In
              </button>
            </form>


          {message && <p className="message">{message}</p>}

            <button className="social-btn fb-btn">
              <img src="facebook.svg" alt="facebook" /> Sign in with Facebook
            </button>
            <button className="social-btn google-btn">
              <img src="gog.jpg" alt="google" height="23px" /> Sign in with Google
            </button>

            <h5>Forgot Password?</h5>
          </div>

          <div className="illustration">
            <img src="signup.svg" alt="Sign Up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
