'use client'

//fitnessai.tsx

import { useSession, signIn, signOut, getSession } from "next-auth/react"

import { useRouter } from 'next/router';


import { useState, useEffect } from 'react';

import styles from '@/styles/Home.module.css'
import * as React from 'react';
import { DataGrid, GridToolbar, Toolbar } from '@mui/x-data-grid';
import LogAuth from '@/components/login-btn';
import { getToken } from "next-auth/jwt";

  



export default function FitnessAi() {
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
    <>
      
    <div className="h-max m-10 w-100">
      {/* Render the data here */}
      <h1 className='text-center mb-10'>GoogleFit Aggregate</h1>
<p className="text-xs"> Hi...{session.user.name} ..your accessToken is currently: {session.accessToken} </p>
<p>  Rendering the Access Token is just an exercise to show a test of the two step authorization process required to access device data. This is not meant for the user.</p>
<p className="text-xs"> Below, we are querying `https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate` to obtain your `estimated step count`. The main point here is that we have have enabled access to Google Fitness API scopes in accordance with the oauth2 protocol. When patching the data over to LLM's, retaining the original data format - in this case milliseconds - is preferred because otherwise, the app would have to convert it too and from multiple times before sending and while receiving and or rendering the response.    
     </p>
      <DataGrid className='overflow-x:scroll h-100'
      rows={rows} 
      columns={columns}
      getRowId={(row) => row.startTimeMillis + row.endTimeMillis }
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
      
    </>
  );
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
