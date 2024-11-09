import { ImageSourcePropType } from "react-native"

enum DrinkCategory {
  TRADITIONAL = "tradicional",
  SWEET = "doce",
  SPECIAL = "especial",
}

interface Drinks {
  id: number
  name: string
  description: string
  price: number
  category: DrinkCategory
  isFeatured: boolean
  image: ImageSourcePropType
}

const drinks: Drinks[] = [
  {
    id: 1,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 990,
    category: DrinkCategory.TRADITIONAL,
    isFeatured: false,
    image: require("@assets/catalogue/expresso.png"),
  },

  {
    id: 2,
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 990,
    category: DrinkCategory.TRADITIONAL,
    isFeatured: false,
    image: require("@assets/catalogue/americano.png"),
  },

  {
    id: 3,
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 990,
    category: DrinkCategory.TRADITIONAL,
    isFeatured: false,
    image: require("@assets/catalogue/expresso-cremoso.png"),
  },

  {
    id: 4,
    name: "Latte",
    description: "Café expresso com o dobro de leite e espuma cremosa",
    price: 990,
    category: DrinkCategory.TRADITIONAL,
    isFeatured: true,
    image: require("@assets/catalogue/latte.png"),
  },

  {
    id: 5,
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 990,
    category: DrinkCategory.TRADITIONAL,
    isFeatured: false,
    image: require("@assets/catalogue/cafe-gelado.png"),
  },

  {
    id: 6,
    name: "Capuccino",
    description: "Bebida com canela feita de doses de café, leite e espuma",
    price: 990,
    category: DrinkCategory.SWEET,
    isFeatured: false,
    image: require("@assets/catalogue/capuccino.png"),
  },

  {
    id: 7,
    name: "Mochaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 990,
    category: DrinkCategory.SWEET,
    isFeatured: true,
    image: require("@assets/catalogue/mochaccino.png"),
  },

  {
    id: 8,
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 990,
    category: DrinkCategory.SWEET,
    isFeatured: false,
    image: require("@assets/catalogue/chocolate-quente.png"),
  },

  {
    id: 9,
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 990,
    category: DrinkCategory.SWEET,
    isFeatured: false,
    image: require("@assets/catalogue/cubano.png"),
  },

  {
    id: 10,
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 990,
    category: DrinkCategory.SWEET,
    isFeatured: false,
    image: require("@assets/catalogue/havaiano.png"),
  },

  {
    id: 11,
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 990,
    category: DrinkCategory.SWEET,
    isFeatured: false,
    image: require("@assets/catalogue/arabe.png"),
  },

  {
    id: 12,
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 990,
    category: DrinkCategory.SWEET,
    isFeatured: true,
    image: require("@assets/catalogue/irlandes.png"),
  },
]

const featuredDrinks = drinks.filter((drink) => drink.isFeatured)

export { drinks, DrinkCategory, Drinks, featuredDrinks }
