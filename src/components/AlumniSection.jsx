import { Carousel, TestimonialCard } from "@/components/ui/retro-testimonial";

const ALUMNI_IDS = [
  "al-001",
  "al-002",
  "al-003",
  "al-004",
  "al-005",
  "al-006",
];

const ALUMNI_DETAILS = {
  "al-001": {
    id: "al-001",
    name: "Riya Mehta",
    designation: "Software Engineer, Microsoft",
    description:
      "Apex gave me the confidence to move from classroom fundamentals to real-world engineering. The mix of faculty support, coding culture, and placement training helped me turn ambition into a career I genuinely love.",
    profileImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
  },
  "al-002": {
    id: "al-002",
    name: "Arjun Rao",
    designation: "Product Analyst, Deloitte",
    description:
      "What stayed with me after graduation was the problem-solving mindset. Whether it was projects, presentations, or industry interaction, Apex kept pushing us to think clearly and communicate with confidence.",
    profileImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
  "al-003": {
    id: "al-003",
    name: "Sneha Kapoor",
    designation: "Cybersecurity Consultant, TCS",
    description:
      "The campus environment was supportive, focused, and full of opportunity. I found mentors, teammates, and friends who made learning feel exciting, and that foundation still shapes my work today.",
    profileImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
  },
  "al-004": {
    id: "al-004",
    name: "Vikram Sethi",
    designation: "Mechanical Design Engineer, Tata Motors",
    description:
      "From labs to technical events, Apex helped me connect theory with practical thinking. That hands-on approach made the transition into industry smoother and far more meaningful for me.",
    profileImage:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
  },
  "al-005": {
    id: "al-005",
    name: "Ananya Bose",
    designation: "Architectural Designer, Studio One",
    description:
      "I still carry the discipline and creative confidence I built here. The faculty encouraged experimentation, while the structured academic base helped me turn ideas into polished work.",
    profileImage:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop",
  },
  "al-006": {
    id: "al-006",
    name: "Karan Malhotra",
    designation: "Founder, GreenGrid Innovations",
    description:
      "Apex shaped the way I approach leadership. The exposure to teamwork, presentations, and technical projects gave me the courage to start building something of my own after graduation.",
    profileImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
  },
};

const ALUMNI_BACKGROUND = "/campus-collage/img3.jpeg";

export default function AlumniSection() {
  const cards = ALUMNI_IDS.map((alumniId, index) => (
    <TestimonialCard
      key={alumniId}
      testimonial={ALUMNI_DETAILS[alumniId]}
      index={index}
      backgroundImage={ALUMNI_BACKGROUND}
    />
  ));

  return (
    <section className="alumni-section">
      <div className="cards-shell">
        <div className="alumni-section-header">
          <p className="alumni-section-kicker">Alumni Voices</p>
          <h2>Stories from graduates building strong careers after Apex.</h2>
        </div>

        <Carousel items={cards} />
      </div>
    </section>
  );
}
