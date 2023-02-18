import errorStatus from "@/constants/errorStatus"
import { ErrorCommonType } from "../types"
import { getErrorStatus } from "./handleError"

export default function getError({ error }: ErrorCommonType) {
  const code = getErrorStatus(error) ?? 100000

  return { code, message: errorStatus[code] }
}
