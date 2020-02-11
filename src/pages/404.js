import React from 'react'
import Layout from '../components/layouts/layout'
import Navbar from '../components/layouts/Navbar'

export default () => (
  <Layout>
    <Navbar />
    <div className='section'>
      <h1>PAGE NOT FOUND</h1>
      <p>Sorry, but that page doesn't exist.</p>
    </div>
  </Layout>

)
