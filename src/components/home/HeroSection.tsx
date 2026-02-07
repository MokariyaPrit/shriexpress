import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Package, Truck, Clock } from "lucide-react";
import heroImage from "@/assets/hero-logistics.jpg";

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
            <h1 className="mb-6 text-4xl font-bold text-primary-foreground md:text-6xl">
              Fast. Reliable. <span className="text-accent">Nationwide</span> Delivery.
            </h1>
            <p className="mb-8 text-lg text-primary-foreground/90 md:text-xl">
              Your trusted partner for courier and transport services. From local deliveries to
              international shipping, we deliver with speed and precision.
            </p>
          </div>

          <div className="animate-slide-up flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
              <Link to="/contact">
                Get Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/services">Our Services</Link>
            </Button>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="animate-scale-in rounded-lg bg-background/10 p-6 backdrop-blur-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                <Package className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-primary-foreground">10,000+</h3>
              <p className="text-sm text-primary-foreground/80">Deliveries Completed</p>
            </div>

            <div className="animate-scale-in rounded-lg bg-background/10 p-6 backdrop-blur-sm" style={{ animationDelay: "0.1s" }}>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                <Truck className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-primary-foreground">500+</h3>
              <p className="text-sm text-primary-foreground/80">Cities Covered</p>
            </div>

            <div className="animate-scale-in rounded-lg bg-background/10 p-6 backdrop-blur-sm" style={{ animationDelay: "0.2s" }}>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                <Clock className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-primary-foreground">24/7</h3>
              <p className="text-sm text-primary-foreground/80">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
