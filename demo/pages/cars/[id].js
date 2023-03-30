import { useRouter } from "next/router"

export default function CarList() {
  const router = useRouter();
  console.log(router);
  const handleClick = () => {
    router.back()
  }

  const handleReplace = () => {
    router.replace('/hello')
  }
  return (
    <div>
      <h1>This is a catch all!</h1>
      <p>You are currently on {router.query.id}</p>
      <button onClick={handleClick}>Back</button>
      <button onClick={handleReplace}>Replace</button>
    </div>
  )
};