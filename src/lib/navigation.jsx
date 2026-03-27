import {
  BookOpen,
  Briefcase,
  Building2,
  BusFront,
  CalendarDays,
  ClipboardList,
  Crown,
  Cpu,
  FileText,
  GraduationCap,
  House,
  Landmark,
  LineChart,
  Medal,
  Network,
  Newspaper,
  NotebookPen,
  Sandwich,
  ScrollText,
  Target,
  Trophy,
  Users,
  WalletCards,
} from "lucide-react";

export const NAV_ITEMS = [
  { id: 1, label: "Home", link: "/" },
  {
    id: 2,
    label: "About",
    subMenus: [
      {
        title: "About Apex",
        items: [
          {
            label: "Vision & Mission",
            description: "The values and direction that shape Apex",
            icon: Target,
            link: "/about/vision-mission",
          },
          {
            label: "Administration",
            description: "Institutional governance and operations",
            icon: Building2,
            link: "/about/administration",
          },
          {
            label: "Our Founders",
            description: "The people who established the institute",
            icon: Landmark,
            link: "/about/our-founders",
          },
        ],
      },
      {
        title: "Leadership",
        items: [
          {
            label: "Principal",
            description: "Academic leadership and institutional direction",
            icon: GraduationCap,
            link: "/about/principal",
          },
          {
            label: "Chairperson & Deans",
            description: "Strategic guidance for growth and excellence",
            icon: Crown,
            link: "/about/chairperson-deans",
          },
          {
            label: "Head of Departments",
            description: "Leadership across schools and academic programs",
            icon: Network,
            link: "/about/head-of-departments",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Academic",
    subMenus: [
      {
        title: "Academics",
        items: [
          {
            label: "Academic Overview",
            description: "Explore the academic structure and learning model",
            icon: BookOpen,
            link: "/academic/overview",
          },
          {
            label: "Departments",
            description: "Browse schools, departments, and disciplines",
            icon: Cpu,
            link: "/academic/departments",
          },
          {
            label: "Library & Information Resource",
            description: "Access books, journals, and digital resources",
            icon: Building2,
            link: "/academic/library-information-resource",
          },
        ],
      },
      {
        title: "Academic Services",
        items: [
          {
            label: "Comptroller of Examinations",
            description: "Exam administration and academic records",
            icon: ClipboardList,
            link: "/academic/comptroller-of-examinations",
          },
          {
            label: "Time Table",
            description: "Class schedules and academic planning",
            icon: CalendarDays,
            link: "/academic/time-table",
          },
          {
            label: "Circulars",
            description: "Important academic notices and updates",
            icon: ScrollText,
            link: "/academic/circulars",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    label: "Announcement",
    subMenus: [
      {
        title: "Student Support",
        items: [
          {
            label: "Scholarships",
            description: "Funding opportunities and student support schemes",
            icon: WalletCards,
            link: "/announcement/scholarships",
          },
          {
            label: "Hostel Admissions",
            description: "Residential accommodation notices and processes",
            icon: House,
            link: "/announcement/hostel-admissions",
          },
        ],
      },
      {
        title: "Campus Updates",
        items: [
          {
            label: "Event Lists",
            description: "Seminars, workshops, and campus happenings",
            icon: Newspaper,
            link: "/announcement/event-lists",
          },
          {
            label: "Bus Routes",
            description: "Transport schedules and route information",
            icon: BusFront,
            link: "/announcement/bus-routes",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    label: "Placement",
    subMenus: [
      {
        title: "Placement Support",
        items: [
          {
            label: "Training Cell",
            description: "Placement preparation and career guidance",
            icon: NotebookPen,
            link: "/placement/training-cell",
          },
          {
            label: "Recruiters",
            description: "Partner companies and hiring opportunities",
            icon: Briefcase,
            link: "/placement/recruiters",
          },
        ],
      },
      {
        title: "Outcomes",
        items: [
          {
            label: "Placement Statistics",
            description: "Track hiring outcomes and annual placement data",
            icon: LineChart,
            link: "/placement/statistics",
          },
          {
            label: "Placement Achievements",
            description: "Celebrating outstanding offers and milestones",
            icon: Medal,
            link: "/placement/achievements",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    label: "Campus Life",
    subMenus: [
      {
        title: "Student Experience",
        items: [
          {
            label: "Clubs & Associations",
            description: "Student-led communities, chapters, and creative groups",
            icon: Users,
            link: "/campus-life/clubs-associations",
          },
          {
            label: "Tech Transfom",
            description: "Hands-on innovation spaces and technology-driven activities",
            icon: Cpu,
            link: "/campus-life/tech-transform",
          },
          {
            label: "Sports Facilities",
            description: "Courts, grounds, and spaces for fitness and competition",
            icon: Trophy,
            link: "/campus-life/sports-facilities",
          },
        ],
      },
      {
        title: "Campus Facilities",
        items: [
          {
            label: "Library",
            description: "Academic resources, reading areas, and digital access",
            icon: BookOpen,
            link: "/campus-life/library",
          },
          {
            label: "Cafeteria",
            description: "Comfortable dining spaces with daily meal service",
            icon: Sandwich,
            link: "/campus-life/cafeteria",
          },
          {
            label: "Hostel",
            description: "Residential facilities designed for a safe student stay",
            icon: Building2,
            link: "/campus-life/hostel",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    label: "Admission",
    subMenus: [
      {
        title: "Under Graduate (UG)",
        items: [
          {
            label: "B.Tech",
            description: "Undergraduate engineering programs across key disciplines",
            icon: GraduationCap,
            link: "/admission/b-tech",
          },
          {
            label: "B.Arch",
            description: "Architecture studies focused on design, planning, and built environments",
            icon: Building2,
            link: "/admission/b-arch",
          },
        ],
      },
      {
        title: "Post Graduate (PG)",
        items: [
          {
            label: "M.Tech",
            description: "Advanced postgraduate programs with technical specialization",
            icon: Cpu,
            link: "/admission/m-tech",
          },
          {
            label: "MCA",
            description: "Postgraduate computer applications program with industry-focused learning",
            icon: FileText,
            link: "/admission/mca",
          },
        ],
      },
    ],
  },
];

export const MENU_PAGES = NAV_ITEMS.flatMap((navItem) =>
  (navItem.subMenus ?? []).flatMap((subMenu) =>
    subMenu.items.map((item) => ({
      ...item,
      section: navItem.label,
      group: subMenu.title,
    }))
  )
);
