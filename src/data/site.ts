export const siteConfig = {
  name: "RGM Goods & Car Carrier Services",
  shortName: "RGM",
  tagline: "Apki Ghari Hamari Zimadari.",
  supportingTagline: "Hum apki ghari puri zimadari aur ba-hifazat tareeqay se aap ke ghar tak pohanchate hain.",
  heroHeading: "Safe & Reliable Car Transportation Across Pakistan",
  yearsExperience: "20+",
  phone: "03004432981",
  whatsapp: "03004432981",
  altPhone: "03217002848",
  managerPhone: "03178298926",
  email: "rgm4432@gmail.com",
  availability: "24/7",
  description:
    "RGM Goods & Car Carrier Services is a trusted vehicle transportation company with over 20 years of experience. We provide safe, reliable, and door-to-door car transport services across Pakistan.",
};

export const contactInfo = {
  offices: [
    {
      city: "Lahore",
      label: "Head Office",
      address: "18-KM Multan Road, Near Kaka Khail Hotel, Lahore",
      isPrimary: true,
    },
    {
      city: "Karachi",
      label: "Sub Office",
      address:
        "Gate No 6, Hawkby Road, Maripure, Quaid e Azam Truck Stand, Karachi",
      isPrimary: false,
    },
    {
      city: "Islamabad",
      label: "Islamabad",
      address:
        "Pakistan Plaza, GT Road, Near Attock Pump, G15/4 G15, Islamabad",
      isPrimary: false,
    },
  ],
  phone: "03004432981",
  whatsapp: "03004432981",
  email: "rgm4432@gmail.com",
  altPhone: "03217002848",
  managerPhone: "03178298926",
};

export const management = [
  {
    name: "Rana Gulam Mustafa",
    title: "Owner",
    phone: "03217002848",
  },
  {
    name: "Rana Zain",
    title: "Manager",
    phone: "03178298926",
  },
];

export const services = [
  {
    slug: "car-transport",
    title: "Car Transport Service",
    shortDesc:
      "Reliable and professional car transportation across all major cities of Pakistan with your vehicle's safety as our top priority.",
    icon: "Car",
    href: "/services/car-transport",
    image: "/images/car-transport.jpg",
    featured: true,
  },
  {
    slug: "car-carrier",
    title: "Car Carrier",
    shortDesc:
      "Our professional car carrier fleet ensures your vehicle is safely loaded, secured, and transported to its destination.",
    icon: "Truck",
    href: "/services/car-carrier",
    image: "/images/fleet-carrier.jpg",
    featured: false,
  },
  {
    slug: "door-to-door-car-transport",
    title: "Door-to-Door Car Transport",
    shortDesc:
      "We pick up your vehicle directly from your address and deliver it safely to your destination — no hassle, no middlemen.",
    icon: "Home",
    href: "/services/door-to-door-car-transport",
    image: "/images/car-transport.jpg",
    featured: false,
  },
  {
    slug: "accidental-car-recovery",
    title: "Accidental Car Recovery",
    shortDesc:
      "Professional recovery and transportation of accidental or broken-down vehicles handled with care and responsibility.",
    icon: "AlertTriangle",
    href: "/services/accidental-car-recovery",
    image: "/images/recovery-truck.jpg",
    featured: false,
  },
  {
    slug: "private-box-service",
    title: "Private Box Service",
    shortDesc:
      "Secure private box transportation service for your goods and belongings alongside your vehicle.",
    icon: "Package",
    href: "/services/private-box-service",
    image: "/images/fleet-carrier.jpg",
    featured: false,
  },
  {
    slug: "bike-transport",
    title: "Bike Transport Service",
    shortDesc:
      "Safe and reliable transportation of motorcycles and bikes across Pakistan with proper securing and handling.",
    icon: "Bike",
    href: "/services/bike-transport",
    image: "/images/bike-transport.jpg",
    featured: false,
  },
];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Car Transport Service", href: "/services/car-transport" },
      { label: "Car Carrier", href: "/services/car-carrier" },
      {
        label: "Door-to-Door Transport",
        href: "/services/door-to-door-car-transport",
      },
      {
        label: "Accidental Car Recovery",
        href: "/services/accidental-car-recovery",
      },
      { label: "Private Box Service", href: "/services/private-box-service" },
      { label: "Bike Transport", href: "/services/bike-transport" },
    ],
  },
  { label: "Our Fleet", href: "/fleet" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export const trustPoints = [
  {
    value: "20+",
    label: "Years Experience",
    desc: "Trusted since the beginning",
  },
  { value: "All Pakistan", label: "Coverage", desc: "Nationwide service" },
  { value: "24/7", label: "Available", desc: "Always here when you need us" },
  {
    value: "Safe & Reliable",
    label: "Vehicle Handling",
    desc: "Your vehicle, our responsibility",
  },
];

export const whyChooseUs = [
  {
    title: "20+ Years of Experience",
    desc: "Over two decades of trusted vehicle transportation service across Pakistan. Our experience means your vehicle is in safe hands.",
    icon: "Award",
  },
  {
    title: "Nationwide Coverage",
    desc: "From Karachi to Lahore, Islamabad and beyond — we operate across Pakistan ensuring your vehicle reaches wherever you need it.",
    icon: "Map",
  },
  {
    title: "24/7 Availability",
    desc: "We are available around the clock. Whether it is an emergency recovery or a scheduled transport, RGM is always reachable.",
    icon: "Clock",
  },
  {
    title: "Responsible Vehicle Handling",
    desc: "Every vehicle is handled with the utmost care. Your vehicle's safety is our greatest responsibility — Apki Ghari Hamari Zimadari.",
    icon: "Shield",
  },
  {
    title: "Door-to-Door Service",
    desc: "Convenient door-to-door pickup and delivery. We come to you, so you do not have to worry about anything.",
    icon: "Home",
  },
  {
    title: "Own Professional Fleet",
    desc: "We operate our own car carrier fleet — no third parties. This means consistent quality and accountability on every journey.",
    icon: "Truck",
  },
];

export const featuredRoutes = [
  {
    from: "Karachi",
    to: "Lahore",
    desc: "Pakistan's most travelled route, handled with expertise.",
  },
  {
    from: "Karachi",
    to: "Islamabad",
    desc: "Capital route transportation with full accountability.",
  },
];

export const faqs = [
  {
    q: "Do you provide car transportation service across all of Pakistan?",
    a: "Yes. RGM Goods & Car Carrier Services operates across Pakistan. Our primary confirmed routes include Karachi to Lahore and Karachi to Islamabad, with nationwide service coverage.",
  },
  {
    q: "Do you offer door-to-door car transport?",
    a: "Yes. We offer a convenient door-to-door car transport service where our team picks up your vehicle directly from your location and delivers it safely to your specified destination.",
  },
  {
    q: "Do you provide accidental car recovery service?",
    a: "Yes. RGM provides professional accidental car recovery and transportation. Our team handles damaged vehicles with care and responsibility.",
  },
  {
    q: "Do you transport motorcycles and bikes?",
    a: "Yes. We offer bike transport service across Pakistan. Your motorcycle is properly secured and handled throughout the journey.",
  },
  {
    q: "Are you available 24 hours a day, 7 days a week?",
    a: "Yes. RGM is available 24/7. You can contact us any time for inquiries, emergencies, or to arrange transportation.",
  },
  {
    q: "How can I contact RGM Goods & Car Carrier Services?",
    a: "You can call or WhatsApp us at 03004432981. You can also email us at rgm4432@gmail.com. Our team is available 24/7.",
  },
  {
    q: "Where are your offices located?",
    a: "Our head office is in Lahore at 18-KM Multan Road, Near Kaka Khail Hotel. We also have a sub-office in Karachi at Gate No 6, Hawkby Road, Maripure, Quaid e Azam Truck Stand. In Islamabad, we operate from Pakistan Plaza, GT Road, Near Attock Pump, G15/4 G15.",
  },
  {
    q: "Do you transport vehicles on your own fleet?",
    a: "Yes. RGM operates its own professional car carrier fleet. We do not rely on third parties for transportation, ensuring consistent quality and accountability.",
  },
  {
    q: "What types of vehicles do you transport?",
    a: "We transport cars, SUVs, and motorcycles. For specific vehicle types or requirements, please contact us directly to discuss your transportation needs.",
  },
  {
    q: "What is the Private Box Service?",
    a: "Our Private Box Service allows customers to securely transport goods and personal belongings alongside their vehicle. Please contact us for more details about this service.",
  },
];
