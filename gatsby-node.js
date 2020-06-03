/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
 const { createPage } = actions

 const result = await graphql(
   `
     {
       allMicrocmsPost {
         edges {
           node {
             id
           }
         }
       }
     }
   `
 )

 if (result.errors) {
   throw result.errors
 }

 result.data.allMicrocmsPost.edges.forEach(edge => {
   createPage({
     path: `/post/${edge.node.id}`,
     component: path.resolve(
       "./src/templates/post-view.js"
     ),
     context: {
       id: edge.node.id,
     },
   })
 })
}