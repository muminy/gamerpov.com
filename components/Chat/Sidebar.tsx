import classNames from "classnames"
import { SidebarProps } from "."
import Permalink from "../Permalink"
import Repeater from "../Repeater"

type SidebarMenuType = {
  title: string
}

export default function Sidebar({ className, ...props }: SidebarProps) {
  const menu: SidebarMenuType[] = [
    { title: "Valorant" },

    { title: "Counter Strike: Global Offensive" },
    { title: "LOL" },
    { title: "Dota2" },
  ]

  const renderSidebarMenu = (item: SidebarMenuType, index: number) => {
    return (
      <Permalink
        className="duration-200 xl:w-full w-1/4 dark:bg-dark-secondary truncate bg-gray-100 dark:hover:bg-opacity-60 hover:bg-opacity-60 py-2 px-3 rounded-xl xl:text-sm text-xs font-semibold"
        key={index}
        href={"/"}
      >
        {item.title}
      </Permalink>
    )
  }

  return (
    <div className={classNames(className, "mb-5")} {...props}>
      <Repeater<SidebarMenuType>
        className="xl:space-y-2 xl:space-x-0 space-x-2 flex xl:flex-col"
        items={menu}
        renderItem={renderSidebarMenu}
      />
    </div>
  )
}
