export type GalleryImage = {
  src: string;
  alt: string;
  category: "Signature Pot" | "Bentos" | "Street Food" | "Frozen Foods" | "Restaurant";
};

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/ttop/gallery/gallery-01.jpg",
    alt: "Signature TTOP Chicken Pot with Hua Diao sauce",
    category: "Signature Pot",
  },
  {
    src: "/images/ttop/gallery/gallery-02.jpg",
    alt: "Deep fried pork chop bento with rice and side dishes",
    category: "Bentos",
  },
  {
    src: "/images/ttop/gallery/gallery-03.jpg",
    alt: "LOBA rice with braised pork on steamed rice",
    category: "Bentos",
  },
  {
    src: "/images/ttop/gallery/gallery-04.jpg",
    alt: "Taro fries served in a paper cone",
    category: "Street Food",
  },
  {
    src: "/images/ttop/gallery/gallery-05.jpg",
    alt: "Taiwanese beef noodle soup in a ceramic bowl",
    category: "Street Food",
  },
  {
    src: "/images/ttop/gallery/gallery-06.jpg",
    alt: "Taiwanese popcorn chicken with basil leaves",
    category: "Street Food",
  },
  {
    src: "/images/ttop/gallery/gallery-07.jpg",
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
