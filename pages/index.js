import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import CircularProgress from '@mui/material/CircularProgress';

export default function Home() {
  
  
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
        
        
                <Image className={styles.navlogo} src="https://quantumone.b-cdn.net/AntHealth_Logos/Untitled%20Design_3-3.png" alt="Anthealth Logo" width={442} height={125} />



              

    
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
                  {message.role === "assistant" ? <Image src="https://quantumone.b-cdn.net/AntHealth_Logos/favicon.png" alt="AI" width="32" height="32" className={styles.boticon} priority={true} /> : <Image src="/usericon.png" alt="Me" width="30" height="30" className={styles.usericon} priority={true} />}
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
        <div className="items-center px-4 flex justify-center" >
            <div className="relative mr-3">
                <div className="absolute top-3 left-3 items-center" ref={clickPoint}>
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input
                    type="text"
                    className="block p-2 pl-10 w-70 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:pl-3"
                    placeholder="Search Here..."
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </div>
</div>
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
            <div>
          <a href="https://www.uschamber.com"><Image alt="U.S. Chamber of Commerce Member" src="https://quantumone.b-cdn.net/AntHealth_Logos/USCC_Webstickers_2022_120x30.png" title="U.S. Chamber of Commerce Member" width={120} height={30}/></a></div>
            <div><Image src="https://quantumone.b-cdn.net/AntHealth_Logos/30px.png" alt="copyright-logo" width={30} height={30} /></div>
            <p>AntHealth Group Inc. A Protocol Platforms Inc company. ALL RIGHTS RESERVED.AntHealth.ai is a non-government website that is owned and operated by AntHealth Operating LLC, which is an affiliate of AntHealth Group Inc. Both are licensed health insurance agencies and each does business as AntHealth Group.AntHealth Group is not affiliated with or endorsed by the U.S. government, Healthcare.gov or the federal Medicare program. The purpose of this site is the solicitation of insurance. Contact may be made by an insurance agent/producer or insurance company.Not all products are available in all States. AntHealth represents various Insurance Carriers, Medicare Advantage plans, Medicare Supplement plans, Dental plans, Vision plans, Hospital Gap Coverage plans and Prescription Drug Plans (PDP).We do not offer every plan available in your area. Any information we provide is limited to those plans we do offer in your area. Please contact Medicare.gov or 1-800-MEDICARE (TTY users should call 1-877-486-2048) to get information on all of your options. Not all plans offer all of these benefits. Benefits may vary by carrier and location. Limitations and exclusions may apply.By using this site, you acknowledge that you have read and agree to our Privacy Policy, Do Not Call Policy and Terms of Service.</p>
          </div>
      </main>
    </>
  )
}
