import React, { useState, useEffect } from "react"; // Add useEffect here!
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Jobsforu from "./Pages/Jobsforu";
import Partnercompany from "./Pages/Partnercompany";
import BrowseJobs from "./Pages/BrowseJobs";
import HowWork from "./Pages/HowWork";
import FeedBack from "./Pages/FeedBack";
import FindJob from "./jobs/FindJob";
import Companies from "./companies/Companies";
import About from "./about/About";
import PostJob from "./jobs/PostJob";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import LoginPopup from "./auth/LoginPopup"; // Import popup component
import ScrollToTop from "./Components/ScrollToTop";
import Contact from "./Pages/Contact";


const App = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoginPopup(true);
    }, 5000); // Show popup after 5 sec

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>

      <ScrollToTop />
      <Header />
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home onShowLogin={() => setShowLoginPopup(true)} />
              <Jobsforu />
              <BrowseJobs />
              <Partnercompany />
              <HowWork />
              <FeedBack />
            </>
          }
        />

        <Route
          path="/find-job"
          element={
            <>
              <FindJob />
            </>
          }
        />
        <Route
          path="/post-job"
          element={
            <>
              <PostJob />
            </>
          }
        />
         <Route
          path="/contact"
          element={
            <>
           <Contact />
            </>
          }
        />

         <Route 
           path="/companies" 
           element={
             <>
               <Companies />
             </>
           } 
         />
         

        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        /* <Route path="/login" element={<Login />} />
      </Routes>

      {showLoginPopup && <LoginPopup onClose={() => setShowLoginPopup(false)} />}
      
      <Footer />
    </Router>
  );
};

export default App;
