import Image from "next/image"

export default function Footer() {
  return (
    <footer className="site-footer bg-[#f5f9ff] py-12 sm:py-14 md:py-16 px-5 sm:px-6 md:px-[5%]">
      <div className="container max-w-[1280px] mx-auto">
        <div className="footer-grid grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-12 items-start mb-10 sm:mb-12 md:mb-12">
          <div className="footer-left">
            <div className="footer-card bg-[#FDFEFF] rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 border border-[rgba(18,52,91,0.06)] shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1c76e4] mb-3">AAA ortho clinic</h4>
              <p className="text-xs sm:text-sm md:text-[15px] text-[#1c76e4] mb-4 sm:mb-5 tracking-wide">BONE | JOINT | SPINE | FRACTURE | ARTHRITIS</p>
              <p className="text-sm sm:text-[15px] text-[#6b7f99] mb-8 sm:mb-10 leading-relaxed max-w-[480px]">
                DELIVERING ADVANCED ORTHOPEDIC CARE TO PATTUKKOTTAI AND SURROUNDING AREAS.
              </p>
              
              <div className="contact flex items-center gap-3 sm:gap-3 mb-3 sm:mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#1c76e4] shrink-0">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" fill="currentColor"/>
                </svg>
                <a href="tel:+918220776119" className="text-[#1c76e4] no-underline font-medium hover:underline text-base sm:text-[15px]">
                  82 20 77 61 19
                </a>
              </div>
              <div className="contact flex items-center gap-3 sm:gap-3 mb-8 sm:mb-10 md:mb-10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#1c76e4] shrink-0">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                </svg>
                <a href="mailto:aaaorthoclinic@gmail.com" className="text-[#1c76e4] no-underline font-medium hover:underline text-base sm:text-[15px] break-all">
                  aaaorthoclinic@gmail.com
                </a>
              </div>

              <div className="footer-info-box bg-[#FDFEFF] rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-6 m-0 border border-[rgba(18,52,91,0.06)] flex flex-col sm:flex-row gap-5 sm:gap-6 items-stretch sm:items-center shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
                <div className="info-item flex items-start gap-3.5 sm:gap-4 flex-1">
                  <Image src="/mdi_clock-outline.svg" alt="Clock icon" width={24} height={24} className="w-6 h-6 sm:w-6 sm:h-6 shrink-0 mt-0.5" loading="lazy" />
                  <div className="flex-1">
                    <div className="label text-sm sm:text-[13px] font-normal text-[#666] mb-2 sm:mb-1.5 leading-[1.3]">Opening Hours</div>
                    <div className="value text-base sm:text-[15px] font-semibold text-[#222] leading-[1.4]">11 AM – 2 PM<br />6 PM – 9 PM</div>
                  </div>
                </div>
                <div className="divider w-full h-px sm:w-px sm:h-[50px] bg-[#e0e8f2] shrink-0"></div>
                <div className="info-item flex items-start gap-3.5 sm:gap-4 flex-1">
                  <Image src="/icon location-light.svg" alt="Location icon" width={24} height={24} className="w-6 h-6 sm:w-6 sm:h-6 shrink-0 mt-0.5" loading="lazy" />
                  <div className="flex-1">
                    <div className="label text-sm sm:text-[13px] font-normal text-[#666] mb-2 sm:mb-1.5 leading-[1.3]">Location</div>
                    <div className="value text-base sm:text-[15px] font-semibold text-[#222] leading-[1.4]">Vadachery Road,<br />Pattukkottai</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-right mt-6 sm:mt-8 lg:mt-0">
            <div className="relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.1234567890123!2d79.3157593!3d10.4282661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00017013723d4f%3A0x15b957534fe0b48e!2sAAA%20ORTHO%20CLINIC!5e0!3m2!1sen!2sin!4v1735747200000!5m2!1sen!2sin"
                width="100%" 
                height="350" 
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="map w-full rounded-xl shadow-sm h-[320px] sm:h-[380px] md:h-[450px]"
                title="AAA Ortho Clinic Location"
              />
              <div className="absolute bottom-4 right-4 sm:bottom-4 sm:right-4 flex flex-col gap-2.5 z-10">
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

        <div className="site-bottom flex flex-col md:flex-row justify-center items-center pt-8 sm:pt-8 border-t border-[#d4e4f7] text-sm sm:text-[13px] text-[#6b7f99] gap-3 sm:gap-2 text-center">
          <div>© 2025 - 26 ALL RIGHTS RESERVED AAA ORTHO CLINIC</div>
          <div className="hidden md:block">|</div>
          <div>
            <a 
              href="https://roamingdigitals.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#6b7f99] hover:text-[#1c76e4] transition-colors no-underline hover:underline"
            >
              DESIGNED BY ROAMING DIGITAL
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
