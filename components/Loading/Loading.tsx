import { LoadingProps } from "."
import Card from "../Card"
import Icon from "../Icon"

export default function Loading({ title }: LoadingProps) {
  return (
    <Card className="flex flex-col items-center justify-center space-y-2 py-10">
      <div className="animate-spin duration-1000">
        <Icon icon="spin" />
      </div>
      <div className="font-semibold text-sm">{title ?? "Yükleniyor"}</div>
    </Card>
  )
}
