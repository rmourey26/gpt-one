import Footer from 'components/footer'
import Navbar from 'components/navbar'
import Head from 'next/head'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import dynamic from 'next/dynamic'

const MedSurveyComponent = dynamic(() => import("../components/MedicalSurveyComp"),{
  ssr:false,
})

const MedicalHistory = () => {
    return (
    
      <>
      <Navbar />
      <><MedSurveyComponent /></>
      <Footer />
      </>
    )
};

export default MedicalHistory;