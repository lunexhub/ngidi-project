const services = [
  "All Family Planning",
  "Implanon & IUD Removal",
  "Pap-Smear",
  "Morning After Pill",
  "HIV Counselling & Testing",
  "Baby Wellness Checks excl Immunization",
  "Baby Wellness Check Incl Immunization",
  "Glucose Test",
  "Cholesterol Test",
  "BP Monitoring",
  "Antenatal 1st Visit",
  "Antenatal Follow-Up",
  "3 Day Postnatal Care (Mother & Baby)",
  "Pregnancy Test",
  "Wound Dressing First Care",
  "Wound Care Follow-Up",
  "Suture Removal",
  "Consultation (Incl Meds)",
  "Chronic Illness Management",
  "Consultation Follow-Up",
  "Consultation (Excl Meds)",
  "HIV Management",
  "STI Treatment (Incl Meds)",
  "DNA Test",
  "Birth Centre / Home Birth",
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-body text-primary text-sm uppercase tracking-[0.2em] mb-2">What We Offer</p>
          <h2 className="font-heading text-primary-foreground text-3xl md:text-4xl font-bold">Our Services</h2>
        </div>
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((service) => (
            <div
              key={service}
              className="bg-background/10 backdrop-blur rounded-xl border border-primary/20 px-5 py-3.5 text-center"
            >
              <span className="font-body text-primary-foreground/90 text-sm">{service}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-primary-foreground/50 font-body text-xs mt-6">
          * Contact us for pricing. Most medical aid's accepted.
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
