import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Package, Truck, Clock } from "lucide-react";
import heroImage from "@/assets/hero-logistics.jpg";

const stats = [
  {
    icon: Package,
    value: "10,000+",
    label: "Deliveries completed",
    gradient: "from-accent to-accent/80",
  },
  {
    icon: Truck,
    value: "500+",
    label: "Cities covered",
    gradient: "from-primary-foreground/40 to-primary-foreground/20",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Customer support",
    gradient: "from-accent to-accent/80",
  },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
      <div className="absolute inset-0 opacity-10">
        <img
          src={heroImage}
          alt="Logistics and courier services"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-accent md:text-base">
              Courier & transport services
            </p>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Fast. Reliable.{" "}
              <span className="text-accent">Nationwide</span> Delivery.
            </h1>
            <div className="mx-auto mb-5 flex justify-center gap-1">
              <span className="h-1 w-10 rounded-full bg-accent" />
              <span className="h-1 w-6 rounded-full bg-accent/80" />
              <span className="h-1 w-3 rounded-full bg-accent/60" />
            </div>
            <p className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
              Your trusted partner for courier and logistics. From same-day local
              deliveries to international shipping—we deliver with speed and care.
            </p>
          </div>

          <div className="animate-slide-up flex flex-col justify-center gap-4 sm:flex-row sm:gap-5">
            <Button
              size="lg"
              asChild
              className="rounded-xl bg-accent px-8 font-semibold text-accent-foreground hover:bg-accent/90"
            >
              <Link to="/contact" className="inline-flex items-center gap-2">
                Get a free quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="rounded-xl border-2 border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link to="/services">Explore our services</Link>
            </Button>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-3 sm:gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group relative animate-scale-in overflow-hidden rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 px-6 py-6 shadow-lg shadow-black/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-primary-foreground/10 hover:shadow-xl hover:shadow-black/10 sm:py-8"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${stat.gradient}`}
                  />
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-7 w-7 text-accent-foreground" aria-hidden />
                  </div>
                  <p className="mb-1 text-2xl font-bold tabular-nums tracking-tight text-primary-foreground md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="text-sm font-medium leading-snug text-primary-foreground/75">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
