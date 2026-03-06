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
      </div>
    </section>
  );
};

export default HeroSection;
