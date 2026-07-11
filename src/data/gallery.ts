export type GalleryImage = {
  src: string;
  alt: string;
  category: "Signature Pot" | "Bentos" | "Street Food" | "Frozen Foods" | "Restaurant";
};

export const galleryImages: GalleryImage[] = [
  {
    src: "https://ttopchicken.ca/wp-content/uploads/2024/01/245A9808-%E5%B7%B2%E5%A2%9E%E5%BC%B7-%E9%9B%9C%E8%A8%8A%E6%B8%9B%E5%B0%91-%E7%B7%A8%E8%BC%AF-scaled.jpg",
    alt: "Signature TTOP Chicken Pot with Hua Diao sauce",
    category: "Signature Pot",
  },
  {
    src: "https://ttopchicken.ca/wp-content/uploads/2023/11/245A9182-%E5%B7%B2%E5%A2%9E%E5%BC%B7-%E9%9B%9C%E8%A8%8A%E6%B8%9B%E5%B0%91-scaled.jpg",
    alt: "Deep fried pork chop bento with rice and side dishes",
    category: "Bentos",
  },
  {
    src: "https://ttopchicken.ca/wp-content/uploads/2023/11/245A9159-%E5%B7%B2%E5%A2%9E%E5%BC%B7-%E9%9B%9C%E8%A8%8A%E6%B8%9B%E5%B0%91-scaled.jpg",
    alt: "LOBA rice with braised pork on steamed rice",
    category: "Bentos",
  },
  {
    src: "https://ttopchicken.ca/wp-content/uploads/2023/11/245A8849-%E5%B7%B2%E5%A2%9E%E5%BC%B7-%E9%9B%9C%E8%A8%8A%E6%B8%9B%E5%B0%91-scaled.jpg",
    alt: "Taro fries served in a paper cone",
    category: "Street Food",
  },
  {
    src: "https://ttopchicken.ca/wp-content/uploads/2023/11/245A8999-%E5%B7%B2%E5%A2%9E%E5%BC%B7-%E9%9B%9C%E8%A8%8A%E6%B8%9B%E5%B0%91-scaled.jpg",
    alt: "Taiwanese beef noodle soup in a ceramic bowl",
    category: "Street Food",
  },
  {
    src: "https://ttopchicken.ca/wp-content/uploads/2023/11/245A9186-%E5%B7%B2%E5%A2%9E%E5%BC%B7-%E9%9B%9C%E8%A8%8A%E6%B8%9B%E5%B0%91-scaled.jpg",
    alt: "Taiwanese popcorn chicken with basil leaves",
    category: "Street Food",
  },
  {
    src: "https://ttopchicken.ca/wp-content/uploads/2023/11/245A9218-%E5%B7%B2%E5%A2%9E%E5%BC%B7-%E9%9B%9C%E8%A8%8A%E6%B8%9B%E5%B0%91-scaled.jpg",
    alt: "Grilled Taiwanese sausage slices",
    category: "Street Food",
  },
  {
    src: "/images/ttop/frozen/frozen-cooked-foods-01.jpg",
    alt: "Assortment of TTOP frozen cooked foods",
    category: "Frozen Foods",
  },
  {
    src: "/images/ttop/frozen/frozen-cooked-foods-02.jpg",
    alt: "TTOP frozen meals ready for home preparation",
    category: "Frozen Foods",
  },
  {
    src: "/images/ttop/frozen/frozen-cooked-foods-03.jpg",
    alt: "TTOP frozen sauces and prepared products",
    category: "Frozen Foods",
  },
  {
    src: "/images/ttop/brand/ttop-banner-1.png",
    alt: "TTOP Chicken brand banner",
    category: "Restaurant",
  },
  {
    src: "/images/ttop/brand/ttop-banner-2.png",
    alt: "TTOP Chicken promotional banner",
    category: "Restaurant",
  },
];

export const galleryCategories = [
  "Signature Pot",
  "Bentos",
  "Street Food",
  "Frozen Foods",
  "Restaurant",
] as const;
