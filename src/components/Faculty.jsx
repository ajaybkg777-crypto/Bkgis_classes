import React from "react";
import { motion } from "framer-motion";
import {
  FaAward,
  FaBookOpen,
  FaChalkboardTeacher,
  FaChartLine,
  FaCheckCircle,
  FaFlask,
  FaMicroscope,
  FaPhoneAlt,
  FaSquareRootAlt,
  FaUserGraduate,
} from "react-icons/fa";

import "../styles/Faculty.css";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const viewport = { once: true, margin: "-70px" };

const faculty = [
  {
    name: "Mr. Hariom Gupta",
    role: "Director & Physics Faculty",
    experience: "13+ Years",
    image: "/assets/founder.jpg",
    icon: <FaSquareRootAlt />,
    subjects: ["Mathematics", "JEE Foundation", "Board Strategy"],
    bio: "Known for concept clarity, disciplined mentoring, and practical problem-solving methods.",
  },
  {
    name: "Vishal Yadav Sir",
    role: "maths Faculty",
    experience: "10+ Years",
    image: "/assets/staff1.jpg",
    icon: <FaFlask />,
    subjects: ["Physics", "Numericals", "JEE/NEET Basics"],
    bio: "Helps students understand physics through examples, visualization, and regular practice.",
  },
  {
    name: "Pranita Gupta Ma'am",
    role: "Chemistry Faculty",
    experience: "8+ Years",
    image: "/assets/staff2.jpg",
    icon: <FaMicroscope />,
    subjects: ["Chemistry", "Reactions", "Board Preparation"],
    bio: "Focuses on simple explanations, memory techniques, and exam-ready revision plans.",
  },
  {
    name: "Ankit Sir",
    role: "Biology Faculty",
    experience: "9+ Years",
    image: "/assets/mam.jpg",
    icon: <FaBookOpen />,
    subjects: ["Biology", "NEET Concepts", "Diagrams"],
    bio: "Guides students with structured notes, diagrams, and repeated concept reinforcement.",
  },
];

const strengths = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Concept First Teaching",
    text: "Every topic is taught from basics so students understand instead of memorizing blindly.",
  },
  {
    icon: <FaChartLine />,
    title: "Performance Tracking",
    text: "Regular tests and progress reviews help students improve step by step.",
  },
  {
    icon: <FaUserGraduate />,
    title: "Personal Guidance",
    text: "Faculty members support students with doubts, planning, revision, and motivation.",
  },
];

const facultyStats = [
  { value: "13+", label: "Years Experience" },
  { value: "4", label: "Core Subjects" },
  { value: "5000+", label: "Students Guided" },
];

export default function Faculty() {
  return (
    <main className="faculty-page">
      <section className="faculty-hero">
        <motion.div
          className="faculty-hero-content"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="faculty-label">Our Faculty</span>
          <h1>Learn from teachers who make concepts clear.</h1>
          <p>
            Experienced mentors for school exams, JEE, NEET, and foundation learning.
          </p>
        </motion.div>
      </section>

      <section className="faculty-intro">
        <div>
          <span className="faculty-label">Why Our Teachers Stand Out</span>
          <h2>Professional guidance with personal attention.</h2>
        </div>
        <p>
          At BKG Classes, faculty members focus on clarity, consistency, and confidence.
          Students get structured classes, doubt support, exam strategy, and regular feedback.
        </p>
      </section>

      <section className="faculty-leadership">
        <motion.div
          className="leadership-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="leadership-photo">
            <img src="/assets/founder.jpg" alt="Mr. Ajay Baghel" />
            <span><FaAward /> Director</span>
          </div>
          <div className="leadership-content">
            <span className="faculty-label">Academic Leadership</span>
            <h2>Led by experienced mentoring and clear academic direction.</h2>
            <p>
              Our faculty team works with one goal: make every student stronger in
              concepts, confidence, and exam discipline.
            </p>
            <div className="faculty-stat-row">
              {facultyStats.map((item) => (
                <div key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="faculty-list">
        <div className="faculty-list-header">
          <span className="faculty-label">Meet Our Teachers</span>
          <h2>Mentors who guide every student with clarity.</h2>
          <p>
            Our teachers combine subject expertise, exam strategy, and regular
            doubt support so students can learn with confidence.
          </p>
        </div>
        <div className="faculty-grid">
          {faculty.map((teacher, index) => (
            <motion.article
              className="faculty-profile-card"
              key={teacher.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ delay: index * 0.08 }}
            >
              <div className="faculty-photo">
                <img src={teacher.image} alt={teacher.name} />
                <span>{teacher.experience}</span>
              </div>

              <div className="faculty-card-body">
                <div className="faculty-subject-icon" aria-hidden="true">
                  {teacher.icon}
                </div>
                <h3>{teacher.name}</h3>
                <p className="faculty-role">{teacher.role}</p>
                <p className="faculty-bio">{teacher.bio}</p>

                <span className="faculty-focus-label">Teaching focus</span>
                <ul className="faculty-tags">
                  {teacher.subjects.map((subject) => (
                    <li key={subject}>
                      <FaCheckCircle /> {subject}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="faculty-strength-header">
        <span className="faculty-label">Teaching Quality</span>
        <h2>What students receive in every class.</h2>
      </section>

      <section className="faculty-strengths">
        {strengths.map((item, index) => (
          <motion.div
            className="faculty-strength-card"
            key={item.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ delay: index * 0.08 }}
          >
            <div className="faculty-strength-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </section>

      <section className="faculty-cta">
        <div>
          <span className="faculty-label">Need Guidance?</span>
          <h2>Meet our faculty and choose the right preparation plan.</h2>
        </div>
        <a href="tel:+919826763101" className="faculty-cta-btn">
          <FaPhoneAlt /> Contact Us
        </a>
      </section>
    </main>
  );
}
