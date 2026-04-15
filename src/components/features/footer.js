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
        {/* Disclaimer Dialog */}
        <Dialog open={open} onClose={setOpen} className="relative z-50">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm transition-all duration-500 data-closed:opacity-0 data-enter:duration-500 data-enter:ease-out data-leave:duration-300 data-leave:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-2xl bg-white shadow-glass-xl ring-1 ring-black/5 transition-all duration-500 data-closed:translate-y-8 data-closed:opacity-0 data-closed:scale-95 data-enter:duration-500 data-enter:ease-out data-leave:duration-300 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-4xl mx-4"
                    >
                        <div className="h-1 bg-gradient-to-r from-navy-700 via-gold-400 to-navy-700"></div>
                        
                        <div className="bg-white px-6 pt-8 pb-6 sm:p-10 sm:pb-8">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 border border-amber-200/50 sm:mx-0">
                                    <ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-amber-600" />
                                </div>
                                <div className="mt-4 text-center sm:mt-0 sm:ml-6 sm:text-left flex-1">
                                    <DialogTitle as="h3" className="text-xl sm:text-2xl font-bold text-navy-900 mb-6">
                                        Important Legal Disclaimer
                                    </DialogTitle>
                                    <div className="mt-4">
                                        <div className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-4 max-h-72 sm:max-h-80 overflow-y-auto pr-2">
                                            <div className="bg-navy-50 rounded-xl p-4 border border-navy-100">
                                                <p className="text-gray-700 font-medium">
                                                    In adherence to the rules of Bar Council of India, Advocates are not permitted to solicit work or advertise our services. This website has been developed solely for informational purposes and by clicking <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">"I AGREE"</span> user acknowledges and agree to the following:
                                                </p>
                                            </div>
                                            
                                            <div className="space-y-3">
                                                {[
                                                    "There has been no advertisement, personal communication, solicitation, invitation, or any form of inducement whatsoever by Vipin Chand Garg or any of his associates to solicit any work or engage in professional services through this website.",
                                                    "The user wishes to gain more information about the advocate for his/her own information and personal use.",
                                                    "All information pertaining to him and the services offered on this website are provided to the user exclusively upon his/her/their specific request. Any information obtained or materials downloaded from this website are entirely at the user's volition. The transmission, receipt, or use of this site does not, and will not, create any lawyer-client relationship.",
                                                    "This website serves as a general informational resource only and, while diligent efforts are made to ensure accuracy and completeness, it is not promised or guaranteed to be exhaustive or entirely up-to-date. He does not warrant that the information contained herein is accurate or complete, and hereby disclaims any and all liability to any person for any loss or damage caused by errors or omissions, whether such errors or omissions result from negligence, accident, or any other cause.",
                                                    "Advocate assumes no liability for the interpretation and/or use of the information presented on this website, nor does he offer any warranty of any kind, whether express or implied."
                                                ].map((text, index) => (
                                                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                                        <div className="w-6 h-6 rounded-full bg-navy-700 flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-0.5">
                                                            {index + 1}
                                                        </div>
                                                        <p className="text-gray-600 leading-relaxed">{text}</p>
                                                    </div>
                                                ))}
                                                
                                                <div className="bg-amber-50 rounded-xl p-4 border border-amber-200/50 mt-4">
                                                    <p className="text-gray-600 leading-relaxed">
                                                        <span className="font-semibold text-amber-800">Important:</span> The content provided on this website does not constitute, and shall not be construed as, legal advice or a substitute for professional legal advice. Users encountering any legal issues must, in all cases, seek independent legal counsel. All material and information present on this website is the intellectual property. No part thereof shall be used, with or without adaptation, copied, distributed, or modified without the express prior written consent.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gray-50 px-6 py-4 sm:flex sm:flex-row-reverse sm:px-10 gap-3 border-t border-gray-100">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="inline-flex w-full justify-center items-center rounded-xl bg-navy-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-navy-800 sm:w-auto transition-all duration-300"
                            >
                                ✓ I AGREE & PROCEED
                            </button>
                            <button
                                type="button"
                                onClick={() => window.location.href = 'https://share.google/mWRVREO4Itym9qH9V'}
                                className="mt-3 sm:mt-0 inline-flex w-full justify-center items-center rounded-xl bg-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-300 sm:w-auto transition-all duration-300"
                            >
                                ✗ I DISAGREE & EXIT
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>

        <ChamberLocation mapOpen={mapOpen} setMapOpen={setMapOpen} />
        
        {/* Footer */}
        <footer className="relative w-full overflow-hidden">
            <div className="absolute inset-0 bg-navy-900"></div>
            
            {/* Subtle decorative elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-navy-700/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-gold-400/5 rounded-full blur-3xl"></div>
            
            <div className="relative mx-auto w-full max-w-7xl px-6 py-12 lg:py-14">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
                    {/* Practice Areas */}
                    <div className="space-y-5">
                        <div>
                            <h2 className="text-sm font-bold text-gold-400 uppercase tracking-widest mb-1.5">
                                Area of Practice
                            </h2>
                            <div className="w-10 h-0.5 bg-gold-400/50 rounded-full"></div>
                        </div>
                        <div className="bg-white/5 rounded-xl p-5 border border-white/5">
                            <ul className="space-y-3">
                                {[
                                    'Micro, Small and Medium Enterprises (MSME) Cases',
                                    'Criminal Cases',
                                    'Notarial Services', 
                                    'Civil Cases',
                                    'Family Cases',
                                ].map((service) => (
                                    <li key={service}>
                                        <button 
                                            onClick={handleNavigation} 
                                            className="group/item flex items-center gap-2.5 text-gray-400 hover:text-white transition-all duration-200 text-sm font-medium cursor-pointer w-full text-left"
                                        >
                                            <span className="w-1 h-1 bg-gold-400 rounded-full group-hover/item:scale-150 transition-transform duration-200"></span>
                                            <span className="group-hover/item:translate-x-0.5 transition-transform duration-200">
                                                {service}
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Office Info */}
                    <div className="space-y-5">
                        <div>
                            <h2 className="text-sm font-bold text-gold-400 uppercase tracking-widest mb-1.5">
                                Meerut Office
                            </h2>
                            <div className="w-10 h-0.5 bg-gold-400/50 rounded-full"></div>
                        </div>
                        <div className="bg-white/5 rounded-xl p-5 border border-white/5">
                            <div className="space-y-4">
                                {/* Name */}
                                <div onClick={contactdetails} className="group/contact flex items-start gap-3 cursor-pointer p-2.5 rounded-lg hover:bg-white/5 transition-all duration-200">
                                    <div className="w-8 h-8 rounded-lg bg-navy-700/50 flex items-center justify-center border border-white/5 flex-shrink-0 mt-0.5">
                                        <img src={nameicon} alt="Name Icon" className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium text-sm mb-0.5">Advocate</p>
                                        <span className="text-gray-400 text-sm group-hover/contact:text-white transition-colors duration-200">
                                            Vipin Chand Garg - Notary (Govt. Of India)
                                        </span>
                                    </div>
                                </div>
                                
                                {/* Address */}
                                <a href="https://maps.app.goo.gl/mXPLkTq1Ui19FSmg7" target="_blank" rel="noopener noreferrer" className="group/address flex items-start gap-3 cursor-pointer p-2.5 rounded-lg hover:bg-white/5 transition-all duration-200 no-underline">
                                    <div className="w-8 h-8 rounded-lg bg-navy-700/50 flex items-center justify-center border border-white/5 flex-shrink-0 mt-0.5">
                                        <img src={mapicon} alt="Location Icon" className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium text-sm mb-0.5">Chamber Address</p>
                                        <span className="text-gray-400 text-sm leading-relaxed group-hover/address:text-white transition-colors duration-200">
                                            Chamber No. 79, Advocate Vipin Chand Garg, Opposite Jila Panchayat Office, Collectorate Compound, Meerut Court, Meerut, Uttar Pradesh- 250001
                                        </span>
                                    </div>
                                </a>

                                {/* Phone */}
                                <div className="group/phone p-2.5 rounded-lg hover:bg-white/5 transition-all duration-200">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-navy-700/50 flex items-center justify-center border border-white/5 flex-shrink-0">
                                            <img src={callIcon} alt="Call Icon" className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium text-sm mb-0.5">Contact</p>
                                            <a href="tel:+919568529826" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm cursor-pointer">
                                                +91-9568529826
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="group/email p-2.5 rounded-lg hover:bg-white/5 transition-all duration-200">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-navy-700/50 flex items-center justify-center border border-white/5 flex-shrink-0">
                                            <img src={mailIcon} alt="Email Icon" className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium text-sm mb-0.5">Email Us</p>
                                            <a href="mailto:vipin.garg64@gmail.com" className="text-gray-400 hover:text-gold-400 transition-colors text-sm cursor-pointer break-all">
                                                vipin.garg64@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Legal Section */}
                    <div className="space-y-5">
                        <div>
                            <h2 className="text-sm font-bold text-gold-400 uppercase tracking-widest mb-1.5">
                                Legal Information
                            </h2>
                            <div className="w-10 h-0.5 bg-gold-400/50 rounded-full"></div>
                        </div>
                        <div className="bg-white/5 rounded-xl p-5 border border-white/5">
                            <div className="space-y-4">
                                <button 
                                    onClick={() => setOpen(true)} 
                                    className="group/disclaimer flex items-center gap-2.5 text-gray-400 hover:text-white transition-all duration-200 text-sm font-medium cursor-pointer w-full text-left p-2.5 rounded-lg hover:bg-white/5"
                                >
                                    <span className="w-1 h-1 bg-gold-400 rounded-full group-hover/disclaimer:scale-150 transition-transform duration-200"></span>
                                    <span className="group-hover/disclaimer:translate-x-0.5 transition-transform duration-200">
                                        View Disclaimer
                                    </span>
                                </button>
                                
                                <div className="bg-white/5 rounded-lg p-4 border border-white/5">
                                    <p className="text-gray-500 text-xs leading-relaxed">
                                        <span className="font-semibold text-gold-400">Notice:</span> This website is for general informational purposes only and does not constitute legal advice. The content provided on this website does not constitute, and shall not be construed as, legal advice or a substitute for professional legal advice. Users encountering any legal issues must, in all cases, seek independent legal counsel. All material and information present on this website is the intellectual property. No part thereof shall be used, with or without adaptation, copied, distributed, or modified without the express prior written consent.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-10 pt-6 border-t border-white/5">
                    <div className="text-center">
                        <span className="text-sm font-medium text-gray-400">
                            © Copyright {new Date().getFullYear()}, Advocate Vipin Chand Garg
                        </span>
                        <p className="text-gray-500 text-xs mt-1">
                            All Rights Reserved. Legal Services in Meerut, Uttar Pradesh.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    )
}
