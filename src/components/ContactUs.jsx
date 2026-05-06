import React from "react";
import "../styles/ContactUs.css";
import {
  ArrowUpRight,
  BookOpen,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Users,
} from "lucide-react";

const contactCards = [
  {
    icon: MapPin,
    title: "Visit Campus",
    text: "BKG International School, Khargone - Sanawad Road, Fata, Bid, Madhya Pradesh 451001",
    href:"https://www.google.com/maps?q=BKG+Classes+Khargone+Madhya+Pradesh",
    action: "Open map",
  },
  {
    icon: Phone,
    title: "Admissions Office",
    text: "Speak directly with our team at 098267 63101",
    href: "tel:9826763101",
    action: "Call now",
  },
  {
    icon: Mail,
    title: "Email Support",
    text: "Send your enquiry to info@bkgis.in",
    href: "mailto:info@bkgis.in",
    action: "Send email",
  },
  {
    icon: Clock,
    title: "Working Hours",
    text: "Monday to Saturday, 8:00 AM - 4:00 PM",
  },
];

const supportItems = [
  {
    icon: Users,
    title: "Admission Counselling",
    text: "Discuss classes, eligibility, batches, fees, and the best learning path for your child.",
  },
  {
    icon: BookOpen,
    title: "Course Information",
    text: "Get details about board preparation, foundation courses, study plans, and tests.",
  },
  {
    icon: MessageCircle,
    title: "Fast Assistance",
    text: "Call during office hours for urgent queries, or email your details for a callback.",
  },
];

export default function ContactUs() {
  return (
    <div className="contact-pro">
      <header className="contact-hero-pro">
        <div className="hero-text">
          <span className="contact-kicker">Admissions and enquiries</span>
          <h1>
            Let us help you choose the right course.
          </h1>
          <p>
            Connect with BKG Classes for admissions, course guidance, class
            schedules, and campus visits. Our team will help you with clear,
            practical information.
          </p>
          <div className="hero-actions">
            <a href="tel:9826763101" className="contact-primary-btn">
              <Phone size={18} />
              Call 098267 63101
            </a>
            <a
              href="https://www.google.com/maps?q=BKG+Classes+Khargone+Madhya+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-secondary-btn"
            >
              <MapPin size={18} />
              Get Directions
            </a>
          </div>
        </div>
      </header>

      <section className="contact-info-pro" aria-label="Contact details">
        {contactCards.map(({ icon: Icon, title, text, href, action }) => {
          const content = (
            <>
              <Icon className="icon" />
              <div className="contact-card-content">
                <h3>{title}</h3>
                <p>{text}</p>
                {action && (
                  <span className="contact-card-action">
                    {action}
                    <ArrowUpRight size={15} />
                  </span>
                )}
              </div>
            </>
          );

          return href ? (
            <a
              key={title}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="info-card-pro"
            >
              {content}
            </a>
          ) : (
            <div key={title} className="info-card-pro">
              {content}
            </div>
          );
        })}
      </section>

      <section className="contact-body-pro">
        <div className="contact-help-pro">
          <span className="section-label">Student support</span>
          <h2>Get clear answers before you enrol.</h2>
          <p className="contact-lead">
            For quick help, contact the office directly by phone or email. Our
            team can guide you through admissions, course selection, and visit
            planning.
          </p>

          <div className="support-list-pro">
            {supportItems.map(({ icon: Icon, title, text }) => (
              <div className="support-card-pro" key={title}>
                <Icon />
                <div className="support-card-content">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="map-box-pro">
          <iframe
            title="BKG International School Map"
            src="https://www.google.com/maps?q=BKG+Classes+Khargone+Madhya+Pradesh&output=embed"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
}
