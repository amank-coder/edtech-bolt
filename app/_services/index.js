import { request, gql } from "graphql-request"

const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/"+process.env.NEXT_PUBLIC_HYGRAPH_KEY+"/master"

export const getCourseList = async()=>{
    const query = gql`
    query courseList {
      courseLists {
        name
        description
        banner
        id
        chapter {
          ... on Chapter {
            id
            name
            youtubeUrl
          }
        }
      }
    }
    
    
      `;

      const result = await request(MASTER_URL,query);
      return result;
}