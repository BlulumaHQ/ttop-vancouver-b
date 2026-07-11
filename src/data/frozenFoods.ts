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
    image: "/images/ttop/frozen/catalogue-02.png",
  },
  {
    code: "H2",
    name: "Frozen Old Country Rustic Beef Noodle",
    price: "$19.50",
    details: "Raw noodle 180g and soup with beef 570g.",
    category: "Frozen Cooked Foods",
    image: "/images/ttop/frozen/catalogue-03.png",
  },
  {
    code: "H3",
    name: "Frozen Classic Consommé Beef Noodle",
    price: "$18.50",
    details: "Raw noodle 180g and soup with beef 670g.",
    category: "Frozen Cooked Foods",
    image: "/images/ttop/frozen/catalogue-04.png",
  },
  {
    code: "H4",
    name: "Frozen LOBA Sauce, 500g",
    price: "$19.50",
    category: "Frozen Cooked Foods",
    image: "/images/ttop/frozen/catalogue-05.png",
  },
  {
    code: "H5",
    name: "Frozen OG Stewed Pork Belly, 400g",
    price: "$17.00",
    category: "Frozen Cooked Foods",
    image: "/images/ttop/frozen/catalogue-06.png",
  },
  {
    code: "H6",
    name: "Frozen Chicken Soup Bamboo Shoot Confit, 550g",
    price: "$14.50",
    category: "Frozen Cooked Foods",
    image: "/images/ttop/frozen/catalogue-07.png",
  },
  {
    code: "H7",
    name: "Frozen Marinated Pork Chop, 2 pieces",
    price: "$17.00",
    category: "Frozen Cooked Foods",
    image: "/images/ttop/frozen/catalogue-08.png",
  },
  {
    code: "H8",
    name: "Frozen Shiitake Pork Ragu, 500g",
    price: "$17.50",
    category: "Frozen Cooked Foods",
    image: "/images/ttop/frozen/catalogue-09.png",
  },
  {
    code: "H9",
    name: "Frozen Black Peppercorn Sauce, 500g",
    price: "$15.00",
    category: "Frozen Cooked Foods",
    image: "/images/ttop/frozen/catalogue-10.png",
  },
  {
    code: "H10",
    name: "Frozen Handmade Pork Meatballs, 250g",
    price: "$12.00",
    category: "Frozen Cooked Foods",
    image: "/images/ttop/frozen/catalogue-11.png",
  },
  {
    code: "I1",
    name: "Frozen Raw Pork Tenderloin, 6 pieces",
    price: "$14.00",
    category: "Frozen Raw Products",
    image: "/images/ttop/frozen/catalogue-13.png",
  },
  {
    code: "I2",
    name: "Frozen Raw Pork Chop, 2 pieces",
    price: "$11.00",
    category: "Frozen Raw Products",
    image: "/images/ttop/frozen/catalogue-14.png",
  },
  {
    code: "I3",
    name: "Frozen Raw Chicken and Mushroom Marinade, 500g",
    price: "$13.00",
    category: "Frozen Raw Products",
    image: "/images/ttop/frozen/catalogue-15.png",
  },
];

export const frozenCategoryImages = [cat1, cat2, cat3];

export const frozenNotice =
  "For large frozen food orders, please contact TTOP at least one week in advance.";
