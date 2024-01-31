'use client'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"

import { useRouter } from 'next/navigation';
import LogAuth from './components/login-btn'
import styles from './styles/Home.module.css'

export default function AcaPlans () {
  const { data: session } = useSession()

  // loading state control
  const [loading, setLoading ] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [plan_id, setPlan_id] = useState("");
  const [year, setYear] = useState("");
  

  // API endpoint where we send form data.

  const endpoint = "https://marketplace.api.healthcare.gov/api/v1/plans/${plan_id}?year=${year}&apikey=${ACA_API_KEY}"

  function handleplan_idChange(e) {
    setPlan_id(e.target.value);
  }

  function handleyearChange(e) {
    setYear(e.target.value);
  }

  // Handles the submit event on form submit.

  const handleSubmit = async (event) => {

    // Stop the form from submitting and refreshing the page.

    event.preventDefault();

    if (userInput.trim() === "") {
      return;
    }
    
    setLoading(true);

    
    // Get data from the form.

    const data = {

      plan_id: event.target.plan_id.value,

      year: event.target.year.value, 

    };

 

    

 

    

  
    // Format data as JSON

    const JSONdata = JSON.stringify(data);
 

    // Form the request for sending data to the server.

    const options = {

      // The method is POST because we are sending data.

      method: 'POST',

      // Tell the server we're sending JSON.

      headers: {

        'Accept': 'application/json',

        'Access-Control-Allow-Origin': '*',

        'Content-Type': 'application/json',

      },

      // Body of the request is the JSON data we created above.

      body: JSONdata,

    };

 

    // Send the form data to ACA Marketplace

    const response = await fetch(endpoint, options);

 

    // Get the response data from server as JSON.

    // If server returns the name submitted, that means the form works.

    const result = await response.json();

    alert(`Marketplace Response: ${result}`);

    console.log({result});

    console.log({JSONdata});

  };
  if (session) {
return(
  <>
  < Navbar />
  <div className="mx-16 my-4">
  <h1 className="text-center mt-2"> ACA Marketplace API - Plan Info </h1>
  <p className="text-center mt-2 text-sm">This form demonstrates an API call to the ACA Marketplace API. If you receive an error on submit, it typically means updates are in progress</p>
      <form onSubmit={handleSubmit}>
    
        <div>
            <label for="plan_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Plan ID</label>
            <input type="text" id="plan_id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleplan_idChange} placeholder="11512NC0100031" required />
           </div>
           <div>
            <label for="year" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year</label>

            <input type="number" id="year" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleyearChange} placeholder="2022" required />
        </div>
 
    <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
        </div>
        <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
    </div>
    <button type="submit" className="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">Submit</button>
   </form>

</div>
< Footer />
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