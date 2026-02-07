import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "10,000+", label: "Deliveries Monthly" },
    { number: "500+", label: "Cities Covered" },
    { number: "98%", label: "Customer Satisfaction" },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide fast, reliable, and affordable delivery solutions that connect businesses and individuals across the nation.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the leading logistics partner, setting industry standards for excellence and innovation in courier services.",
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Reliability, transparency, customer focus, and continuous improvement drive everything we do.",
    },
    {
      icon: Users,
      title: "Our Team",
      description: "A dedicated team of logistics professionals committed to delivering excellence in every shipment.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">About SHREE EXPRESS CARGO</h1>
            <p className="text-lg text-primary-foreground/90">
              With over 15 years of experience, we've built a reputation for delivering excellence
              in courier and transport services across the nation.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-4xl font-bold text-primary">{stat.number}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-foreground">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2009, SHREE EXPRESS CARGO began as a small courier service with a big
                vision: to revolutionize the delivery industry through reliability, speed, and
                exceptional customer service.
              </p>
              <p>
                Today, we operate a fleet of modern vehicles and maintain partnerships across 500+
                cities, handling everything from small parcels to large freight shipments. Our
                commitment to technology and innovation has allowed us to offer real-time tracking,
                flexible delivery options, and seamless customer experiences.
              </p>
              <p>
                We take pride in being more than just a delivery company—we're your logistics
                partner, dedicated to helping your business grow and succeed through reliable
                transportation solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Our Mission & Values
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              The principles that guide our commitment to excellence
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value, index) => (
              <Card key={index} className="transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
