// pages/healthcare.js
import { useState, useEffect } from 'react';
import NoSSR from 'components/nossr';
import { NextURL } from 'next/dist/server/web/next-url';

export default function Healthcare({ initialData }) {
  const [data, setData] = useState(initialData);

  // Render logic can go here. For example, you might want to map over the data array
  return (
    <div>
      <NoSSR>
      <h1>Healthcare Data</h1>
      {/* Render the data here */}
      {JSON.stringify(data, null, 2)}
      </NoSSR>
    </div>
  );
}



export async function getServerSideProps(URL) {
  const data = {
    
  };

  const res = await fetch(URL,
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
