import { useSession, signIn, signOut } from "next-auth/react"

import { useRouter } from 'next/router';

import styles from '../styles/Home.module.css'

export default function Login() {

  const { data: session } = useSession()

  const router = useRouter();

  if (session) {

    return (

      <div className={styles.container}>

        <h1 className="title">You are logged in to AntHealth. Access your profile using the buttons below.</h1>

        <div className={styles.content}>

             <h2> Signed in as {session.user.email} <br /></h2> 

              <div classname={styles.btns}>

              <button className={styles.button} onClick={() => router.push('/Profile')}>

                 User Profile

             </button>

              <button className={styles.button} onClick={() => {

                  signOut()

              }}>

                 Sign out

             </button>

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
