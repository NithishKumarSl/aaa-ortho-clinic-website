export default function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
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

            {/* Right - Map Placeholder */}
            <div className="bg-card h-80 md:h-auto flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <p className="text-sm text-muted">Interactive Map</p>
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

