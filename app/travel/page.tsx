import Footer from "@/components/Footer";

export default function TravelPage() {
  return (
    <main className="pt-16">
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-gold opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-sky-blue opacity-5 blur-3xl" />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Memphis Skyline Image */}
          <div className="mb-10 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/memphis-city-skyline-golden-silhouette-vector.jpg"
              alt="Memphis City Skyline"
              className="w-full h-auto"
            />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-4">
            Travel & Lodging
          </h2>
          <div className="h-1 w-20 bg-gradient-gold rounded mb-10" />

          {/* Hotel Details */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Hotel Image */}
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/images/a-room-with-a-view.jpg"
                  alt="Hyatt Place Memphis Room"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Hotel Info */}
              <div>
                <h3 className="font-serif text-2xl font-bold text-charcoal mb-1">Host Hotel</h3>
                <p className="font-serif text-xl text-gold-500 mb-4">Hyatt Place Memphis/Germantown</p>
                <ul className="space-y-1 text-gray-600 text-base mb-6">
                  <li>9161 Winchester Road, Germantown, TN 38138</li>
                  <li>Tel: +1 901 759 1174</li>
                  <li>Fax: +1 901 759 1175</li>
                </ul>
                <a
                  href="https://www.hyatt.com/en-US/hotel/tennessee/hyatt-place-memphis-germantown/memzg?corp_id=G-HKSR"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-6 py-3 bg-charcoal text-gold-200 rounded-lg border border-gold-300 hover:bg-gold-300 hover:text-charcoal transition-all duration-300"
                >
                  Book With Group Code G-HKSR
                </a>
              </div>
            </div>
          </div>

          {/* Reservation Instructions */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 mb-10 border border-gold-200/60">
            <h3 className="font-serif text-2xl font-bold text-charcoal mb-3">Reservation Options</h3>
            <p className="text-gray-700 mb-6">
              All reservations must be completed before the cutoff date:
              <span className="font-semibold text-charcoal"> Friday, May 1st, 2026</span>.
            </p>

            <div className="space-y-6 text-gray-700">
              <p className="font-bold text-charcoal bg-gold-100/60 border-l-4 border-gold-500 px-4 py-3 rounded">
                Group booking dates are only for June 11th - June 14th. If you want to stay June 15th,
                you must call the hotel, and it will be a different rate.
              </p>

              <div>
                <h4 className="font-serif text-xl text-gold-600 mb-2">1. Reserve Online</h4>
                <p className="mb-2">
                  Use the official reunion booking link, then select your dates, click FIND ROOMS or BOOK NOW,
                  and choose your room type.
                </p>
                <a
                  href="https://www.hyatt.com/en-US/hotel/tennessee/hyatt-place-memphis-germantown/memzg?corp_id=G-HKSR"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gold-700 underline underline-offset-4 hover:text-gold-800 break-all"
                >
                  https://www.hyatt.com/en-US/hotel/tennessee/hyatt-place-memphis-germantown/memzg?corp_id=G-HKSR
                </a>
              </div>

              <div>
                <h4 className="font-serif text-xl text-gold-600 mb-2">2. Reserve By Phone (Hotel Front Desk)</h4>
                <p>
                  Call <span className="font-semibold">901-759-1174</span>, press 0 for the Front Desk Host,
                  and provide group code <span className="font-semibold">G-HKSR</span>.
                </p>
              </div>

              <div>
                <h4 className="font-serif text-xl text-gold-600 mb-2">3. Reserve By Phone (Hyatt Reservations)</h4>
                <p>
                  Call <span className="font-semibold">1-844-473-8324</span> and provide group code
                  <span className="font-semibold"> G-HKSR</span>.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gold-200/70">
              <h4 className="font-serif text-xl text-charcoal mb-3">Group Room Rates</h4>
              <ul className="space-y-2 text-gray-700">
                <li>Standard King with Sofa Sleeper: <span className="font-semibold">$117.00 + tax</span> (currently 19.75%)</li>
                <li>Standard Double Queen with Sofa Sleeper: <span className="font-semibold">$127.00 + tax</span> (currently 19.75%)</li>
              </ul>
            </div>
          </div>

          {/* Embedded Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Hyatt Place Memphis Germantown"
              src="https://maps.google.com/maps?q=9161+Winchester+Road,+Germantown,+TN+38138&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Airport Information */}
          <div className="mt-10 bg-white rounded-2xl shadow-lg p-8 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/images/travel-scene-airplane.jpg"
                  alt="Travel illustration with airplane"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">Memphis International Airport</h3>
                <p className="font-serif text-xl text-gold-500 mb-4">Airport Code: MEM</p>
                <ul className="space-y-2 text-gray-600 text-base mb-6">
                  <li>Address: 2491 Winchester Rd, Memphis, TN 38116</li>
                  <li>Approximate drive to the host hotel: 20-25 minutes</li>
                  <li>Ground transportation: rideshare, taxi, and rental cars available at arrivals</li>
                </ul>
                <a
                  href="https://flymemphis.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-6 py-3 bg-charcoal text-gold-200 rounded-lg border border-gold-300 hover:bg-gold-300 hover:text-charcoal transition-all duration-300"
                >
                  Visit Airport Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
