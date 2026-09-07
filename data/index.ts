
interface WhatWeDoItem {
  title: string;
  img: string;
  desc: string;
  bullets: { points: string }[];
}

export const whatwedo: WhatWeDoItem[] = [
  {
    title: "Corporate Trainings",
    img: "/corporate-trainings.svg",
    desc: "Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values. ",
    bullets: [
      { points: "Leadership Training" },
      { points: "Strategic Planning and Implementation" },
      { points: "Project Management" },
      { points: "Sustainability Training" },
      { points: "Customised Training" },
    ]
  },
  {
    title: "Personalised Individual Training",
    img: "/pi-trainings.svg",
    desc: "Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals.",
    bullets: [
      { points: "Leadership Development" },
      { points: "Soft Skills Development" },
      { points: "Industry Specific Knowledge" },
      { points: "Technical Skills Enhancement" },
      { points: "Time Management and Productivity" },
      { points: "Career Development" },
    ]
  },
  {
    title: "Capacity Development",
    img: "/capacity-development.svg",
    desc: "At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:",
    bullets: [
      { points: "Tailored Training Programs" },
      { points: "Expert-Led Workshops" },
      { points: "Personalized Mentorship" },
      { points: "Technical Skills Enhancement" },
      { points: "Collaborative Learning Environment" },
      { points: "Ongoing Support and Resources" },
    ]
  },
]


/* export const footerLinks = [
  { title:"What We Do",
    text: [
      {txt: "Sustainability Services", href: "/" },
      {txt: "Strategy Planning and Implementation", href: "/" },
      {txt: "Tech Talent Solutions", href: "/" },
      {txt: "Training and Development", href: "/" },
      {txt: "IT Consulting Services", href: "/" },
      {txt: "Social Impact", href: "/" },
    ],
  },
  { title:"Company",
    text: [
      {txt: "About", href: "/" },
      {txt: "Jobs", href: "/" },
      {txt: "Projects", href: "/" },
      {txt: "Our Founder", href: "/" },
      {txt: "The Team", href: "/" },
      {txt: "Contact Us", href: "/" },
      {txt: "Blog", href: "/" },
      {txt: "FAQs", href: "/" },
      {txt: "Testimonials", href: "/" },
    ],
  },
  { title:"Solution",
    text: [
      {txt: "Tobams Group Academy", href: "/" },
      {txt: "Help a Tech Talent", href: "/" },
      {txt: "Campus Ambassadors Program", href: "/" },
      {txt: "Join Our Platform", href: "/" },
      {txt: "Pricing", href: "/" },
      {txt: "Book a Consultation", href: "/" },
      {txt: "Join Our Slack Community", href: "/" },
    ],
  },
] */

export const courses = [
  { course: "Business Analysis"},
  { course: "Design Thinking"},
  { course: "Effective Communication"},
  { course: "Leadership Development"},
  { course: "Career Development"},
  { course: "Business Model"},
]

export const managementDevProgram = [
  { point: "Enhanced Leadership Skills" },
  { point: "Improved Employee Engagement" },
  { point: "Stronger Organisational Culture" },
  { point: "Sustainable Growth" },
]

export const transformationHub = [
  {
    point: "Strategic Career Guidance",
  },
  {
    point: "Leadership Development",
  },
  {
    point: "CV Development",
  },
  {
    point: "Sustainability Leadership",
  },
  {
    point: "Communication Skills",
  },
  {
    point: "Business Model",
  },
]

export const consultantFeatures = [
  {
    title: "Expert-Led Learning",
    desc: "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
  },
  {
    title: "Interactive Workshops",
    desc: "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
  },
  {
    title: "Comprehensive Curriculum",
    desc: "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
  },
  {
    title: "Global Recognition",
    desc: "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
  },
]

export const testimonials = [
  {
    name: "Aisha Yusuf",
    role: "Founder, Alpha Group",
    text: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
    image: "/testimonial-img1.svg",
  },
  {
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    text: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
    image: "/testimonial-img1.svg",
  },
  {
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    text: "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
    image: "/testimonial-img1.svg",
  },
  {
    name: "Michael T.",
    role: "Operations Manager",
    text: "A highly professional team with excellent knowledge and a genuine commitment to helping organisations grow.",
    image: "/testimonial-img1.svg",
  },
]


export const footerLinks = {
  whatWeDo: [
    {
      name: "Branding Services",
      link: "/branding-services",
    },
    {
      name: "Strategic Planning and Implementation",
      link: "/strategic-planning",
    },
    {
      name: "Tech Talents Solutions",
      link: "/tech-talent-solutions",
    },
    {
      name: "Training and Development",
      link: "/training-development",
    },
    {
      name: "IT Consulting Services",
      link: "/it-consulting",
    },
    {
      name: "Social Impact",
      link: "/social-impact",
    },
    {
      name: "Talent Recruitment",
      link: "/talent-recruitment",
    },
  ],

  company: [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Jobs",
      link: "/jobs",
    },
    {
      name: "People",
      link: "/people",
    },
    {
      name: "Our Process",
      link: "/our-process",
    },
    {
      name: "Diversity",
      link: "/diversity",
    },
    {
      name: "The Team",
      link: "/team",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "FAQs",
      link: "/faqs",
    },
    {
      name: "Testimonials",
      link: "/testimonials",
    },
  ],

  solution: [
    {
      name: "Talent & Strategy Advisory",
      link: "/talent-strategy-advisory",
    },
    {
      name: "Help & Tech Talent",
      link: "/help-tech-talent",
    },
    {
      name: "Campus Ambassador Program",
      link: "/campus-ambassador-program",
    },
    {
      name: "Join Our Platform",
      link: "/join-our-platform",
    },
    {
      name: "Privacy",
      link: "/privacy",
    },
    {
      name: "Book a Consultation",
      link: "/contact",
    },
    {
      name: "Join Our Skills Community",
      link: "/skills-community",
    },
  ],
}

export const navLinks = [
  {
    name: "About",
    link: "/about",
    dropdown: true,
  },
  {
    name: "What We Do",
    link: "/what-we-do",
    dropdown: true,
  },
  {
    name: "Jobs",
    link: "/jobs",
    dropdown: true,
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "TG Academy",
    link: "/tg-academy",
  },
  {
    name: "Strategic Partnership",
    link: "/strategic-partnership",
  },
  {
    name: "Pricing",
    link: "/pricing",
  },
  {
    name: "Book a Consultation",
    link: "/contact",
  },
]