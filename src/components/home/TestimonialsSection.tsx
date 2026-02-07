import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "E-commerce Owner",
    content:
      "SHREE EXPRESS CARGO has transformed our shipping operations. Their reliability and speed are unmatched!",
    rating: 5,
    initials: "SJ",
    gradient: "from-primary/90 to-primary",
  },
  {
    name: "Michael Chen",
    role: "Retail Manager",
    content:
      "Outstanding service! They handle our daily deliveries with precision and professionalism.",
    rating: 5,
    initials: "MC",
    gradient: "from-accent to-accent/80",
  },
  {
    name: "Emily Rodriguez",
    role: "Small Business Owner",
    content:
      "The tracking system is fantastic, and customer support is always helpful. Highly recommend!",
    rating: 5,
    initials: "ER",
    gradient: "from-primary/90 to-primary",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative overflow-hidden bg-muted/25 py-20 md:py-28">
      <div className="container relative mx-auto px-4">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent">
            Testimonials
          </p>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
          <div className="mx-auto mb-4 flex justify-center gap-1">
            <span className="h-1 w-10 rounded-full bg-accent" />
            <span className="h-1 w-6 rounded-full bg-accent/70" />
            <span className="h-1 w-3 rounded-full bg-accent/50" />
          </div>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Trusted by thousands of businesses and individuals nationwide
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Top accent bar - same pattern as Services cards */}
              <div
                className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${testimonial.gradient} opacity-90`}
              />
              <div className="pt-2">
                <div className="mb-4 flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-accent text-accent"
                      aria-hidden
                    />
                  ))}
                </div>
                <Quote className="mb-3 h-8 w-8 text-primary/20" aria-hidden />
                <p className="mb-6 text-foreground/90 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-border">
                    <AvatarFallback className="bg-primary/10 text-sm font-semibold text-primary">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
