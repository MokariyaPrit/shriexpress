import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Package,
  Truck,
  Zap,
  Warehouse,
  Shield,
  Globe,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Courier Services",
    description: "Reliable parcel delivery for individuals and businesses",
    features: [
      "Door-to-door delivery",
      "Real-time tracking",
      "Signature confirmation",
      "Insurance options",
    ],
    gradient: "from-primary/90 to-primary",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Truck,
    title: "Transport & Logistics",
    description: "Comprehensive solutions for bulk goods and freight",
    features: [
      "Full truckload (FTL)",
      "Less than truckload (LTL)",
      "Route optimization",
      "Fleet management",
    ],
    gradient: "from-accent to-accent/80",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: Zap,
    title: "Express Delivery",
    description: "Ultra-fast shipping for time-sensitive shipments",
    features: [
      "Same-day delivery",
      "Next-day delivery",
      "Priority handling",
      "Dedicated support",
    ],
    gradient: "from-primary/90 to-primary",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Warehouse,
    title: "Warehousing Solutions",
    description: "Secure storage with advanced inventory management",
    features: [
      "Climate-controlled facilities",
      "24/7 security monitoring",
      "Inventory tracking",
      "Pick and pack services",
    ],
    gradient: "from-accent to-accent/80",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: Shield,
    title: "Packaging Services",
    description: "Professional packaging for safe transportation",
    features: [
      "Custom packaging",
      "Fragile item handling",
      "Bulk packaging",
      "Eco-friendly options",
    ],
    gradient: "from-primary/90 to-primary",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Globe,
    title: "International Shipping",
    description: "Worldwide delivery with customs support",
    features: [
      "Customs clearance",
      "Documentation support",
      "Import/export services",
      "Multi-currency billing",
    ],
    gradient: "from-accent to-accent/80",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
];

const additionalFeatures = [
  { icon: Clock, text: "24/7 Customer Support" },
  { icon: MapPin, text: "500+ Cities Nationwide" },
  { icon: Shield, text: "Full Insurance Coverage" },
  { icon: CheckCircle2, text: "98% On-Time Delivery Rate" },
];

const Services = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-primary py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-accent md:text-base">
              What we offer
            </p>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
              Our Services
            </h1>
            <div className="mx-auto mb-6 flex justify-center gap-1">
              <span className="h-1 w-10 rounded-full bg-accent" />
              <span className="h-1 w-6 rounded-full bg-accent/80" />
              <span className="h-1 w-3 rounded-full bg-accent/60" />
            </div>
            <p className="text-lg leading-relaxed text-primary-foreground/90">
              Comprehensive delivery and logistics solutions designed to meet all
              your shipping needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 md:p-8"
                >
                  <div
                    className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${service.gradient} opacity-90`}
                  />
                  <div className="pt-2">
                    <div
                      className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${service.iconBg} transition-transform duration-300 group-hover:scale-105`}
                    >
                      <Icon
                        className={`h-7 w-7 ${service.iconColor}`}
                        aria-hidden
                      />
                    </div>
                    <h2 className="mb-3 text-xl font-semibold tracking-tight text-foreground">
                      {service.title}
                    </h2>
                    <p className="mb-5 leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="space-y-2.5">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2.5 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="bg-muted/25 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center md:mb-12">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent">
              Why choose us
            </p>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Built for reliability
            </h2>
            <div className="mx-auto mb-2 flex justify-center gap-1">
              <span className="h-1 w-8 rounded-full bg-accent" />
              <span className="h-1 w-4 rounded-full bg-accent/70" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-2xl border border-border/50 bg-card px-5 py-4 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <p className="font-medium text-foreground">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-primary px-6 py-14 text-center text-primary-foreground shadow-xl md:px-12 md:py-16">
            <div className="absolute left-0 right-0 top-0 h-1 bg-accent/80" />
            <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
              Ready to get started?
            </h2>
            <div className="mx-auto mb-4 flex justify-center gap-1">
              <span className="h-1 w-8 rounded-full bg-accent" />
              <span className="h-1 w-4 rounded-full bg-accent/80" />
            </div>
            <p className="mx-auto mb-8 max-w-xl text-lg text-primary-foreground/90">
              Contact us today for a customized quote tailored to your shipping
              needs.
            </p>
            <Button
              size="lg"
              asChild
              className="rounded-xl bg-accent px-8 font-semibold text-accent-foreground hover:bg-accent/90"
            >
              <Link to="/contact" className="inline-flex items-center gap-2">
                Request a quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
