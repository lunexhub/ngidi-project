import { MessageCircle } from "lucide-react";

const OpeningHoursSection = () => {
  const hours = [
    { days: "Mon-Fri", time: "18h00 - 20h00" },
    { days: "Sat", time: "09h00 - 16h00" },
    { days: "Sun", time: "09h00 - 13h00" }
  ];

  return (
    <section className="hidden md:block py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-heading text-foreground text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Opening Hours
            </h2>
            <p className="font-body text-foreground/70 text-base sm:text-lg">
              We're here to help you during these hours
            </p>
          </div>

          {/* Hours Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
            {hours.map((schedule, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="font-heading text-pink-500 font-semibold text-2xl mb-2">
                  {schedule.days}
                </h3>
                <p className="font-body text-gray-500 text-lg">
                  {schedule.time}
                </p>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-green-50 rounded-xl p-6 sm:p-8 text-center border border-green-100">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-heading text-gray-900 font-semibold text-lg mb-1">
                    Need help outside hours?
                  </h3>
                  <p className="font-body text-gray-600 text-sm">
                    Reach out on WhatsApp for urgent inquiries
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/27845463566"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white font-body font-semibold px-6 py-3 rounded-lg hover:bg-green-600 transition-colors text-sm uppercase tracking-wider whitespace-nowrap"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHoursSection;
