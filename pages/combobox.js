import { useState, useRef, useEffect } from 'react'


import { Combobox } from '@headlessui/react'

import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import CircularProgress from '@mui/material/CircularProgress';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const people = [

    { id: 1, name: 'Wade Cooper' },
  
    { id: 2, name: 'Arlene Mccoy' },
  
    { id: 3, name: 'Devon Webb' },
  
    { id: 4, name: 'Tom Cook' },
  
    { id: 5, name: 'Tanya Fox' },
  
    { id: 6, name: 'Hellen Schmidt' },
  
  ]
  export default function Example() {
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

          return (
            <>
              <Head>
                <title>Anthealth</title>
                <meta name="description" content="Anthealth AI" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
          
        
        <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=8a43adc3-5c36-4cb7-bc9b-bc7dfe86162d"> </script>
        
        
              </Head>

<div className="top-16 align-self-center mb-2 w-72">

      <Combobox value={selected} onChange={setSelected}>

        <div className="relative mt-1">

          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">

            <Combobox.Input

              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"

              displayValue={(person) => person.name}

              onChange={(event) => setQuery(event.target.value)}

            />

            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">

              <ChevronUpDownIcon

                className="h-5 w-5 text-gray-400"

                aria-hidden="true"

              />

            </Combobox.Button>

          </div>

          <Transition

            as={Fragment}

            leave="transition ease-in duration-100"

            leaveFrom="opacity-100"

            leaveTo="opacity-0"

            afterLeave={() => setQuery('')}

          >

            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">

              {filteredPeople.length === 0 && query !== '' ? (

                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">

                  Nothing found.

                </div>

              ) : (

                filteredPeople.map((person) => (

                  <Combobox.Option

                    key={person.id}

                    className={({ active }) =>

                      `relative cursor-default select-none py-2 pl-10 pr-4 ${

                        active ? 'bg-teal-600 text-white' : 'text-gray-900'

                      }`

                    }

                    value={person}

                  >

                    {({ selected, active }) => (

                      <>

                        <span

                          className={`block truncate ${

                            selected ? 'font-medium' : 'font-normal'

                          }`}

                        >

                          {person.name}

                        </span>

                        {selected ? (

                          <span

                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${

                              active ? 'text-white' : 'text-teal-600'

                            }`}

                          >

                            <CheckIcon className="h-5 w-5" aria-hidden="true" />

                          </span>

                        ) : null}

                      </>

                    )}

                  </Combobox.Option>

                ))

              )}

            </Combobox.Options>

          </Transition>

        </div>

      </Combobox>

    </div>
    </>
    
)
}