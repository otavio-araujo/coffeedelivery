const latte = require("@assets/catalogue/latte.png")
const mochaccino = require("@assets/catalogue/mochaccino.png")
const irlandes = require("@assets/catalogue/irlandes.png")

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
  image: string
}

const drinks: Drinks[] = [
  {
    id: 1,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 990,
    category: DrinkCategory.TRADITIONAL,
    isFeatured: false,
    image: "expresso.png",
  },

  {
    id: 2,
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 990,
    category: DrinkCategory.TRADITIONAL,
    isFeatured: false,
    image: "americano.png",
  },

  {
    id: 3,
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 990,
    category: DrinkCategory.TRADITIONAL,
    isFeatured: false,
    image: "expresso-cremoso.png",
  },

  {
    id: 4,
    name: "Latte",
    description: "Café expresso com o dobro de leite e espuma cremosa",
    price: 990,
    category: DrinkCategory.TRADITIONAL,
    isFeatured: true,
    image: latte,
  },

  {
    id: 5,
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 990,
    category: DrinkCategory.TRADITIONAL,
    isFeatured: false,
    image: "cafe-gelado.png",
  },

  {
    id: 6,
    name: "Capuccino",
    description: "Bebida com canela feita de doses de café, leite e espuma",
    price: 990,
    category: DrinkCategory.SWEET,
    isFeatured: false,
    image: "capuccino.png",
  },

  {
    id: 7,
    name: "Mochaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 990,
    category: DrinkCategory.SWEET,
    isFeatured: true,
    image: mochaccino,
  },

  {
    id: 8,
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 990,
    category: DrinkCategory.SWEET,
    isFeatured: false,
    image: "chocolate-quente.png",
  },

  {
    id: 9,
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 990,
    category: DrinkCategory.SWEET,
    isFeatured: false,
    image: "cubano.png",
  },

  {
    id: 10,
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 990,
    category: DrinkCategory.SWEET,
    isFeatured: false,
    image: "havaiano.png",
  },

  {
    id: 11,
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 990,
    category: DrinkCategory.SWEET,
    isFeatured: false,
    image: "arabe.png",
  },

  {
    id: 12,
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 990,
    category: DrinkCategory.SWEET,
    isFeatured: true,
    image: irlandes,
  },
]

const featuredDrinks = drinks.filter((drink) => drink.isFeatured)

export { drinks, DrinkCategory, Drinks, featuredDrinks }
