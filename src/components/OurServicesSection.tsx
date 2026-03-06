import { Heart, Calendar, Home, Baby, Stethoscope, Droplet } from "lucide-react";

const ourServicesData = [
  {
    icon: Heart,
    title: "Family Planning",
    description: "Comprehensive family planning services including contraception counseling, fertility awareness, and reproductive health education to help you make informed decisions."
  },
  {
    icon: Calendar,
    title: "Antenatal Care",
    description: "Regular prenatal check-ups, ultrasound monitoring, nutrition guidance, and pregnancy education to ensure a healthy pregnancy journey for you and your baby."
  },
  {
    icon: Home,
    title: "Birth Centre / Home Birth",
    description: "Safe, comfortable birthing options in our birth centre or the comfort of your home, with skilled midwives providing continuous support throughout labor and delivery."
  },
  {
    icon: Baby,
    title: "Postnatal Care",
    description: "Postpartum support including breastfeeding assistance, maternal recovery monitoring, emotional support, and newborn care guidance for the first weeks after birth."
  },
  {
    icon: Stethoscope,
    title: "Baby Wellness",
    description: "Comprehensive baby care including immunizations, growth monitoring, developmental assessments, and primary care for common childhood illnesses."
  },
  {
    icon: Droplet,
    title: "IV Drip Therapy",
    description: "Intravenous hydration and vitamin therapy for expectant mothers, postpartum recovery, and general wellness to help you feel your best."
  }
];

const OurServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-heading text-foreground text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Our services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
          {ourServicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-green-100 rounded-lg p-4 mb-6">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  
                  <h3 className="font-heading text-gray-900 text-xl font-bold mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
