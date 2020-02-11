import React from 'react'

import '../styles/index.sass'
import Layout from '../components/layouts/layout'
import Showcase from '../components/projects/Showcase'
import Footer from '../components/layouts/Footer'
import Navbar from '../components/layouts/Navbar'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub, faLinkedin, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Intro from '../components/layouts/Intro'

library.add(fab, faEnvelope, faGithub, faLinkedin, faMedium, faTwitter)


export default () => {
  return (
    <Layout>
      <Navbar />
      <Intro />
      <Showcase />
      <Footer />
    </Layout>
  )
}


