export default function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-white px-5 md:px-[5%]">
      <div className="max-w-[1280px] mx-auto">
        {/* Main Contact Card */}
        <div className="bg-white border border-border rounded-lg overflow-hidden mb-12">
          <div className="grid md:grid-cols-2">
            {/* Left - Contact Info */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">AAA ortho clinic</h3>
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-6">
                BONE | JOINT | SPINE | PEDIATRIC | ARTHRITIS
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-xs text-muted uppercase font-semibold mb-1">Address</p>
                  <p className="text-base text-foreground">Pattukkottai, Ramanathapuram District</p>
                </div>
                <div>
                  <p className="text-xs text-muted uppercase font-semibold mb-1">Phone</p>
                  <p className="text-base text-foreground">+91 22 372 6158</p>
                </div>
                <div>
                  <p className="text-xs text-muted uppercase font-semibold mb-1">Email</p>
                  <p className="text-base text-foreground">info@aaaorthoclinic.com</p>
                </div>
              </div>
            </div>

            {/* Right - Map */}
            <div className="bg-card h-80 md:h-auto relative">
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
              <div className="absolute bottom-4 right-4 flex flex-col gap-2 z-10">
                <a
                  href="https://www.google.com/maps/place/AAA+ORTHO+CLINIC/@10.4282674,79.3151156,214m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3b00017013723d4f:0x15b957534fe0b48e!8m2!3d10.4282661!4d79.3157593!16s%2Fg%2F11rdbwf2fg?hl=en&entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-lg flex items-center gap-2 border border-primary"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  View on Maps
                </a>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=10.4282661,79.3157593"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg flex items-center gap-2"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Info Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-card p-4 rounded-lg border border-border text-center">
            <p className="text-xs text-muted uppercase font-semibold mb-2">Opening Hours</p>
            <p className="text-sm font-semibold text-foreground">Mon - Sat: 9 AM - 8 PM</p>
            <p className="text-xs text-muted mt-1">Sunday: Emergency Only</p>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border text-center">
            <p className="text-xs text-muted uppercase font-semibold mb-2">Location</p>
            <p className="text-sm font-semibold text-foreground">Near Bank of India</p>
            <p className="text-xs text-muted mt-1">Chettiyar Street, Pattukkottai</p>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border text-center">
            <p className="text-xs text-muted uppercase font-semibold mb-2">Emergency</p>
            <p className="text-sm font-semibold text-foreground">24/7 Available</p>
            <p className="text-xs text-muted mt-1">+91 22 372 6158</p>
          </div>
        </div>
      </div>
    </section>
  )
}

