import {useState} from 'react';
import callIcon from '../../assets/callicon.svg';
import mailIcon from '../../assets/gmailicon.svg';
import mapicon from '../../assets/mapicon.svg';
import nameicon from '../../assets/nameicon.svg';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom';
import {MapIcon} from "@heroicons/react/24/outline";


export default function Footer() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const [mapOpen, setMapOpen] = useState(false);

    const handleNavigation=() => {
        navigate('/practicearea');
    }

    const contactdetails = () => {
        navigate("/contactdetails");
    }
    
    return (
    <div className="w-full overflow-x-hidden">
        <Dialog open={open} onClose={setOpen} className="relative z-50">
            <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                    transition
                    className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-4xl data-closed:sm:translate-y-0 data-closed:sm:scale-95 mx-4"
                    >
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                            <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" />
                        </div>
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <DialogTitle as="h3" className="text-xl sm:text-2xl font-bold text-gray-900">
                            Disclaimer
                            </DialogTitle>
                            <div className="mt-2">
                            <div className="text-xs sm:text-sm text-gray-700 leading-relaxed space-y-2 max-h-60 sm:max-h-80 overflow-y-auto">
                                <p>
                                In adherence to the rules of Bar Council of India, Advocates are not permitted to solicit work or advertise our services. This website has been developed solely for informational purposes and by clicking "I AGREE" user acknowledges and agree to the following:
                                </p>
                                <p>
                                <strong>1.</strong> There has been no advertisement, personal communication, solicitation, invitation, or any form of inducement whatsoever by Vipin Chand Garg or any of his associates to solicit any work or engage in professional services through this website.
                                </p>
                                <p>
                                <strong>2.</strong> The user wishes to gain more information about the advocate for his/her own information and personal use.
                                </p>
                                <p>
                                <strong>3.</strong> All information pertaining to him and the services offered on this website are provided to the user exclusively upon his/her/their specific request. Any information obtained or materials downloaded from this website are entirely at the user's volition. The transmission, receipt, or use of this site does not, and will not, create any lawyer-client relationship.      
                                </p>
                                <p>
                                <strong>4.</strong> This website serves as a general informational resource only and, while diligent efforts are made to ensure accuracy and completeness, it is not promised or guaranteed to be exhaustive or entirely up-to-date. He does not warrant that the information contained herein is accurate or complete, and hereby disclaims any and all liability to any person for any loss or damage caused by errors or omissions, whether such errors or omissions result from negligence, accident, or any other cause.
                                </p>
                                <p>
                                <strong>5.</strong> Advocate assumes no liability for the interpretation and/or use of the information presented on this website, nor does he offer any warranty of any kind, whether express or implied.
                                </p>
                                <p>
                                The content provided on this website does not constitute, and shall not be construed as, legal advice or a substitute for professional legal advice. Users encountering any legal issues must, in all cases, seek independent legal counsel, as the material contained herein does not constitute or substitute the professional advice that may be required before acting on any matter. He is not liable for any consequence resulting from any action taken by the user based on material or information provided on this website or through any external links displayed thereon. All material and information (excluding any statutory instruments or judicial precedents) present on this website is the intellectual property. No part thereof shall be used, with or without adaptation, copied, distributed, or modified without the express prior written consent. 
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-3">
                        <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:w-auto transition-colors"
                        >
                        I AGREE
                        </button>
                        <button
                        type="button"
                        data-autofocus
                        onClick={() => window.location.href = 'https://www.google.com'}
                        className="mt-3 sm:mt-0 inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:w-auto transition-colors"
                        >
                        I DISAGREE
                        </button>
                    </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>


        <Dialog open={mapOpen} onClose={setMapOpen} className="relative z-50">
        <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-2 sm:p-4 text-center sm:items-center">
            <DialogPanel
                transition
                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-5xl data-closed:sm:translate-y-0 data-closed:sm:scale-95 mx-2 sm:mx-4 w-full max-w-[95vw]"
            >
                <div className="bg-white px-3 sm:px-4 pt-4 sm:pt-5 pb-3 sm:pb-4">
                <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex size-10 sm:size-12 shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0">
                    <MapIcon aria-hidden="true" className="size-5 sm:size-6 text-blue-600" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <DialogTitle as="h3" className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                        Chamber Location & Directions
                    </DialogTitle>
                    
                    {/* Advocate Name and Title */}
                    <div className="mb-3 p-3 bg-blue-50 rounded-lg border border-blue-200 cursor-pointer">
                        <h4 className="text-base sm:text-lg lg:text-xl font-bold text-black-900 mb-1">
                        Vipin Chand Garg
                        </h4>
                        <p className="text-sm sm:text-base text-red-700 font-medium">
                        Advocate & Notary (Govt. Of India)
                        </p>
                    </div>
                    
                    {/* Address Information */}
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg border-l-4 border-blue-400">
                        <p className="text-sm sm:text-base font-medium text-gray-900 mb-1">
                        Freedom Fighter Ratan Lal Garg Advocate Memorial Chamber
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600">
                        Beside Shiv Mandir, Opposite Election Office, Meerut Court, Uttar Pradesh — 250001, India
                        </p>
                    </div>

                    {/* Responsive Map Container */}
                    <div className="mt-4">
                        <div className="relative w-full overflow-hidden rounded-lg shadow-lg border border-gray-200">
                        {/* Mobile Map */}
                        <div className="block sm:hidden">
                            <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d208.7487212277923!2d77.71594888702856!3d28.989213973585976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1751390905988!5m2!1sen!2sin" 
                            width="100%" 
                            height="250" 
                            style={{border:'0'}} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Chamber Location Map"
                            ></iframe>
                        </div>
                        
                        {/* Tablet Map */}
                        <div className="hidden sm:block lg:hidden">
                            <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d208.7487212277923!2d77.71594888702856!3d28.989213973585976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1751390905988!5m2!1sen!2sin" 
                            width="100%" 
                            height="350" 
                            style={{border:'0'}} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Chamber Location Map"
                            ></iframe>
                        </div>
                        
                        {/* Desktop Map */}
                        <div className="hidden lg:block">
                            <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d208.7487212277923!2d77.71594888702856!3d28.989213973585976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1751390905988!5m2!1sen!2sin" 
                            width="100%" 
                            height="450" 
                            style={{border:'0'}} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Chamber Location Map"
                            ></iframe>
                        </div>
                        </div>
                        
                        {/* Quick Actions */}
                        <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-3">
                        <a
                            href="https://maps.app.goo.gl/CiF5RocJDxZv6TDk6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center px-3 sm:px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 transition-colors"
                        >
                            <MapIcon className="w-4 h-4 mr-2" />
                            Open in Google Maps
                        </a>
                        <a
                            href="https://www.google.com/maps/dir//28.9892140,77.7159489/@28.9892140,77.7159489,17z"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center px-3 sm:px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 transition-colors"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>
                            Get Directions
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="bg-gray-50 px-3 sm:px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-2 sm:gap-3">
                <button
                    type="button"
                    onClick={() => setMapOpen(false)}
                    className="inline-flex w-full justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 sm:w-auto transition-colors"
                >
                    Close
                </button>
                </div>
            </DialogPanel>
            </div>
        </div>
        </Dialog>
        
        <footer className="bg-[#333446] dark:bg-gray-900 w-full">
            <div className="mx-auto w-full max-w-7xl px-4 py-6 lg:py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Services Section */}
                    <div className="space-y-4">
                        <h2 className="text-sm font-semibold text-white uppercase tracking-wide">Area of Practice</h2>
                        <ul className="space-y-3">
                            <li>
                            <a onClick={handleNavigation} className="text-gray-300 hover:text-white hover:underline transition-colors text-sm cursor-pointer">
                                Criminal Law
                            </a>
                            </li>
                            <li>
                            <a onClick={handleNavigation} className="text-gray-300 hover:text-white hover:underline transition-colors text-sm cursor-pointer">
                                Notarial Services
                            </a>
                            </li>
                            <li>
                            <a onClick={handleNavigation} className="text-gray-300 hover:text-white hover:underline transition-colors text-sm cursor-pointer">
                                Civil Cases
                            </a>
                            </li>
                            <li>
                            <a onClick={handleNavigation} className="text-gray-300 hover:text-white hover:underline transition-colors text-sm cursor-pointer">
                                Family Cases
                            </a>
                            </li>
                            <li>
                            <a onClick={handleNavigation} className="text-gray-300 hover:text-white hover:underline transition-colors text-sm cursor-pointer">
                                MSME Cases
                            </a>
                            </li>
                        </ul>
                    </div>

                    {/* Meerut Office Section */}
                    <div className="space-y-4">
                        <h2 className="text-sm font-semibold text-white uppercase tracking-wide">Meerut Office</h2>
                        <div className="space-y-4">
                            {/* Name */}
                            <div onClick={contactdetails} className="flex items-start gap-3 cursor-pointer">
                                <img src={nameicon} alt="Name Icon" className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300 text-sm leading-relaxed break-words hover:underline">
                                    Advocate Vipin Chand Garg- Notary (Govt. Of India)
                                </span>
                            </div>
                            
                            {/* Address */}
                            <div onClick={()=>setMapOpen(true)} className="flex items-start gap-3 cursor-pointer">
                                <img src={mapicon} alt="Location Icon" className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300 text-sm leading-relaxed break-words hover:underline">
                                    Freedom Fighter Ratan Lal Garg Advocate Memorial Chamber, Beside Shiv Mandir, 
                                    Opposite Election Office, Meerut Court, Distt- Meerut, Uttar Pradesh – 250001
                                </span>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-3">
                                <img src={callIcon} alt="Call Icon" className="w-4 h-4 flex-shrink-0" />
                                <a href="tel:+919568529826" className="text-gray-300 hover:text-white hover:underline transition-colors text-sm cursor-pointer break-all">
                                    Mobile: +91-9568529826
                                </a>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-3">
                                <img src={mailIcon} alt="Email Icon" className="w-4 h-4 flex-shrink-0" />
                                <a href="mailto:vipin.garg64@gmail.com" className="text-gray-300 hover:text-white hover:underline transition-colors text-sm cursor-pointer break-all">
                                    E-Mail: vipin.garg64@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Legal Section */}
                    <div className="space-y-4">
                        <h2 className="text-sm font-semibold text-white uppercase tracking-wide">Legal</h2>
                        <ul className="space-y-3">
                            <li>
                                <button 
                                    onClick={() => setOpen(true)} 
                                    className="text-gray-300 hover:text-white hover:underline transition-colors text-sm cursor-pointer text-left"
                                >
                                    Disclaimer
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="my-6 border-gray-600" />
                
                {/* Copyright */}
                <div className="text-center">
                    <span className="text-sm text-gray-400 break-words">
                        © Copyright 2025, Advocate Vipin Chand Garg. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    </div>
    )
}