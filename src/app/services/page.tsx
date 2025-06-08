import React from 'react'
import Header from '../components/header'
import OurServices from '../components/OurServices'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
      <Header />
      <div className="pt-14"> {/* Add top padding here */}
        <OurServices />
      </div>
      <Footer />
    </>
  )
}

export default page
