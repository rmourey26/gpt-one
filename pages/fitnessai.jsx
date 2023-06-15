// pages/acatable.js
import { useSession, signIn, signOut, getSession } from "next-auth/react"

import { useRouter } from 'next/router';


import { useState, useEffect } from 'react';

import styles from "../styles/Home.module.css"
import NoSSR from 'components/nossr';
import * as React from 'react';
import { DataGrid, GridToolbar, Toolbar } from '@mui/x-data-grid';
import LogAuth from "components/login-btn";
import { getToken } from "next-auth/jwt";

  



export default function FitnessAi({ initialData }) {
  const [data, setData] = useState(initialData);
  const { data: session } = useSession()
  
  const router = useRouter();


  const rows = [transformData(initialData)];

  let columns = [];

  if (rows.length > 0) {
    columns = Object.keys(rows[0]).map((key) => ({
      field: key,
      headerName: key.charAt(0).toUpperCase() + key.slice(1),
      width: 100
    }));
  }

  if (session) {
// Render logic can go here. For example, you might want to map over the data array
  return (
    <NoSSR>
      
    <div className="h-max m-10 w-100">
      {/* Render the data here */}
      <h1 className='text-center mb-10'>GoogleFit Aggregate</h1>
<p> Testing...{session.user.name} ....{session.accessToken}
     </p>
      <DataGrid className='overflow-x:scroll h-100'
      rows={rows} 
      columns={columns}
      getRowId={(row) => row.plans_0_id + row.plans_0_name }
      height={500}
      components={{
        Toolbar: GridToolbar
    }}
    
       />
      </div>
      <h1 className='m-10 text-center'>Original Google Data</h1>
      <div className='m-10'>
      {JSON.stringify(data, null, 2)}
      </div>
      
    </NoSSR>
  );
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


function transformData(data) {   
  const flattenedData = {};   
  function flatten(data, prefix = '') {
         for (let key in data) {
                 const value = data[key];             
                 if (typeof value === 'object' && value !== null) {
                     flatten(value, `${prefix}${key}_`);
                     } else {
                       flattenedData[`${prefix}${key}`] = value;       
                      }
                    }  
                   }   
                   flatten(data);   
                   
                   return flattenedData; 
                  }

export async function getServerSideProps(context) {
  const session = await getSession(context)
  console.log({session})
  const { accessToken } = session;
  console.log({accessToken});
  const data = {

    "aggregateBy": [{

      "dataTypeName": "com.google.step_count.delta",

      "dataSourceId": "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"

    }],

    "bucketByTime": { "durationMillis": 86400000 },

    "startTimeMillis": 1438705622000,

    "endTimeMillis": 1439310422000

  }
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

 


  

  
  
  
