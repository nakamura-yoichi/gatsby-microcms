import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const PostView = props => {
 const post = props.data.microcmsPost
 return (
   <Layout>
     <div>
       <h2>{post.title}</h2>
       <p
         dangerouslySetInnerHTML={{
           __html: `${post.contents}`,
         }}
       ></p>
     </div>
   </Layout>
 )
}

export default PostView

export const query = graphql`
 query($id: String!) {
   microcmsPost(id: { eq: $id }) {
     title
     contents
   }
 }
`