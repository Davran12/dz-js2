async function getUserPosts(userId = 5) {
  try {
    const usersResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    )
    if (!usersResponse.ok) {
      throw new Error("Ошибка при получении пользователей")
    }
    const users = await usersResponse.json()

    const user = users.find((u) => u.id === userId)
    if (!user) {
      throw new Error(`Пользователь с id=${userId} не найден`)
    }

    const postsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    )
    if (!postsResponse.ok) {
      throw new Error("Ошибка при получении постов пользователя")
    }
    const posts = await postsResponse.json()

    console.log("Первые 3 поста пользователя:", posts.slice(0, 3))
  } catch (error) {
    console.error("Произошла ошибка:", error.message)
  }
}

getUserPosts()

// -------------------------------------------

async function getPostWithComments(postId = 1) {
  try {
    const [postResponse, commentsResponse] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`),
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`),
    ])

    if (!postResponse.ok || !commentsResponse.ok) {
      throw new Error("Один из запросов завершился с ошибкой")
    }

    const post = await postResponse.json()
    const comments = await commentsResponse.json()

    const result = {post, comments}
    console.log("Результат:", result)
  } catch (error) {
    console.error("Ошибка при получении поста и комментариев:", error.message)
  }
}

getPostWithComments()
