import {useState} from 'react';
import callIcon from '../../assets/callicon.svg';
import mailIcon from '../../assets/gmailicon.svg';
import mapicon from '../../assets/mapicon.svg';
import nameicon from '../../assets/nameicon.svg';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom';
import {MapIcon} from "@heroicons/react/24/outline";
import  ChamberLocation  from './chamberLocation';

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
        {/* Enhanced Disclaimer Dialog */}
        <Dialog open={open} onClose={setOpen} className="relative z-50">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-slate-900/60 backdrop-blur-md transition-all duration-500 data-closed:opacity-0 data-enter:duration-500 data-enter:ease-out data-leave:duration-300 data-leave:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl ring-1 ring-white/20 transition-all duration-500 data-closed:translate-y-8 data-closed:opacity-0 data-closed:scale-95 data-enter:duration-500 data-enter:ease-out data-leave:duration-300 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-4xl mx-4 border border-slate-200/50"
                    >
                        {/* Gradient Header */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
                        
                        <div className="bg-gradient-to-br from-white/80 to-slate-50/80 backdrop-blur-xl px-6 pt-8 pb-6 sm:p-10 sm:pb-8">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 shadow-lg ring-4 ring-white/50 sm:mx-0">
                                    <ExclamationTriangleIcon aria-hidden="true" className="h-8 w-8 text-amber-600 drop-shadow-sm" />
                                </div>
                                <div className="mt-4 text-center sm:mt-0 sm:ml-8 sm:text-left flex-1">
                                    <DialogTitle as="h3" className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-6 leading-tight">
                                        Important Legal Disclaimer
                                    </DialogTitle>
                                    <div className="mt-4">
                                        <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-4 max-h-72 sm:max-h-80 overflow-y-auto pr-2">
                                            <div className="bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-xl p-4 border border-blue-200/30">
                                                <p className="text-slate-600 font-medium">
                                                    In adherence to the rules of Bar Council of India, Advocates are not permitted to solicit work or advertise our services. This website has been developed solely for informational purposes and by clicking <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md">"I AGREE"</span> user acknowledges and agree to the following:
                                                </p>
                                            </div>
                                            
                                            <div className="space-y-4">
                                                {[
                                                    "There has been no advertisement, personal communication, solicitation, invitation, or any form of inducement whatsoever by Vipin Chand Garg or any of his associates to solicit any work or engage in professional services through this website.",
                                                    "The user wishes to gain more information about the advocate for his/her own information and personal use.",
                                                    "All information pertaining to him and the services offered on this website are provided to the user exclusively upon his/her/their specific request. Any information obtained or materials downloaded from this website are entirely at the user's volition. The transmission, receipt, or use of this site does not, and will not, create any lawyer-client relationship.",
                                                    "This website serves as a general informational resource only and, while diligent efforts are made to ensure accuracy and completeness, it is not promised or guaranteed to be exhaustive or entirely up-to-date. He does not warrant that the information contained herein is accurate or complete, and hereby disclaims any and all liability to any person for any loss or damage caused by errors or omissions, whether such errors or omissions result from negligence, accident, or any other cause.",
                                                    "Advocate assumes no liability for the interpretation and/or use of the information presented on this website, nor does he offer any warranty of any kind, whether express or implied."
                                                ].map((text, index) => (
                                                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50/50 transition-colors duration-200">
                                                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5">
                                                            {index + 1}
                                                        </div>
                                                        <p className="text-slate-600 leading-relaxed">{text}</p>
                                                    </div>
                                                ))}
                                                
                                                <div className="bg-gradient-to-r from-amber-50/50 to-orange-50/50 rounded-xl p-4 border border-amber-200/30 mt-6">
                                                    <p className="text-slate-600 leading-relaxed">
                                                        <span className="font-semibold text-amber-800">Important:</span> The content provided on this website does not constitute, and shall not be construed as, legal advice or a substitute for professional legal advice. Users encountering any legal issues must, in all cases, seek independent legal counsel. All material and information present on this website is the intellectual property. No part thereof shall be used, with or without adaptation, copied, distributed, or modified without the express prior written consent.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-slate-50/80 to-slate-100/80 backdrop-blur-xl px-6 py-5 sm:flex sm:flex-row-reverse sm:px-10 gap-4 border-t border-slate-200/50">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="group relative inline-flex w-full justify-center items-center rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 px-8 py-4 text-sm font-bold text-white shadow-xl hover:shadow-2xl sm:w-auto transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
                            >
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                                <span className="relative flex items-center gap-2">
                                    ✓ I AGREE & PROCEED
                                </span>
                            </button>
                            <button
                                type="button"
                                onClick={() => window.location.href = 'https://www.google.com'}
                                className="group relative mt-3 sm:mt-0 inline-flex w-full justify-center items-center rounded-2xl bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 px-8 py-4 text-sm font-bold text-white shadow-xl hover:shadow-2xl sm:w-auto transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
                            >
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                                <span className="relative flex items-center gap-2">
                                    ✗ I DISAGREE & EXIT
                                </span>
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>

        <ChamberLocation mapOpen={mapOpen} setMapOpen={setMapOpen} />
        
        {/* Modern Footer with Glassmorphism */}
        <footer className="relative w-full overflow-hidden">
            {/* Background with Modern Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl"></div>
            
            <div className="relative mx-auto w-full max-w-7xl px-6 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
                    {/* Enhanced Services Section */}
                    <div className="space-y-6 group">
                        <div className="relative">
                            <h2 className="text-lg font-bold text-white uppercase tracking-wider mb-2 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                Area of Practice
                            </h2>
                            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group-hover:shadow-2xl">
                            <ul className="space-y-4">
                                {[
                                    'Criminal Law',
                                    'Notarial Services', 
                                    'Civil Cases',
                                    'Family Cases',
                                    'MSME Cases'
                                ].map((service) => (
                                    <li key={service}>
                                        <button 
                                            onClick={handleNavigation} 
                                            className="group/item flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 text-base font-medium cursor-pointer w-full text-left"
                                        >
                                            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full group-hover/item:scale-125 transition-transform duration-300"></div>
                                            <span className="group-hover/item:translate-x-1 transition-transform duration-300">
                                                {service}
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Enhanced Meerut Office Section */}
                    <div className="space-y-6 group">
                        <div className="relative">
                            <h2 className="text-lg font-bold text-white uppercase tracking-wider mb-2 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                                Meerut Office
                            </h2>
                            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group-hover:shadow-2xl">
                            <div className="space-y-5">
                                {/* Enhanced Name */}
                                <div onClick={contactdetails} className="group/contact flex items-start gap-4 cursor-pointer p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 flex items-center justify-center border border-white/10 group-hover/contact:scale-110 transition-transform duration-300">
                                        <img src={nameicon} alt="Name Icon" className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold mb-1">Advocate</p>
                                        <span className="text-gray-300 text-sm leading-relaxed group-hover/contact:text-white transition-colors duration-300">
                                            Vipin Chand Garg - Notary (Govt. Of India)
                                        </span>
                                    </div>
                                </div>
                                
                                {/* Enhanced Address */}
                                <div onClick={()=>setMapOpen(true)} className="group/address flex items-start gap-4 cursor-pointer p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-white/10 group-hover/address:scale-110 transition-transform duration-300">
                                        <img src={mapicon} alt="Location Icon" className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold mb-1">Chamber Address</p>
                                        <span className="text-gray-300 text-sm leading-relaxed group-hover/address:text-white transition-colors duration-300">
                                            Freedom Fighter Ratan Lal Garg Advocate Memorial Chamber, Beside Shiv Mandir, 
                                            Opposite Election Office, Meerut Court, Distt- Meerut, Uttar Pradesh – 250001
                                        </span>
                                    </div>
                                </div>

                                {/* Enhanced Phone */}
                                <div className="group/phone p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center border border-white/10 group-hover/phone:scale-110 transition-transform duration-300">
                                            <img src={callIcon} alt="Call Icon" className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold mb-1">Call Us</p>
                                            <a href="tel:+919568529826" className="text-gray-300 hover:text-green-400 transition-colors text-sm cursor-pointer group-hover/phone:text-green-300">
                                                +91-9568529826
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Enhanced Email */}
                                <div className="group/email p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center border border-white/10 group-hover/email:scale-110 transition-transform duration-300">
                                            <img src={mailIcon} alt="Email Icon" className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold mb-1">Email Us</p>
                                            <a href="mailto:vipin.garg64@gmail.com" className="text-gray-300 hover:text-orange-400 transition-colors text-sm cursor-pointer group-hover/email:text-orange-300 break-all">
                                                vipin.garg64@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Legal Section */}
                    <div className="space-y-6 group">
                        <div className="relative">
                            <h2 className="text-lg font-bold text-white uppercase tracking-wider mb-2 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                                Legal Information
                            </h2>
                            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group-hover:shadow-2xl">
                            <div className="space-y-4">
                                <button 
                                    onClick={() => setOpen(true)} 
                                    className="group/disclaimer flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 text-base font-medium cursor-pointer w-full text-left p-3 rounded-xl hover:bg-white/5"
                                >
                                    <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full group-hover/disclaimer:scale-125 transition-transform duration-300"></div>
                                    <span className="group-hover/disclaimer:translate-x-1 transition-transform duration-300">
                                        View Disclaimer
                                    </span>
                                </button>
                                
                                <div className="bg-gradient-to-r from-amber-50/5 to-orange-50/5 rounded-xl p-4 border border-amber-500/20">
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        <span className="font-semibold text-amber-400">Notice:</span> This website is for informational purposes only and does not constitute legal advice. Please consult with the advocate for specific legal matters.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Copyright Section */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-pulse"></div>
                            <span className="text-base font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                © Copyright 2025, Advocate Vipin Chand Garg
                            </span>
                            <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-pulse delay-500"></div>
                        </div>
                        <p className="text-gray-400 text-sm">
                            All Rights Reserved. Legal Services in Meerut, Uttar Pradesh.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    )
}
