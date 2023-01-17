import { AlertParamsType, alertRef } from "@/components/Alert"

export function showAlert(params: AlertParamsType) {
  alertRef.current?.show(params)
}

export function hideAlert() {
  alertRef.current?.hide()
}
