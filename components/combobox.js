import { useState, useRef, useEffect } from 'react'


import { Combobox } from '@headlessui/react'

import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'



const plans = [

  { id: 1, name: "Plan 1"},
  { id: 2, name: "Plan 2"},
  { id: 3, name: "PLan 3"},
  { id: 4, name: "Plan 4"},
  { id: 5, name: "Plan 5"},
  ]


  
  const PlanCombo = () => {
    
    const [selected, setSelected] = useState(plans[[0]])
  
    const [query, setQuery] = useState('')
  
    const filteredPlans =
  
      query === ''
  
        ? plans
  
        : plans.filter((plan) =>
  
            plan.name
  
              .toLowerCase()
  
              .replace(/\s+/g, '')
  
              .includes(query.toLowerCase().replace(/\s+/g, ''))
  
          )

          return (
            <>
            

<div className="top-16 align-self-center mb-2 w-72">

      <Combobox value={selected} onChange={setSelected}>

        <div className="relative mt-1">

          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-300 sm:text-sm">

            <Combobox.Input

              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"

              displayValue={(plan) => plan.name}

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

              {filteredPlans.length === 0 && query !== '' ? (

                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">

                  Nothing found.

                </div>

              ) : (

                filteredPlans.map((plan) => (

                  <Combobox.Option

                    key={plan.id}

                    className={({ active }) =>

                      `relative cursor-default select-none py-2 pl-10 pr-4 ${

                        active ? 'bg-sky-600 text-white' : 'text-gray-900'

                      }`

                    }

                    value={plan}

                  >

                    {({ selected, active }) => (

                      <>

                        <span

                          className={`block truncate ${

                            selected ? 'font-medium' : 'font-normal'

                          }`}

                        >

                          {plan.name}

                        </span>

                        {selected ? (

                          <span

                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${

                              active ? 'text-white' : 'text-sky-600'

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

export default PlanCombo
