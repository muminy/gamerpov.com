import classNames from "classnames"
import { ShareProps } from "."
import Card from "../Card"
import IconButton from "../IconButton/IconButton"

export default function Share({ className, ...remaining }: ShareProps) {
  return (
    <Card
      {...remaining}
      className={classNames(
        className,
        "flex justify-between items-center py-2"
      )}
    >
      <div className="font-semibold text-sm">Share</div>
      <div className="flex items-center">
        <IconButton bgType="none" icon="twitch2" />
        <IconButton bgType="none" icon="twitter" />
        <IconButton bgType="none" icon="facebook" />
      </div>
    </Card>
  )
}
