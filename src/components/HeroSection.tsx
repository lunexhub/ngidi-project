import heroImg from "@/assets/hero-midwife.jpg";
import { Star } from "lucide-react";
import { useReviewStats } from "@/hooks/useReviewStats";

const HeroSection = () => {
  const stats = useReviewStats();
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

        {stats && stats.count > 0 && (
          <a
            href="#reviews"
            className="mt-5 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors rounded-2xl px-5 py-3 cursor-pointer"
          >
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className={`w-4 h-4 ${
                    s <= Math.round(stats.avg)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-white/30"
                  }`}
                />
              ))}
            </div>
            <span className="text-white font-heading font-bold text-base">
              {stats.avg.toFixed(1)}
            </span>
            <span className="text-white/70 font-body text-sm">
              · {stats.count} patient review{stats.count !== 1 ? "s" : ""}
            </span>
          </a>
        )}
        
      </div>
    </section>
  );
};

export default HeroSection;
