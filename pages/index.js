import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import CircularProgress from '@mui/material/CircularProgress';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


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
      <Disclosure as="nav" className="bg-stone-400">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://quantumone.b-cdn.net/AntHealth_Logos/ah-nb.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://quantumone.b-cdn.net/AntHealth_Logos/ah-nb.svg??color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
      
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
