import React from 'react'
import Head from 'next/head'
//this componenet is so we can have a dynamic head on each page
//this will be in our layout.js
const Meta = ({title, keywords, description}) => {
  return (
    <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
        <title>{title}</title> 
    </Head>
  )
}

//default props if no props are passed in
Meta.defaultProps ={
    title: 'WebDev Newz',
    keywords: 'web development, programming',
    description: 'Get the latest news in web dev',
}

export default Meta