import React from 'react'
import Layout from '../components/layout'
import AllProjects from '../components/AllProjects'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default () => (
  <Layout>
    <Navbar />
    <div className="section">
      <AllProjects />
    </div>
    <Footer />
  </Layout>
)
