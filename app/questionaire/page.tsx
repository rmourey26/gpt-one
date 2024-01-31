'use client'
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
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import dynamic from 'next/dynamic';
import { useSession, signIn, signOut } from "next-auth/react"

import { useRouter } from 'next/navigation';

import { styles } from '@/styles/Home.module.css';

import LogAuth from '@/components/login-btn'


const SurveyComponent = dynamic(() => import("../../components/SurveyComp"),{
  ssr:false,
})



const Questionaire = () => {
  const { data: session } = useSession()

  const router = useRouter();

  if (session) {
  return (
  
    <>
    <Navbar />
        
    <form>
      <div className="space-y-12 lg:mx-36 my-16 sm:mx-10 my:4">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold text-center text-gray-900">Hearti Benefit Questionaire</h2>
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

return (
  <div className={styles.center}>
  <div className={styles.container}>

<div className="mt-5 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

     <h1 className="title">Welcome to Hearti</h1>

    <div className={styles.content}>

        <h2> To continue, please sign in</h2>

    <LogAuth />

    </div>
 </div>
  </div>
  </div>

)

}

export default Questionaire
