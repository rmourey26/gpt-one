// pages/healthcare.js
import { useState, useEffect } from 'react';
import NoSSR from 'components/nossr';
import * as React from 'react';
import { DataGrid, GridToolbar, Tool } from '@mui/x-data-grid';

export default function Healthcare({ initialData }) {
  const [data, setData] = useState(initialData);

  const rows = [transformData(initialData)];

  let columns = [];

  if (rows.length > 0) {
    columns = Object.keys(rows[0]).map((key) => ({
      field: key,
      headerName: key.charAt(0).toUpperCase() + key.slice(1),
      width: 100
    }));
  }

  // Render logic can go here. For example, you might want to map over the data array
  return (
    <div>
      <NoSSR>
    <div className="h-max m-10 w-100">
      {/* Render the data here */}
      <h1 className='text-center mb-10'>Flattened ACA Response in Table</h1>
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
      <h1 className='m-10 text-center'>Original JSON Object from ACA</h1>
      <div className='m-10'>
      {JSON.stringify(data, null, 2)}
      </div>
      </NoSSR>
    </div>
  );
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
  const data = {
    household: {
      income: 52000,
      people: [
        {
          age: 27,
          aptc_eligible: true,
          gender: "Female",
          uses_tobacco: false
        }
      ]
    },
    market: "Individual",
    place: {
      countyfips: "37057",
      state: "NC",
      zipcode: "27360"
    },
    year: 2019
  };

  const res = await fetch(
    "https://marketplace.api.healthcare.gov/api/v1/plans/search?apikey=WYm5KaoiTFESYFkdf63m8bAfsB5Aw0ec",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
  );
  
  const initialData = await res.json();

  if (!res.ok) {
    console.error("Error fetching data", initialData);
    return { props: {} };
  }

  return { props: { initialData } };
}
