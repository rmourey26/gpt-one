import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { Popover } from 'flowbite';
import Button from 'components/Button';

 

  

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const AI = () => {
  const [market, setMarket] = useState("");
  const [place, setPlace] = useState("");

  const [content, setContent] = useState([]);
  const [userInput, setUserInput] = useState("");
 
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
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userInput.trim() === "") {
      return;
    }

    setLoading(true);

    

    const postData = async () => {
      const data = {
        market: market,
        place: place,
      };

      const response = await fetch("https://marketplace.api.healthcare.gov/api/v1/plans/search?apikey=WYm5KaoiTFESYFkdf63m8bAfsB5Aw0ec", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return response.json();
    };
    postData().then((data) => {
      alert(data.message);
    });

    // Reset user input
    setUserInput("");

    setLoading(false);
  }

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
      <Button />
        
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
              placeholder={loading ? "Waiting for response..." : "Enter your market type and location..."}
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

     </div>

  )

};
  
  
export default AI

 

  
 

  
  
  
  



   
