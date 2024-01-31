'use client'

import { useState, useRef, useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { Combobox } from '@headlessui/react'

import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

import ReactMarkdown from 'react-markdown'
import CircularProgress from '@mui/material/CircularProgress';
import {styles} from '@/styles/Home.module.css'
import Image from 'next/image';

import { LogAuth }from '@/components/login-btn'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {Content} from '@/components/Content';
import {RadixTabs} from '@/components/RadixTabs';


  





function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}





export default function Example() {
  const { data: session } = useSession()
  
  const [household, setHousehold] = useState([""]);
  

  

  const [open, setOpen] = useState(false);

const toggle = (index) => {
    if (open === index) {
        return setOpen(null)
    }

    setOpen(index)
   }
  
    const clickPoint = useRef();
    const handleFocus = () => {
        clickPoint.current.style.display = "none";
    };

    const handleBlur = () => {
        clickPoint.current.style.display = "block";
    };
  const [content, setContent] = useState([]);
  const [userInput, setUserInput] = useState("");
 
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {role: "assistant", content: "Hi, my name is RUMI. I'm here to help you design the optimal healthplan for your unique needs. Please tell me your age, gender, annual income, monthly budget, coverage needs, chronic diseases, zipcode, and preferred providers. If you receive an unexpected response, please call or message us using the support button at the bottom right of the page "}
    ]);
  
      const messageListRef = useRef(null);
      const textAreaRef = useRef(null);

  
  
  
  // Handle errors
  const handleError = () => {
    setMessages((prevMessages) => [...prevMessages, { role: "assistant", content: "Oops! There seems to be an error. Please try again." }]);
    setLoading(false);
    setUserInput("");
  }
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();


    if (userInput.trim() === "") {
      return;
    }
    
    
    setLoading(true);
    const context = [...messages, { role: "user", content: userInput }];
    setMessages(context);

    // Send chat history to API
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: context}),
    });

    // Reset user input
    setUserInput("");

    const data = await response.json();
  
    
    if (!data) {
      handleError();
      return;
    }
      
    setMessages((prevMessages) => [...prevMessages, { role: "assistant", content: data.result.content }]);

    
    setLoading(false);
      
  };
  

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

  
  if (session) {
  return (
    <>
      < Navbar />
      
      <main className={styles.main}>
      
     
      






     

        


        <div className={styles.cloud}>
          
          <div ref={messageListRef} className={styles.messagelist}>
            
            {messages.map((message, index) => {
              return (
                // The latest message sent by the user will be animated while waiting for a response
                <div key={index} className={message.role === "user" && loading && index === messages.length - 1 ? styles.usermessagewaiting : message.role === "assistant" ? styles.apimessage : styles.usermessage}>
                  {/* Display the correct icon depending on the message type */}
                  {message.role === "assistant" ? <Image src="https://quantumone.b-cdn.net/flippa/medical-sign.svg" alt="AI" width={20} height={20} className={styles.boticon} priority={true} /> : <Image src="/usericon.png" alt="Me" width="30" height="30" className={styles.usericon} priority={true} />}
                  <div className={styles.markdownanswer}>
                    {/* Messages are being rendered in Markdown format */}
                        <ReactMarkdown linkTarget={"_blank"}> 
                       {message.content}</ReactMarkdown>
                    
          
                     </div>
                  
                  </div>
                
      
                    
                  
                
              )
            })}
          </div>
          
        </div>
        
        <div className={styles.center}>
        
          <div className={styles.cloudform}>
            <form onSubmit={handleSubmit}>
              <textarea
                disabled={loading}
                onKeyDown={handleEnter}
                ref={textAreaRef}
                autoFocus={false}
                rows={1}
                maxLength={512}
                type="text"
                id="userInput"
                name="userInput"
                placeholder={loading ? "Waiting for response..." : "Enter your needs..."}
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
                className={styles.textarea}
              />
              <button
                type="submit"
                disabled={loading}
                className={styles.generatebutton}
              >
                {loading ? <div className={styles.loadingwheel}><CircularProgress color="inherit" size={20} /> </div> :
                  // Send icon SVG in input field
                  <svg viewBox='0 0 20 20' className={styles.svgicon} xmlns='http://www.w3.org/2000/svg'>
                    <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z'></path>
                  </svg>}
              </button>
            </form>
          </div>
          <div> 
        </div>
      </div>
        
          
<Footer />
      </main>
    
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