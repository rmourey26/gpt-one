/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import Footer from 'components/footer'
import Navbar from 'components/navbar'
import Head from 'next/head'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import dynamic from 'next/dynamic'

const SurveyComponent = dynamic(() => import("../components/SurveyComp"),{
  ssr:false,
})



const Questionaire = () => {
  return (
  
    <>
    <Navbar />
        
    <form>
      <div className="space-y-12 lg:mx-36 my-16 sm:mx-10 my:4">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold text-center text-gray-900">AntHealth Benefit Questionaire</h2>
          <p className="mt-1 text-sm text-center text-gray-600">
           What benefits are most important to you and your family?
          </p>

         
        </div>

        <div className="border-b border-gray-900/10 pb-12">
    <div className="grid grid-cols-1 span-1 self-aligned-center">
        <><SurveyComponent color="inherit" /></>
    </div>
     </div>
      </div>
    </form>
    < Footer />
    </>
    
  )
}
export default Questionaire
