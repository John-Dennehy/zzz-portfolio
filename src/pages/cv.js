import React from 'react'
import Layout from '../components/layout'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


export default () => {
  return (
    <Layout>
      <Navbar />
      <div className="section">
        <h1 className="title">Curriculum Vitae</h1>
        <div className="container">
          <p className='tile' >This section is still under construction.  In the mean time, please visit me on linked in or you can view my github CV:</p>
          <div className="tile field is-grouped">
            <a className='button' href="https://www.linkedin.com/in/johnfdennehy/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className='button' href="https://github.com/JDtheGeek/CV" target="_blank" rel="noopener noreferrer">GitHub CV</a>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}
