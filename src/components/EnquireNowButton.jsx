import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, SendHorizonal, X } from "lucide-react";

const COURSE_OPTIONS = [
  "B.Tech",
  "B.Arch",
  "M.Tech",
  "MCA",
  "Artificial Intelligence and Machine Learning",
  "Computer Science and Engineering",
  "Electronics and Communication Engineering",
  "Civil Engineering",
  "Mechanical Engineering",
  "M.Tech in Cybersecurity",
  "M.Tech in VLSI Design",
];

const INITIAL_FORM = {
  fullName: "",
  countryCode: "+91",
  phoneNumber: "",
  email: "",
  courseInterest: "",
  qualificationLevel: "",
  city: "",
  query: "",
  preferredContact: "Phone Call",
  consent: false,
};

export default function EnquireNowButton() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [error, setError] = useState("");

  const courseOptions = useMemo(() => COURSE_OPTIONS, []);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM);
    setError("");
  };

  const closeModal = () => {
    setIsOpen(false);
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.consent) {
      setError("Please confirm that we may contact you regarding your enquiry.");
      return;
    }

    navigate("/contact-us/confirmation", {
      state: {
        fullName: formData.fullName,
        email: formData.email,
        phone: `${formData.countryCode} ${formData.phoneNumber}`,
        courseInterest: formData.courseInterest,
        preferredContact: formData.preferredContact,
      },
    });

    closeModal();
    resetForm();
  };

  return (
    <>
      <button
        type="button"
        className="enquire-now-button"
        onClick={() => setIsOpen(true)}
        aria-label="Open enquiry form"
      >
        <span>Enquire Now</span>
      </button>

      {isOpen ? (
        <div className="enquiry-modal-backdrop" role="presentation" onClick={closeModal}>
          <section
            className="enquiry-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <header className="enquiry-modal-header">
              <div>
                <p className="enquiry-modal-kicker">Admissions Support</p>
                <h2 id="enquiry-modal-title">Tell us how we can help you.</h2>
              </div>

              <button
                type="button"
                className="enquiry-close-button"
                onClick={closeModal}
                aria-label="Close enquiry form"
              >
                <X size={18} />
              </button>
            </header>

            <form className="enquiry-form" onSubmit={handleSubmit}>
              <div className="enquiry-form-grid">
                <label className="enquiry-field">
                  <span>Full Name</span>
                  <input
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </label>

                <label className="enquiry-field">
                  <span>Email Address</span>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </label>

                <div className="enquiry-field enquiry-phone-field">
                  <span>Phone Number</span>
                  <div className="enquiry-phone-row">
                    <input
                      className="enquiry-country-code"
                      name="countryCode"
                      type="text"
                      value={formData.countryCode}
                      onChange={handleChange}
                      placeholder="+91"
                      required
                    />
                    <input
                      name="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Phone number"
                      required
                    />
                  </div>
                </div>

                <label className="enquiry-field">
                  <span>Course Interested In</span>
                  <select
                    name="courseInterest"
                    value={formData.courseInterest}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a course</option>
                    {courseOptions.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="enquiry-field">
                  <span>Current Qualification</span>
                  <select
                    name="qualificationLevel"
                    value={formData.qualificationLevel}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your level</option>
                    <option value="12th Pass">12th Pass</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Graduate">Graduate</option>
                    <option value="Working Professional">Working Professional</option>
                  </select>
                </label>

                <label className="enquiry-field">
                  <span>City / State</span>
                  <input
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City / State"
                    required
                  />
                </label>

                <label className="enquiry-field">
                  <span>Preferred Contact</span>
                  <select
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleChange}
                    required
                  >
                    <option value="Phone Call">Phone Call</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Email">Email</option>
                  </select>
                </label>
              </div>

              <label className="enquiry-field enquiry-field-full">
                <span>Your Query</span>
                <textarea
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  placeholder="Tell us what you would like to know about admissions, fees, eligibility, hostel, scholarships, or campus visits."
                  rows={5}
                  required
                />
              </label>

              <label className="enquiry-consent">
                <input
                  name="consent"
                  type="checkbox"
                  checked={formData.consent}
                  onChange={handleChange}
                />
                <span>I agree to be contacted by Apex Institute regarding this enquiry.</span>
              </label>

              {error ? <p className="enquiry-error">{error}</p> : null}

              <div className="enquiry-actions">
                <button type="button" className="enquiry-secondary-button" onClick={closeModal}>
                  Cancel
                </button>
                <button type="submit" className="enquiry-primary-button">
                  <span>Submit Enquiry</span>
                  <SendHorizonal size={16} />
                </button>
              </div>

              <p className="enquiry-note">
                A confirmation page will open after submission.
                <ArrowRight size={14} />
              </p>
            </form>
          </section>
        </div>
      ) : null}
    </>
  );
}
