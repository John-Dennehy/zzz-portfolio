import React from 'react'
import '../styles/index.sass'
import Layout from '../components/layout'
import Showcase from '../components/Showcase'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


export default () => {

  return (
    <Layout>
      <Navbar />
      <Hero />
      <Showcase />
      <Footer />
    </Layout>
  )
}


