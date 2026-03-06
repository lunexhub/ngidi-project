import aboutImg from "@/assets/about-care.jpg";
import geminiImage from "@/assets/Gemini_Generated_Image_r1i60rr1i60rr1i6.png";

const AboutSection = () => {
  return (
    <>
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary rounded-2xl" />
              <img
                src={aboutImg}
                alt="Prenatal care consultation"
                className="relative rounded-2xl shadow-xl w-full h-80 md:h-[450px] object-cover"
              />
            </div>
            <div>
              <p className="font-body text-primary text-sm uppercase tracking-[0.2em] mb-2">About Us</p>
              <h2 className="font-heading text-secondary text-3xl md:text-4xl font-bold mb-6">
                Compassionate Care for You & Your Baby
              </h2>
              <p className="font-body text-foreground/80 leading-relaxed mb-6">
                At Mdingi Midwifery Services and Wellness Clinic, we are dedicated to enhancing your well-being through personalized, compassionate, and cutting-edge medical care. From prenatal to postnatal, our experienced team ensures you receive the highest quality healthcare.
              </p>
              <div className="bg-accent rounded-xl p-6 mb-6">
                <h3 className="font-heading text-secondary text-xl font-semibold mb-2">Sr Sisanda Sibulali</h3>
                <p className="font-body text-foreground/70 text-sm">Professional Nurse and Midwife</p>
                <p className="font-body text-foreground/70 text-sm">Practice No: 1321838</p>
                <p className="font-body text-foreground/70 text-sm">SANC No: 16714107</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="bg-muted rounded-lg px-5 py-3 text-center">
                  <p className="font-heading text-primary text-2xl font-bold">Mon–Fri</p>
                  <p className="font-body text-foreground/60 text-xs">18h00 – 20h00</p>
                </div>
                <div className="bg-muted rounded-lg px-5 py-3 text-center">
                  <p className="font-heading text-primary text-2xl font-bold">Sat</p>
                  <p className="font-body text-foreground/60 text-xs">09h00 – 16h00</p>
                </div>
                <div className="bg-muted rounded-lg px-5 py-3 text-center">
                  <p className="font-heading text-primary text-2xl font-bold">Sun</p>
                  <p className="font-body text-foreground/60 text-xs">09h00 – 13h00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gemini Image Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-heading text-secondary text-2xl md:text-3xl font-bold mb-4">
                Our Facility
              </h2>
              <p className="font-body text-foreground/70">
                A comfortable and welcoming environment for your healthcare journey
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary rounded-2xl" />
              <img
                src={geminiImage}
                alt="Mdingi Midwifery Services Facility"
                className="relative rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
