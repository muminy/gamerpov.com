import { fetcher } from "@/helpers/fetcher"
import { UseFetchPropType } from "@/types/hooks"
import useSWR from "swr"

export default function useFetcher<T>({ url }: UseFetchPropType) {
  const { data, error, isLoading } = useSWR<T>(url, fetcher)

  return { data, error, isLoading }
}
