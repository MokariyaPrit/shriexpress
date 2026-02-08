import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { z } from "zod";
import {
  phoneNumbers,
  formatPhoneDisplay,
  contactEmail,
  address,
} from "@/lib/contact";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().min(1, "Phone number is required").max(20),
  message: z.string().trim().min(1, "Please enter your message").max(1000),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      contactSchema.parse(formData);
      setErrors({});
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-primary py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-accent md:text-base">
              Get in touch
            </p>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
              Contact Us
            </h1>
            <div className="mx-auto mb-6 flex justify-center gap-1">
              <span className="h-1 w-10 rounded-full bg-accent" />
              <span className="h-1 w-6 rounded-full bg-accent/80" />
              <span className="h-1 w-3 rounded-full bg-accent/60" />
            </div>
            <p className="text-lg leading-relaxed text-primary-foreground/90">
              Have a question or need a quote? Our team is here to help with all
              your courier and logistics needs.
            </p>
          </div>
        </div>
      </section>

      {/* Form & contact info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Form */}
            <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 shadow-sm md:p-8">
              <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-primary/90 to-accent opacity-90" />
              <div className="pt-2">
                <h2 className="mb-2 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                  Send us a message
                </h2>
                <p className="mb-6 text-sm text-muted-foreground">
                  Fill in the form below and we'll respond as soon as possible.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Full name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`h-11 rounded-lg ${errors.name ? "border-destructive" : ""}`}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`h-11 rounded-lg ${errors.email ? "border-destructive" : ""}`}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">
                      Phone number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className={`h-11 rounded-lg ${errors.phone ? "border-destructive" : ""}`}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive">{errors.phone}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Your message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className={`rounded-lg resize-none ${errors.message ? "border-destructive" : ""}`}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message}</p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    className="h-12 w-full rounded-xl bg-foreground font-semibold text-background hover:bg-foreground/90"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact info */}
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 shadow-sm md:p-8">
                <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-accent to-accent/80 opacity-90" />
                <div className="pt-2">
                  <h2 className="mb-2 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                    Contact information
                  </h2>
                  <p className="mb-6 text-sm text-muted-foreground">
                    Reach us by phone, email, or visit during business hours.
                  </p>
                  <ul className="space-y-5">
                    <li className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <MapPin className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="font-medium text-foreground">Address</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                          {address}
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Phone className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <div className="mt-0.5 space-y-1">
                          {phoneNumbers.map((phone) => (
                            <a
                              key={phone}
                              href={`tel:${phone}`}
                              className="block text-sm text-muted-foreground hover:text-primary hover:underline"
                            >
                              {formatPhoneDisplay(phone)}
                            </a>
                          ))}
                        </div>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Mail className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <a
                          href={`mailto:${contactEmail}`}
                          className="mt-0.5 block text-sm text-muted-foreground hover:text-primary hover:underline"
                        >
                          {contactEmail}
                        </a>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Clock className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="font-medium text-foreground">Business hours</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                          Mon–Fri: 8:00 AM – 6:00 PM<br />
                          Sat: 9:00 AM – 4:00 PM<br />
                          Sun: Closed
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Map */}
              <div className="overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm">
                <div className="border-b border-border/50 bg-muted/30 px-4 py-3 md:px-5">
                  <p className="text-sm font-medium text-foreground">
                    Office location
                  </p>
                </div>
                <div className="aspect-video overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Office location"
                    className="h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
