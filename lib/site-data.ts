export const siteConfig = {
  name: "Happy Paws Animal Clinic",
  tagline: "Helping people to help animals",
  phone: "2122 7127",
  email: "happypawsanimalclinic@gmail.com",
  address: "41, Cross Road, Il-Marsa, Malta",
  facebook: "https://www.facebook.com/HappyPawsAnimalClinic",
  mapsQuery: "41, Cross Road, Il-Marsa, Malta",
  hours: [
    { days: "Monday – Friday", time: "08:00 – 16:00" },
    { days: "Saturday", time: "09:00 – 13:00" },
    { days: "Sunday", time: "Closed" },
  ],
  discountNote:
    "We offer discounted prices for cat feeders and sanctuary animals.",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const team = [
  {
    name: "Dr. Helen Mower Hanlon",
    title: "Veterinarian",
    initials: "HM",
  },
  {
    name: "Dr. Luke Vella Verzin",
    title: "Veterinarian, DVM",
    initials: "LV",
    image: "/team-luke-vella.png",
  },
  {
    name: "Dr. Katrina Gatt",
    title: "Veterinarian, B.Pharm, DVM",
    initials: "KG",
  },
  {
    name: "Dr. Steve Mercieca",
    title: "Veterinarian, DVM",
    initials: "SM",
    note: "Exotic animal vet — Monday & Friday, 9:00–12:00. Please call ahead.",
  },
  {
    name: "Andrija Radojčić",
    title: "Veterinary Nurse",
    initials: "AR",
    image: "/team-andrija.png",
  },
  {
    name: "Maike Beekman-van Dinther",
    title: "Homeopathy Practitioner",
    initials: "MB",
    note: "LCCH (London), IACH (Greece), CAH (Canada) — by appointment.",
  },
];

export const testimonials = [
  {
    name: "Colin P.",
    initials: "CP",
    quote:
      "We entered the clinic for the first time on 2nd January, vets and staff treated us with respect! Dr Luke & Dr Helen treated our Beagle and gave us the sad news of a large tumor in Bobby's stomach. We decided to go ahead with the operation, which was a success. Thank you for being so kind to us — I'm writing this next to my 13 year old Beagle, which is recovering fast day by day.",
    pet: "Bobby, Beagle",
  },
  {
    name: "Sonia G.",
    initials: "SG",
    quote:
      "Our 4-month kitten Nina was diagnosed with a nerve condition and couldn't walk, and she'd broken her tail. Doing acupuncture on her from day one made a complete difference. I thank Dr. Luke Vella Verzin for his dedication and talent — Nina is already able to walk and even holding her tail up after only her first session.",
    pet: "Nina, kitten",
  },
];

export const faqs = [
  {
    category: "Wellness and Preventive Care",
    items: [
      {
        question: "How often should my pet visit the vet?",
        answer:
          "Healthy adult pets need a wellness exam once a year. Pets over age seven or those with chronic conditions should visit every six months.",
      },
      {
        question: "When should I get my pet spayed or neutered?",
        answer:
          "Most puppies and kittens can safely undergo the procedure around 5 to 6 months of age, though large dog breeds may vary.",
      },
      {
        question: "What core vaccinations do pets need?",
        answer:
          "Dogs typically receive rabies, DHPP (distemper, parvovirus), and Bordetella. Cats typically receive rabies and FVRCP (feline distemper combo).",
      },
    ],
  },
  {
    category: "Surgery and Procedures",
    items: [
      {
        question: "Why is pre-anesthetic blood work required?",
        answer:
          "Blood tests check kidney and liver function to ensure your pet can safely process anesthesia.",
      },
      {
        question: "Should I withhold food before surgery?",
        answer:
          "Yes, do not feed your pet for 8 to 10 hours prior to scheduled anesthesia to prevent stomach upset or vomiting. Water is usually fine until the morning of the procedure.",
      },
    ],
  },
];

export const services = [
  { slug: "medical-nutritional-consultations", title: "Medical and Nutritional Consultations", featured: true, image: "/service-medical-consultations.jpg" },
  { slug: "vaccinations-microchip", title: "Vaccinations & Microchip", featured: true, image: "/service-vaccinations.jpg" },
  { slug: "pet-passports", title: "Pet Passports" },
  { slug: "laser-surgery", title: "Laser Surgery", featured: true, image: "/service-laser-surgery.jpg" },
  { slug: "dental-procedures", title: "Dental Procedures", featured: true, image: "/service-dental.jpg" },
  { slug: "ultrasound", title: "Ultrasound" },
  { slug: "x-ray", title: "X-Ray", featured: true, image: "/service-xray.jpg" },
  { slug: "hospitalisation", title: "Hospitalisation" },
  { slug: "blood-testing", title: "Blood Testing & Interpretation" },
  { slug: "veterinary-acupuncture", title: "Veterinary Acupuncture", featured: true, image: "/service-acupuncture.jpg" },
  { slug: "classic-homeopathy", title: "Classic Homeopathy Consultancy" },
  { slug: "emergency-prioritisation", title: "Emergency Prioritisation" },
];

export const specialistServices = [
  {
    title: "Acupuncture for Dogs and Cats",
    practitioner: "Dr. Luke Vella Verzin, DVM",
  },
  {
    title: "Pet Nutrition",
    practitioner: "Dr. Luke Vella Verzin, DVM",
  },
  {
    title: "Homeopathy for Pets",
    practitioner:
      "Maike Beekman-van Dinther, LCCH (London), IACH (Greece), CAH (Canada)",
  },
];
