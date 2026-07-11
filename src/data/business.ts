export const business = {
  name: "TTOP Chicken",
  fullName: "Taiwan Taipei Original Pot",
  founded: 2014,
  address: {
    street: "223-13986 Cambie Road",
    city: "Richmond",
    region: "BC",
    postal: "V6V 2K3",
    country: "Canada",
    display: "223-13986 Cambie Road, Richmond, BC V6V 2K3",
  },
  phone: "604-285-8867",
  phoneHref: "tel:+16042858867",
  emails: {
    general: "info@ttopchicken.ca",
    school: "ttopvancouver@gmail.com",
  },
  hours: {
    display: "Monday – Friday · 11:00 AM – 8:00 PM",
    lines: ["Monday – Friday", "11:00 AM – 8:00 PM"],
    schemaSpec: "Mo-Fr 11:00-20:00",
  },
  orderUrl:
    "https://order.chatchefs.com/taiwan-taipei-original-pot-07b91840/13986-cambie-rd-unit-223-richmond-bc-v6v-2k3-29340aa5/menu",
  socials: {
    instagram: "https://www.instagram.com/ttopchicken/",
    facebook: "https://www.facebook.com/TTOPChicken",
    google: "https://share.google/YFp1pIBRnQSrdG6yK",
  },
  map: {
    embed:
      "https://www.google.com/maps?q=223-13986+Cambie+Road+Richmond+BC+V6V+2K3&output=embed",
    directions:
      "https://www.google.com/maps/search/?api=1&query=223-13986+Cambie+Road+Richmond+BC+V6V+2K3",
  },
  canonicalOrigin: "https://ttopchicken.ca",
  delivery: [
    {
      name: "DoorDash",
      url: "https://www.doordash.com/",
      logo: "/images/ttop/delivery/doordash.png",
    },
    {
      name: "Uber Eats",
      url: "https://www.ubereats.com/",
      logo: "/images/ttop/delivery/ubereats.png",
    },
    {
      name: "Fantuan",
      url: "https://www.fantuan.ca/",
      logo: "/images/ttop/delivery/fantuan.jpg",
    },
  ],
} as const;

export const siteNav = {
  primary: [
    { label: "Menu", to: "/menu" as const },
    {
      label: "School Programs",
      to: "/school-programs" as const,
      children: [
        { label: "Program Overview", to: "/school-programs" as const },
        { label: "Montessori & Daycare Meals", to: "/school-programs/montessori-daycare" as const },
        { label: "School Hot Lunch Program", to: "/school-programs/hot-lunch" as const },
      ],
    },
    { label: "Catering", to: "/catering" as const },
    { label: "Frozen Foods", to: "/frozen-foods" as const },
    {
      label: "About",
      to: "/about-us" as const,
      children: [
        { label: "Our Story", to: "/about-us" as const },
        { label: "Gallery", to: "/gallery" as const },
        { label: "FAQ", to: "/faq" as const },
      ],
    },
    { label: "Contact", to: "/contact" as const },
  ],
};
