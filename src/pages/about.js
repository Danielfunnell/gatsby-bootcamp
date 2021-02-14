import React from 'react'

import { Link } from 'gatsby'

import Layout from '../components/layout'

const About = ()=> {
    return (
   
            <Layout>
            <h1>About Us</h1>
            <h2>We are a restuarant that sells food</h2>
            <p>Please <Link to='/contact'>Contact us</Link></p>
            </Layout>
       
    )
}

export default About