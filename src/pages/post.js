import React from "react"
//Linkをインポートする
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const PostPage = ({ data }) => (
 <Layout>
   <SEO title="Post" />

   {data.allMicrocmsPost.edges.map(edge => {
     const post = edge.node
     return (
       <React.Fragment key={post.id}>
         <Link to={`/post/${post.id}`}>
             <h2>{post.title}</h2>
         </Link>
       </React.Fragment>
     )
   })}
 </Layout>
)

export const query = graphql`
 {
  allMicrocmsPost(sort: {fields: id, order: ASC}) {
    edges {
      node {
        id
        title
        contents
      }
    }
  }
 }
`

export default PostPage