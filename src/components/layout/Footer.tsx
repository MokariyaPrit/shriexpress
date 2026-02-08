import { Link } from "react-router-dom";
import {
  Package,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";
import {
  phoneNumbers,
  formatPhoneDisplay,
  address,
  contactEmail,
} from "@/lib/contact";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Service Guide", path: "/guide" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "Express Delivery",
  "Courier Services",
  "Transport & Logistics",
  "Warehousing",
  "Packaging Solutions",
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/80 bg-muted/25">
      {/* Top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-primary/80 to-accent" />

      <div className="container mx-auto px-4 py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Company */}
          <div className="lg:pr-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 transition-opacity hover:opacity-90"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary shadow-sm">
                <Package className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold tracking-tight text-foreground">
                SHREE EXPRESS CARGO
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Fast. Reliable. Nationwide delivery solutions for businesses and
              individuals.
            </p>
            <div className="mt-6 flex gap-2">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <div className="mb-2 flex gap-1">
              <span className="h-0.5 w-6 rounded-full bg-accent" />
              <span className="h-0.5 w-3 rounded-full bg-accent/70" />
            </div>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map(({ name, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                    <span className="group-hover:underline">{name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground">
              Our Services
            </h3>
            <div className="mb-2 flex gap-1">
              <span className="h-0.5 w-6 rounded-full bg-accent" />
              <span className="h-0.5 w-3 rounded-full bg-accent/70" />
            </div>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground">
              Contact Us
            </h3>
            <div className="mb-2 flex gap-1">
              <span className="h-0.5 w-6 rounded-full bg-accent" />
              <span className="h-0.5 w-3 rounded-full bg-accent/70" />
            </div>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="pt-1 leading-relaxed">{address}</span>
              </li>
              {phoneNumbers.map((phone) => (
                <li
                  key={phone}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-4 w-4" />
                  </span>
                  <a
                    href={`tel:${phone}`}
                    className="hover:text-primary hover:underline"
                  >
                    {formatPhoneDisplay(phone)}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-4 w-4" />
                </span>
                <a
                  href={`mailto:${contactEmail}`}
                  className="hover:text-primary hover:underline"
                >
                  {contactEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border/80 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} SHREE EXPRESS CARGO. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary hover:underline">
              Privacy
            </Link>
            <Link to="/" className="hover:text-primary hover:underline">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
