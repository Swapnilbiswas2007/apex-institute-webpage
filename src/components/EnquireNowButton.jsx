import { Link } from "react-router-dom";

export default function EnquireNowButton() {
  return (
    <Link className="enquire-now-button" to="/contact-us" aria-label="Enquire now">
      <span>Enquire Now</span>
    </Link>
  );
}
