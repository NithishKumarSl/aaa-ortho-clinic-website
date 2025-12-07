import Image from "next/image"

export default function Footer() {
  return (
    <footer className="site-footer bg-[#f8fbff] py-7 border-t border-[rgba(20,60,120,0.03)]">
      <div className="container max-w-[1200px] mx-auto px-8">
        <div className="footer-grid grid grid-cols-1 md:grid-cols-[1fr_1fr_360px] gap-5 items-start">
          <div className="footer-left">
            <h4 className="text-xl font-bold text-[#12345b] mb-2">AAA ortho clinic</h4>
            <p className="text-[15px] text-[#444] mb-2">Bone | Joint | Spine | Fracture | Arthritis</p>
            <p className="muted small text-[13px] text-[#5f7f9f] mb-2">
              Delivering advanced orthopaedic care to Pattukkottai and surrounding areas.
            </p>
            <a href="mailto:aaaorthoclinic@gmail.com" className="muted small text-[13px] text-[#5f7f9f] no-underline hover:text-[#0f5fcc] transition-colors">
              aaaorthoclinic@gmail.com
            </a>
          </div>

          <div className="footer-center">
            <div className="contact flex items-center gap-2.5 mb-3">
              <Image src="/material-symbols_call-outline.svg" alt="" width={20} height={20} className="opacity-70" aria-hidden="true" />
              <a href="tel:+9182207726119" className="text-[#12345b] no-underline font-medium hover:text-[#0f5fcc] transition-colors">
                82 20 72 61 19
              </a>
            </div>
            <div className="contact flex items-center gap-2.5 mb-4">
              <Image src="/icon location-light.svg" alt="" width={20} height={20} className="opacity-70" aria-hidden="true" />
              <a href="mailto:aaaorthoclinic@gmail.com" className="text-[#12345b] no-underline font-medium hover:text-[#0f5fcc] transition-colors">
                Aaaorthoclinic@gmail.com
              </a>
            </div>

            <div className="footer-info-box bg-[#FDFEFF] rounded-[20px] p-6 mt-5 border border-[rgba(18,52,91,0.06)] flex flex-col gap-5">
              <div className="info-item flex items-center gap-3.5">
                <Image src="/mdi_clock-outline.svg" alt="Clock icon" width={24} height={24} />
                <div>
                  <div className="label text-[13px] font-normal text-[#666] mb-1">Opening Hours</div>
                  <div className="value text-sm font-semibold text-[#222] leading-[1.4]">10 AM – 2 PM<br />5 PM – 9 PM</div>
                </div>
              </div>
              <div className="divider h-px bg-[#e0e8f2] m-0"></div>
              <div className="info-item flex items-center gap-3.5">
                <Image src="/icon location-light.svg" alt="Location icon" width={24} height={24} />
                <div>
                  <div className="label text-[13px] font-normal text-[#666] mb-1">Location</div>
                  <div className="value text-sm font-semibold text-[#222] leading-[1.4]">Vadashery Road,<br />Pattukkottai</div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-right">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.1234567890123!2d79.3156!3d10.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDI1JzQxLjEiTiA3OcKwMTgnNTYuMiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin" 
              width="100%" 
              height="200" 
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="map w-full h-[200px] rounded-[10px] shadow-[0_10px_30px_rgba(28,118,228,0.08)]"
              title="AAA Ortho Clinic Location"
            />
          </div>
        </div>

        <div className="site-bottom flex justify-between pt-4 border-t border-[rgba(20,60,120,0.02)] mt-4.5 text-[13px] text-[#5f7f9f]">
          <div>© 2025. ALL RIGHTS RESERVED AAA ORTHO CLINIC</div>
          <div>Designed by Roaming Digitals</div>
        </div>
      </div>
    </footer>
  )
}
