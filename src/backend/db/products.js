import { v4 as uuid } from "uuid";


export const products = [
  {
    _id: uuid(),
    name: "Lumina",
    image: "https://ik.imagekit.io/Phantomcat20/images/shoe3.png?updatedAt=1684678721227",
    price: 49.99,
    originalPrice: 59.99,
    bgColor: "#ffffff",
    category: "Sport_Shoes",
    availableVariants: [
      { color: "#00ff00", name: "Special Edition" },
      { color: "#0000ff", name: "Limited Edition" },
    ],
  },
  {
    _id: uuid(),
    name: "Vortex",
    image: "https://ik.imagekit.io/Phantomcat20/images/shoe2.png?updatedAt=1684678721229",
    price: 79.99,
    originalPrice: 89.99,
    bgColor: "#f2f2f2",
    category: "Casual_Shoes",
    availableVariants: [
      { color: "#00ff00", name: "Special Edition" },
      { color: "#0000ff", name: "Limited Edition" },
    ],
  },
  {
    _id: uuid(),
    name: "Ignite",
    image: "https://ik.imagekit.io/Phantomcat20/images/shoe1.png?updatedAt=1684678721220",
    price: 99.99,
    originalPrice: 109.99,
    bgColor: "#ebebeb",
    category: "Sport_Shoes",
    availableVariants: [
      { color: "#ff0000", name: "Eclipse Edition" },
      { color: "#0000ff", name: "Limited Edition" },
    ],
  },
  {
    _id: uuid(),
    name: "Pulse",
    image: "https://ik.imagekit.io/Phantomcat20/images/shoe5.png?updatedAt=1684678721219",
    price: 39.99,
    originalPrice: 49.99,
    bgColor: "#cccccc",
    category: "Sport_Shoes",
    availableVariants: [
      { color: "#00ff00", name: "Special Edition" },
      { color: "#0000ff", name: "Limited Edition" },
    ],
  },
  {
    _id: uuid(),
    name: "Radiant",
    image: "https://ik.imagekit.io/Phantomcat20/images/shoe4.png?updatedAt=1684678721190",
    price: 59.99,
    originalPrice: 69.99,
    bgColor: "#d9d9d9",
    category: "Casual_Shoes",
    availableVariants: [
      { color: "#ff0000", name: "Inferno Edition" },
    ],
  },
];