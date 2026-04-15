import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline'
import brandLogo from '../../assets/logo.png';
import profilephoto from '../../assets/vipin.jpg';
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
  const [msme, setMsme] = useState(false);
  const { pathname } = useLocation();        // ← always up-to-date
  const [scrolled, setScrolled] = useState(false);

  /* Single handler reused for every link */
  const handleNav = (href) => () => navigate(href);
  const navigationClicks = (href) => () => {
    navigate(href);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if(window.location.pathname=='/'){
      setHome(true);
      setPracticearea(false);
      setFaqs(false);
      setContactdetails(false);
      setNotary(false);
      setMsme(false);
    }else if(window.location.pathname=='/practicearea'){
      setHome(false);
      setPracticearea(true);
      setFaqs(false);
      setContactdetails(false);
      setNotary(false);
      setMsme(false);
    }else if(window.location.pathname=='/faqs'){
      setHome(false);
      setPracticearea(false);
      setFaqs(true);
      setContactdetails(false);
      setNotary(false);
      setMsme(false);
    }else if(window.location.pathname=='/contactdetails'){
      setHome(false);
      setPracticearea(false);
      setFaqs(false);
      setContactdetails(true);
      setNotary(false);
      setMsme(false);
    }else if(window.location.pathname=='/Notary'){
      setHome(false);
      setPracticearea(false);
      setFaqs(false);
      setContactdetails(false);
      setNotary(true);
      setMsme(false);
    }else if(window.location.pathname=='/msme'){
      setHome(false);
      setPracticearea(false);
      setFaqs(false);
      setContactdetails(false);
      setNotary(false);
      setMsme(true);
    }
  }, []);

  const navigation = [
    { name: 'Home', href: '/', current: home },
    { name: 'Practice Area', href: '/practicearea', current: practicearea },
    { name: 'MSME Cases', href: '/msme', current: msme },
    { name: 'Notary', href: '/Notary', current: notary },
    { name: 'FAQs', href: '/faqs', current: faqs },
    { name: 'Contact', href: '/contactdetails', current: contactdetails },
  ]


  return (
    <div className="w-full overflow-x-hidden overflow-y-hidden sticky top-0 z-50">
      <Disclosure as="nav" className={classNames(
        'transition-all duration-500',
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-xl shadow-lg shadow-navy-900/10 border-b border-white/5'
          : 'bg-navy-900/80 backdrop-blur-md'
      )}>
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 sm:h-18 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-lg p-2.5 text-gray-400 hover:bg-white/10 hover:text-white focus:ring-2 focus:ring-white/20 focus:outline-none transition-all duration-200">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block h-5 w-5 group-data-open:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden h-5 w-5 group-data-open:block" />
              </DisclosureButton>
            </div>
            
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              {/* Logo */}
              <div className="flex shrink-0 items-center group cursor-pointer" onClick={handleNav('/')}>
                <img
                  alt="Vipin Chand Garg - Advocate Notary Meerut"
                  src={brandLogo}
                  className="relative h-9 sm:h-10 lg:h-11 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden sm:ml-8 lg:ml-10 sm:flex sm:items-center">
                <div className="flex items-center gap-1">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={navigationClicks(item.href)}
                      className={classNames(
                        'relative px-3.5 lg:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 whitespace-nowrap',
                        item.current 
                          ? 'text-white bg-white/10' 
                          : 'text-gray-400 hover:text-white hover:bg-white/5',
                      )}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {item.current && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-gold-400 rounded-full"></span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Phone Number */}
            <div className="hidden md:flex items-center mr-4">
              <a 
                href="tel:9568529826" 
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                <PhoneIcon className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors whitespace-nowrap">
                  +91 9568529826
                </span>
              </a>
            </div>
            
            {/* Profile */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-2 sm:pr-0">
              <Menu as="div" className="relative group">
                <div>
                  <MenuButton className="relative flex rounded-lg text-sm focus:ring-2 focus:ring-white/20 focus:outline-none p-0.5 border border-white/10 hover:border-white/20 transition-all duration-200">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <div className="relative">
                      <img
                        alt=""
                        src={profilephoto}
                        className="h-8 w-8 sm:h-9 sm:w-9 rounded-md object-cover"
                      />
                      <div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 bg-emerald-400 rounded-full border-2 border-navy-900"></div>
                    </div>
                  </MenuButton>

                  {/* Tooltip */}
                  <div className="absolute right-0 z-50 mt-2 w-max opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto translate-y-1 group-hover:translate-y-0">
                    <div className="relative bg-navy-950/95 backdrop-blur-xl rounded-lg px-4 py-2.5 text-sm text-white shadow-xl border border-white/10">
                      <p className="whitespace-nowrap font-medium text-gray-300">Advocate</p>
                      <p className="text-gold-400 font-semibold whitespace-nowrap flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-gold-400 rounded-full"></span>
                        Notary (Government of India)
                      </p>
                      <div className="absolute -top-1.5 right-4 w-3 h-3 bg-navy-950/95 border-l border-t border-white/10 transform rotate-45"></div>
                    </div>
                  </div>
                </div>
              </Menu>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <DisclosurePanel className="sm:hidden border-t border-white/5">
          <div className="space-y-1 px-3 pt-3 pb-4">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="button"
                onClick={navigationClicks(item.href)}
                className={classNames(
                  item.current 
                    ? 'text-white bg-white/10' 
                    : 'text-gray-400 hover:bg-white/5 hover:text-white',
                  'block w-full text-left rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200',
                )}
              >
                <span className="flex items-center gap-3">
                  {item.current && <span className="w-1.5 h-1.5 bg-gold-400 rounded-full"></span>}
                  {item.name}
                </span>
              </DisclosureButton>
            ))}
            
            {/* Mobile Phone */}
            <div className="mt-3 pt-3 border-t border-white/5">
              <a 
                href="tel:9568529826"
                className="flex items-center gap-3 px-4 py-2.5 text-gray-300 rounded-lg hover:bg-white/5 transition-all"
              >
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                <PhoneIcon className="h-4 w-4 text-emerald-400" />
                <span className="text-sm font-medium">+91 9568529826</span>
              </a>
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  )
}
