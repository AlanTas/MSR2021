import React, { useState } from 'react'
import { graphql } from 'gatsby'

 const YourPage = ({data}) => {
   console.log('data is', data)
   const [filters, setFilters] = useState({
    type: "",
    category: ""
  });

//your calculations

  return (
    <div>
      Your stuff 
    </div>
  )
}

export const query = graphql`
  query yourQueryName{
      allStrapiHomes {
        nodes {
          type
          category
        }
      }
  }
`

export default YourPage
