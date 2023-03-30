import axios from "axios"
import { PrismaClient } from "@prisma/client"

export default function Info(props) {
  console.log(props);
  // console.log(data);
  return (
    <div>
      <h1>This is info about cars!</h1>
      <h1>Data from the back end. The Name is </h1>
    </div>
  )
};

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const posts = await prisma.post.findMany()

  return {
    props : { posts }
  }
}