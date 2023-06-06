import { useSession, signIn, signOut } from "next-auth/react"


export default function LogAuth() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        {session.user.email} <br />
        <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-xs px-3 py-2 text-center mr-2 mb-2" 
        onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <br />
      <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-xs px-3 py-2 text-center mr-2 mb-2"
      onClick={() => signIn()}>Sign in</button>
    </>
  )
}