import React from 'react'
import AboutBanner from './AboutBanner'

import WhyMadhav from './WhyMadhav'
import AboutServices from './AboutServices'
import AboutTest from './AboutTest'


function About() {
  return (
    <>
      <AboutBanner />

      <WhyMadhav />
      <AboutTest />
      <AboutServices />
    </>
  )
}

export default About