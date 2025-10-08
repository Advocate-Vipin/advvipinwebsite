import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { MapIcon } from "@heroicons/react/24/outline";

export default function ChamberLocation(props) {
  const { mapOpen, setMapOpen } = props;
  // Your chamber's real address Google EMBED code (centered, with marker)
  // If you want a different marker or closer zoom, adjust zoom/coords
  const embedSrc =
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d208.7487212277923!2d77.71594888702856!3d28.989213973585976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1751390905988!5m2!1sen!2sin";
  const mapsAppLink = "https://maps.app.goo.gl/Pr7c6hrUHr6a5MYg6";

  return (
    <Dialog open={mapOpen} onClose={setMapOpen} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-800/60 backdrop-blur-sm transition-opacity"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-3 sm:p-6 text-center sm:items-center">
          <DialogPanel
            transition
            className="relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-xl text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-2xl mx-2 w-full max-w-[97vw] flex flex-col"
          >
            <div className="bg-white/80 px-4 sm:px-8 pt-6 pb-5">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 flex items-center justify-center size-12 rounded-full bg-blue-100">
                  <MapIcon aria-hidden="true" className="size-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <DialogTitle as="h3" className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    Chamber Location & Directions
                  </DialogTitle>
                  <div className="mb-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="sm:text-lg text-base font-bold text-gray-900 mb-1">
                      Vipin Chand Garg
                    </h4>
                    <p className="text-sm text-red-700 font-medium">
                      Advocate & Notary (Govt. Of India)
                    </p>
                  </div>
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg border-l-4 border-blue-400">
                    <p className="text-sm font-medium text-gray-900 mb-1">
                      Freedom Fighter Ratan Lal Garg Advocate Memorial Chamber
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Beside Shiv Mandir, Opposite Election Office, Meerut Court, Uttar Pradesh — 250001, India
                    </p>
                  </div>
                  {/* LIVE MAP PREVIEW */}
                  <div className="mt-4 relative w-full rounded-xl overflow-hidden border border-gray-200 shadow-md aspect-[16/9] bg-gray-100">
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
                  <div className="mt-5 flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <a
                      href={mapsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 transition"
                    >
                      <MapIcon className="w-4 h-4 mr-2" />
                      Open in Google Maps
                    </a>
                    <a
                      href={"https://www.google.com/maps/dir/?api=1&destination=28.9863,77.7109"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 transition"
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
            <div className="bg-gray-50 px-4 py-3 flex justify-end rounded-b-2xl">
              <button
                type="button"
                onClick={() => setMapOpen(false)}
                className="inline-flex items-center px-5 py-2 rounded-md bg-gray-600 text-white text-sm font-semibold shadow-sm hover:bg-gray-500 transition"
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
