
import Head from 'next/head';
import React from 'react';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import Navbar from 'components/navbar';
import Footer from 'components/footer';


export default function AI() {
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

  return (
<>
    <Navbar />
 <div className="w-full md:w-96 md:max-w-full mx-auto">
  <div className="p-6 border border-gray-300 sm:rounded-md">
    <h1 className="text-center mt-2"> ACA AI </h1>
  <p className="text-center mt-2 text-sm">This demos ChatGPT's ACA health plan analysis. We send GPT the info below and it returns a few ACA Marketplace plan options.</p>
      
  
  <form onSubmit={onSubmit}>
  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
  <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    name="gender"
    value={gender}
    onChange={(e) => setGender(e.target.value)}
  >
    <option value="man">Male</option>
    <option value="woman">Female</option>
  </select>

  <div class="mb-6">
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

<div class="mb-6">
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
  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Budget Maximum</label>
  <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    type="number"
    min={1}
    name="budgetMax"
    placeholder="Enter maximum budget"
    value={budgetMax}
    onChange={(e) => setBudgetMax(Number.parseInt(e.target.value))}
  />

<div class="mb-6">
  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Chronic</label>
  <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    type="text"
    name="chronic"
    placeholder="Enter chronic diseases and conditions"
    value={chronic}
    onChange={(e) => setChronic(e.target.value)}
  />
  </div>
  <div class="mb-6">
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
  <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
        </div>
        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
    </div>
  <button type="submit" class="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">Submit</button>
</form>
{loading && (
  <div>
    <h3>Looking for the best health plans</h3>
    <img src="" className={styles.loading} />
  </div>
)}
<div 
  className={styles.acaanswer}
  dangerouslySetInnerHTML={{ __html: result }}
/>
</div>
</div>
<Footer />
</>
);
}
  


 

  
 

  
  
  
  



   
