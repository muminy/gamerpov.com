import Detail from "./Detail"
import Nutritional from "./Nutritional"
import Ingredients from "./Ingredients"
import Steps from "./Steps"

import { NameValue } from "@/types/index"

const Recipe = {
  Detail,
  Nutritional,
  Ingredients,
  Steps,
}

export type InfoContainerProps = {
  name: string
  value: string
}
export type StepsProps = {
  items: string[]
}
export type NutritionalProps = {
  items: NameValue[]
}

export type IngredientsProps = {
  items: NameValue[]
}

export type DetailProps = {
  content: string
}

export default Recipe
