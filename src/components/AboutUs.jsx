import React from "react";
import { motion } from "framer-motion";
import {
  FaAward,
  FaBookOpen,
  FaBullseye,
  FaChartLine,
  FaCheckCircle,
  FaClock,
  FaEye,
  FaGraduationCap,
  FaQuoteLeft,
  FaUsers,
} from "react-icons/fa";

import "../styles/AboutUs.css";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const viewport = { once: true, margin: "-70px" };

const stats = [
  { icon: <FaClock />, number: "25+", label: "Years Experience" },
  { icon: <FaUsers />, number: "5000+", label: "Students Mentored" },
  { icon: <FaAward />, number: "95%", label: "Success Rate" },
  { icon: <FaGraduationCap />, number: "50+", label: "Top Rankers" },
];

const strengths = [
  { icon: <FaUsers />, title: "Expert Faculty", text: "Experienced teachers who explain concepts with clarity." },
  { icon: <FaBookOpen />, title: "Structured Material", text: "Updated notes, assignments, and exam-focused practice." },
  { icon: <FaChartLine />, title: "Regular Analysis", text: "Frequent tests with clear performance tracking." },
  { icon: <FaCheckCircle />, title: "Doubt Support", text: "Personal attention so students never feel stuck." },
  { icon: <FaBullseye />, title: "Result Focused", text: "Preparation designed around boards, JEE, and NEET goals." },
  { icon: <FaGraduationCap />, title: "Strong Foundation", text: "Concept building from school level to competitive exams." },
];

const approach = [
  "Concept clarity before shortcuts",
  "Weekly tests with performance review",
  "Personal doubt support and mentoring",
  "Exam-focused revision and practice",
];

export default function AboutUs() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-overlay" aria-hidden="true" />
        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="about-label">About Our Institute</span>
          <h1>About <span>BKG Classes</span></h1>
          <p>Shaping confident, disciplined, and future-ready students since 2002.</p>
        </motion.div>
      </section>

      <section className="about-intro">
        <motion.div
          className="about-intro-text"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <span className="about-label">Welcome</span>
          <h2>Trusted coaching for school exams, JEE, and NEET.</h2>
          <p>
            BKG Classes is one of the most trusted coaching institutes in Khargone.
            We help students build strong concepts, disciplined study habits, and
            the confidence needed to perform in exams.
          </p>
          <p>
            Our teaching approach combines clear classroom learning, smart study
            material, regular tests, and personal guidance for every student.
          </p>
          <div className="about-trust-list">
            {approach.map((item) => (
              <span key={item}>
                <FaCheckCircle /> {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="about-intro-media"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ delay: 0.12 }}
        >
          <img src="/assets/coaching.png" alt="Students learning at BKG Classes" />
          <div className="intro-media-badge">
            <strong>25+</strong>
            <span>Years of Excellence</span>
          </div>
        </motion.div>
      </section>

      <section className="about-stats" aria-label="BKG Classes achievements">
        <div className="about-stats-grid">
          {stats.map((item, index) => (
            <motion.div
              className="about-stat-card"
              key={item.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ delay: index * 0.08 }}
            >
              <div className="about-stat-icon">{item.icon}</div>
              <h3>{item.number}</h3>
              <p>{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mission-vision">
        <motion.div className="mv-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <FaBullseye />
          <h3>Our Mission</h3>
          <p>
            To provide high-quality education that builds concepts, confidence,
            discipline, and exam readiness in every student.
          </p>
        </motion.div>

        <motion.div
          className="mv-card featured"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ delay: 0.1 }}
        >
          <FaEye />
          <h3>Our Vision</h3>
          <p>
            To become the most trusted institute for school and competitive exam
            preparation by delivering consistent student success.
          </p>
        </motion.div>
      </section>

      <section className="about-why">
        <span className="about-label">Why Students Choose Us</span>
        <h2>Professional guidance with personal attention.</h2>

        <div className="about-why-grid">
          {strengths.map((item, index) => (
            <motion.div
              className="about-why-card"
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ delay: index * 0.06 }}
            >
              <div className="about-why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="about-approach">
        <div className="about-approach-inner">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <span className="about-label">Our Approach</span>
            <h2>Simple process. Strong results.</h2>
          </motion.div>

          <div className="approach-steps">
            {["Learn", "Practice", "Test", "Improve"].map((step, index) => (
              <motion.div
                className="approach-step"
                key={step}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ delay: index * 0.08 }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step}</h3>
                <p>{approach[index]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="founder-section">
        <div className="founder-container">
          <motion.div
            className="founder-img"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <img src="/assets/founder.jpg" alt="Founder of BKG Classes" />
          </motion.div>

          <motion.div
            className="founder-text"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ delay: 0.1 }}
          >
            <span className="about-label">Founder Message</span>
            <FaQuoteLeft className="founder-quote" />
            <p>
              At BKG Classes, we believe every student has potential. Our role is
              to guide them with the right strategy, discipline, and quality
              education so they can move toward success with confidence.
            </p>
            <h3>Mr. Hariom Gupta</h3>
            <span className="founder-role">Founder, BKG Classes</span>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
