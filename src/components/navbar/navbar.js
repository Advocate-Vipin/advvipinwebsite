import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline'
import brandLogo from '../../assets/logo.png'; // Adjust the path as necessary
import profilephoto from '../../assets/vipin.jpg';
import Tooltip from '../features/tooltip';
import { useNavigate } from 'react-router-dom';

const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Practice Area', href: '/practicearea', current: false },
    { name: 'FAQs', href: '/faqs', current: false },
    { name: 'Contact', href: '/contactdetails', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const navigate = useNavigate();

  const navigationClicks = (href) => () => {
    navigate(href);
  };

  return (
    <div className="w-full overflow-x-hidden overflow-y-hidden">
      <Disclosure as="nav" className="bg-gray-800">
        <div className="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
              </DisclosureButton>
            </div>
            
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img
                  alt="Vipin Chand Garg - Advocate Notary Meerut"
                  src={brandLogo}
                  className="h-8 sm:h-10 lg:h-12 w-auto"
                />
              </div>
              <div className="hidden sm:ml-4 lg:ml-6 sm:flex sm:items-center">
                <div className="flex space-x-2 lg:space-x-4">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={navigationClicks(item.href)}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-2 lg:px-3 py-2 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap',
                      )}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Number Section */}
            <div className="hidden md:flex items-center text-gray-300 mr-4">
              <PhoneIcon className="h-4 w-4 mr-2" />
              <a 
                href="tel:9568529826" 
                className="text-sm font-medium hover:text-white transition-colors whitespace-nowrap"
              >
                +91 9568529826
              </a>
            </div>
            
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="size-5 sm:size-6" />
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-2 sm:ml-3 group">
                <div>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src={profilephoto}
                      className="size-6 sm:size-8 rounded-full"
                    />
                  </MenuButton>

                  {/* Tooltip */}
                  <div className="absolute right-0 z-50 mt-4 w-max rounded-md bg-gray-800 px-3 py-2 text-sm text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="whitespace-nowrap">Advocate</p>
                    <p className="text-red-600 font-semibold whitespace-nowrap">Notary (Government of India)</p>
                  </div>
                </div>
              </Menu>
            </div>
          </div>
        </div>
        
        <DisclosurePanel className="sm:hidden border-t border-gray-700">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="button"
                onClick={navigationClicks(item.href)}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block w-full text-left rounded-md px-3 py-2 text-base font-medium transition-colors',
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
            {/* Mobile Number for mobile view */}
            <div className="flex items-center px-3 py-2 text-gray-300">
              <PhoneIcon className="h-4 w-4 mr-2" />
              <a 
                href="tel:9568529826" 
                className="text-base font-medium hover:text-white transition-colors"
              >
                +91 9568529826
              </a>
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  )
}