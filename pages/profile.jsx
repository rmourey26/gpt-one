import { useSession, signIn, signOut } from "next-auth/react"

import { useRouter } from 'next/router';

import styles from '../styles/Home.module.css';

import LogAuth from "components/login-btn";
import { Button } from "flowbite-react";

export default function Login() {

  const { data: session } = useSession()

  const router = useRouter();

  if (session) {

    return (
<div className={styles.center}>
      <div className={styles.container}>

          <div className="mt-5 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">


        

        <div className={styles.content}>

             <h2> Hi {session.user.name}, welcome to Anthealth! <br /></h2> 
             <p>  Primary email: {session.user.email} </p>
            
             <h2> Blood Glucose Level .. {session.user.blood_glucose} ..<br /></h2>
              

           <div>
            <LogAuth />
           </div>

        </div>
        </div>

      </div>
      </div>

    )

  }

  return (

    <div className={styles.container}>

       <h1 className="title">Login to AntHealth</h1>

      <div className={styles.content}>

          <h2> You are not signed in!!</h2>

      <button className={styles.button}

      onClick={() => signIn()}>Sign in</button>

      </div>

    </div>

  )

}
