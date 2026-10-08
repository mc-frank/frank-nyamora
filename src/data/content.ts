import { Initiative, WishlistItem } from '../types';

import heroImg from '../assets/images/church_grounds_hero_1790368637991.jpg';
import gardenImg from '../assets/images/community_empowerment_garden_1790368649061.jpg';
import classroomImg from '../assets/images/children_classroom_learning_1790368659835.jpg';
import vocationalImg from '../assets/images/vocational_workshop_tailoring_1790368668306.jpg';

export const churchInfo = {
  name: "Grace Haven Fellowship & Children's Home",
  shortName: "Grace Haven",
  established: 2014,
  location: "Plot 14, St. Jude Ridge Road, Valley Sub-County",
  postalAddress: "P.O. Box 412, Valley Town",
  phone: "+254 (0) 722 890 314",
  secondaryPhone: "+254 (0) 733 411 902",
  email: "contact@gracehaven-community.org",
  pastor: "Pastor Ezekiel & Sarah Mwangi",
  fellowshipLead: "Elder David Ouma & Deaconess Mary Wanjiru",
  serviceTimes: [
    { day: "Sunday Morning Worship", time: "9:00 AM – 11:00 AM", note: "Includes Sunday School & Children's Choir" },
    { day: "Sunday Fellowship Service", time: "11:30 AM – 1:00 PM", note: "Bilingual community praise & testimony" },
    { day: "Wednesday Bible Study & Prayer", time: "5:30 PM – 7:00 PM", note: "Community prayer & youth fellowship" },
    { day: "Saturday Community Workday", time: "8:00 AM – 12:00 PM", note: "Garden tending, meal prep & tutoring" }
  ],
  heroImage: heroImg,
  classroomImage: classroomImg,
  gardenImage: gardenImg,
  vocationalImage: vocationalImg,
  stats: [
    { value: "38", label: "Children in Permanent Care", context: "Aged 3 to 17 years receiving full housing, schooling & medical care" },
    { value: "185+", label: "Weekly Community Meals", context: "Shared with village elders, orphans and vulnerable families" },
    { value: "64", label: "Youth & Women Trained", context: "Equipped with practical tailoring, carpentry & sustainable farming" },
    { value: "100%", label: "Local Direct Impact", context: "Every contribution directly funds meals, school fees & vocational tools" }
  ]
};

export const initiativesData: Initiative[] = [
  {
    id: "organic-garden",
    title: "Community Sustenance Garden & Food Security",
    category: "food-security",
    categoryLabel: "Food Security & Land",
    subtitle: "Cultivating organic greens, maize, and sweet potatoes to feed our children and vulnerable village elders.",
    description: "Started on two acres of donated church land, our sustainable garden uses rainwater harvesting and organic compost to produce nutrient-dense vegetables. The harvest supplies 70% of the fresh produce consumed by the orphanage, while weekly vegetable baskets are delivered to 45 homebound elderly neighbors in our valley.",
    image: gardenImg,
    imageAlt: "Volunteers and neighbors harvesting vegetables in the community garden",
    impactMetric: "450 kg",
    impactLabel: "Fresh produce harvested monthly",
    schedule: "Tuesdays & Saturdays, 8:00 AM – 11:30 AM",
    keyOutputs: [
      "Rainwater collection cistern holding 30,000 liters",
      "Supplies daily greens, cabbages, beans, and passion fruits",
      "Hands-on agricultural training for senior children and local youths",
      "Weekly elder distribution parcels delivered by youth volunteers"
    ],
    volunteerRoles: [
      "Compost & soil enrichment hands",
      "Saturday harvest & packaging helpers",
      "Irrigation and seedbed maintenance"
    ]
  },
  {
    id: "women-tailoring-guild",
    title: "Women's Vocational Tailoring & Uniform Guild",
    category: "vocational",
    categoryLabel: "Vocational Skills",
    subtitle: "Equipping young mothers, widows, and school-leavers with commercial sewing and pattern drafting skills.",
    description: "Our vocational room hosts 8 heavy-duty sewing machines where local women complete a 6-month certified syllabus in garment construction, mending, and school uniform fabrication. Graduates receive assistance acquiring their own foot-pedal machine and produce uniforms for local elementary schools, creating sustainable household income.",
    image: vocationalImg,
    imageAlt: "Sewing machines and colorful fabric rolls in the empowerment workshop",
    impactMetric: "32",
    impactLabel: "Women graduated to self-employment",
    schedule: "Monday through Thursday, 1:30 PM – 5:00 PM",
    keyOutputs: [
      "Full 6-month hands-on syllabus covering machine maintenance & cutting",
      "Production of 200+ durable school uniforms for regional orphans",
      "Micro-loan revolving fund for graduates to buy starter cloth",
      "Financial literacy and bookkeeping workshops every Friday"
    ],
    volunteerRoles: [
      "Tailoring & pattern-making guest instructors",
      "Basic business bookkeeping mentors",
      "Fabric donation and machine maintenance technicians"
    ]
  },
  {
    id: "remedial-education-reading",
    title: "After-School Tutoring & Literacy Sanctuary",
    category: "education",
    categoryLabel: "Youth & Education",
    subtitle: "Bridging foundational gaps in mathematics, reading, and digital literacy for all children in the home and neighborhood.",
    description: "Every weekday afternoon, our church hall transforms into a quiet study sanctuary with textbooks, reference materials, and quiet reading nooks. Volunteer university students and retired teachers assist children with homework, remedial phonics, and exam preparation.",
    image: classroomImg,
    imageAlt: "Sunlit study room with wooden desks and open textbooks",
    impactMetric: "85+",
    impactLabel: "Students supported across Grades 1–12",
    schedule: "Monday to Friday, 3:30 PM – 6:30 PM",
    keyOutputs: [
      "Curated 1,200-book reading library with graded readers",
      "100% elementary graduation transition rate for resident children",
      "Nutritious afternoon porridge snack served before study time",
      "Solar reading lamps provided for evening study"
    ],
    volunteerRoles: [
      "Primary reading buddies (grades 1–4)",
      "High school STEM & science tutors",
      "Storytelling and creative arts facilitators"
    ]
  },
  {
    id: "clean-water-kiosk",
    title: "Safe Haven Community Water Borehole",
    category: "health-water",
    categoryLabel: "Health & Water",
    subtitle: "Solar-powered deep borehole providing clean, tested drinking water free of charge to the entire ridge.",
    description: "Prior to 2021, community members walked over 4 kilometers to fetch turbid river water. Grace Haven drilled a 160-meter solar-pumped borehole with multi-stage filtration. The tap point is open daily to neighboring families at zero cost, drastically reducing waterborne illnesses.",
    image: heroImg,
    imageAlt: "Community water borehole and church grounds",
    impactMetric: "12,000 L",
    impactLabel: "Clean potable water supplied daily",
    schedule: "Daily from 6:30 AM to 6:30 PM",
    keyOutputs: [
      "Eliminated typhoid and amoeba outbreaks in the resident home",
      "Serves over 320 rural families within a 3km radius",
      "Solar-powered pump eliminates diesel fuel costs",
      "Water committee of 4 local elders manages hygiene and queuing"
    ],
    volunteerRoles: [
      "Plumbing and pipe maintenance volunteers",
      "Community hygiene & sanitation awareness advocates"
    ]
  }
];

export const wishlistItemsData: WishlistItem[] = [
  {
    id: "school-stationery",
    title: "Exercise Books & Pen Sets",
    category: "education",
    categoryLabel: "Education",
    description: "Ruled exercise books (200 pages), mathematical sets, and blue/black ballpoint pens for Term 2 schooling.",
    quantityNeeded: "120 books & 40 sets",
    status: "Urgent",
    pledgedCount: 42
  },
  {
    id: "maize-beans",
    title: "Dry Maize Grain & Red Kidney Beans",
    category: "nutrition",
    categoryLabel: "Nutrition & Pantry",
    description: "Staple grains for balanced lunch and dinner portions (Githeri) prepared in the communal kitchen.",
    quantityNeeded: "4 bags (90kg each)",
    status: "Urgent",
    pledgedCount: 1
  },
  {
    id: "mattress-covers",
    title: "Dormitory Bed Linens & Blankets",
    category: "living",
    categoryLabel: "Home Living",
    description: "Heavy warm fleece blankets and washable cotton single-bed sheets for cool highland nights.",
    quantityNeeded: "18 pairs",
    status: "Ongoing",
    pledgedCount: 8
  },
  {
    id: "hygiene-toiletries",
    title: "Bar Soaps & Antiseptic Supplies",
    category: "health",
    categoryLabel: "Hygiene & Health",
    description: "Multipurpose laundry bars, bath soaps, toothbrushes, and gentle antiseptic liquid for the infirmary.",
    quantityNeeded: "6 cartons",
    status: "Ongoing",
    pledgedCount: 2
  },
  {
    id: "uniform-fabric",
    title: "Durable Khaki & Navy Suiting Fabric",
    category: "education",
    categoryLabel: "Vocational & Uniforms",
    description: "Rolls of durable fabric for our tailoring guild to sew school shorts, pinafores, and shirts for resident kids.",
    quantityNeeded: "3 rolls (50m each)",
    status: "Ongoing",
    pledgedCount: 1
  }
];
