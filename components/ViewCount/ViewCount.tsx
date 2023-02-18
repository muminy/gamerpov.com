import { ViewCountProps } from "."
import useSWR from "swr"
import { fetcher } from "@/helpers/fetcher"
import Icon from "../Icon"

export default function ViewCount({ slug }: ViewCountProps) {
  const { data, isLoading } = useSWR(`/api/views/${slug}`, fetcher)

  return (
    <div className="flex items-center space-x-2 truncate">
      <Icon size={14} icon="pulse" />
      <span>{isLoading ? "-" : data && data.total} Kez Okundu</span>
    </div>
  )
}
