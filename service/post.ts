import { endpoints, instance } from "service"

export async function getPosts() {
  const posts = await instance.get(endpoints.posts)

  return posts.data
}
