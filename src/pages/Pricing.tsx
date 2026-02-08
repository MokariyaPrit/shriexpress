import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  MapPin,
  Phone,
  ArrowRight,
  Package,
  Truck,
  Zap,
} from "lucide-react";
import {
  phoneNumbers,
  formatPhoneDisplay,
} from "@/lib/contact";

const serviceTiers = [
  {
    icon: Package,
    name: "Domestic Standard",
    description: "Documents & Small Parcels",
    features: [
      "Cost-effective solution",
      "Door-to-door delivery",
      "Real-time tracking",
      "Perfect for documents",
    ],
    gradient: "from-primary/90 to-primary",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Zap, // Swapped Icon to Zap for "Express"
    name: "Express Premium",
    description: "Time-Critical Delivery",
    features: [
      "Guaranteed fast delivery",
      "Priority handling",
      "Air network access",
      "Premium support channel",
    ],
    gradient: "from-accent to-accent/80",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    popular: true, // Kept as the highlighted option
  },
  {
    icon: Truck, // Swapped Icon to Truck for "Cargo"
    name: "Domestic Cargo",
    description: "Heavy & Bulk Consignments",
    features: [
      "Surface & Air modes",
      "Specialized handling equip.",
      "Volumetric weight pricing",
      "Ideal for machinery/bulk",
    ],
    gradient: "from-primary/90 to-primary",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
];

const coverageAreas = [
  "Ahmedabad",
  "Mumbai",
  "Delhi",
  "Bengaluru",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Surat",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Thane",
  "Bhopal",
  "Visakhapatnam",
  "Patna",
  "Vadodara",
  "Ghaziabad"
];

const Pricing = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-primary py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-accent md:text-base">
              Get a quote
            </p>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
              Pricing & Coverage
            </h1>
            <div className="mx-auto mb-6 flex justify-center gap-1">
              <span className="h-1 w-10 rounded-full bg-accent" />
              <span className="h-1 w-6 rounded-full bg-accent/80" />
              <span className="h-1 w-3 rounded-full bg-accent/60" />
            </div>
            <p className="text-lg leading-relaxed text-primary-foreground/90">
              Transparent options with no hidden fees. Call us for rates tailored
              to your distance, weight, and urgency.
            </p>
          </div>
        </div>
      </section>

      {/* Call for pricing – primary CTA */}
      <section className="border-b border-border/80 bg-muted/25 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl rounded-2xl border border-border/50 bg-card p-8 text-center shadow-sm md:p-10">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
              <Phone className="h-8 w-8" aria-hidden />
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Call for pricing
            </h2>
            <p className="mb-6 text-muted-foreground">
              Talk to our team for an instant quote. We're here to help.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              {phoneNumbers.map((phone) => (
                <Button
                  key={phone}
                  size="lg"
                  asChild
                  className="rounded-xl bg-foreground font-semibold text-background hover:bg-foreground/90"
                >
                  <a href={`tel:${phone}`} className="inline-flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    {formatPhoneDisplay(phone)}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service tiers (no prices) */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center md:mb-14">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent">
              Service options
            </p>
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              What we offer
            </h2>
            <div className="mx-auto mb-4 flex justify-center gap-1">
              <span className="h-1 w-10 rounded-full bg-accent" />
              <span className="h-1 w-6 rounded-full bg-accent/70" />
              <span className="h-1 w-3 rounded-full bg-accent/50" />
            </div>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Choose the service that fits your needs. Rates depend on distance,
              weight, and speed—call us for a custom quote.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceTiers.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <div
                  key={index}
                  className={`relative rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8 ${
                    tier.popular
                      ? "border-primary shadow-md"
                      : "border-border/50"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                      <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground shadow-sm whitespace-nowrap">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div
                    className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${tier.gradient} opacity-90`}
                  />
                  <div className="pt-2">
                    <div
                      className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${tier.iconBg}`}
                    >
                      <Icon
                        className={`h-7 w-7 ${tier.iconColor}`}
                        aria-hidden
                      />
                    </div>
                    <h3 className="mb-1 text-xl font-semibold text-foreground">
                      {tier.name}
                    </h3>
                    <p className="mb-5 text-sm text-muted-foreground">
                      {tier.description}
                    </p>
                    <ul className="space-y-2.5">
                      {tier.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex justify-center">
            <Button size="lg" asChild className="rounded-xl bg-accent font-semibold text-accent-foreground hover:bg-accent/90">
              <Link to="/contact" className="inline-flex items-center gap-2">
                Request custom quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Coverage areas */}
      <section className="bg-muted/25 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center md:mb-14">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <MapPin className="h-7 w-7" aria-hidden />
            </div>
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent">
              Coverage
            </p>
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Coverage areas
            </h2>
            <div className="mx-auto mb-2 flex justify-center gap-1">
              <span className="h-1 w-8 rounded-full bg-accent" />
              <span className="h-1 w-4 rounded-full bg-accent/70" />
            </div>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We serve 500+ cities nationwide. Some of our major service areas:
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {coverageAreas.map((city, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border/50 bg-card px-4 py-3 text-center text-sm font-medium text-foreground shadow-sm transition-shadow hover:shadow-md"
                >
                  {city}
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              And many more. Don't see your city? Call us to check availability.
            </p>
          </div>
        </div>
      </section>

      {/* Notes – no price figures */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm">
              <div className="border-b border-border/50 bg-muted/30 px-6 py-4 md:px-8">
                <h2 className="text-xl font-semibold text-foreground">
                  Pricing notes
                </h2>
              </div>
              <div className="space-y-4 px-6 py-6 text-muted-foreground md:px-8 md:py-8">
                <p className="leading-relaxed">
                  • Final pricing depends on package size, weight, destination,
                  and speed. Call us for an accurate quote.
                </p>
                <p className="leading-relaxed">
                  • Express and same-day options are available—ask when you call.
                </p>
                <p className="leading-relaxed">
                  • Volume discounts for regular business shipments.
                </p>
                <p className="leading-relaxed">
                  • Basic insurance included; additional coverage on request.
                </p>
                <p className="leading-relaxed">
                  • Fuel surcharges may apply based on market conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
