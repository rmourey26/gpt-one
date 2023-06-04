// pages/healthcare.js
import { useState, useEffect } from 'react';
import NoSSR from 'components/nossr';

export default function Healthcare({ initialData }) {
  const [data, setData] = useState(initialData);

  // Render logic can go here. For example, you might want to map over the data array
  return (
    <div>
      <NoSSR>
    
      {/* Render the data here */}
      {JSON.stringify(data, null, 2)}
      </NoSSR>
    </div>
  );
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
