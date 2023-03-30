import axios from "axios";
import { useRouter } from "next/router"

export default function WeatherList({data, params}) {
  const router = useRouter();
  console.log(router);
  const handleClick = () => {
    router.back()
  }

  console.log(data, params);

  const handleReplace = () => {
    router.replace('/hello')
  }
  return (
    <div>
      <h1>This is a catch all!</h1>
      <p>You are currently on {router.query.weatherName}</p>
      <button onClick={handleClick}>Back</button>
      <button onClick={handleReplace}>Replace</button>
      <div>
        <h1> The current city is: {data.name}</h1>
        <p>The current weather is: {data.weather[0].main}</p>
      </div>
    </div>
  )
};

// export async function getStaticProps({params}) {
//   const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${params.weatherName}&appid=${process.env.WEATHER_API}`);
//   console.log(data);
//   return {
//     props: {
//       data,
//       params
//     }
//   }
// }

// export function getStaticPaths() {
//   const paths = ['london', 'mexico', 'toronto', 'vancouver']
//   const newPaths = paths.map(ele => {
//     return {
//       params: {weatherName: ele.toString()}
//     }
//   })
//   return {
//     paths: newPaths,
//     fallback: false
//   }
// }

export async function getServerSideProps({params}) {
  try {

  } catch {
    
  }
  const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${params.weatherName}&appid=${process.env.WEATHER_API}`);
  console.log(data);
  return {
    props: {
      data,
      params
    }
  }
}