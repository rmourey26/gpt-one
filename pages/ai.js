
import Head from 'next/head';
import { useSession, signIn, signOut } from "next-auth/react"

import { useRouter } from 'next/router';

import React from 'react';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import Navbar from 'components/navbar';
import Footer from 'components/footer';
import LogAuth from 'components/login-btn';
import AccessToken from 'components/AccessToken';



export default function AI() {
  const { data: session } = useSession()
 
  console.log({session})
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState(30);
  const [budgetMin, setBudgetMin] = useState(25);
  const [budgetMax, setBudgetMax] = useState(100);
  const [chronic, setChronic] = useState('');
  const [zipcode, setZipcode] = useState(12345);
  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState('');

  async function onSubmit(event) {
    event.preventDefault();
    if (loading) {
      return;
    }
    setLoading(true);
    setResult('');
    const response = await fetch('/api/genplan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ budgetMin, budgetMax, gender, age, chronic, zipcode }),
    });
    const data = await response.json();
    setResult(data.result.replaceAll('\\n', '<br />'));
    setLoading(false);
  }
  if (session) {
  return (
<>
    <Navbar />
 <div className="mt-10 w-full md:w-96 md:max-w-full mx-auto">
  <div className="p-6 border border-gray-300 sm:rounded-md">
    <h1 className="text-center mt-2"> Hearti's Multi-Market AI </h1>
  <p className="mb-6 text-justify mt-2 text-sm"> This demos Large Language Models' (LLMs) ACA health plan analysis. We send LLMs the info below and it returns the most appropriate plans from the ACA Marketplace, UHone.com,and Aetna.com.
 </p>
  <div className="mb-6 w-full md:w-84 md:max-w-full mx-auto">
  <div className="p-4 border border-gray-300 sm:rounded-md">
    
  <h2> Hi {session.user.name}! <br /></h2>
  
  <p className="text-xs mt-2">Please check the box below to opt-in and allow us to include ypur personal health data stored by Google Fit and Samsung Health</p>   
             
             <div className='mb-4 mt-4'>
             
             <p> To view a sample response from the Google Fitness API, head to the {''}
              <a href="/fitnessai" className="text-violet-600">Fitnessai page </a>
              to view the raw response data. </p>
             <div className="m-4 text-xs overflow-x:scroll h-100">
             
             </div>
             </div>
             <div className="flex items-start mb-2">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
        </div>
        <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree to submit my device data and our <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
    </div>
  </div>
  </div>
  <form onSubmit={onSubmit}>
  <div className="mb-6">
  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
  <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    name="gender"
    value={gender}
    onChange={(e) => setGender(e.target.value)}
  >
    <option value="man">Male</option>
    <option value="woman">Female</option>
  </select>
  </div>

  <div className="mb-6">
  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
            
  <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    type="number"
    min={1}
    max={99}
    name="age"
    placeholder="Enter the age"
    value={age}
    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" 
    onChange={(e) => setAge(Number.parseInt(e.target.value))}
  />
</div>

<div className="mb-6">
  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Budget Minimum</label>
  <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    type="number"
    min={1}
    name="budgetMin"
    placeholder="Enter minimum budget"
    value={budgetMin}
    onChange={(e) => setBudgetMin(Number.parseInt(e.target.value))}
  />
</div>
<div className="mb-6">
  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Budget Maximum</label>
  <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    type="number"
    min={1}
    name="budgetMax"
    placeholder="Enter maximum budget"
    value={budgetMax}
    onChange={(e) => setBudgetMax(Number.parseInt(e.target.value))}
  />
</div>
<div className="mb-6">
  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Chronic Conditions</label>
  <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    type="text"
    name="chronic"
    placeholder="Enter chronic diseases and conditions"
    value={chronic}
    onChange={(e) => setChronic(e.target.value)}
  />
  </div>
  <div className="mb-6">
  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Zip Code</label>
            
  <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    type="number"
    min={0}
    max={99999}
    name="zipcode"
    placeholder="12345"
    value={zipcode}
    pattern="[0-9]{5}" 
    onChange={(e) => setZipcode(Number.parseInt(e.target.value))}
    />
    </div>
  <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
        </div>
        <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
    </div>
  <button type="submit" className="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">Submit</button>
</form>
{loading && (
  <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h3>Looking for the best health plans</h3>
    <img src="" className={styles.loading} />
  </div>
)}
{result && (
  <div className="mt-5 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<div 
  className={styles.acaanswer}
  dangerouslySetInnerHTML={{ __html: result }}
/>
</div>
)}

</div>
</div>
<Footer />
</>
)
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

  


 

  
 

  
  
  
  



   
