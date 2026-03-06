import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <p className="font-body text-pink-600 text-sm uppercase tracking-[0.2em] mb-2">Get in Touch</p>
          <h2 className="font-heading text-gray-900 text-3xl sm:text-4xl md:text-5xl font-bold">Contact Us</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
          {/* Phone / WhatsApp Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Phone className="text-white w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h3 className="font-heading text-gray-900 text-lg sm:text-xl font-bold mb-3 text-center">
              Phone / WhatsApp
            </h3>
            <p className="font-body text-gray-600 text-center text-base sm:text-lg">
              <a 
                href="tel:0845463566" 
                className="hover:text-pink-500 transition-colors"
              >
                084 546 3566
              </a>
            </p>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Mail className="text-white w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h3 className="font-heading text-gray-900 text-lg sm:text-xl font-bold mb-3 text-center">
              Email
            </h3>
            <p className="font-body text-gray-600 text-center text-sm">
              <a 
                href="mailto:info@mdingimidwiferyservices.co.za" 
                className="hover:text-pink-500 transition-colors break-all"
              >
                info@mdingimidwiferyservices.co.za
              </a>
            </p>
          </div>

          {/* Address Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <MapPin className="text-white w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h3 className="font-heading text-gray-900 text-lg sm:text-xl font-bold mb-3 text-center">
              Address
            </h3>
            <p className="font-body text-gray-600 text-center text-sm">
              Venue 11193 Nareng Street<br />
              Daveyton<br />
              1520
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 sm:mt-16 px-4 sm:px-6 lg:px-0">
          <p className="font-body text-gray-600 mb-6">
            Ready to book an appointment or have questions?
          </p>
          <a
            href="tel:0845463566"
            className="inline-block bg-pink-500 text-white font-body font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-pink-600 transition-colors text-sm uppercase tracking-wider"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
