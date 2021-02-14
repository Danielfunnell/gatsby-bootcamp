import React from 'react'

import { Link, graphql, useStaticQuery} from 'gatsby'

const Footer = ()=> {
    const data = useStaticQuery(graphql`
    query {
        site{
            siteMetadata {
                author
            }
        }
    }
`)
    return (
        <footer>
            Created by {data.site.siteMetadata.author}, copyright 2021 
        </footer>
    )
}

export default Footer