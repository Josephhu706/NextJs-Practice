import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {server} from '../../../config'
import Meta from '../../../components/Meta'

//this is our single article page when we click on our article
//pass in the props we fetched from the api for specific id
const article = ({article}) => {
    // //this contains any parameters in the route (params)
    // const router = useRouter()
    // //destructure router to get the params id
    // const {id} = router.query
  return (
    <>
    {/* pass article.title into Meta as props so article titles are dynamic */}
    <Meta title={article.title} description={article.excerpt}/>
    <h1>{article.title}</h1>
    <p>{article.body}</p>
    <br/>
    <Link href="/">Go Back</Link>
    </>
  )
}
//we need to modify these two functions to fetch our api instead of json placeholder
//this is so that when we navigate to a single article page it's not json placeholder info
export const getStaticProps = async (context) =>{
    // now we are fetching our api and server depending on development mode and keeping our params id
    const res = await fetch(`${server}/api/articles/${context.params.id}`)
    const article = await res.json()

    return{
        props:{
            article
        }
    }
}


export const getStaticPaths = async () =>{

    const res = await fetch(`${server}/api/articles`)
    
    const articles = await res.json()
    
    const ids= articles.map(article=>article.id)
   
    const paths = ids.map((id=>({params:{id: id.toString()}})))

    return{
        paths,

        fallback: false
    }

}
//use getServerSide props which gets the data on request to the server instead of build time
// export const getServerSideProps = async (context) =>{
//     //context lets us get whatever is in the url

//         //make a fetch request to api from the context params and id of the article
//         const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//         const article = await res.json()
//         //return the specific article and now we can pass it in as props above
//         return{
//             props:{
//                 article
//             }
//         }
// }

//we can also achieve the same thing dynamically with getStaticProps
// export const getStaticProps = async (context) =>{
//     //context lets us get whatever is in the url

//     //make a fetch request to api from the context params and id of the article
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json()
//     //return the specific article and now we can pass it in as props above
//     return{
//         props:{
//             article
//         }
//     }
// }
// //this is faster than getServerSide props because it is generated at build time
// export const getStaticPaths = async () =>{

//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
//     //we need to turn this articles array into an object where the key is id and the value is the id number
//     const articles = await res.json()
//     //takes all the arrays and for each article, return just the id
//     //this give us an array of article ids
//     const ids= articles.map(article=>article.id)
//     //map through all the array of ids and for each id create an object where the key is params which contains an object with each id key having a value of the id as a string
//     const paths = ids.map((id=>({params:{id: id.toString()}})))

//     return{
//         paths,
//         //if we go to something that doesn't exist return a 404 page
//         fallback: false
//     }

// }


export default article