import { Fragment } from "react"
import { RepeaterProps } from "."

export default function Repeater<T>({
  className,
  items,
  renderItem,
  renderHeader,
  as: Wrapper = "div",
}: RepeaterProps<T>) {
  return (
    <Fragment>
      {renderHeader && renderHeader()}
      <Wrapper className={className}>{items.map(renderItem)}</Wrapper>
    </Fragment>
  )
}
