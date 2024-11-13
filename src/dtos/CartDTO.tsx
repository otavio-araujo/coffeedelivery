import { Drinks } from "@assets/data/DrinkDataset"

export type CartDTO = {
  drink: Drinks
  quantity: number
  size: "114ml" | "140ml" | "227ml"
}
