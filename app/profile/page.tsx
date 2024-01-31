'use client' 

import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { styles } from '@/styles/Home.module.css';
import {LogAuth} from '@/components/login-btn'
import Image from 'next/image';
import {Navbar} from '@/components/navbar'

export default function Login() {

  const { data: session } = useSession()

  const router = useRouter();

  if (session) {

    return (
      <>
      < Navbar />
<div className={styles.center}>
      <div className={styles.container}>

          <div className="mt-5 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">


        

        <div className={styles.content}>

             <h2> Hi {session.user.name}, welcome to Hearti! <br /></h2> 
             <Image src={session.user.image} width={64} height={64} className="flex rounded-full"/>
             <p>  Primary email: {session.user.email} </p>
             
              

           <div>
            <LogAuth />
           </div>

        </div>
        </div>

      </div>
      </div>
      </>
      
    )

  }

  return (
    <>
    <Navbar />
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
</>
  )

}