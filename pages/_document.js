//this is the standard document that is rednered server side.
//you cannot use event handlers
//it starts with an underscore
//brings in the document class
import Document, { Html, Head, Main, NextScript } from 'next/document'
//this give us access to the Html, head, main and nextscript which is any scripts we want to run in the head
//ususally to add stuff into the head you can import the Head tag into the page
class MyDocument extends Document {
  
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument