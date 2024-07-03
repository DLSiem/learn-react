export function filterItems(items, query) {
  query = query.toLowerCase();
  return items.filter((item) =>
    item.name.split(" ").some((word) => word.toLowerCase().startsWith(query))
  );
}

export const foods = [
  {
    id: 0,
    name: "Sushi",
    description:
      "Sushi is a traditional Japanese dish of prepared vinegared rice",
  },
  {
    id: 1,
    name: "Pizza",
    description:
      "Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients",
  },
  {
    id: 2,
    name: "Burger",
    description:
      "A hamburger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun",
  },
  {
    id: 3,
    name: "Pasta",
    description:
      "Pasta is an Italian type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes",
  },
  {
    id: 4,
    name: "Salad",
    description:
      "A salad is a dish consisting of a mixture of small pieces of food, usually vegetables or fruit",
  },
  {
    id: 5,
    name: "Tacos",
    description:
      "A taco is a traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla topped with a filling",
  },
  {
    id: 6,
    name: "Biryani",
    description:
      "Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent as a variety of Persian pilaf",
  },
  {
    id: 7,
    name: "Steak",
    description:
      "A steak is a meat generally sliced across the muscle fibers, potentially including a bone",
  },
  {
    id: 8,
    name: "Pad Thai",
    description:
      "Pad Thai is a stir-fried rice noodle dish commonly served as a street food and at casual local eateries in Thailand",
  },
  {
    id: 9,
    name: "Ramen",
    description:
      "Ramen is a Japanese noodle soup. It consists of Chinese-style wheat noodles served in a meat or (occasionally) fish-based broth",
  },
  {
    id: 10,
    name: "Pho",
    description:
      "Pho is a Vietnamese soup consisting of broth, rice noodles, herbs, and meat, sometimes chicken",
  },
  {
    id: 11,
    name: "Dim Sum",
    description:
      "Dim sum is a large range of small Chinese dishes that are traditionally enjoyed in restaurants for brunch",
  },
  {
    id: 12,
    name: "Paella",
    description: "Paella is a Spanish rice dish originally from Valencia",
  },
  {
    id: 13,
    name: "Curry",
    description:
      "Curry is a variety of dishes originating in the Indian subcontinent that use a complex combination of spices or herbs",
  },
  {
    id: 14,
    name: "Kebab",
    description:
      'Kebab is a type of cooked meat dish that originates from the Middle East, and it means "grilled (or broiled) meat"',
  },
  {
    id: 15,
    name: "Samosa",
    description:
      "A samosa is a fried or baked pastry with a savory filling, such as spiced potatoes, onions, peas, meat, or lentils",
  },
  {
    id: 16,
    name: "Falafel",
    description:
      "Falafel is a deep-fried ball or patty made from ground chickpeas, fava beans, or both",
  },
  {
    id: 17,
    name: "Gelato",
    description:
      "Gelato is a popular frozen dessert of Italian origin. It is generally lower in fat, but higher in sugar than other styles of ice cream",
  },
  {
    id: 18,
    name: "Cheesecake",
    description:
      "Cheesecake is a sweet dessert consisting of one or more layers. The main and thickest layer consists of a mixture of soft, fresh cheese, eggs, and sugar",
  },
  {
    id: 19,
    name: "Tiramisu",
    description:
      "Tiramisu is a coffee-flavoured Italian dessert. It is made of ladyfingers dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese, flavoured with cocoa",
  },
];
