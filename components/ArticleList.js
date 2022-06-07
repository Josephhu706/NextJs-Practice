import React from 'react'
import articleStyles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'

//takes articles props passed in from index.js fetched from the API
const ArticleList = ({articles}) => {
  return (
      //this applies the grid styles from the articles style module
    <div className={articleStyles.grid}>
        {articles.map((article)=>(
        <ArticleItem key={article.id} article={article}/>
        ))}
    </div>
  )
}

export default ArticleList

