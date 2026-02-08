import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import logisticInfoImage from "@/assets/logistic-info.png";
import { Package } from "lucide-react";

const TrackShipmentSection = () => {
  const [trackingNo, setTrackingNo] = useState("");
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    // if (!trackingNo.trim()) return;
    setShowComingSoon(true);
  };

  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      {/* Subtle decorative package pattern */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2324346a'%3E%3Cpath d='M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z'/%3E%3C/svg%3E")`,
          backgroundSize: "120px",
        }}
      />
      <div
        className="pointer-events-none absolute right-1/4 top-8 h-40 w-40 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2324346a'%3E%3Cpath d='M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z'/%3E%3C/svg%3E")`,
          backgroundSize: "80px",
        }}
      />

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Logistics process infographic */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src={logisticInfoImage}
              alt="Logistics process from origin to end user - sorting, transport modes, warehouse, last mile delivery"
              className="max-h-[420px] w-full object-contain object-center lg:max-h-[480px]"
            />
          </div>

          {/* Right: Track Your Shipment form */}
          <div className="relative">
            <h2 className="mb-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Track Your Shipment
            </h2>
            <div className="mb-6 flex gap-1">
              <span className="h-1 w-8 rounded-full bg-accent" />
              <span className="h-1 w-6 rounded-full bg-accent/80" />
              <span className="h-1 w-4 rounded-full bg-accent/60" />
            </div>
            <p className="mb-8 text-muted-foreground">
              Enter your tracking number below to see real-time status and delivery updates.
            </p>

            <form onSubmit={handleTrack} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="tracking-no" className="text-sm font-medium text-foreground">
                  Tracking number
                </label>
                <Input
                  id="tracking-no"
                  type="text"
                  placeholder="e.g. SEXP123456789"
                  value={trackingNo}
                  onChange={(e) => setTrackingNo(e.target.value)}
                  className="h-12 rounded-lg border-input bg-muted/30 text-base placeholder:text-muted-foreground focus-visible:ring-accent"
                  aria-label="Tracking number"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="h-12 w-full rounded-lg bg-foreground px-6 font-semibold uppercase tracking-wide text-background hover:bg-foreground/90"
              >
                Track shipment
              </Button>
            </form>

            <Dialog open={showComingSoon} onOpenChange={setShowComingSoon}>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-accent/15">
                    <Package className="h-7 w-7 text-accent" />
                  </div>
                  <DialogTitle className="text-center text-xl">Coming soon</DialogTitle>
                  <DialogDescription className="text-center">
                    Live tracking is under development. We’ll notify you when you can track your shipment in real time. For now, reach out to our support team for status updates.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackShipmentSection;
