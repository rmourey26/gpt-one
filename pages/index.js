import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import CircularProgress from '@mui/material/CircularProgress';

export default function Home() {

  const [content, setContent] = useState([]);
  const [userInput, setUserInput] = useState("");
 
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {role: "assistant", content: "Hi and welcome to AntHealth's AI Healthplan Design App!"}
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
      <Head>
        <title>Anthealth</title>
        <meta name="description" content="Anthealth AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.topnav}>
        
        
                <Image className={styles.navlogo}>
                    src="https://quantumone.b-cdn.net/AntHealth_Logos/3.7.png"


                    alt="Anthealth Logo"
               </Image>
    
          <a href="https://anthealth.ai">
  
               </a>

        <div className={styles.navlinks}>
       

            
     </div>
      </div>
      <main className={styles.main}>
        <div className={styles.cloud}>
          <div ref={messageListRef} className={styles.messagelist}>
            {messages.map((message, index) => {
              return (
                // The latest message sent by the user will be animated while waiting for a response
                <div key={index} className={message.role === "user" && loading && index === messages.length - 1 ? styles.usermessagewaiting : message.role === "assistant" ? styles.apimessage : styles.usermessage}>
                  {/* Display the correct icon depending on the message type */}
                  {message.role === "assistant" ? <Image src="https://quantumone.b-cdn.net/AntHealth_Logos/favicon.png" alt="AI" width="30" height="30" className={styles.boticon} priority={true} /> : <Image src="/usericon.png" alt="Me" width="30" height="30" className={styles.usericon} priority={true} />}
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
                placeholder={loading ? "Waiting for response..." : "Tell me your healthcare scenario..."}
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
          <div className={styles.footer}>
            <p> Built by <a href="https://blockchain-company.io" target="_blank">Robert Mourey Jr</a>.</p>
          </div>
      </main>
    </>
  )
}
