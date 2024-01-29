import  auth  from 'app/auth/[...nextauth]'
import ClientComponent from 'app/authclient';
import { GetServerSideProps } from 'next';
import React from 'react';

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const { userId } = auth();

  const res = await fetch('https://api.example.com/foo', {
    headers: {
      Authorization: `Bearer: ${process.env.API_KEY}`
    }
  })
  const data = await res.json()
  return { props: { data } }
}

export const dynamic = "force-dynamic"

export default async function Page() {
  const { props } = await getServerSideProps();
  return <ClientComponent {...props} />
}