import React from 'react'
import Header from '../components/header'
import ProjectsGrid from '../components/Projects'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
  <Header />
  <div className="pt-12 md:pt-12">
    <ProjectsGrid />
  </div>
  <Footer />
</>

  )
}

export default page
