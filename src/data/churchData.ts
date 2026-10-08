export interface EmpowermentInitiative {
  title: string;
  focus: string;
  description: string;
  schedule: string;
}

export interface ChurchData {
  name: string;
  shortName: string;
  subTitle: string;
  scripture: {
    verse: string;
    reference: string;
  };
  contact: {
    pastor: string;
    phone: string;
    email: string;
    location: string;
    directions: string;
  };
  pastorProfile: {
    name: string;
    role: string;
    bio: string;
    photoUrl: string;
  };
  services: {
    day: string;
    time: string;
    description: string;
  }[];
  homeOverview: {
    summary: string;
    pillars: {
      title: string;
      desc: string;
    }[];
  };
  empowermentProgram: {
    title: string;
    overview: string;
    initiatives: EmpowermentInitiative[];
  };
  weeklyNeeds: {
    item: string;
    target: string;
    category: string;
  }[];
  donationInfo: {
    paypalEmail: string;
    note: string;
  };
}

export const siteData: ChurchData = {
  name: "DEVINE CHURCH & CHILDREN CENTER",
  shortName: "DEVINE CHURCH & CHILDREN CENTER",
  subTitle: "A local community fellowship in Kisii, Kenya, dedicated to providing loving shelter, food, healthcare, and education for orphaned and vulnerable children.",
  scripture: {
    verse: "Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress.",
    reference: "James 1:27"
  },
  contact: {
    pastor: "Pastor Duncan Sagana",
    phone: "+254726814803",
    email: "dancanob@yahoo.com",
    secondaryEmail: "pastorobwocha@yahoo.com",
    location: "Kisii, Kenya",
    directions: "Located within Kisii County, welcoming all visitors, partners, and community members."
  },
  pastorProfile: {
    name: "Pastor Duncan Sagana",
    role: "Lead Pastor & Director",
    bio: "Pastor Duncan Sagana has dedicated his life to community ministry, caring for orphans, and extending hope across Kisii County. Together with the local church team, he shepherds the congregation and oversees the daily welfare, spiritual nurture, and education of the children at DEVINE CHURCH & CHILDREN CENTER.",
    photoUrl: "/src/assets/images/pastor_dancun.jpeg"
  },
  services: [
    {
      day: "Sunday Main Worship",
      time: "9:30 AM – 11:30 AM",
      description: "Community family worship, biblical teaching, and Sunday school for the children."
    },
    {
      day: "Sunday Afternoon Fellowship",
      time: "1:00 PM – 2:30 PM",
      description: "Shared fellowship, prayer, and children's choir."
    },
    {
      day: "Wednesday Bible Study",
      time: "5:30 PM – 6:45 PM",
      description: "Midweek prayer and scripture reflection for all community members."
    },
    {
      day: "Saturday Care & Visiting",
      time: "9:00 AM – 1:00 PM",
      description: "Facility care, kitchen meal preparation, and visiting hours."
    }
  ],
  homeOverview: {
    summary: "Our children's home provides full-time residential care, three wholesome daily meals, clothing, healthcare, and formal school fees for orphaned and vulnerable children in Kisii, Kenya.",
    pillars: [
      {
        title: "Loving Family Environment",
        desc: "Children are nurtured in warm cottage-style family units with dedicated resident caregivers."
      },
      {
        title: "Schooling & Education",
        desc: "Every resident child is enrolled in local primary or secondary school with books, uniforms, and study assistance."
      },
      {
        title: "Nutrition & Health Care",
        desc: "Daily balanced nutrition, clean drinking water, regular health check-ups, and emotional support."
      }
    ]
  },
  empowermentProgram: {
    title: "Community Empowerment Program",
    overview: "Equipping local vulnerable youth, widows, and families with practical self-reliance skills and agricultural knowledge to build resilient households in Kisii.",
    initiatives: [
      {
        title: "Vocational Skills & Tailoring",
        focus: "Self-Reliance for Young Mothers & Widows",
        description: "Hands-on sewing, tailoring, and garment mending classes that equip local women with self-employment trades to support their households.",
        schedule: "Weekdays 2:00 PM – 4:30 PM"
      },
      {
        title: "Sustainable Community Farming",
        focus: "Food Security & Land Stewardship",
        description: "Organic vegetable cultivation and poultry raising, providing fresh food for the children's center and training local farmers in soil enrichment and rainwater usage.",
        schedule: "Tuesday & Saturday Mornings"
      }
    ]
  },
  weeklyNeeds: [
    { item: "Dry Maize Grain & Beans (90kg Bags)", target: "communal kitchen staples", category: "Nutrition" },
    { item: "Exercise Books (200 Pages) & Pen Sets", target: "school term studies", category: "Education" },
    { item: "Laundry Bar Soap & Bathing Soap", target: "dormitory hygiene", category: "Sanitation" },
    { item: "Cooking Oil & Cooking Salt", target: "children's daily meals", category: "Food" },
    { item: "Mattress Covers & Warm Blankets", target: "children's beds", category: "Bedding" }
  ],
  donationInfo: {
    paypalEmail: "dancanob@yahoo.com",
    note: "All contributions directly support the children's daily meals, school fees, medical care, and home essentials. Official receipts and acknowledgement are provided promptly."
  }
};
