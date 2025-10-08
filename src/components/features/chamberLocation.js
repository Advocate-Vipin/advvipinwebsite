import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import {MapIcon} from "@heroicons/react/24/outline";
export default function ChamberLocation(props) {

    const { mapOpen, setMapOpen } = props;
    
    return (
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
                          href="https://maps.app.goo.gl/Pr7c6hrUHr6a5MYg6"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center px-3 sm:px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 transition-colors"
                        >
                          <MapIcon className="w-4 h-4 mr-2" />
                          Open in Google Maps
                        </a>
                        <a
                          href="https://maps.app.goo.gl/Pr7c6hrUHr6a5MYg6"
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
    );
}