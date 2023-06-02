import { useState, useRef, useEffect } from 'react'

import { Combobox } from '@headlessui/react'

import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

import ReactMarkdown from 'react-markdown'
import CircularProgress from '@mui/material/CircularProgress';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Content from '../components/Content';
import RadixTabs from '../components/RadixTabs';
import Tabshui from "../components/Tabshui";
import Head from 'next/head';
import styles from "../styles/Home.module.css"
import Image from 'next/image';
import Navbar from 'components/navbar';
import Footer from 'components/footer';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'SMART App', href: 'https://reactrouterfhir-6d38qi6u8-rmourey26.vercel.app', current: false },
  { name: 'Registration', href: '/registration', current: false },
  { name: 'Questionaire', href: '/questionaire', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const people = [

  { id: 1, name: 'Wade Cooper' },

  { id: 2, name: 'Arlene Mccoy' },

  { id: 3, name: 'Devon Webb' },

  { id: 4, name: 'Tom Cook' },

  { id: 5, name: 'Tanya Fox' },

  { id: 6, name: 'Hellen Schmidt' },

]

export default function Example() {
  
  const [household, setHousehold] = useState([""]);
  

  const [selected, setSelected] = useState(people[0])

  const [query, setQuery] = useState('')

  const filteredPeople =

    query === ''

      ? people

      : people.filter((person) =>

          person.name

            .toLowerCase()

            .replace(/\s+/g, '')

            .includes(query.toLowerCase().replace(/\s+/g, ''))

        )
  
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
    {role: "assistant", content: "Welcome to AntHealth.ai!"}
    ]);
  
      const messageListRef = useRef(null);
      const textAreaRef = useRef(null);

  // Auto scroll chat to bottom
  useEffect(() => {
    const messageList = messageListRef.current;
    messageList.scrollTop = messageList.scrollHeight;
  }, [messages]);

  // Focus on text field on load
  useEffect(() => {
    textAreaRef.current.focus();
  }, []);

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
                  {message.role === "assistant" ? <Image src="https://quantumone.b-cdn.net/AntHealth_Logos/favicon.png" alt="AI" width={20} height={20} className={styles.boticon} priority={true} /> : <Image src="/usericon.png" alt="Me" width="30" height="30" className={styles.usericon} priority={true} />}
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
                placeholder={loading ? "Waiting for response..." : "Ask me about ABPM or your chronic condition..."}
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
