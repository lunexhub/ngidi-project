import heroImg from "@/assets/hero-midwife.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img src={heroImg} alt="Midwife caring for newborn" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-secondary/70" />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <p className="font-body text-primary text-sm uppercase tracking-[0.3em] mb-4">Professional Nurse & Midwife</p>
        <h1 className="font-heading text-primary-foreground text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Mdingi Midwifery<br />
          <span className="text-primary">Services</span> & Wellness Clinic
        </h1>
        <p className="font-heading text-primary text-xl md:text-2xl font-medium mb-4 italic">
          Trusted hands for life's 1st moments
        </p>
        <p className="font-body text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Dedicated to enhancing your well-being through personalized, compassionate, and cutting-edge maternal & medical care.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="inline-block bg-primary text-primary-foreground font-body font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="inline-block border-2 border-primary text-primary font-body font-semibold px-8 py-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors text-sm uppercase tracking-wider"
          >
            Book a Consultation
          </a>
        </div>
        <p className="mt-8 text-primary-foreground/60 font-body text-sm">Most Medical Aid's Accepted</p>
        <div className="mt-4 inline-block bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-lg px-6 py-3">
          <p className="text-primary font-body text-sm font-semibold">24 hour operation for birthing</p>
        </div>
        
        {/* Launch Day Card */}
        <div className="mt-8 inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-2xl p-6 shadow-2xl max-w-sm backdrop-blur-sm border border-primary/20 hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <div className="mb-3">
                <span className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-body font-semibold uppercase tracking-wider">
                  🎉 Launch Day
                </span>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3">Grand Opening</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <span className="font-semibold">📅</span>
                  <span>15 March 2026</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="font-semibold">🕐</span>
                  <span>14:00 - 17:00</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="font-semibold">📍</span>
                  <span>11193 Nareng street, Daveyton 1520</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-xs font-body opacity-90">Join us for our special launch day celebration!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
