export interface Initiative {
  title: string;
  category: string;
  description: string;
  schedule: string;
  volunteerNeeds: string;
}

export const churchDetails = {
  name: "Grace Haven Church & Children's Home",
  tagline: "A small local fellowship and home supporting children and empowering our neighborhood.",
  location: "Plot 14, St. Jude Ridge Road, Valley Town",
  phone: "+254 (0) 722 890 314",
  email: "info@gracehaven.org",
  services: [
    { day: "Sunday Worship", time: "9:30 AM – 11:30 AM" },
    { day: "Wednesday Bible Study", time: "5:30 PM – 6:30 PM" },
    { day: "Saturday Community Service", time: "9:00 AM – 12:00 PM" }
  ],
  orphanageSummary: "Our home currently provides family shelter, meals, healthcare, and schooling to 38 children from our community.",
  initiatives: [
    {
      title: "Community Vegetable Garden",
      category: "Food Security",
      description: "A small vegetable farm on church land producing fresh greens and maize for the children and needy elderly neighbors.",
      schedule: "Tuesdays & Saturdays morning",
      volunteerNeeds: "Weeding, planting, compost, and harvesting"
    },
    {
      title: "Women & Youth Tailoring Class",
      category: "Vocational Skills",
      description: "Basic sewing and dressmaking classes to equip young mothers and school-leavers with self-employment skills.",
      schedule: "Monday – Thursday afternoons",
      volunteerNeeds: "Sewing mentors and fabric donations"
    },
    {
      title: "After-School Tutoring & Reading",
      category: "Education",
      description: "Homework help and reading sessions for resident children and village primary school pupils.",
      schedule: "Weekdays 4:00 PM – 5:30 PM",
      volunteerNeeds: "Math and English reading buddies"
    },
    {
      title: "Free Community Water Tap",
      category: "Health & Water",
      description: "A solar-pumped borehole tap open daily to provide safe drinking water to nearby families at no charge.",
      schedule: "Open daily 7:00 AM – 6:00 PM",
      volunteerNeeds: "Plumbing maintenance assistance"
    }
  ]
};
