import React from 'react'
import Layout from '../components/layouts/layout'
import AllProjects from '../components/projects/AllProjects'
import Footer from '../components/layouts/Footer'
import Navbar from '../components/layouts/Navbar'

export default () => (
  <Layout>
    <Navbar />
    <div className="section">
      <AllProjects />
    </div>
    <Footer />
  </Layout>
)
