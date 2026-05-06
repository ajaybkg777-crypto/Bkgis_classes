
import React from "react";
import { motion } from "framer-motion";
import "../styles/Homepage.css";

export default function Homepage() {
  return (
    <div className="homepage">

      {/* ================= HERO ================= */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to <span className="highlight">BKG Classes</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Shaping Futures with Excellence Since 2002
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="/contact" className="btn primary">Enroll Now</a>
            <a href="/about" className="btn secondary">Learn More</a>
          </motion.div>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <h3>25+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-item">
            <h3>5000+</h3>
            <p>Students</p>
          </div>
          <div className="stat-item">
            <h3>95%</h3>
            <p>Results</p>
          </div>
        </div>
      </section>

      {/* ================= DIRECTOR ================= */}
      <section className="director-section">
  <div className="director-container">
    
    {/* LEFT SIDE TEXT */}
    <div className="director-text">
      <span className="section-label">Director's Message</span>
      <h2>Guidance that builds confidence, discipline, and strong concepts.</h2>

      <p>
        Since 2002, our mission has been simple - to provide quality education 
        that builds strong concepts, confidence, and character in every student.
      </p>

      <p>
        We believe that success is not just about marks, but about developing 
        the right mindset, discipline, and problem-solving skills. Our focus is 
        to guide students step by step so they can achieve their goals with clarity.
      </p>

      <ul>
        <li> Experienced & Dedicated Faculty</li>
        <li> Structured & Updated Study Material</li>
        <li> Regular Tests & Performance Analysis</li>
        <li> Consistent Results & Student Success</li>
      </ul>

      <p className="director-quote">
        "Education is not just learning facts, it is training the mind to think."
      </p>
    </div>

    {/* RIGHT SIDE IMAGE */}
    <div className="director-image">
      <div className="image-wrapper">
        <img src="/assets/founder.jpg" alt="Director of BKG Classes" />
        <span className="image-badge">Since 2002</span>
      </div>
      <h3 className="director-name">Mr. Hariom Gupta</h3>
      <p className="director-title">Director</p>
    </div>

  </div>
</section>
      {/* ================= WHY CHOOSE US ================= */}
      <section className="why-section">
        <h2 className="section-title">Why Choose <span>BKG Classes</span></h2>
        <p className="section-subtitle">
          One of the best coaching institutes in Khargone with expert teachers, 
          smart learning methods, and consistent results.
        </p>
        
        <div className="why-grid">
          {[
            { icon: "👨‍🏫", title: "Expert Faculty", desc: "IITians & experienced teachers" },
            { icon: "📖", title: "Smart Study Material", desc: "Updated & comprehensive" },
            { icon: "🧪", title: "Regular Tests", desc: "Weekly & monthly assessments" },
            { icon: "💻", title: "Online Classes", desc: "Learn from anywhere" },
            { icon: "🎓", title: "Doubt Sessions", desc: "One-on-one support" },
            { icon: "📊", title: "Progress Tracking", desc: "Detailed performance reports" }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              className="why-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CLASSES ================= */}
      <section className="classes-section">
        <h2 className="section-title">Classes We <span>Offer</span></h2>
        <p className="section-subtitle">
          Comprehensive coaching for school students and competitive exams
        </p>

        <div className="classes-grid">
          {[
            { class: "6th-8th", desc: "Foundation Building" },
            { class: "9th-10th", desc: "CBSE Preparation" },
            { class: "11th-12th", desc: "Science Stream" },
            { class: "JEE", desc: "IIT JEE Mains & Advanced" },
            { class: "NEET", desc: "Medical Entrance" },
            { class: "Foundation", desc: "Class 9-12 CBSE" }
          ].map((c, i) => (
            <motion.div 
              key={i} 
              className="class-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="class-icon">📚</div>
              <h3>{c.class}</h3>
              <p>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= RESULTS ================= */}
      <section className="results-section">
        <h2 className="section-title">Our <span>Results</span></h2>
        <p className="section-subtitle">
          Thousands of successful students are our biggest achievement
        </p>

        <div className="results-grid">
          {[
            { number: "500+", label: "Students Selected", icon: "🎓" },
            { number: "95%", label: "Success Rate", icon: "📈" },
            { number: "50+", label: "Top Rankers", icon: "🏆" },
            { number: "100%", label: "Student Satisfaction", icon: "😊" }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              className="result-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="result-icon">{item.icon}</span>
              <h3>{item.number}</h3>
              <p>{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FACULTY ================= */}
      <section className="faculty-section">
        <div className="faculty-section-header">
          <div>
            <span className="section-label">Expert Mentors</span>
            <h2 className="section-title">Our <span>Faculty</span></h2>
            <p className="section-subtitle">
              Learn from experienced teachers who focus on concept clarity, exam strategy,
              and personal guidance.
            </p>
          </div>
          <a href="/faculty" className="btn outline faculty-view-btn">View All Faculty</a>
        </div>

        <div className="faculty-grid">
          {[
            {
              name: "Hariom Gupta Sir",
              subject: "Physics ",
              exp: "25+ Years",
              image: "/assets/founder.jpg",
              focus: "JEE Foundation",
            },
            {
              name: "Vishal Yadav Sir",
              subject: "maths",
              exp: "10+ Years",
              image: "/assets/staff1.jpg",
              focus: "Numerical Practice",
            },
            {
              name: "Pranita Gupta Ma'am",
              subject: "Chemistry",
              exp: "8+ Years",
              image: "/assets/staff2.jpg",
              focus: "Board & NEET Prep",
            },
            {
              name: "Ankit Sir",
              subject: "Biology",
              exp: "9+ Years",
              image: "/assets/mam.jpg",
              focus: "Concept Diagrams",
            }
          ].map((teacher, i) => (
            <motion.div 
              key={teacher.name}
              className="faculty-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="faculty-img">
                <img src={teacher.image} alt={teacher.name} />
              </div>
              <div className="faculty-card-content">
                <h3>{teacher.name}</h3>
                <p className="faculty-subject">{teacher.subject}</p>
                <div className="faculty-meta">
                  <span>{teacher.exp}</span>
                  <span>{teacher.focus}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section className="testimonial-section">
        <h2 className="section-title">Student <span>Feedback</span></h2>
        <p className="section-subtitle">
          Hear what our students have to say about their journey at BKG Classes
        </p>

        <div className="testimonial-grid">
          {[
            { quote: "Best coaching in Khargone! My marks improved from 60% to 90% in just 6 months. The teachers are amazing.", name: "Rahul Sharma", class: "JEE Student" },
            { quote: "BKG Classes helped me crack NEET with a great rank. The study material and test series were extremely helpful.", name: "Priya Singh", class: "NEET Student" },
            { quote: "Excellent faculty and supportive environment. I scored 95% in my board exams thanks to BKG Classes.", name: "Amit Patel", class: "Class 12 Student" }
          ].map((testimonial, i) => (
            <motion.div 
              key={i} 
              className="testimonial-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="quote-icon">"</div>
              <p>{testimonial.quote}</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <span>{testimonial.class}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta-section">
        <div className="cta-overlay"></div>
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Start Your Success Journey</h2>
          <p>Join thousands of successful students at BKG Classes</p>
          <div className="cta-buttons">
           <a 
  href="https://wa.me/919876543210?text=Hello%20I%20want%20to%20know%20about%20admission" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="btn primary"
>
  Enroll Now
</a>
            <a href="tel:+919826763101" className="btn secondary">Call Us</a>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
