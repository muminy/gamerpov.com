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
      {renderHeader && renderHeader()}
      <Wrapper className={className}>
        {items.length === 0
          ? renderNotFound && renderNotFound()
          : items.map(renderItem)}
        {renderBottom && renderBottom}
      </Wrapper>
    </Fragment>
  )
}
