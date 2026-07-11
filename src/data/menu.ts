export type Tag = "Vegetarian" | "Spicy" | "Contains Peanuts";

export type MenuItem = {
  code?: string;
  name: string;
  price?: string; // formatted e.g. "$18.50"
  note?: string;
  tags?: Tag[];
  image?: string;
};

export type MenuOption = { name: string; price: string };
export type OptionGroup = { title: string; entries: MenuOption[] };
export type MenuOptionSection = {
  title: string;
  entries?: MenuOption[];
  groups?: OptionGroup[];
};

export type MenuCategory = {
  id: string;
  title: string;
  intro?: string;
  items: MenuItem[];
  options?: MenuOptionSection[];
};

const IMG = "/images/ttop/dishes";

export const menuNotice =
  "This menu is here to show what we serve. To place an order, use the Order Online button. Prices and availability may change.";

// Shared add-on toppings grouped by kind — used for both the Signature Pot
// and the Chicken Bento at different price points.
const potToppingGroups: OptionGroup[] = [
  {
    title: "Meats",
    entries: [
      { name: "AAA Beef", price: "$15.00" },
      { name: "Berkshire Pork Belly", price: "$15.00" },
      { name: "Premium Lamb Slices", price: "$16.00" },
      { name: "Mushroom Meatball", price: "$8.00" },
      { name: "Luncheon Meat", price: "$8.00" },
    ],
  },
  {
    title: "Tofu, Egg & Fish Cakes",
    entries: [
      { name: "Frozen Tofu", price: "$7.00" },
      { name: "Fish Tofu", price: "$8.00" },
      { name: "Dried Bean Curd", price: "$7.00" },
      { name: "Quail Egg", price: "$7.00" },
      { name: "Fish Cake", price: "$8.00" },
      { name: "Fish Dumpling", price: "$8.00" },
      { name: "Squid Dumpling", price: "$8.00" },
    ],
  },
  {
    title: "Vegetables",
    entries: [
      { name: "Taiwanese Cabbage", price: "$7.00" },
      { name: "Broccoli", price: "$7.00" },
      { name: "Cauliflower", price: "$7.00" },
      { name: "Baby Corn", price: "$7.00" },
      { name: "Lettuce Stem", price: "$7.50" },
      { name: "Potato", price: "$6.00" },
      { name: "Celery", price: "$6.00" },
      { name: "Green Pepper", price: "$6.00" },
      { name: "Scallion", price: "$6.00" },
      { name: "Cilantro", price: "$1.00" },
    ],
  },
  {
    title: "Mushrooms",
    entries: [
      { name: "Black Fungus", price: "$7.00" },
      { name: "Enoki Mushroom", price: "$7.00" },
      { name: "Shimeji Mushroom", price: "$7.00" },
      { name: "King Oyster Mushroom", price: "$7.00" },
      { name: "Oyster Mushroom", price: "$7.00" },
    ],
  },
  {
    title: "Noodles & Rice Cakes",
    entries: [
      { name: "Potato Vermicelli", price: "$7.00" },
      { name: "Udon", price: "$7.00" },
      { name: "Korean Rice Cake", price: "$7.00" },
      { name: "Konjac", price: "$7.00" },
      { name: "DF Chinese Doughnut", price: "$5.50" },
    ],
  },
];

const bentoToppingGroups: OptionGroup[] = [
  {
    title: "Meats",
    entries: [
      { name: "AAA Beef", price: "$3.50" },
      { name: "Berkshire Pork Belly", price: "$3.00" },
      { name: "Premium Lamb Slices", price: "$4.00" },
      { name: "Mushroom Meatball", price: "$2.00" },
      { name: "Luncheon Meat", price: "$2.00" },
    ],
  },
  {
    title: "Tofu, Egg & Fish Cakes",
    entries: [
      { name: "Frozen Tofu", price: "$2.00" },
      { name: "Fish Tofu", price: "$2.00" },
      { name: "Dried Bean Curd", price: "$2.00" },
      { name: "Quail Egg", price: "$2.00" },
      { name: "Fish Cake", price: "$2.00" },
    ],
  },
  {
    title: "Vegetables",
    entries: [
      { name: "Taiwanese Cabbage", price: "$2.00" },
      { name: "Broccoli", price: "$2.00" },
      { name: "Cauliflower", price: "$2.00" },
      { name: "Baby Corn", price: "$2.00" },
      { name: "Lettuce Stem", price: "$2.50" },
      { name: "Potato", price: "$2.00" },
      { name: "Celery", price: "$2.00" },
      { name: "Green Pepper", price: "$2.00" },
      { name: "Scallion", price: "$2.00" },
      { name: "Cilantro", price: "$1.00" },
    ],
  },
  {
    title: "Mushrooms & Others",
    entries: [
      { name: "Black Fungus", price: "$2.00" },
      { name: "King Oyster Mushroom", price: "$2.00" },
      { name: "Konjac", price: "$2.00" },
      { name: "Korean Rice Cake", price: "$2.00" },
    ],
  },
];

export const menuCategories: MenuCategory[] = [
  {
    id: "signature-pot",
    title: "Signature Pot",
    intro:
      "Our famous Hua Diao chicken pot. Celery, green pepper, scallion, and cilantro are included.",
    items: [
      { code: "A1", name: "TTOP Chicken Pot (Small)", price: "$38.00", image: `${IMG}/ttop-chicken-pot-small.webp` },
      { code: "A2", name: "TTOP Chicken Pot (Large)", price: "$58.00", image: `${IMG}/chicken-pot-flame.webp` },
      { code: "A3", name: "TTOP Chicken Pot with Spicy XM Sauce (Small)", price: "$40.00", tags: ["Spicy"], image: `${IMG}/chicken-pot-spoon.webp` },
      { code: "A4", name: "TTOP Chicken Pot with Spicy XM Sauce (Large)", price: "$60.00", tags: ["Spicy"], image: `${IMG}/chicken-pot-flame.webp` },
    ],
    options: [
      {
        title: "Pot preparation",
        entries: [
          { name: "Cook all add-ons together with chicken", price: "$0.00" },
          { name: "Reheat at home, add-ons packed separately", price: "$0.00" },
          { name: "Remove celery, green pepper, scallion, or cilantro", price: "$0.00" },
          { name: "Add TTOP Sauce", price: "$1.50" },
          { name: "Add Chili X, XX, or XXX", price: "$1.50" },
        ],
      },
      {
        title: "Add-on toppings",
        groups: potToppingGroups,
      },
    ],
  },
  {
    id: "bento",
    title: "Bento",
    intro:
      "Chicken bentos include celery, green pepper, scallion, and cilantro. Bentos B3–B17 include rice and three side dishes.",
    items: [
      { code: "B1", name: "TTOP Chicken Bento", price: "$18.50", image: `${IMG}/ttop-chicken-bento.webp` },
      { code: "B2", name: "TTOP Spicy Chicken Bento", price: "$19.50", tags: ["Spicy"], image: `${IMG}/ttop-spicy-chicken-bento.webp` },
      { code: "B3", name: "DF Pork Chop Bento", price: "$17.00", image: `${IMG}/df-pork-chop-bento.webp` },
      { code: "B4", name: "DF Chicken Leg Bento", price: "$18.50", image: `${IMG}/hero-fried-chicken-bento.webp` },
      { code: "B5", name: "DF Chicken Nugget Bento", price: "$16.50", image: `${IMG}/df-chicken-nugget-bento.webp` },
      { code: "B6", name: "DF Red Yeast Pork Belly Bento", price: "$17.00", image: `${IMG}/df-red-yeast-pork-belly-bento.webp` },
      { code: "B7", name: "OG Stewed Pork Belly Bento", price: "$16.50", image: `${IMG}/og-stewed-pork-belly-bento.webp` },
      { code: "B8", name: "Marinated Pork Chop Bento", price: "$17.50", image: `${IMG}/marinated-pork-chop-bento.webp` },
      { code: "B9", name: "Grilled Pork Tenderloin Bento", price: "$16.50", image: `${IMG}/grilled-pork-tenderloin-bento.webp` },
      { code: "B10", name: "Taiwanese Sausage Bento", price: "$17.50", image: `${IMG}/taiwanese-sausage-bento.webp` },
      { code: "B11", name: "LOBA Bento", price: "$14.75", image: `${IMG}/loba-bento.webp` },
      { code: "B12", name: "Shredded Chicken Bento", price: "$16.25", image: `${IMG}/shredded-chicken-bento.webp` },
      { code: "B13", name: "Hibachi Berkshire Pork Bento", price: "$16.50", note: "Black Peppercorn Sauce or Sukiyaki Sauce", image: `${IMG}/hibachi-berkshire-pork-bento.webp` },
      { code: "B14", name: "Hibachi Beef Bento", price: "$17.00", note: "Black Peppercorn Sauce or Sukiyaki Sauce", image: `${IMG}/hibachi-beef-bento.webp` },
      { code: "B15", name: "Basil Eggplant Stir-Fry Bento", price: "$17.50", tags: ["Vegetarian"], image: `${IMG}/basil-eggplant-bento.webp` },
      { code: "B16", name: "Vegetarian Chicken Roll Bento", price: "$18.50", tags: ["Vegetarian"], image: `${IMG}/vegetarian-chicken-roll-bento.webp` },
      { code: "B17", name: "Three Side Dishes Bento", price: "$9.00", image: `${IMG}/three-side-dishes-bento.webp` },
    ],
    options: [
      {
        title: "Chicken Bento options",
        entries: [
          { name: "Remove celery, green pepper, scallion, or cilantro", price: "$0.00" },
          { name: "Add Chili X, XX, or XXX", price: "$1.50" },
        ],
      },
      {
        title: "Chicken Bento add-on toppings",
        groups: bentoToppingGroups,
      },
      {
        title: "Bento add-ons",
        entries: [
          { name: "Steamed Rice, 100g", price: "$1.50" },
          { name: "LOBA Sauce", price: "$3.00" },
          { name: "Spicy Pickled Radish", price: "$1.50" },
          { name: "Grilled Pork Tenderloin, 2 pieces", price: "$5.50" },
          { name: "OG Stewed Pork Belly, 1 piece", price: "$4.00" },
          { name: "Taiwanese Sausage, 1 link", price: "$5.50" },
          { name: "Marinated Quail Egg, 4 pieces", price: "$2.00" },
          { name: "Pickled Mustard Green", price: "$1.50" },
          { name: "Garlic Slices", price: "$1.50" },
          { name: "Scallion Salt Sauce", price: "$1.50" },
          { name: "Black Peppercorn Sauce", price: "$2.50" },
        ],
      },
    ],
  },
  {
    id: "rice-bowls",
    title: "Rice Bowls",
    items: [
      { code: "C1", name: "LOBA Rice", price: "$11.00", image: `${IMG}/loba-rice-closeup.webp` },
      { code: "C2", name: "Shredded Chicken Rice", price: "$12.50", image: `${IMG}/shredded-chicken-rice.webp` },
      { code: "C3", name: "Sausage Chicken Rice", price: "$16.50", image: `${IMG}/sausage-chicken-rice.webp` },
      { code: "C4", name: "Chicken LOBA Rice", price: "$14.50", image: `${IMG}/chicken-loba-rice.webp` },
      { code: "C5", name: "Sausage LOBA Rice", price: "$16.50", image: `${IMG}/sausage-loba-rice.webp` },
    ],
  },
  {
    id: "a-la-carte",
    title: "A La Carte",
    intro: "Individual dishes, sides, and sharing plates.",
    items: [
      { code: "D1", name: "DF Chicken Nugget", price: "$11.00" },
      { code: "D2", name: "DF Fish Cake", price: "$10.00" },
      { code: "D3", name: "DF Squid Ball, 4 pieces", price: "$6.00" },
      { code: "D3", name: "DF Squid Ball, 8 pieces", price: "$10.00" },
      { code: "D4", name: "DF Tofu", price: "$10.00", tags: ["Vegetarian"] },
      { code: "D5", name: "Taro Fries", price: "$9.00", tags: ["Vegetarian"] },
      { code: "D6", name: "Wok Wok Fries", price: "$7.00", note: "Choose pepper, chili, or plum powder.", tags: ["Vegetarian"] },
      { code: "D7", name: "DF Chicken Leg, 2 pieces", price: "$9.50" },
      { code: "D8", name: "DF Chicken Leg, 6 pieces plus 2 free", price: "$28.50" },
      { code: "D9", name: "DF Chicken Leg, 10 pieces plus 4 free", price: "$47.50" },
      { code: "D10", name: "DF Red Yeast Pork Belly", price: "$11.00" },
      { code: "D11", name: "DF Pork Chop", price: "$10.50" },
      { code: "D12", name: "Marinated Pork Chop", price: "$11.00" },
      { code: "D13", name: "Grilled Pork Tenderloin", price: "$10.50" },
      { code: "D14", name: "OG Stewed Pork Belly", price: "$10.50" },
      { code: "D15", name: "Taiwanese Sausage Link", price: "$11.00" },
      { code: "D16", name: "Marinated Quail Eggs, 12 pieces", price: "$6.00" },
      { code: "D17", name: "Plain Rice, 250g", price: "$2.50" },
      { code: "D18", name: "Taro Biscuit, 1 piece", price: "$4.50" },
      { code: "D18", name: "Taro Biscuit, 2 pieces", price: "$8.50" },
      { code: "D18", name: "Taro Biscuit, 3 pieces", price: "$12.00" },
      { code: "D18", name: "Taro Biscuit, 4 pieces", price: "$15.50" },
      { code: "D19", name: "Basil Eggplant Stir-Fry", price: "$13.00", tags: ["Vegetarian"] },
      { code: "D20", name: "Stir-Fry Taiwanese Cabbage", price: "$13.00", tags: ["Vegetarian"] },
      { code: "D21", name: "Hibachi Berkshire Pork", price: "$15.00", note: "Black Peppercorn or Sukiyaki Sauce." },
      { code: "D22", name: "Hibachi Beef", price: "$15.50", note: "Black Peppercorn or Sukiyaki Sauce." },
      { code: "D23", name: "Gua Bao", price: "$7.99", tags: ["Contains Peanuts"] },
      { code: "D24", name: "DF Gua Bao", price: "$8.99", tags: ["Contains Peanuts"] },
      { code: "D25", name: "Vegetarian Chicken Roll", price: "$9.50", tags: ["Vegetarian"] },
    ],
  },
  {
    id: "side-dishes",
    title: "Side Dishes",
    items: [
      { name: "TTOP Marinated Cucumber", price: "$8.00" },
      { name: "Shredded Seaweed Salad", price: "$6.00" },
      { name: "Taiwanese Preserved Cabbage", price: "$6.00" },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    items: [
      { name: "Signature Milk Tea, Medium", price: "$5.00", image: `${IMG}/drinks-medium-group.webp` },
      { name: "Signature Milk Tea, Large", price: "$10.00", image: `${IMG}/drinks-large-group.webp` },
      { name: "Signature Milk Tea, Hot", price: "$5.50" },
      { name: "Deluxe Dark Plum Juice, Medium", price: "$5.00", image: `${IMG}/drinks-medium-group.webp` },
      { name: "Deluxe Dark Plum Juice, Large", price: "$10.00", image: `${IMG}/drinks-large-group.webp` },
      { name: "YoYo Pomelo Tea, Medium", price: "$5.00", image: `${IMG}/drinks-medium-group.webp` },
      { name: "YoYo Pomelo Tea, Large", price: "$10.00", image: `${IMG}/drinks-large-group.webp` },
      { name: "YoYo Pomelo Tea, Hot", price: "$5.50" },
      { name: "Honey Lemon Aloe Chia, Medium", price: "$5.00", image: `${IMG}/drinks-medium-group.webp` },
      { name: "Honey Lemon Aloe Chia, Large", price: "$10.00", image: `${IMG}/drinks-large-group.webp` },
      { name: "Coke, Diet Coke, Sprite, Ginger Ale, or Nestea", price: "$2.00" },
      { name: "HeySong Sarsaparilla", price: "$3.00" },
      { name: "Apple Sidra", price: "$3.00" },
      { name: "JDB Herbal Tea", price: "$3.00" },
    ],
  },
  {
    id: "chuchu-bar",
    title: "ChuChu Bar",
    intro: "Housemade fruit-vinegar refreshers.",
    items: [
      { name: "Honey Apple Vinegar Cube, Medium", price: "$6.50", image: `${IMG}/honey-apple-vinegar-cube.webp` },
      { name: "Honey Apple Vinegar Cube, Large", price: "$7.00", image: `${IMG}/honey-apple-vinegar-cube.webp` },
      { name: "Lychee Vinegar Cube, Medium", price: "$6.50", image: `${IMG}/lychee-vinegar-cube.webp` },
      { name: "Lychee Vinegar Cube, Large", price: "$7.00", image: `${IMG}/lychee-vinegar-cube.webp` },
      { name: "Cranberry Vinegar Cube, Medium", price: "$6.50", image: `${IMG}/cranberry-vinegar-cube.webp` },
      { name: "Cranberry Vinegar Cube, Large", price: "$7.00", image: `${IMG}/cranberry-vinegar-cube.webp` },
      { name: "Add Chia Seed", price: "$1.00" },
      { name: "Add Aloe Vera", price: "$1.00" },
    ],
  },
];

export const menuCategoryNav = [
  ...menuCategories.map((c) => ({ id: c.id, title: c.title })),
  { id: "frozen-foods", title: "Frozen Foods" },
  { id: "loyalty-program", title: "Loyalty Program" },
];

export const featuredDishes = [
  { name: "TTOP Chicken Pot", image: `${IMG}/ttop-chicken-pot-large.webp` },
  { name: "TTOP Spicy Chicken Bento", image: `${IMG}/ttop-spicy-chicken-bento.webp` },
  { name: "DF Pork Chop Bento", image: `${IMG}/df-pork-chop-bento.webp` },
  { name: "DF Chicken Leg Bento", image: `${IMG}/df-chicken-leg-bento.webp` },
  { name: "LOBA Rice", image: `${IMG}/loba-rice.webp` },
  { name: "Shredded Chicken Bento", image: `${IMG}/shredded-chicken-bento.webp` },
];

export const loyaltyProgram = {
  title: "TTOP Loyalty Program",
  rules: [
    "Earn 1 star for each $20 purchase.",
    "Stars do not expire.",
    "Only one redemption per order.",
  ],
  rewards: [
    { stars: 1, reward: "1 canned beverage" },
    { stars: 3, reward: "1 medium house blend drink" },
    { stars: 4, reward: "1 large ChuChu Bar drink" },
    { stars: 6, reward: "1 rice bowl from C1–C2" },
    { stars: 8, reward: "1 deluxe rice bowl from C3–C5" },
    { stars: 10, reward: "1 bento from B3–B16" },
    { stars: 20, reward: "$25 off the entire sale" },
    { stars: 30, reward: "$50 off the entire sale" },
    { stars: 40, reward: "$75 off the entire sale" },
    { stars: 50, reward: "$100 off the entire sale" },
  ],
  disclaimer:
    "Please confirm current loyalty program availability and redemption details with TTOP before ordering.",
  pdfUrl: "/downloads/ttop-loyalty-program.pdf",
};
