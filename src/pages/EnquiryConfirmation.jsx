import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function EnquiryConfirmation() {
  const location = useLocation();
  const enquiry = location.state ?? {};

  return (
    <>
      <Navbar />
      <main className="sample-page">
        <section className="sample-hero">
          <div className="sample-shell">
            <div className="enquiry-confirmation-card">
              <p className="sample-eyebrow">Enquiry Submitted</p>
              <h1>Thank you for reaching out to Apex Institute.</h1>
              <p className="sample-description">
                Your enquiry has been recorded successfully. Our team will review your details
                and connect with you soon using your preferred contact method.
              </p>

              <div className="enquiry-confirmation-grid">
                <div className="enquiry-confirmation-item">
                  <span>Name</span>
                  <strong>{enquiry.fullName || "Applicant"}</strong>
                </div>
                <div className="enquiry-confirmation-item">
                  <span>Course</span>
                  <strong>{enquiry.courseInterest || "Admissions Enquiry"}</strong>
                </div>
                <div className="enquiry-confirmation-item">
                  <span>Email</span>
                  <strong>{enquiry.email || "Provided in the form"}</strong>
                </div>
                <div className="enquiry-confirmation-item">
                  <span>Preferred Contact</span>
                  <strong>{enquiry.preferredContact || "Phone Call"}</strong>
                </div>
              </div>

              <div className="enquiry-confirmation-actions">
                <Link className="enquiry-primary-button" to="/contact-us">
                  Contact Page
                </Link>
                <Link className="enquiry-secondary-button" to="/">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
