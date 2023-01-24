import { NotFoundProps } from "."
import Card from "../Card"

export default function NotFound({ title }: NotFoundProps) {
  return <Card className="text-center">{title}</Card>
}
