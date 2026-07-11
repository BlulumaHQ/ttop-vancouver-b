export type FrozenCategory = "Frozen Cooked Foods" | "Frozen Raw Products";

export type FrozenProduct = {
  code: string;
  name: string;
  price: string;
  details?: string;
  category: FrozenCategory;
  image: string;
};

const cat1 = "/images/ttop/frozen/frozen-cooked-foods-01.jpg";
const cat2 = "/images/ttop/frozen/frozen-cooked-foods-02.jpg";
const cat3 = "/images/ttop/frozen/frozen-cooked-foods-03.jpg";

export const frozenProducts: FrozenProduct[] = [
  {
    code: "H1",
    name: "Frozen TTOP Chicken Pot",
    price: "$36.00",
    details:
      "Chicken 650g with Hua Diao yellow cooking wine 200g. Celery, green pepper, and scallion are not included. Optional add-on: $2.00.",
    category: "Frozen Cooked Foods",
    image: "/images/ttop/frozen/frozen-hua-diao-chicken-veg.webp",
  },
  {
    code: "H2",
    name: "Frozen Old Country Rustic Beef Noodle",
    price: "$19.50",
    details: "Raw noodle 180g and soup with beef 570g.",
    category: "Frozen Cooked Foods",
    image: "/images/ttop/frozen/frozen-classic-beef-noodle.webp",
  },
  {
    code: "H3",
    name: "Frozen Classic Consommé Beef Noodle",
    price: "$18.50",
    details: "Raw noodle 180g and soup with beef 670g.",
    category: "Frozen Cooked Foods",
    image: "/images/ttop/frozen/frozen-peppercorn-beef-noodle.webp",
  },
  {
    code: "H4",
    name: "Frozen LOBA Sauce, 500g",
    price: "$19.50",
    category: "Frozen Cooked Foods",
    image: "/images/ttop/frozen/frozen-loba-sauce.webp",
  },
  {
    code: "H5",
    name: "Frozen OG Stewed Pork Belly, 400g",
    price: "$17.00",
    category: "Frozen Cooked Foods",
    image: "/images/ttop/frozen/frozen-stewed-pork-belly.webp",
  },
  {
    code: "H6",
    name: "Frozen Chicken Soup Bamboo Shoot Confit, 550g",
    price: "$14.50",
    category: "Frozen Cooked Foods",
    image: "/images/ttop/frozen/frozen-chicken-bamboo-soup.webp",
  },
  {
    code: "H7",
    name: "Frozen Marinated Pork Chop, 2 pieces",
    price: "$17.00",
    category: "Frozen Cooked Foods",
    image: "/images/ttop/frozen/frozen-braised-pork-chop.webp",
  },
  {
    code: "H8",
    name: "Frozen Shiitake Pork Ragu, 500g",
    price: "$17.50",
    category: "Frozen Cooked Foods",
    image: "/images/ttop/frozen/frozen-shiitake-ragu.webp",
  },
  {
    code: "H9",
    name: "Frozen Black Peppercorn Sauce, 500g",
    price: "$15.00",
    category: "Frozen Cooked Foods",
    image: "/images/ttop/frozen/frozen-black-pepper-sauce.webp",
  },
  {
    code: "H10",
    name: "Frozen Handmade Pork Meatballs, 250g",
    price: "$12.00",
    category: "Frozen Cooked Foods",
    image: "/images/ttop/frozen/frozen-lions-head-meatball.webp",
  },
  {
    code: "I1",
    name: "Frozen Raw Pork Tenderloin, 6 pieces",
    price: "$14.00",
    category: "Frozen Raw Products",
    image: "/images/ttop/frozen/frozen-raw-pork-chop.webp",
  },
  {
    code: "I2",
    name: "Frozen Raw Pork Chop, 2 pieces",
    price: "$11.00",
    category: "Frozen Raw Products",
    image: "/images/ttop/frozen/frozen-raw-pork-chop.webp",
  },
  {
    code: "I3",
    name: "Frozen Raw Chicken and Mushroom Marinade, 500g",
    price: "$13.00",
    category: "Frozen Raw Products",
    image: "/images/ttop/frozen/frozen-raw-chicken-mushroom.webp",
  },
  {
    code: "I4",
    name: "Frozen Braised Intestine, 500g",
    price: "$15.00",
    category: "Frozen Cooked Foods",
    image: "/images/ttop/frozen/frozen-braised-intestine.webp",
  },
  {
    code: "I5",
    name: "Frozen Tomato Meat Sauce, 500g",
    price: "$14.00",
    category: "Frozen Cooked Foods",
    image: "/images/ttop/frozen/frozen-tomato-meat-sauce.webp",
  },
  {
    code: "I6",
    name: "Frozen Pickled Mustard Green",
    price: "$8.00",
    category: "Frozen Cooked Foods",
    image: "/images/ttop/frozen/frozen-pickled-mustard-green.webp",
  },
  {
    code: "I7",
    name: "Frozen Gift Box",
    price: "Ask in store",
    details: "Curated frozen product gift box — ask staff about current contents and pricing.",
    category: "Frozen Cooked Foods",
    image: "/images/ttop/frozen/frozen-gift-box.webp",
  },
];

export const frozenCategoryImages = [cat1, cat2, cat3];

export const frozenNotice =
  "For large frozen food orders, please contact TTOP at least one week in advance.";
