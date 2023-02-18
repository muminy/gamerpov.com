import axios, { AxiosError } from "axios"
import { ErrorResponseType } from "../types"
import { showAlert } from "./alert"
import getErrorMessage from "./errorMessage"

export default function handleError(e: unknown) {
  if (axios.isAxiosError(e)) {
    const error = e as AxiosError<ErrorResponseType>
    const { message } = getErrorMessage({ error })
    showAlert({ message, icon: "info" })
  } else {
    return "Beklenmedik bir hata oluştu."
  }
}

export function getErrorStatus(e: unknown) {
  return (e as AxiosError<ErrorResponseType>).response?.data?.status
}
