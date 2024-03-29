import { useSession, signIn, signOut } from "next-auth/react"


export default function LogAuth() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
         <br />
        <button className="text-white bg-gradient-to-r from-violet-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-violet-300 dark:focus:ring-violet-800 font-medium rounded-lg text-xs px-3 py-2 text-center mr-2 mb-2" 
        onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <br />
      <button className="text-white bg-gradient-to-r from-violet-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-violet-300 dark:focus:ring-violet-800 font-medium rounded-lg text-xs px-3 py-2 text-center mr-2 mb-2"
      onClick={() => signIn()}>Sign in</button>
    </>
  )
}