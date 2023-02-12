import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Routes ,Route,   useNavigationType,
  useLocation } from 'react-router-dom';
import { useEffect } from "react";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
import RegistrationPage from './pages/RegistrationPage';
import RegistrationPage1 from './pages/RegistrationPage1';

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "Login";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Login";
        metaDescription = "";
        break;
      case "/registration-page":
        title = "Sign Up";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);


// function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Contact Us" element={<ContactUs/>}/>
      </Routes>
      <Footer/>
      <Routes>
        <Route exact path="/Register" element={<RegistrationPage1/>}/>
        <Route exact path="/Login" element={<RegistrationPage/>}/>
        </Routes>
    </>
  );
}

export default App;
