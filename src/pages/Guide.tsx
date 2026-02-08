import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Target,
  Award,
  Package,
  Truck,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  FileText,
  Fuel,
  Box,
} from "lucide-react";

const commitmentItems = [
  {
    icon: Zap,
    title: "Efficiency",
    description: "Commitment to serving all client segments with high efficiency and cost-competitiveness.",
    gradient: "from-primary/90 to-primary",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Target,
    title: "Innovation",
    description: "Continuous improvement to meet the ever-changing needs of our customers.",
    gradient: "from-accent to-accent/80",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Strong workforce motivation to maintain the highest standards of service.",
    gradient: "from-primary/90 to-primary",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
];

const serviceTypes = [
  {
    icon: Package,
    name: "Domestic Courier Service",
    description: "Assured & time-bound delivery of documents and small parcels.",
    idealFor: "Routine business documents, small packages.",
  },
  {
    icon: Truck,
    name: "Domestic Cargo Service",
    description:
      "Delivery of heavy consignments via air and surface transport modes. Includes specialized vehicles, material handling equipment, and dedicated manpower.",
    idealFor: "Bulk goods, heavy machinery, large shipments.",
  },
  {
    icon: Zap,
    name: "Express Service",
    description: "A specialized service for safe & assured delivery in the least possible time.",
    idealFor: "Urgent documents, time-critical parcels.",
  },
];

const prohibitedCategories = [
  {
    title: "Dangerous Goods (Hazardous Materials)",
    note: "Defined by IATA regulations, these commodities possess potentially hazardous characteristics.",
    items: [
      "Explosives: Fireworks, crackers, ammunition, flares.",
      "Gases: Compressed gas cylinders (filled or empty), aerosol cans, lighters, fire extinguishers.",
      "Flammable Liquids: Petrol, diesel, kerosene, paints, thinners, varnishes, alcohol-based perfumes/sanitizers.",
      "Flammable Solids: Matches, sulfur, phosphorous.",
      "Oxidizers & Organic Peroxides: Bleach, fertilizers, hair dyes, fiberglass repair kits.",
      "Toxic & Infectious Substances: Pesticides, insecticides, poisons, medical waste, blood samples, biological cultures.",
      "Radioactive Material: Scientific instruments containing radioactive sources, X-ray parts.",
      "Corrosives: Acids, alkalis, wet-cell batteries, mercury (thermometers).",
      "Miscellaneous: Magnets (danger to aircraft equipment), dry ice, lithium batteries (unless strictly compliant with IATA packing instructions).",
    ],
  },
  {
    title: "Legally Restricted & High-Value Items",
    items: [
      "Currency: Cash (notes/coins), bearer cheques, travelers' cheques, credit/debit cards.",
      "Precious Items: Gold, silver, bullion, platinum, precious/semi-precious stones, gems, and jewelry.",
      "Indian Postal Articles: Letters and items that infringe upon the Indian Postal Act of 1898.",
      "Negotiable Instruments: Bearer forms, share certificates, bonds.",
    ],
  },
  {
    title: "Offensive & Unauthorized Items",
    items: [
      "Drugs & Narcotics: Illegal substances, contraband, psychotropic drugs.",
      "Pornography: Obscene or pornographic material in any form.",
      "Weapons: Firearms, air guns, imitation weapons, explosives, and military equipment.",
      "Perishables: Fresh food, fruits, vegetables, meat, fish, flowers (items liable to rot or decay).",
    ],
  },
];

const Guide = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-primary py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-accent md:text-base">
              Policies & compliance
            </p>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
              Service Guide & Compliance Policy
            </h1>
            <div className="mx-auto mb-6 flex justify-center gap-1">
              <span className="h-1 w-10 rounded-full bg-accent" />
              <span className="h-1 w-6 rounded-full bg-accent/80" />
              <span className="h-1 w-3 rounded-full bg-accent/60" />
            </div>
            <p className="text-lg leading-relaxed text-primary-foreground/90">
              What you can ship with us—and what is not allowed. Our commitment
              to safety and legal compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center md:mb-14">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent">
              Our commitment
            </p>
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Built on experience
            </h2>
            <div className="mx-auto mb-4 flex justify-center gap-1">
              <span className="h-1 w-10 rounded-full bg-accent" />
              <span className="h-1 w-6 rounded-full bg-accent/70" />
              <span className="h-1 w-3 rounded-full bg-accent/50" />
            </div>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Capitalizing on over three decades of experience, we offer a
              versatile range of services tailored to consignment nature, urgency,
              and delivery location.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {commitmentItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
                >
                  <div
                    className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${item.gradient} opacity-90`}
                  />
                  <div
                    className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${item.iconBg}`}
                  >
                    <Icon className={`h-7 w-7 ${item.iconColor}`} aria-hidden />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service types – What we offer (allowed) */}
      <section className="bg-muted/25 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center md:mb-14">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent">
              What we offer
            </p>
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Service types
            </h2>
            <div className="mx-auto mb-4 flex justify-center gap-1">
              <span className="h-1 w-10 rounded-full bg-accent" />
              <span className="h-1 w-6 rounded-full bg-accent/70" />
              <span className="h-1 w-3 rounded-full bg-accent/50" />
            </div>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Choose the right service for your documents, parcels, or cargo.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {serviceTypes.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col rounded-2xl border border-border/50 bg-card p-6 shadow-sm md:p-8"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" aria-hidden />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {service.name}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <p className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="font-medium">Ideal for:</span>{" "}
                    <span className="text-muted-foreground">
                      {service.idealFor}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prohibited & Banned */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center md:mb-14">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
              <AlertTriangle className="h-7 w-7" aria-hidden />
            </div>
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent">
              Not allowed
            </p>
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Prohibited & banned commodities
            </h2>
            <div className="mx-auto mb-4 flex justify-center gap-1">
              <span className="h-1 w-10 rounded-full bg-accent" />
              <span className="h-1 w-6 rounded-full bg-accent/70" />
              <span className="h-1 w-3 rounded-full bg-accent/50" />
            </div>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              The following items are strictly prohibited and will not be
              booked or carried under any circumstances.
            </p>
          </div>
          <div className="space-y-8">
            {prohibitedCategories.map((category, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm"
              >
                <div className="border-b border-border/50 bg-muted/30 px-6 py-4 md:px-8">
                  <h3 className="text-lg font-semibold text-foreground md:text-xl">
                    {index + 1}. {category.title}
                  </h3>
                  {category.note && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      {category.note}
                    </p>
                  )}
                </div>
                <ul className="divide-y divide-border/50 px-6 py-4 md:px-8">
                  {category.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 py-3 text-sm text-muted-foreground first:pt-0 last:pb-0"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/80" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational policies */}
      <section className="bg-muted/25 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center md:mb-14">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent">
              Policies
            </p>
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Operational policies
            </h2>
            <div className="mx-auto mb-4 flex justify-center gap-1">
              <span className="h-1 w-10 rounded-full bg-accent" />
              <span className="h-1 w-6 rounded-full bg-accent/70" />
              <span className="h-1 w-3 rounded-full bg-accent/50" />
            </div>
          </div>
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Fuel className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Fuel surcharge
                </h3>
              </div>
              <p className="leading-relaxed text-muted-foreground">
                Fuel prices have seen significant fluctuations recently,
                resulting in increased costs from airlines, co-loaders, and
                transport authorities. The company is compelled to adjust its
                fuel surcharge periodically in tandem with hikes by airlines and
                transport operators to maintain service quality.
              </p>
            </div>
            <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Box className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Volumetric weight calculation
                </h3>
              </div>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                In the courier industry, the cost of transportation depends on
                the space a shipment occupies, not just its actual weight.
                Low-density items (e.g. cotton, foam, plastic parts) may occupy
                more space than their weight suggests. We charge based on the
                <strong className="text-foreground"> higher of actual weight or volumetric weight</strong>.
              </p>
              <div className="rounded-xl border border-border/50 bg-muted/30 p-4 font-mono text-sm md:p-5">
                <p className="mb-2 font-semibold text-foreground">
                  Formula:
                </p>
                <p className="text-muted-foreground">
                  Volumetric Weight (kg) = (Length × Width × Height in cm) ÷ 5000
                </p>
                <p className="mt-3 font-semibold text-foreground">Example:</p>
                <p className="mt-1 text-muted-foreground">
                  Box 40 cm × 30 cm × 20 cm → 24,000 ÷ 5000 ={" "}
                  <strong className="text-foreground">4.8 kg</strong> volumetric
                  weight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-primary px-6 py-14 text-center text-primary-foreground shadow-xl md:px-12 md:py-16">
            <div className="absolute left-0 right-0 top-0 h-1 bg-accent/80" />
            <FileText className="mx-auto mb-4 h-12 w-12 text-accent" />
            <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
              Questions about what you can ship?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-primary-foreground/90">
              Contact us for clarification on specific items or to request a
              quote.
            </p>
            <Button
              size="lg"
              asChild
              className="rounded-xl bg-accent px-8 font-semibold text-accent-foreground hover:bg-accent/90"
            >
              <Link to="/contact" className="inline-flex items-center gap-2">
                Contact us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guide;
