import { PrismaClient } from "@prisma/client"

export default function Blog(props) {

  console.log(props.posts);
  return (
    <div>
      {props.posts.map((post, idx) => (
        <div key={idx}>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  )
}

// Fetch all posts (in /pages/index.tsx)
export async function getStaticProps() {
  const prisma = new PrismaClient()
  const posts = await prisma.post.findMany()

  return {
    props : { posts }
  }
}