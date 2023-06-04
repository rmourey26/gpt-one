import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { Popover } from 'flowbite';
import CircularProgress from '@mui/material/CircularProgress';
 

  




const AI = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const [market, setMarket] = useState("");
  const [place, setPlace] = useState("");

  const [content, setContent] = useState([]);
  const [result, setResult ] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [ sysInput, setSysInput ] = useState("");
  const [response, setResponse ] = useState("");
 
  const [loading, setLoading] = useState(false);
   
     
  

      const getACAResponse = async () => {
        const data = [];

        setLoading(true);
        
        
      const response = await fetch("/api/acahhapi", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          body: data,
        });
    
        const result = await response.json();
        if (!result) {
          handleError();
          return;
        } 
        setResult(result);
        console.log(response);
        console.log({result});
        setLoading(false);
      };

    

    

    
      
      
    
    

  // Reset user input
  

  

  // Prevent blank submissions and allow for multiline input
  const handleEnter = (e) => {
    if (e.key === "Enter" && userInput) {
      if (!e.shiftKey && userInput) {
        handleSubmit(e);
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
    }
  };

return (
  <div class="antialiased bg-gray-50 dark:bg-gray-900">
    <div className={styles.center}>
      <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={getACAResponse} type="submit" onSubmit={getACAResponse} ></button>
      
 </div>
     </div>

  )

};
  
  
export default AI

 

  
 

  
  
  
  



   
