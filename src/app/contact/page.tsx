import React from 'react'
import Header from '../components/header'
import Footer from '../components/Footer'
import GetQuoteForm from '../components/ContactFormTwo'

const page = () => {
  return (
    <>
      <Header />
     <div className="pt-24 pb-16 bg-gray-50">
  <GetQuoteForm />
</div>
      <Footer />
    </>
  )
}

export default page
