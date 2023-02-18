import { Fragment } from "react"
import { RepeaterProps } from "."

export default function Repeater<T>({
  className,
  items,
  renderItem,
  renderHeader,
  renderNotFound,
  renderBottom,
  as: Wrapper = "div",
}: RepeaterProps<T>) {
  return (
    <Fragment>
      {renderHeader && renderHeader}
      {items.length === 0 && renderNotFound && renderNotFound}
      <Wrapper className={className}>
        {items.map(renderItem)}
        {renderBottom && renderBottom}
      </Wrapper>
    </Fragment>
  )
}
