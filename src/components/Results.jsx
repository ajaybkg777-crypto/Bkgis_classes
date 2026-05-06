import React from "react";
import { motion } from "framer-motion";
import {
  FaAward,
  FaChartLine,
  FaCheckCircle,
  FaGraduationCap,
  FaMedal,
  FaStar,
  FaTrophy,
  FaUserGraduate,
} from "react-icons/fa";
import "../styles/Results.css";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const viewport = { once: true, margin: "-70px" };

const stats = [
  { icon: <FaUserGraduate />, value: "500+", label: "Students Selected" },
  { icon: <FaChartLine />, value: "95%", label: "Success Rate" },
  { icon: <FaTrophy />, value: "50+", label: "Top Rankers" },
  { icon: <FaAward />, value: "25+", label: "Years of Results" },
];

const toppers = [
  {
    name: "Rahul Sharma",
    course: "JEE Foundation",
    score: "95%",
    image: "/assets/toppers.png",
  },
  {
    name: "Priya Singh",
    course: "NEET Preparation",
    score: "685/720",
    image: "/assets/toppers.png",
  },
  {
    name: "Amit Patel",
    course: "Class 12 Boards",
    score: "90%",
    image: "/assets/toppers.png",
  },
];

const achievements = [
  "Consistent board exam improvement",
  "Regular test series and analysis",
  "Focused JEE and NEET preparation",
  "Personal mentoring for every student",
];

export default function Results() {
  return (
    <main className="results-page">
      <section className="results-hero">
        <motion.div
          className="results-hero-content"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="results-label">Our Results</span>
          <h1>Success that reflects consistent preparation.</h1>
          <p>
            Student achievements built through concept clarity, regular tests, and personal guidance.
          </p>
        </motion.div>
      </section>

      <section className="results-stats" aria-label="BKG Classes result highlights">
        <div className="results-stats-grid">
          {stats.map((item, index) => (
            <motion.div
              className="result-stat-card"
              key={item.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ delay: index * 0.08 }}
            >
              <div className="result-stat-icon">{item.icon}</div>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="topper-section">
        <div className="results-section-header">
          <span className="results-label">Top Performers</span>
          <h2>Our students, our pride.</h2>
          <p>
            Every result is a story of discipline, practice, and the right mentoring.
          </p>
        </div>

        <div className="topper-grid">
          {toppers.map((student, index) => (
            <motion.article
              className="topper-card"
              key={`${student.name}-${index}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ delay: index * 0.08 }}
            >
              <div className="topper-image">
                <img src={student.image} alt={student.name} />
                <span><FaMedal /> {student.score}</span>
              </div>
              <div className="topper-info">
                <h3>{student.name}</h3>
                <p>{student.course}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="achievement-section">
        <motion.div
          className="achievement-content"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <span className="results-label">Result Strategy</span>
          <h2>How BKG Classes improves performance.</h2>
          <p>
            Our result system is simple: strong concepts, regular practice, honest
            analysis, and timely doubt support.
          </p>
        </motion.div>

        <div className="achievement-list">
          {achievements.map((item, index) => (
            <motion.div
              className="achievement-item"
              key={item}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ delay: index * 0.08 }}
            >
              <FaCheckCircle />
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="results-cta">
        <div>
          <span className="results-label">Next Success Story</span>
          <h2>Be the next topper at BKG Classes.</h2>
          <p>Join focused batches for boards, JEE, NEET, and foundation courses.</p>
        </div>
        <a href="https://wa.me/919826763101?text=Hello%20I%20want%20to%20enroll"
  target="_blank"
  rel="noopener noreferrer"
  className="results-cta-btn">
          <FaStar /> Join Now
        </a>
      </section>
    </main>
  );
}
