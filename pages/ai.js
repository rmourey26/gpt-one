import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { Popover } from 'flowbite';
import Button from 'components/Button';
import CircularProgress from '@mui/material/CircularProgress';
 

  

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const AI = () => {
  const [market, setMarket] = useState("");
  const [place, setPlace] = useState("");

  const [content, setContent] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [ sysInput, setSysInput ] = useState("");
 
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {role: "assistant", content: "Welcome to AntHealth.ai!"}
    ]);
  
      const messageListRef = useRef(null);
      const textAreaRef = useRef(null);

  
  // Focus on text field on load
  useEffect(() => {
    textAreaRef.current.focus();
  }, []);

  // Handle errors
  const handleError = () => {
    setMessages((prevMessages) => [...prevMessages, { role: "assistant", content: "Oops! There seems to be an error. Please try again." }]);
    setLoading(false);
    setUserInput("");
    setSysInput("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userInput.trim() === "") {
      return;
    }

    setLoading(true);

    

    
      const data = {
        "household": {
          "income": 52000,
          "people": [
            {
              "age": 27,
              "aptc_eligible": true,
              "gender": "Female",
              "uses_tobacco": false
            }
          ]
        },
        "market": "Individual",
        "place": {
          "countyfips": "37057",
          "state": "NC",
          "zipcode": "27360"
        },
        "year": 2019
      }
       
      
      const response = await fetch("https://marketplace.api.healthcare.gov/api/v1/plans/search?apikey=WYm5KaoiTFESYFkdf63m8bAfsB5Aw0ec", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json",

        },
        body: data,
      });
      
      const rdata = await response.json();

      if (!data) {
        handleError();
        return;
      } 
    
    
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
      <Button type="submit" onSubmit={handleSubmit}/>
        
          
 </div>
     </div>

  )

};
  
  
export default AI

 

  
 

  
  
  
  



   
