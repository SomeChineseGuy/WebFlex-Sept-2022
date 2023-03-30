import axios from "axios"
import { useEffect, useState } from "react"

export default function Fetch({data}) {
  console.log(data);
  // const [fact, setFact] = useState('')
  // const [gotData, setGotData] = useState(false)
  // useEffect(() => {
  //   axios.get('https://catfact.ninja/fact')
  //   .then(({data}) => {
  //     console.log(data);
  //     setFact(data.fact)
  //     setGotData(true)
  //   }).catch(err => {
  //     console.log(err);
  //   })
  // }, [])
  return (
    <div>
      <h1>Hello</h1>
      {/* {gotData && <p>The cat fact is: {fact}</p>} */}
      <p>The Cat fact is: {data.fact}</p>
    </div>
  )
};

export async function getStaticProps() {
  const {data} = await axios.get('https://catfact.ninja/fact')
  console.log(data);
  return {
    props: {
      data
    }
  }
}