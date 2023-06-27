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
import Image from 'next/image';

import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Avatarph from './avatarph';


const navigation = [
  { name: 'Dashboard', href: '/', current: true },
  { name: 'SMART on FHIR', href: 'https://reactrouterfhir-6d38qi6u8-rmourey26.vercel.app', current: false },
  { name: 'Market AI', href: '/ai', current: false},
  { name: 'Questionaire', href: '/questionaire', current: false },
  { name: 'Med History', href: '/medicalhistory', current: false },
  { name: 'ACA API', href: '/acatable', current: false },
  { name: 'Fitness API', href: '/fitnessai', current: false },
  
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
    
    <Disclosure as="nav" className="bg-gray-300">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center inline-flex items-center justify-center rounded-lg p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">

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
                  <Image
                    className="block h-8 w-auto lg:hidden"
                    src="https://quantumone.b-cdn.net/flippa/hearty2.png"
                    width={320}
                    height={113}
                    alt="Hearti"
                  />
                  <Image
                    className="hidden h-8 w-auto lg:block"
                    src="https://quantumone.b-cdn.net/flippa/hearty2.png"
                    width={320}
                    height={113}
                    alt="Hearti"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                     {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'inline-flex items-center text-xs justify-center bg-violet-600 text-white px-3 py-0.75' : 'text-xs px-3 py-0.75 inline-flex items-center justify-center text-gray-300 hover:bg-violet-700 hover:text-white',
                            'rounded-lg px-3 py-0.75 text-xs font-medium text-center items-center'
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
                  className="rounded-full bg-violet-600 p-1 text-violet-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-violet-600"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    
                    <Menu.Button className="flex rounded-full bg-violet-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-violet-600">
                      <span className="sr-only">Open user menu</span>
                      <Image
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none">
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
                        
                        <a className={classNames(active ? 'bg-gray-100' : '', 'flex px-4 py-2 text-sm.text-gray-700')}>
                          <LogAuth />
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
                    item.current ? 'bg-gradient-to-r from-violet-500 to-blue-500 text-white' : 'text-violet-300 hover:bg-violet-300 hover:text-white',
                    'block rounded-lg px-3 py-2 text-sm font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              < VoiceSearch />
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
                        
                        <Disclosure as="nav" className="bg-gray-300">
                          {({ open }) => (
                            <>
                              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                                <div className="relative flex h-16 items-center justify-between">
                                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center rounded-lg p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                      <span className="sr-only">Open main menu</span>
                                      {open ? (
                                        <XMarkIcon className="block h-8 w-6" aria-hidden="true" />
                                      ) : (
                                        <Bars3Icon className="block h-8 w-6" aria-hidden="true" />
                                      )}
                                    </Disclosure.Button>
                                  </div>
                                  <div className="flex flex-1 items-center justify-center">
                                    <div className="flex flex-shrink-0 items-center sm:flex-start">
                                      <Image
                                        className="block h-8 w-auto lg:hidden"
                                        src="https://quantumone.b-cdn.net/flippa/hearty2.png"
                                        alt="Hearti"
                                        width={320}
                                        height={113}
                                      />
                                      <Image
                                        className="hidden h-8 w-auto lg:block"
                                        src="https://quantumone.b-cdn.net/flippa/hearty2.png"
                                        alt="Hearti"
                                        width={320}
                                        height={113}
                                      />
                                    </div>
                                    <div className="hidden sm:ml-6 sm:block">
                                      <div className="flex space-x-4">
                                         {navigation.map((item) => (
                                            <a
                                              key={item.name}
                                              href={item.href}
                                              className={classNames(
                                                item.current ? 'inline-flex items-center text-sm justify-center bg-violet-600 text-white px-3 py-2' : 'text-sm px-3 py-2.5 inline-flex items-center justify-center text-gray-300 hover:bg-violet-700 hover:text-white',
                                                'rounded-lg px-3 py-2 text-sm font-medium text-center items-center'
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
                                      className="rounded-full bg-violet-600 p-1 text-violet-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-violet-600"
                                    >
                                      <span className="sr-only">View notifications</span>
                                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                    
                                    {/* Profile dropdown */}
                                    <Menu as="div" className="relative ml-3">
                                      <div>
                                        
                                        <Menu.Button className="flex rounded-full bg-violet-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-violet-600">
                                          <span className="sr-only">Open user menu</span>
                                          
                                          
                                          
                                             
                                             
<div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <Avatarph />
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
                                            
                                            <a className={classNames(active ? 'bg-gray-100' : '', 'flex px-4 py-2 text-sm.text-gray-700')}>
                                            <LogAuth />
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
                                        item.current ? 'bg-violet-600 text-white' : 'text-violet-300 hover:bg-violet-300 hover:text-white',
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
