// components/signup/Page2.tsx
"use client";
import React from "react";
import { FormStepComponentType } from '@/components/formstepprops';
import FormikTextField from '@/components/formiktextfield'
import FormikRadioGroup from '@/components/formikradiogroup'



const Page2: FormStepComponentType = (props) => {
  return (
    <div className=" md:flex">

    {/* Content */}
    <div className="w-full md:w-1/2">
    <div className="min-h-[100dvh] h-full flex flex-col after:flex-1">


      <h1 className="text-3xl text-slate-800 dark:text-slate-100 font-bold mb-6">How would you like to match members? ✨</h1>
      <FormikRadioGroup
          name="match_type"
                      //add name props
          label=""
          options={[
            {
              label: "Email",
              value: 'Email',
            },
            {
              label: "Discord",
              value: 'Discord',
            },
            {
              label: "Telegram (coming soon!)",
              value: 'Telegram',
            },
          ]}
        ></FormikRadioGroup>
     <div className="flex justify-center gap-2">
        <button onClick={props.onPrevious} className="btn mt-4 bg-indigo-500 hover:bg-indigo-600 text-white ml-auto">
          Back
        </button>
        
        
        <button
          
          onClick={props.onNext}
          className="btn mt-4 bg-indigo-500 hover:bg-indigo-600 text-white mx-auto"
        >
          Next
        </button>
        
      </div>
    </div>
 
    </div>
    </div>
  );
};

export default Page2;
