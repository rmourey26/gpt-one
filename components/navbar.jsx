import { useState, useRef, useEffect, Fragment } from 'react';

import { useSession, signIn, signOut } from "next-auth/react";

import { Dialog } from '@headlessui/react';

import { useRouter } from 'next/router';

import { useLottie } from 'lottie-react';

import docrxAnimation from "docrx.json";

import { Disclosure, Menu, Transition } from '@headlessui/react'

import VoiceSearch from "../components/voicesearch";

import LogAuth from "../components/login-btn";

import NoSSR from 'components/nossr'




import Head from 'next/head'

import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '/', current: true },
  { name: 'SMARTApp', href: 'https://reactrouterfhir-6d38qi6u8-rmourey26.vercel.app', current: false },
  { name: 'Questionaire', href: '/questionaire', current: false },
  { name: 'Med History', href: '/medicalhistory', current: false },
  { name: 'ACA API', href: '/acatable', current: false },
]



const Navbar = () => {
  const { data: session } = useSession()
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  };
  
  
  const options = {
    animationData: docrxAnimation,
    loop: true
  };
  
  const style = {
    height: 320,
  };
  const { View } = useLottie(options, style);

  if (session) {
  return (
    <>
    
    <Disclosure as="nav" className="twindnav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center">
                <div className="flex flex-shrink-0 items-center sm:flex-start">
                  <img
                    className="block h-7 w-auto lg:hidden"
                    src="https://quantumone.b-cdn.net/AntHealth_Logos/ah-nb.svg?color=sky&shade=500"
                    alt="AntHealth"
                  />
                  <img
                    className="hidden h-7 w-auto lg:block"
                    src="https://quantumone.b-cdn.net/AntHealth_Logos/ah-nb.svg??color=sky&shade=500"
                    alt="AntHealth"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                     {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'inline-flex items-center text-sm justify-center bg-sky-600 text-white px-3 py-2.5' : 'text-sm px-3 py-2.5 inline-flex items-center justify-center text-gray-300 hover:bg-sky-700 hover:text-white',
                            'rounded-lg px-3 py-2.5 text-sm font-medium text-center items-center'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                      < VoiceSearch />
                      </div>
                     

                      
                
          
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-sky-600 p-1 text-sky-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-600"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    
                    <Menu.Button className="flex rounded-full bg-sky-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-600">
                      <span className="sr-only">Open user menu</span>
                      <img
                       src={session.user.image} width={44} height={44} className="flex rounded-full"
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
                            href="/profile"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/registration"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Registration
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => ( 
                        
                          <><LogAuth /><a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >

                            </a></>
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
                    item.current ? 'bg-sky-600 text-white' : 'text-sky-300 hover:bg-sky-300 hover:text-white',
                    'block rounded-lg px-3 py-2 text-sm font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              < VoiceSearch />
              </div>
             <div className="px-2 pb-3 pt-2">
              <LogAuth />
             </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  
    </>
  )
                  };

                  
                    
                      return (
                        <>
                        
                        <Disclosure as="nav" className="twindnav">
                          {({ open }) => (
                            <>
                              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                                <div className="relative flex h-16 items-center justify-between">
                                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center rounded-lg p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                      <span className="sr-only">Open main menu</span>
                                      {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                      ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                      )}
                                    </Disclosure.Button>
                                  </div>
                                  <div className="flex flex-1 items-center justify-center">
                                    <div className="flex flex-shrink-0 items-center sm:flex-start">
                                      <img
                                        className="block h-7 w-auto lg:hidden"
                                        src="https://quantumone.b-cdn.net/AntHealth_Logos/ah-nb.svg?color=sky&shade=500"
                                        alt="AntHealth"
                                      />
                                      <img
                                        className="hidden h-7 w-auto lg:block"
                                        src="https://quantumone.b-cdn.net/AntHealth_Logos/ah-nb.svg??color=sky&shade=500"
                                        alt="AntHealth"
                                      />
                                    </div>
                                    <div className="hidden sm:ml-6 sm:block">
                                      <div className="flex space-x-4">
                                         {navigation.map((item) => (
                                            <a
                                              key={item.name}
                                              href={item.href}
                                              className={classNames(
                                                item.current ? 'inline-flex items-center text-sm justify-center bg-sky-600 text-white px-3 py-2.5' : 'text-sm px-3 py-2.5 inline-flex items-center justify-center text-gray-300 hover:bg-sky-700 hover:text-white',
                                                'rounded-lg px-3 py-2.5 text-sm font-medium text-center items-center'
                                              )}
                                              aria-current={item.current ? 'page' : undefined}
                                            >
                                              {item.name}
                                            </a>
                                          ))}
                                          < VoiceSearch />
                                          </div>
                                         
                    
                                          
                                    
                              
                                    </div>
                                  </div>
                                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <button
                                      type="button"
                                      className="rounded-full bg-sky-600 p-1 text-sky-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-600"
                                    >
                                      <span className="sr-only">View notifications</span>
                                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                    
                                    {/* Profile dropdown */}
                                    <Menu as="div" className="relative ml-3">
                                      <div>
                                        
                                        <Menu.Button className="flex rounded-full bg-sky-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-600">
                                          <span className="sr-only">Open user menu</span>
                                          
                                          
                                          
                                             
                                             
<div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
</div>

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
                                                href="/profile"
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                              >
                                                Your Profile
                                              </a>
                                            )}
                                          </Menu.Item>
                                          <Menu.Item>
                                            {({ active }) => (
                                              <a
                                                href="/registration"
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                              >
                                                Registration
                                              </a>
                                            )}
                                          </Menu.Item>
                                          <Menu.Item>
                                            {({ active }) => ( 
                                            
                                              <><LogAuth /><a
                                                  href="#"
                                                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                    
                                                </a></>
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
                                        item.current ? 'bg-sky-600 text-white' : 'text-sky-300 hover:bg-sky-300 hover:text-white',
                                        'block rounded-lg px-3 py-2 text-sm font-medium'
                                      )}
                                      aria-current={item.current ? 'page' : undefined}
                                    >
                                      {item.name}
                                    </Disclosure.Button>
                                  ))}
                                  < VoiceSearch />
                                  </div>
                                 <div className="px-2 pb-3 pt-2">
                                  <LogAuth />
                                 </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      
                        </>
                
                  )
                
                }
                

export default Navbar;
