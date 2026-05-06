import React from "react";
import { motion } from "framer-motion";
import {
  FaBook,
  FaCalculator,
  FaCheckCircle,
  FaClock,
  FaFlask,
  FaGraduationCap,
  FaLayerGroup,
  FaPhoneAlt,
  FaUserGraduate,
} from "react-icons/fa";

import "../styles/Courses.css";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const viewport = { once: true, margin: "-70px" };

const courses = [
  {
    icon: <FaUserGraduate />,
    title: "School Preparation",
    classes: "Class 6th to 10th",
    desc: "Strong school foundation with NCERT clarity, regular revision, and test practice.",
    points: ["NCERT Based", "Weekly Tests", "Doubt Sessions"],
    badge: "Foundation",
  },
  {
    icon: <FaCalculator />,
    title: "JEE Preparation",
    classes: "Class 11th to 12th",
    desc: "Complete preparation for JEE Main and Advanced with concept-based problem solving.",
    points: ["Expert Faculty", "Mock Tests", "Rank Improvement"],
    badge: "Engineering",
  },
  {
    icon: <FaFlask />,
    title: "NEET Preparation",
    classes: "Class 11th to 12th",
    desc: "Focused medical entrance preparation with Biology, Physics, and Chemistry support.",
    points: ["Concept Learning", "Test Series", "Revision Plan"],
    badge: "Medical",
  },
  {
    icon: <FaBook />,
    title: "Foundation Course",
    classes: "Class 6th to 10th",
    desc: "Early preparation for competitive exams, olympiads, and advanced school concepts.",
    points: ["Basic Concepts", "Olympiad Prep", "Skill Building"],
    badge: "Early Start",
  },
];

const highlights = [
  { icon: <FaClock />, title: "Regular Schedule", text: "Structured classes and revision slots." },
  { icon: <FaLayerGroup />, title: "Updated Material", text: "Notes and worksheets aligned with exams." },
  { icon: <FaGraduationCap />, title: "Mentor Support", text: "Personal guidance for better consistency." },
];

export default function Courses() {
  return (
    <main className="courses-page">
      <section className="courses-hero">
        <motion.div
          className="courses-hero-content"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="courses-label">Courses at BKG Classes</span>
          <h1>Choose the right course for your success.</h1>
          <p>
            Professional coaching for school exams, JEE, NEET, and foundation learning.
          </p>
        </motion.div>
      </section>

      <section className="courses-section">
        <div className="courses-section-header">
          <span className="courses-label">Our Programs</span>
          <h2>Focused preparation for every stage.</h2>
          <p>
            Each course is designed with clear lectures, practice sheets, tests, and doubt support.
          </p>
        </div>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <motion.article
              className="course-card"
              key={course.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ delay: index * 0.08 }}
            >
              <div className="course-card-top">
                <div className="course-icon">{course.icon}</div>
                <span>{course.badge}</span>
              </div>

              <h3>{course.title}</h3>
              <p className="course-classes">{course.classes}</p>
              <p className="course-desc">{course.desc}</p>

              <ul>
                {course.points.map((point) => (
                  <li key={point}>
                    <FaCheckCircle /> {point}
                  </li>
                ))}
              </ul>

             <a
  href="https://wa.me/919826763101?text=Hello%20I%20want%20to%20enroll"
  target="_blank"
  rel="noopener noreferrer"
  className="course-btn"
>
  Enroll Now
</a>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="courses-highlights">
        {highlights.map((item, index) => (
          <motion.div
            className="course-highlight-card"
            key={item.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ delay: index * 0.08 }}
          >
            <div>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </section>

      <section className="courses-cta">
        <div>
          <span className="courses-label">Admission Open</span>
          <h2>Start your journey with BKG Classes.</h2>
          <p>Talk to our team and select the best course for your goal.</p>
        </div>
        <a href="tel:+919826763101" className="courses-cta-btn">
  <FaPhoneAlt /> Call Us
</a>
      </section>
    </main>
  );
}
