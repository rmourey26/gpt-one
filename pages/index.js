import { useState, useRef, useEffect, Fragment } from 'react'
import Link from 'next/link';
import { Dialog } from '@headlessui/react'
import { useLottie } from 'lottie-react';
import docrxAnimation from "docrx.json";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Content from '../components/Content'
import Head from 'next/head'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import VoiceSearch from 'components/voicesearch';
import Navbar from 'components/navbar';
import Footer from 'components/footer';
import PlanCombo from 'components/combobox';
import styles from "styles/Home.module.css"



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    
  const options = {
    animationData: docrxAnimation,
    loop: true
  };
  
  const style = {
    height: 320,
  };
  const { View } = useLottie(options, style);


  return (
    <>
    <Head/>
    <Navbar />
      <div>
        <section class="my-10 bg-transparent dark:bg-gray-900">
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-1">
              <div class="mx-auto place-self-center lg:col-span-7 md:col-span-4 sm:col-span-1">
              <h1 class="max-w-2xl text-center mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Generative AI-Powered Health Plan Design</h1>
              <p class="max-w-2xl text-center mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"></p>
              <div className="items-center px-4 flex justify-center" >
                  <div className="z-50 relative mr-3">
                <Link className="z-50" href="/rumi" passHref>
                    <button className="z-50 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-violet-500 to-blue-500 group-hover:from-violet-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-violet-200 dark:focus:ring-violet-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Meet RUMI!

  </span>

</button>
</Link >

           </div>
                    
                  
                </div>
                </div>
                <div className="md:mt-0 md:col-span-4 md:flex flex lg:mt-0 lg:col-span-5 lg:flex sm:col-span-1 place-self-center">
                  <>{View}</>
                </div>
              
            </div>
          </section>
       </div>
       
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-2  transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        > 
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#60bbf0] to-[#653780] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        </div>
           
        
        
        
    <div className="bg-transparent py-24 sm:py-32 items-center">
      <div className="grid grid-col-1 span-1 mx-auto max-w-7xl px-6 lg:px-8 content-center">
        
      </div>
    
  
  
    </div>
    
    <Footer />
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#60bbf0] to-[#653780] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        
      
      </>
      
    
  )
}
