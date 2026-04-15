import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { MapIcon } from "@heroicons/react/24/outline";

export default function ChamberLocation(props) {
  const { mapOpen, setMapOpen } = props;
  // Your chamber's real address Google EMBED code (centered, with marker)
  // If you want a different marker or closer zoom, adjust zoom/coords
  const embedSrc =
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d208.7487212277923!2d77.71594888702856!3d28.989213973585976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1751390905988!5m2!1sen!2sin";
  const mapsAppLink = "https://maps.app.goo.gl/mXPLkTq1Ui19FSmg7";

  return (
    <Dialog open={mapOpen} onClose={setMapOpen} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-navy-950/60 backdrop-blur-sm transition-opacity"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-3 sm:p-6 text-center sm:items-center">
          <DialogPanel
            transition
            className="relative overflow-hidden rounded-2xl bg-white text-left shadow-glass-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl mx-2 w-full max-w-[97vw] flex flex-col"
          >
            <div className="h-1 bg-gradient-to-r from-navy-700 via-gold-400 to-navy-700"></div>
            <div className="bg-white px-4 sm:px-8 pt-6 pb-5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center size-11 rounded-xl bg-navy-50 border border-navy-200/50">
                  <MapIcon aria-hidden="true" className="size-5 text-navy-700" />
                </div>
                <div className="flex-1">
                  <DialogTitle as="h3" className="text-xl sm:text-2xl font-bold text-navy-900 mb-2">
                    Chamber Location & Directions
                  </DialogTitle>
                  <div className="mb-3 p-3 bg-navy-50 rounded-lg border border-navy-100">
                    <h4 className="sm:text-lg text-base font-bold text-navy-900 mb-1">
                      Vipin Chand Garg
                    </h4>
                    <p className="text-sm text-red-600 font-medium">
                      Advocate & Notary (Govt. Of India)
                    </p>
                  </div>
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg border-l-4 border-gold-400">
                    <p className="text-sm font-medium text-navy-900 mb-1">
                      Chamber No. 79, Advocate Vipin Chand Garg
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Opposite Jila Panchayat Office, Collectorate Compound, Meerut Court, Meerut, Uttar Pradesh- 250001
                    </p>
                  </div>
                  {/* LIVE MAP PREVIEW */}
                  <div className="mt-4 relative w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm aspect-[16/9] bg-gray-100">
                    <iframe
                      src={embedSrc}
                      width="100%"
                      height="100%"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Chamber Location Map"
                      style={{
                        border: 0, width: '100%', height: '100%', minHeight: 180, maxHeight: 340,
                      }}
                      className="w-full h-44 sm:h-64 md:h-80"
                    ></iframe>
                  </div>
                  <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <a
                      href={mapsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-3 py-2.5 text-sm font-medium text-white bg-navy-700 border border-transparent rounded-lg hover:bg-navy-800 transition no-underline"
                    >
                      <MapIcon className="w-4 h-4 mr-2" />
                      Open in Google Maps
                    </a>
                    <a
                      href={mapsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-3 py-2.5 text-sm font-medium text-navy-700 bg-navy-50 border border-navy-200 rounded-lg hover:bg-navy-100 transition no-underline"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      Get Driving Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 flex justify-end rounded-b-2xl border-t border-gray-100">
              <button
                type="button"
                onClick={() => setMapOpen(false)}
                className="inline-flex items-center px-5 py-2 rounded-lg bg-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-300 transition"
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
