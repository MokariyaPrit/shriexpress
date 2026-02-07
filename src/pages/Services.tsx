import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
} from "lucide-react";

const Services = () => {
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
    },
  ];

  const additionalFeatures = [
    { icon: Clock, text: "24/7 Customer Support" },
    { icon: MapPin, text: "500+ Cities Nationwide" },
    { icon: Shield, text: "Full Insurance Coverage" },
    { icon: CheckCircle2, text: "98% On-Time Delivery Rate" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Our Services</h1>
            <p className="text-lg text-primary-foreground/90">
              Comprehensive delivery and logistics solutions designed to meet all your shipping needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
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
        </div>
      </section>

      {/* Additional Features */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="font-medium text-foreground">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-primary p-12 text-center text-primary-foreground">
            <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
            <p className="mb-8 text-lg text-primary-foreground/90">
              Contact us today for a customized quote tailored to your shipping needs
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
