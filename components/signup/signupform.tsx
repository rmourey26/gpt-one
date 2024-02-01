// components/signup/SignUpForm.tsx
"use client";
import { Form, Formik } from "formik";
import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { FormStepComponentType } from '@/components/formstepprops'
import { FormValues } from "@/lib/form";
import { createBrowserClient } from '@supabase/ssr'

type Props = {
  steps: FormStepComponentType[];
};
const SignUpForm = ({ steps }: Props) => {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const handleSubmit = async (values: FormValues, {setSubmitting}) => {
    setSubmitting(true)
    class MatchRule {
      custom_rules_answer: any
      custom_rules_name: any
      custom_rules_select: any
      max_answers: any
      min_answers: any
      constructor(custom_rules_answer, custom_rules_name, max_answers, min_answers, custom_rules_select) {
        this.custom_rules_answer = custom_rules_answer;
        this.custom_rules_name = custom_rules_name;
        this.custom_rules_select = custom_rules_select;
        this.max_answers = max_answers;
        this.min_answers = min_answers;
      }
      toString() {
        return `${this.custom_rules_name} ${this.custom_rules_select} ${this.custom_rules_answer} ${this.max_answers} ${this.min_answers}`;
      }
    }
     
     let Temp = Array.from(values.rows.values());
     function extractValue(arr: Object[], prop: string) {
        let extractedValue = arr.map(item => item[prop]);
           return extractedValue as unknown as string;
      }
      let result: string = extractValue(Temp, 'custom_rules_answer');
      let nameresult:string = extractValue(Temp, 'custom_rules_name');
      let tempstring:string = extractValue(Temp, 'custom_rules_name');
      let cxstring: string = extractValue(Temp, 'custom_rules_select');
      result = result.toString();
      tempstring = tempstring.toString()
       
      
    try {
      const { data, error } = await supabase.from('gpt_one')
     
      .insert({
        
          custom_rules_name: tempstring,
          custom_rules_answer: result,
          min_answers: values.budget_min,
          max_answers: values.budget_max,
          custom_rules_select: values.program_description,
          
          

          updated_at: new Date().toISOString(),
           
      })
      
      
      Array.prototype.forEach.call(values.rows, (x) => console.log(x));
      
      if (error) {
        console.error('Error inserting data:', error);
      } else {
        console.log('Data inserted successfully:', data);
        console.log(values.rows)
        // Clear form values or handle success actions
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
     
      setSubmitting(false);
      
    }
  };
  


  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("step"); // get the current step using search params
  const pageIndex = page ? +page : 1;
  // get the step component
  const StepComponent = steps.at(pageIndex - 1);
  const stepExists = !!StepComponent;
  return (
    // use Formik context to handle the form state and onSubmit
    <Formik
      onSubmit={(values: any) => {
        console.log(values);
      }}
      initialValues={{
        email: "",
        company_name: "",
        plan_provider: "",
        preferred_provider: "",
        program_description: "",
        query_rate: "",
        gender: "",
        age: "",
        chronic: "",
        zipcode: "",
        plan_id: "",
        user_input: "",
        rows: [],
        people: [],
        budget_min: 0,
        budget_max: 0,
        custom_param_one: '',
        custom_param_two: '',
        organization_name: '',

      }}
    >
      <Form>
        {/* render the step component if it exists */}
        {!!stepExists && (
          <StepComponent
            onNext={() => {
              // navigate to next page if it is not the last page using `router.push`
              if (pageIndex < steps.length) {
                const nextPage = pageIndex + 1;
                router.push(`/signup?step=${nextPage}`);
              }
            }}
            onPrevious={() => {
              // navigate to the previous page using `router.push`
              const prevPage = pageIndex - 1;
              if (prevPage > 1) {
                router.push(`/signup?step=${prevPage}`);
              } else {
                router.push("/signup");
              }
            }}
          />
        )}
      </Form>
    </Formik>
  );
};

export default SignUpForm;