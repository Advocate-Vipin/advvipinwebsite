import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline'
import brandLogo from '../../assets/logo.png'; // Adjust the path as necessary
import profilephoto from '../../assets/vipin.jpg';
import Tooltip from '../features/tooltip';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const navigate = useNavigate();
  const [home, setHome]=useState(false);
  const [practicearea, setPracticearea]=useState(false);
  const [faqs, setFaqs]=useState(false);  
  const [contactdetails, setContactdetails]=useState(false);
  const [notary, setNotary]=useState(false);

  const { pathname } = useLocation();        // ← always up-to-date

  /* Single handler reused for every link */
  const handleNav = (href) => () => navigate(href);
  const navigationClicks = (href) => () => {
    navigate(href);
  };

  useEffect(() => {
    if(window.location.pathname=='/'){
      setHome(true);
      setPracticearea(false);
      setFaqs(false);
      setContactdetails(false);
      setNotary(false);

    }else if(window.location.pathname=='/practicearea'){
      setHome(false); 
      setPracticearea(true);
      setFaqs(false);
      setContactdetails(false);
      setNotary(false); 
    }else if(window.location.pathname=='/faqs'){
      setHome(false); 
      setPracticearea(false);
      setFaqs(true);
      setContactdetails(false);
      setNotary(false);
    }else if(window.location.pathname=='/contactdetails'){
      setHome(false);
      setPracticearea(false);
      setFaqs(false); 
      setContactdetails(true);
      setNotary(false);
    }else if(window.location.pathname=='/Notary'){
      setHome(false);
      setPracticearea(false);
      setFaqs(false);
      setContactdetails(false);
      setNotary(true);
    }

    console.log("Current path:", );
  }, []);

  const navigation = [
      { name: 'Home', href: '/', current: home },
      { name: 'Practice Area', href: '/practicearea', current: practicearea },
      { name: 'FAQs', href: '/faqs', current: faqs },
      { name: 'Contact', href: '/contactdetails', current: contactdetails },
      { name: 'Notary', href: '/Notary', current: notary },
  ]


  return (
    <div className="w-full overflow-x-hidden overflow-y-hidden relative">
      {/* Modern backdrop blur effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 backdrop-blur-sm"></div>
      
      <Disclosure as="nav" className="relative bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-2xl">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-18 sm:h-20 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Enhanced Mobile menu button */}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-xl p-3 text-gray-300 hover:bg-white/10 hover:text-white focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-200 backdrop-blur-sm">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-open:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-open:block" />
              </DisclosureButton>
            </div>
            
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              {/* Enhanced Logo Section */}
              <div className="flex shrink-0 items-center group">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <img
                    alt="Vipin Chand Garg - Advocate Notary Meerut"
                    src={brandLogo}
                    className="relative h-10 sm:h-12 lg:h-14 w-auto drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              {/* Enhanced Navigation Menu */}
              <div className="hidden sm:ml-8 lg:ml-10 sm:flex sm:items-center">
                <div className="flex space-x-1 lg:space-x-2 bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={navigationClicks(item.href)}
                      className={classNames(
                        item.current 
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25' 
                          : 'text-gray-300 hover:bg-white/10 hover:text-white',
                        'relative rounded-xl px-4 lg:px-6 py-3 text-sm lg:text-base font-medium transition-all duration-300 whitespace-nowrap group overflow-hidden',
                      )}
                    >
                      {!item.current && (
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      )}
                      <span className="relative z-10">{item.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Phone Number Section */}
            <div className="hidden md:flex items-center text-gray-300 mr-6 group">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
                <div className="relative flex items-center bg-white/5 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-white/10 group-hover:border-green-400/30 transition-all duration-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  <PhoneIcon className="h-4 w-4 mr-2 text-green-400" />
                  <a 
                    href="tel:9568529826" 
                    className="text-sm font-semibold hover:text-white transition-colors whitespace-nowrap group-hover:text-green-300"
                  >
                    +91 9568529826
                  </a>
                </div>
              </div>
            </div>
            
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Enhanced Notification Button */}
              <button
                type="button"
                className="relative rounded-xl bg-white/5 backdrop-blur-sm p-3 text-gray-300 hover:text-white hover:bg-white/10 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent focus:outline-none transition-all duration-200 border border-white/10 hover:border-blue-400/30 group"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform duration-200" />
                {/* Notification dot */}
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full border-2 border-gray-900 animate-pulse"></span>
              </button>

              {/* Enhanced Profile dropdown */}
              <Menu as="div" className="relative ml-3 sm:ml-4 group">
                <div>
                  <MenuButton className="relative flex rounded-xl bg-white/5 backdrop-blur-sm text-sm focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent focus:outline-none border border-white/10 hover:border-blue-400/30 transition-all duration-200 p-1">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <div className="relative">
                      <img
                        alt=""
                        src={profilephoto}
                        className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg object-cover ring-2 ring-white/20 group-hover:ring-blue-400/50 transition-all duration-300"
                      />
                      {/* Online indicator */}
                      <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-green-400 rounded-full border-2 border-gray-900 animate-pulse"></div>
                    </div>
                  </MenuButton>

                  {/* Enhanced Tooltip */}
                  <div className="absolute right-0 z-50 mt-3 w-max opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                    <div className="relative bg-gray-900/95 backdrop-blur-xl rounded-xl px-4 py-3 text-sm text-white shadow-2xl border border-white/10 transform scale-95 group-hover:scale-100 transition-transform duration-200">
                      <p className="whitespace-nowrap font-medium">Advocate</p>
                      <p className="text-red-400 font-bold whitespace-nowrap flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
                        Notary (Government of India)
                      </p>
                      {/* Tooltip arrow */}
                      <div className="absolute -top-2 right-4 w-4 h-4 bg-gray-900/95 border-l border-t border-white/10 transform rotate-45"></div>
                    </div>
                  </div>
                </div>
              </Menu>
            </div>
          </div>
        </div>
        
        {/* Enhanced Mobile Menu Panel */}
        <DisclosurePanel className="sm:hidden border-t border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="space-y-2 px-4 pt-4 pb-4">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="button"
                onClick={navigationClicks(item.href)}
                className={classNames(
                  item.current 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
                    : 'text-gray-300 hover:bg-white/10 hover:text-white',
                  'block w-full text-left rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 border border-transparent hover:border-white/20',
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
            
            {/* Enhanced Mobile Phone Number */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center px-4 py-3 text-gray-300 bg-white/5 rounded-xl border border-white/10">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <PhoneIcon className="h-4 w-4 mr-3 text-green-400" />
                <a 
                  href="tel:9568529826" 
                  className="text-base font-semibold hover:text-white transition-colors flex-1"
                >
                  +91 9568529826
                </a>
              </div>
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  )
}
