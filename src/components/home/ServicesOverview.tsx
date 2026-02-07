import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Package, Truck, Zap, Warehouse, Shield, Globe } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Courier Services",
    description: "Local and international parcel delivery with real-time tracking.",
    color: "text-primary",
  },
  {
    icon: Truck,
    title: "Transport & Logistics",
    description: "Bulk goods transportation and comprehensive logistics solutions.",
    color: "text-accent",
  },
  {
    icon: Zap,
    title: "Express Delivery",
    description: "Same-day and next-day delivery options for urgent shipments.",
    color: "text-primary",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Secure storage facilities with inventory management systems.",
    color: "text-accent",
  },
  {
    icon: Shield,
    title: "Packaging Solutions",
    description: "Professional packaging services to ensure safe delivery.",
    color: "text-primary",
  },
  {
    icon: Globe,
    title: "International Shipping",
    description: "Worldwide delivery with customs clearance support.",
    color: "text-accent",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Comprehensive delivery and logistics solutions tailored to your needs
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-secondary">
                  <service.icon className={`h-7 w-7 ${service.color}`} />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
