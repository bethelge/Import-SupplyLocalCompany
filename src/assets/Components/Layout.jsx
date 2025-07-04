import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Navbar from "./Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import CustomCarousel from "./Components/Carousel/CustomCarousel";
import ServicesProducts from "./Components/Services/services";
import ProductCard from "./Components/Products/Products";
import ContactUs from "./Components/Contact/Contact";
import ImageViewer from "./Components/ImagePage/ImageViewer.jsx";
import Testimonials from "./Components/Testimony/Testimonials";
import MediaCoverage from "./Components/MediaCoverage/MediaCoverage";

// 🆕 Admin imports
import AdminLogin from "./Components/Admin/AdminLogin";
import AdminPostForm from "./Components/Admin/AdminPostForm";
import ProtectedRoute from "./Components/Admin/ProtectedRoute.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public homepage */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <CustomCarousel />
              <Hero />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/service"
          element={
            <>
              <Navbar />
              <ServicesProducts />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <Navbar />
              <ProductCard />
            </>
          }
        />
        <Route
          path="/testimonials"
          element={
            <>
              <Navbar />
              <Testimonials />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <ContactUs />
            </>
          }
        />
        <Route path="/image/:productSlug" element={<ImageViewer />} />
        <Route path="/media" element={<MediaCoverage />} />

        {/* 🆕 Admin login route */}
        <Route path="/login" element={<AdminLogin />} />

        {/* 🆕 Protected media posting route */}
        <Route
          path="/admin/media"
          element={
            <ProtectedRoute>
              <AdminPostForm />
            </ProtectedRoute>
          }
        />

        {/* 🧹 Optional: catch-all redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <footer>
        <div className="footer-container">
          <p>© 2023 HAF Import & Supply. All rights reserved.</p>
        </div>
      </footer>
    </Router>
  );
};

export default App;
