// src/App.jsx
import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* ===== PUBLIC PAGES ===== */
import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
import Courses from "./components/Courses";
import ContactUs from "./components/ContactUs";
import Faculty from "./components/Faculty";
import Results from "./components/Results";

/* ============ LAYOUT ============ */
function PublicLayout({ children }) {
  return (
    <div className="main-container">
      <Navbar />
      <main style={{ minHeight: "70vh", marginTop: "80px" }}>{children}</main>
      <Footer />
    </div>
  );
}

/* ============ APP ============ */
export default function App() {
  return (
    <Router>
      <Suspense fallback={<div style={{ textAlign: "center", padding: "100px" }}>Loading...</div>}>
        <Routes>

          {/* PUBLIC */}
          <Route path="/" element={<PublicLayout><Homepage /></PublicLayout>} />
          <Route path="/about" element={<PublicLayout><AboutUs /></PublicLayout>} />
          <Route path="/courses" element={<PublicLayout><Courses /></PublicLayout>} />
          <Route path="/results" element={<PublicLayout><Results /></PublicLayout>} />
          <Route path="/faculty" element={<PublicLayout><Faculty /></PublicLayout>} />
          <Route path="/contact" element={<PublicLayout><ContactUs /></PublicLayout>} />
         

          {/* 404 */}
          <Route
            path="*"
            element={
              <PublicLayout>
                <div style={{ textAlign: "center", padding: "100px" }}>
                  <h2>404 - Page Not Found</h2>
                  <p>The page you're looking for doesn't exist.</p>
                </div>
              </PublicLayout>
            }
          />

        </Routes>
      </Suspense>
    </Router>
  );
}
