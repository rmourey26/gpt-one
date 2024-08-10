import react from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
<footer aria-label="Site Footer" className="bg-transparent">
  <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="flex justify-center text-violet-600 sm:justify-start">
      <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://quantumone.b-cdn.net/flippa/heartygray.png"
                    alt="hearti"
                    width={320}
                    height={113}
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://quantumone.b-cdn.net/flippa/heartygray.png"
                    alt="hearti"
                    width={320}
                    height={113}
                  />
      </div>

      <p
        className="mt-4 max-w-md text-center leading-relaxed text-gray-500 sm:text-left lg:mt-0"
      >
        The future of benefits administration is now at Hearti!
      </p>
    </div>

    <div
      className="mt-16 grid grid-cols-1 gap-8 border-t border-gray-100 pt-16 md:grid-cols-4 lg:grid-cols-6"
    >
      <div className="text-center sm:text-left">
        <p className="text-lg font-medium text-gray-900">About Us</p>

        <nav aria-label="Footer About Nav" className="mt-8">
          <ul className="space-y-4 text-sm">
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Company History
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Meet the Team
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Careers
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Suggestions
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="text-center sm:text-left">
        <p className="text-lg font-medium text-gray-900">Our Services</p>

        <nav aria-label="Footer Services Nav" className="mt-8">
          <ul className="space-y-4 text-sm">
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                SMART on FHIR
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                HL7
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                CMS
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="text-center sm:text-left">
        <p className="text-lg font-medium text-gray-900">Resources</p>

        <nav aria-label="Footer Resources Nav" className="mt-8">
          <ul className="space-y-4 text-sm">
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Online Guides
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Actuarial AI
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Forum
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Downloads
              </a>
            </li>

           
          </ul>
        </nav>
      </div>

      <div className="text-center sm:text-left">
        <p className="text-lg font-medium text-gray-900">Helpful Links</p>

        <nav aria-label="Footer Helpful Nav" className="mt-8">
          <ul className="space-y-4 text-sm">
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/FAQs"
              >
                FAQs
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Support
              </a>
            </li>

            <li>
              <a
                className="text-center group gap-1.5"
                href="/"
              >
                <span
                  className="text-gray-700 text-center transition group-hover:text-gray-700/75"
                >
                  Live Chat
                </span>

                <span className="absolute h-2 w-2">
                  <span
                    className="absolute h-full w-full animate-ping rounded-full bg-violet-400 opacity-75"
                  ></span>
                  <span
                    className="relative flex h-2 w-2 rounded-full ml-1 bg-violet-500"
                  ></span>
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="text-center sm:text-left md:col-span-4 lg:col-span-2">
        <p className="text-lg font-medium text-gray-900">Stay in Touch</p>

        <div className="mx-auto mt-8 max-w-md sm:ms-0">
          <p
            className="text-center leading-relaxed text-gray-500 ltr:sm:text-left rtl:sm:text-right"
          >
            Enter your email below to receive our latest updates!
          </p>

          <form className="mt-4">
            <div
              className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start"
            >
              <label for="email" className="sr-only">Email</label>

              <input
                className="w-full rounded-full border-violet-400 px-6 py-3 shadow-sm"
                type="email"
                placeholder="Enter your email"
              />

              <button
                className="block text-white bg-gradient-to-r from-violet-500 to-sky-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-violet-300 dark:focus:ring-violet-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                type="submit"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>


<div className="text-center text-sm text-lightgray"> 
<p className="text-center lg:text-center text-xs text-gray-900 sm:text-center">
        
        <span className="inline-flex items-baseline">
    
        <span>Copyright Hearti 2023. All Rights Reserved.</span>
        </span> 
        </p>
                
</div>
      
        <hr className="w-64 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
       
        
      </footer>
      </>
  )
};

export default Footer;
