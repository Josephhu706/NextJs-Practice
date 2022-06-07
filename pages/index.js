//for custom titles
import ArticleList from '../components/ArticleList'
import {server} from '../config'

//no routes file needed, all routing is automatically done in pages
//you can change the info in head such as title and meta tage with Head
export default function Home({articles}) {
  console.log(articles)
  return (
    <div>
      <ArticleList articles={articles}/>
    </div>
  )
}

//instead of getting data from json placeholder we will get it from the data.js api
export const getStaticProps = async () =>{
  //we are fetching the server imported from the config folder in case we are not in dev mode
  //this sets our articles as the github info
  const res = await fetch(`${server}/api/articles`)
  const articles= await res.json()
  //return destructured props which is the articles we want
  return{
    props:{
      articles
    }
  }
}
//data fetching:
// //there are 3 functions: 
// //getStaticProps which fetches data at build time
// //getServerSideProps which fetches data on every request which is slower
// //getStaticPaths which dynmically generates paths based on the data we are fetching
// export const getStaticProps = async () =>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
//   const articles= await res.json()
//   //return destructured props which is the articles we want
//   return{
//     props:{
//       articles
//     }
//   }
// }