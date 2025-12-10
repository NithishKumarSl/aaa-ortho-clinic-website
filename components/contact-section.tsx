export default function ContactSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#FDFEFF] px-4 sm:px-5 md:px-[5%]">
      <div className="max-w-[1280px] mx-auto">
        {/* Main Contact Card */}
        <div className="bg-[#FDFEFF] border border-[rgba(18,52,91,0.06)] rounded-xl sm:rounded-2xl overflow-hidden mb-8 sm:mb-10 md:mb-12 shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
          <div className="grid md:grid-cols-2">
            {/* Left - Contact Info */}
            <div className="p-6 sm:p-8 md:p-12 order-2 md:order-1">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1c76e4] mb-4 sm:mb-6">AAA ortho clinic</h3>
              <p className="text-[10px] sm:text-xs font-semibold text-[#0a65d9] uppercase tracking-wider mb-4 sm:mb-6 leading-relaxed">
                BONE | JOINT | SPINE | PEDIATRIC | ARTHRITIS
              </p>

              <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
                <div>
                  <p className="text-[10px] sm:text-xs text-[#666] uppercase font-semibold mb-1.5">Address</p>
                  <a href="https://www.google.com/maps/place/AAA+ORTHO+CLINIC/@10.4282674,79.3151156,214m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3b00017013723d4f:0x15b957534fe0b48e!8m2!3d10.4282661!4d79.3157593!16s%2Fg%2F11rdbwf2fg?hl=en&entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-[#222] hover:text-[#0a65d9] transition-colors no-underline">
                    Vadachery Road, Pattukkottai
                  </a>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-[#666] uppercase font-semibold mb-1.5">Phone</p>
                  <a href="tel:+918220776119" className="text-sm sm:text-base text-[#222] hover:text-[#0a65d9] transition-colors no-underline font-medium">
                    82 20 77 61 19
                  </a>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-[#666] uppercase font-semibold mb-1.5">Email</p>
                  <a href="mailto:aaaorthoclinic@gmail.com" className="text-sm sm:text-base text-[#222] hover:text-[#0a65d9] transition-colors no-underline">
                    aaaorthoclinic@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Map */}
            <div className="bg-[#f5f9ff] h-[300px] sm:h-[350px] md:h-auto relative order-1 md:order-2">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.1234567890123!2d79.3157593!3d10.4282661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00017013723d4f%3A0x15b957534fe0b48e!2sAAA%20ORTHO%20CLINIC!5e0!3m2!1sen!2sin!4v1735747200000!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="AAA Ortho Clinic Location"
              />
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex flex-col gap-2 z-10">
                <a
                  href="https://www.google.com/maps/place/AAA+ORTHO+CLINIC/@10.4282674,79.3151156,214m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3b00017013723d4f:0x15b957534fe0b48e!8m2!3d10.4282661!4d79.3157593!16s%2Fg%2F11rdbwf2fg?hl=en&entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#1c76e4] px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-lg flex items-center gap-2 border border-[#1c76e4] text-xs sm:text-sm active:scale-[0.98]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className="whitespace-nowrap">View on Maps</span>
                </a>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=10.4282661,79.3157593"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1c76e4] text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-medium hover:bg-[#1565c0] transition-colors shadow-lg flex items-center gap-2 text-xs sm:text-sm active:scale-[0.98]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                  <span className="whitespace-nowrap">Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Info Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          <div className="bg-[#FDFEFF] p-4 sm:p-5 rounded-xl border border-[rgba(18,52,91,0.06)] text-center shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <p className="text-[10px] sm:text-xs text-[#666] uppercase font-semibold mb-2">Opening Hours</p>
            <p className="text-sm sm:text-base font-semibold text-[#222]">11 AM – 2 PM<br />6 PM – 9 PM</p>
          </div>
          <div className="bg-[#FDFEFF] p-4 sm:p-5 rounded-xl border border-[rgba(18,52,91,0.06)] text-center shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <p className="text-[10px] sm:text-xs text-[#666] uppercase font-semibold mb-2">Location</p>
            <p className="text-sm sm:text-base font-semibold text-[#222]">Vadachery Road,<br />Pattukkottai</p>
          </div>
          <div className="bg-[#FDFEFF] p-4 sm:p-5 rounded-xl border border-[rgba(18,52,91,0.06)] text-center shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <p className="text-[10px] sm:text-xs text-[#666] uppercase font-semibold mb-2">Emergency</p>
            <p className="text-sm sm:text-base font-semibold text-[#222]">24/7 Available</p>
            <a href="tel:+918220776119" className="text-xs sm:text-sm text-[#0a65d9] mt-1 inline-block hover:underline">82 20 77 61 19</a>
          </div>
        </div>
      </div>
    </section>
  )
}

