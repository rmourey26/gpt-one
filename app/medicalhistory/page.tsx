'use client'

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import dynamic from 'next/dynamic'
import { useSession, signIn, signOut } from "next-auth/react"

import { useRouter } from 'next/navigation';

import NoSSR from "components/nossr"; 

import styles from '@/styles/Home.module.css';

import LogAuth from '@/components/login-btn'


const MedSurveyComponent = dynamic(() => import("../../components/MedicalSurveyComp"),{
  ssr:false,
})

const MedicalHistory = () => {

  const { data: session } = useSession()

  const router = useRouter();

  if (session) {
    return (
    
      <>
      <Navbar />
      <><MedSurveyComponent /></>
      <Footer />
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

export default MedicalHistory;