export const fetcher = async (input: RequestInfo) => {
  const res: Response = await fetch(input)
  return await res.json()
}
