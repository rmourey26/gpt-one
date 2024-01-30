import  auth  from 'app/auth/[...nextauth]'
import ClientComponent from 'app/authclient';
import { GetServerSideProps } from 'next';
import React from 'react';

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const { userId } = auth();

const session = await getSession(context)
  console.log({session})

const { accessToken } = session;
  console.log({accessToken});



const res = await fetch('https://api.example.com/foo', {
    headers: {
      Authorization: `Bearer: ${process.env.API_KEY}`
    }
  })
  const data = await res.json()
  return { props: { data } }
}

export const dynamic = "force-dynamic"

  if (!session) {
    return {
      props: {}
    }
  }
  const res = await fetch(

    "https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate",

    {

      method: "POST",

      headers: {

        "Content-Type": "application/json",

        authorization: `Bearer ${accessToken}`,

      },

      body: JSON.stringify(data)

    }

  );
  
  const { user } = session;
  const initialData = await res.json();

  if (!res.ok) {

    console.error("Error fetching data", initialData);

    return { props: {} };

  }

  return { props: { initialData } } ;

}

 


  

  
  
  
export default async function Page({initialData}) {
  const { props } = await getServerSideProps();
  return <ClientComponent {...props} />
}