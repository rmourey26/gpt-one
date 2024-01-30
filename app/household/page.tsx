'use client' 

import StateCombo from "../../components/combobox";
import Navbar from "components/navbar";
import Footer from "components/footer";
import {useState} from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import LogAuth from 'components/login-btn'; 
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';


export default function FormDemo () {

  const { data: session } = useSession()

  const router = useRouter();

  

  // loading state control
  const [loading, setLoading ] = useState(false);
  const [userInput, setUserInput ] = useState("");

  // API endpoint where we send form data.

  const endpoint = "/api/acahhapi"

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

      first: event.target.first_name.value,

      last: event.target.last_name.value,

      income: event.target.income.value,

      age: event.target.age.value,

      gender: event.target.gender.value,

      uses_Tobacco: event.target.uses_tobacco.value,

      market: event.target.market.value,

      state: event.target.state.value,

      zipcode: event.target.zipcode.value,

      year: event.target.year.value, 

    };

 

    

 

    

  
    // Format data as JSON

    const JSONdata = JSON.stringify(data);

    console.log(JSONdata);
 

    // Form the request for sending data to the server.

    const options = {

      // The method is POST because we are sending data.

      method: 'GET',

      // Tell the server we're sending JSON.

      headers: {

        'Accept': 'application/json',

        'Access-Control-Allow-Origin': '*',

        'Content-Type': 'application/json',

      },

      // Body of the request is the JSON data we created above.

      body: JSONdata,

    };

    console.log(JSONdata);

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
  <h1 className="text-center mt-2"> ACA Marketplace API - Household </h1>
  <p className="text-center mt-2 text-sm">This form demonstrates an API call to the ACA Marketplace API. If you receive an error message on submit, it means updates are in progress.</p>
      <form onSubmit={handleSubmit}>
    
        <div>
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
           </div>
           <div>
            <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>

            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
        </div>
        <div>
            <label for="income" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">income</label>
            <input type="text" id="income" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="75000" required />
        </div>  
        <div>
            <label for="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">age </label>
            <input type="number" id="age" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="45" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
        </div>
        <div>
            <label for="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">gender</label>
            <input type="text" id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="male" required />
        </div>
        <div>
            <label for="uses_tobacco" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tobacco User</label>
            <input type="text" id="uses_tobacco" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="no" required />
        </div>
    
    <div className="mb-6">
        <label for="market" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Individual | Group</label>
        <input type="market" id="market" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Individual" required />
    </div> 
    <div className="mb-6">
        <label for="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
        <input type="state" id="state" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="NC" required />
    </div> 
    <div className="mb-6">
        <label for="zipcode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Zipcode</label>
        <input type="zipcode" id="zipcode" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="35681" required />
    </div> 
    <div className="mb-6">
        <label for="year" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year</label>
        <input type="number" id="year" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2023" required />
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
