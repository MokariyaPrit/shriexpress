import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Eye, Award, Users, ArrowRight } from "lucide-react";

const stats = [
  { value: 15, suffix: "+", label: "Years experience", gradient: "from-accent to-accent/80" },
  { value: 10000, suffix: "+", label: "Deliveries monthly", gradient: "from-primary to-primary/80" },
  { value: 500, suffix: "+", label: "Cities covered", gradient: "from-accent to-accent/80" },
  { value: 98, suffix: "%", label: "Customer satisfaction", gradient: "from-primary to-primary/80" },
];

const DURATION_MS = 1800;

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

function AnimatedStat({
  value,
  suffix,
  label,
  gradient,
}: {
  value: number;
  suffix: string;
  label: string;
  gradient: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || hasAnimated) return;
        setHasAnimated(true);
        const startTime = performance.now();

        const tick = () => {
          const elapsed = performance.now() - startTime;
          const progress = Math.min(elapsed / DURATION_MS, 1);
          const eased = easeOutQuart(progress);
          const current = Math.round(eased * value);
          setDisplayValue(current);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  const formatted =
    value >= 1000 ? displayValue.toLocaleString() : String(displayValue);

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card px-6 py-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
    >
      <div
        className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${gradient}`}
      />
      <p className="mb-1 text-3xl font-bold tabular-nums tracking-tight text-foreground md:text-4xl">
        {formatted}
        {suffix}
      </p>
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
    </div>
  );
}

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide fast, reliable, and affordable delivery solutions that connect businesses and individuals across the nation.",
    gradient: "from-primary/90 to-primary",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the leading logistics partner, setting industry standards for excellence and innovation in courier services.",
    gradient: "from-accent to-accent/80",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: Award,
    title: "Our Values",
    description:
      "Reliability, transparency, customer focus, and continuous improvement drive everything we do.",
    gradient: "from-primary/90 to-primary",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Users,
    title: "Our Team",
    description:
      "A dedicated team of logistics professionals committed to delivering excellence in every shipment.",
    gradient: "from-accent to-accent/80",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
];

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-primary py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-accent md:text-base">
              Who we are
            </p>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
              About SHREE EXPRESS CARGO
            </h1>
            <div className="mx-auto mb-6 flex justify-center gap-1">
              <span className="h-1 w-10 rounded-full bg-accent" />
              <span className="h-1 w-6 rounded-full bg-accent/80" />
              <span className="h-1 w-3 rounded-full bg-accent/60" />
            </div>
            <p className="text-lg leading-relaxed text-primary-foreground/90">
              With over 15 years of experience, we've built a reputation for
              delivering excellence in courier and transport services across the
              nation.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <AnimatedStat
                key={index}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                gradient={stat.gradient}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-muted/25 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent">
              Our story
            </p>
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              How we got here
            </h2>
            <div className="mb-4 flex gap-1">
              <span className="h-1 w-10 rounded-full bg-accent" />
              <span className="h-1 w-6 rounded-full bg-accent/70" />
              <span className="h-1 w-3 rounded-full bg-accent/50" />
            </div>
            <div className="space-y-5 rounded-2xl border border-border/50 bg-card p-6 shadow-sm md:p-8">
              <p className="leading-relaxed text-muted-foreground">
                Founded in 2009, SHREE EXPRESS CARGO began as a small courier
                service with a big vision: to revolutionize the delivery industry
                through reliability, speed, and exceptional customer service.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Today, we operate a fleet of modern vehicles and maintain
                partnerships across 500+ cities, handling everything from small
                parcels to large freight shipments. Our commitment to technology
                and innovation has allowed us to offer real-time tracking,
                flexible delivery options, and seamless customer experiences.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                We take pride in being more than just a delivery company—we're
                your logistics partner, dedicated to helping your business grow
                and succeed through reliable transportation solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center md:mb-14">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent">
              What drives us
            </p>
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Our Mission & Values
            </h2>
            <div className="mx-auto mb-4 flex justify-center gap-1">
              <span className="h-1 w-10 rounded-full bg-accent" />
              <span className="h-1 w-6 rounded-full bg-accent/70" />
              <span className="h-1 w-3 rounded-full bg-accent/50" />
            </div>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              The principles that guide our commitment to excellence
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 md:p-8"
                >
                  <div
                    className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${value.gradient} opacity-90`}
                  />
                  <div className="pt-2">
                    <div
                      className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${value.iconBg} transition-transform duration-300 group-hover:scale-105`}
                    >
                      <Icon className={`h-7 w-7 ${value.iconColor}`} aria-hidden />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold tracking-tight text-foreground">
                      {value.title}
                    </h3>
                    <p className="leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-14 flex justify-center">
            <Button size="lg" asChild className="rounded-xl bg-foreground font-semibold text-background hover:bg-foreground/90">
              <Link to="/contact" className="inline-flex items-center gap-2">
                Get in touch
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
