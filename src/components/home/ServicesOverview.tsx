import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Package, Truck, Zap, Warehouse, Shield, Globe, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Courier Services",
    description: "Local and international parcel delivery with real-time tracking.",
    gradient: "from-primary/90 to-primary",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Truck,
    title: "Transport & Logistics",
    description: "Bulk goods transportation and comprehensive logistics solutions.",
    gradient: "from-accent to-accent/80",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: Zap,
    title: "Express Delivery",
    description: "Same-day and next-day delivery options for urgent shipments.",
    gradient: "from-primary/90 to-primary",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Secure storage facilities with inventory management systems.",
    gradient: "from-accent to-accent/80",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: Shield,
    title: "Packaging Solutions",
    description: "Professional packaging services to ensure safe delivery.",
    gradient: "from-primary/90 to-primary",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Globe,
    title: "International Shipping",
    description: "Worldwide delivery with customs clearance support.",
    gradient: "from-accent to-accent/80",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
];

const ServicesOverview = () => {
  return (
    <section className="relative overflow-hidden bg-muted/25 py-20 md:py-28">
      <div className="container relative mx-auto px-4">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent">
            What we offer
          </p>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <div className="mx-auto mb-4 flex justify-center gap-1">
            <span className="h-1 w-10 rounded-full bg-accent" />
            <span className="h-1 w-6 rounded-full bg-accent/70" />
            <span className="h-1 w-3 rounded-full bg-accent/50" />
          </div>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Comprehensive delivery and logistics solutions tailored to your needs
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                to="/services"
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {/* Top accent bar */}
                <div
                  className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${service.gradient} opacity-90`}
                />
                <div className="flex flex-1 flex-col pt-2">
                  <div
                    className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${service.iconBg} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className={`h-7 w-7 ${service.iconColor}`} />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold tracking-tight text-foreground">
                    {service.title}
                  </h3>
                  <p className="flex-1 text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all group-hover:gap-2.5">
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <Button size="lg" asChild className="rounded-xl bg-foreground px-8 font-semibold text-background hover:bg-foreground/90">
            <Link to="/services" className="inline-flex items-center gap-2">
              View all services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
