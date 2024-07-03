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
  {
    id: 20,
    name: "Croissant",
    description:
      "A buttery, flaky, and crescent-shaped bread roll originating from France",
  },
  {
    id: 21,
    name: "Dumplings",
    description:
      "Dumplings are small pieces of dough, usually filled with minced meat and steamed, boiled, or fried",
  },
  {
    id: 22,
    name: "Nachos",
    description:
      "Nachos are a Tex-Mex dish of heated tortilla chips or totopos covered with melted cheese, often served as a snack or appetizer",
  },
  {
    id: 23,
    name: "Bagel",
    description:
      "A bagel is a bread product originating in the Jewish communities of Poland. It is traditionally shaped by hand into the form of a ring from yeasted wheat dough, roughly hand-sized, which is first boiled for a short time in water and then baked",
  },
  {
    id: 24,
    name: "Muffin",
    description:
      "A muffin is an individual-sized, baked product. It can refer to two distinct items, a part-raised flatbread that is baked and then cooked on a griddle (typically unsweetened) and a cupcake-like quickbread (often sweetened) that is chemically leavened and then baked",
  },
  {
    id: 25,
    name: "Pancakes",
    description:
      "Pancakes, hotcakes, griddlecakes, or flapjacks are a type of flatbread, often thin and round, prepared from a starch-based batter and cooked on a hot surface such as a griddle or frying pan",
  },
  {
    id: 26,
    name: "Crepes",
    description:
      'A crepe is a type of very thin pancake, usually made from wheat flour. The word is of French origin, deriving from the Latin crispa, meaning "curled"',
  },
  {
    id: 27,
    name: "Gyoza",
    description:
      "Gyoza are Japanese dumplings filled with ground meat and vegetables and wrapped in a thin dough",
  },
  {
    id: 28,
    name: "Ceviche",
    description:
      "Ceviche is a dish of marinated raw fish or seafood, typically garnished and served as an appetizer",
  },
  {
    id: 29,
    name: "Poke Bowl",
    description:
      "A poke bowl is a Hawaiian dish typically consisting of cubed, marinated fish (usually raw tuna or salmon) served over a bed of rice or greens, topped with vegetables and sauces",
  },
  {
    id: 30,
    name: "Donuts",
    description:
      "A doughnut or donut is a type of fried dough confection or dessert food",
  },
  {
    id: 31,
    name: "Eclair",
    description:
      "An eclair is an oblong pastry made with choux dough filled with a cream and topped with icing",
  },
  {
    id: 32,
    name: "Ravioli",
    description:
      "Ravioli are a type of pasta comprising a filling enveloped in thin pasta dough",
  },
  {
    id: 33,
    name: "Tacos al Pastor",
    description:
      "Tacos al Pastor is a Mexican dish featuring spit-grilled pork marinated in a combination of dried chilies, spices, and pineapple",
  },
  {
    id: 34,
    name: "Churros",
    description:
      "Churros are fried-dough pastries, typically eaten for breakfast in Spain and Portugal, where they originated, or as a snack or dessert in many countries",
  },
  {
    id: 35,
    name: "Empanadas",
    description:
      "Empanadas are a type of pastry baked or fried in many countries in Latin America, Southern Europe, and the Philippines",
  },
  {
    id: 36,
    name: "Hummus",
    description:
      "Hummus is a dip, spread, or savory dish made from cooked, mashed chickpeas blended with tahini, lemon juice, and garlic",
  },
  {
    id: 37,
    name: "Shawarma",
    description:
      "Shawarma is a Middle Eastern meat preparation based on the doner kebab of Ottoman Turkey",
  },
  {
    id: 38,
    name: "Pierogi",
    description:
      "Pierogi are filled dumplings of Central and Eastern European origin, made by wrapping unleavened dough around a savory or sweet filling and cooking in boiling water",
  },
  {
    id: 39,
    name: "Sashimi",
    description:
      "Sashimi is a Japanese delicacy consisting of very fresh raw fish or meat sliced into thin pieces and often eaten with soy sauce",
  },
  {
    id: 40,
    name: "Poutine",
    description:
      "Poutine is a Canadian dish consisting of french fries topped with cheese curds and smothered in gravy",
  },
  {
    id: 41,
    name: "Goulash",
    description:
      "Goulash is a soup or stew of meat (usually beef) and vegetables, seasoned with paprika and other spices",
  },
  {
    id: 42,
    name: "Pierogi",
    description:
      "Pierogi are filled dumplings of Central and Eastern European origin, made by wrapping unleavened dough around a savory or sweet filling and cooking in boiling water",
  },
  {
    id: 43,
    name: "Dosa",
    description:
      "Dosa is a thin pancake or crepe, originating from South India, made from a fermented batter of rice and lentils",
  },
  {
    id: 44,
    name: "Baklava",
    description:
      "Baklava is a rich, sweet dessert pastry made of layers of filo filled with chopped nuts and sweetened with syrup or honey",
  },
  {
    id: 45,
    name: "Baozi",
    description:
      "Baozi, or simply known as bao, is a type of filled bun or bread-like (i.e. made with yeast) item in various Chinese cuisines",
  },
];
