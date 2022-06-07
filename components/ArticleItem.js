
import React from 'react'
import articleStyles from '../styles/Article.module.css'
import Link from 'next/link'

const ArticleItem = ({article}) => {
  return (
      //this is a nested link where we are passing in the id as the article.id
    <Link href="/article/[id]" as={`/article/${article.id}`}>
        {/* import the styles from articleStyles for the card */}
        <a className={articleStyles.card}>
            <h3>{article.title} &rarr;</h3>
            <p>{article.excerpt}</p>
        </a>
    </Link>
  )
}

export default ArticleItem