import { v4 as uuid } from "uuid";


export const categories = [
  {
    _id: uuid(),
    categoryName: "Casual Shoes",
    description:
      "Stylish and comfortable footwear for everyday wear.",
  },
  {
    _id: uuid(),
    categoryName: "Dress Shoes",
    description:
      "Elegant and sophisticated footwear for formal occasions",
  },
  {
    _id: uuid(),
    categoryName: "Sports shoe",
    description:
      "Durable and performance-enhancing footwear for athletic activities",
  },
];
