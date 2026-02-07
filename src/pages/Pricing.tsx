import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, MapPin } from "lucide-react";

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Local Delivery",
      price: "$5 - $15",
      description: "Within city limits",
      features: [
        "Same-day delivery option",
        "Real-time tracking",
        "Up to 5kg",
        "Standard insurance included",
      ],
    },
    {
      name: "Regional",
      price: "$15 - $35",
      description: "Within 200km radius",
      features: [
        "1-2 day delivery",
        "Real-time tracking",
        "Up to 10kg",
        "Priority handling",
        "Full insurance coverage",
      ],
      popular: true,
    },
    {
      name: "Nationwide",
      price: "$35 - $75",
      description: "Anywhere in the country",
      features: [
        "2-3 day delivery",
        "Advanced tracking",
        "Up to 25kg",
        "Priority handling",
        "Comprehensive insurance",
      ],
    },
    {
      name: "International",
      price: "Custom Quote",
      description: "Worldwide shipping",
      features: [
        "5-10 day delivery",
        "Customs clearance support",
        "Unlimited weight",
        "Documentation assistance",
        "Full insurance",
      ],
    },
  ];

  const coverageAreas = [
    "New York", "Los Angeles", "Chicago", "Houston", "Phoenix",
    "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose",
    "Austin", "Jacksonville", "Fort Worth", "Columbus", "Charlotte",
    "San Francisco", "Indianapolis", "Seattle", "Denver", "Washington DC",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Pricing & Coverage</h1>
            <p className="text-lg text-primary-foreground/90">
              Transparent pricing with no hidden fees. Choose the service that fits your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Service Rates</h2>
            <p className="text-muted-foreground">Starting prices based on distance and weight</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative transition-all hover:shadow-lg ${
                  tier.popular ? "border-primary shadow-md" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-accent px-3 py-1 text-sm font-semibold text-accent-foreground">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-primary">{tier.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle2 className="mr-2 h-4 w-4 flex-shrink-0 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link to="/contact">Request Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mb-4 text-3xl font-bold text-foreground">Coverage Areas</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We serve 500+ cities across the nation. Here are some of our major service areas:
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {coverageAreas.map((city, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-background p-4 text-center transition-shadow hover:shadow-md"
                >
                  <p className="font-medium text-foreground">{city}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              And many more cities nationwide. Don't see your city? Contact us to check availability.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <Card>
              <CardHeader>
                <CardTitle>Pricing Notes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  • Prices are estimates based on standard package dimensions and weights. Final
                  pricing may vary based on actual package specifications.
                </p>
                <p>
                  • Express delivery options available for additional fees.
                </p>
                <p>
                  • Volume discounts available for businesses with regular shipping needs.
                </p>
                <p>
                  • All deliveries include basic insurance. Additional coverage available upon
                  request.
                </p>
                <p>
                  • Fuel surcharges may apply based on current market conditions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
