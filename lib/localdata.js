import fsPromises from 'fs/promises'
import path from 'path'

export async function getLocalData() {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), 'assets/postsData.json')
  // Read the json file
  const allPosts = await fsPromises.readFile(filePath)
  // Parse data as json
  const objectPostsData = JSON.parse(allPosts)
  console.log('objectPostsData: ', objectPostsData)
  return objectPostsData
}