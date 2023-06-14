import { useSession, signIn, signOut } from "next-auth/react"

import { useRouter } from 'next/router';

import NoSSR from "components/nossr"; 

import styles from '../styles/Home.module.css';

import LogAuth from "components/login-btn";


export default function Login() {

  const { data: session } = useSession()

  const router = useRouter();

  if (session) {

    return (
      <NoSSR>
<div className={styles.center}>
      <div className={styles.container}>

          <div className="mt-5 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">


        

        <div className={styles.content}>

             <h2> Hi {session.user.name}, welcome to Anthealth! <br /></h2> 
             <img src={session.user.image} />
             <p>  Primary email: {session.user.email} </p>
             <h2> Blood Glucose .. {data.user.blood_glucose} ..<br /></h2>
             <h2> Blood Pressure .. {data.user.blood_pressure} ..<br /></h2>
             <h2> Activity .. {data.user.activity} ..<br /></h2>
             <h2> Body .. {data.user.body} ..<br /></h2>
              

           <div>
            <LogAuth />
           </div>

        </div>
        </div>

      </div>
      </div>
      </NoSSR>
    )

  }

  return (
    <div className={styles.center}>
    <div className={styles.container}>

<div className="mt-5 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

       <h1 className="title">Welcome to AntHealth</h1>

      <div className={styles.content}>

          <h2> To continue, please sign in</h2>

      <LogAuth />

      </div>
   </div>
    </div>
    </div>

  )

}
