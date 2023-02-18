import classNames from "classnames"
import { BreadCrumbProps, BreadcrumbType } from "."
import Permalink from "../Permalink"
import Repeater from "../Repeater"
import style from "./style.module.css"

export default function Breadcrumb({ items }: BreadCrumbProps) {
  return (
    <Repeater<BreadcrumbType>
      items={items}
      className={style.breadcrumbs}
      renderItem={(item, index) =>
        item.to ? (
          <Permalink
            className={classNames(
              "text-gray-500 dark:text-gray-500 flex",
              "duration-200 hover:text-black dark:hover:text-white"
            )}
            key={index}
            href={item.to}
            title={item.title}
          />
        ) : (
          <div key={index} className="text-sm whitespace-pre-line">
            {item.title}
          </div>
        )
      }
    />
  )
}
