import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";

const ovenParts = [
  "Inside the oven cavity — walls, roof, base, and fan",
  "Oven glass door (inside and outside)",
  "Oven racks and grill trays",
  "Stovetop burners and drip trays",
  "Rangehood — filter, exterior, and fan",
  "Storage drawer (if present)",
];

const appliances = [
  "Dishwasher (inside drum, filter, spray arms, door seal)",
  "Microwave (inside, outside, and turntable)",
  "Fridge (if requested — inside, outside, and drip tray)",
];

export default function OvenCleaningPage() {
  return (
    <>
      <Helmet>
        <title>
          Oven Cleaning Adelaide | Professional Appliance Cleaning | Tru Bond
          Cleaning
        </title>
        <meta
          name="description"
          content="Expert oven and appliance cleaning in Adelaide for bond cleans. Get your oven spotless and pass your final inspection. WhatsApp 0488841883."
        />
      </Helmet>

      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Oven Cleaning Adelaide
          </h1>
          <p className="text-white/75 max-w-2xl text-lg">
            We blast through baked-on grease so your oven looks practically new
            for the final inspection.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src="/assets/generated/oven-cleaning-service.dim_800x500.jpg"
                alt="Professional oven cleaning Adelaide - sparkling clean oven by Tru Bond Cleaning"
                className="rounded-2xl w-full object-cover shadow-navy mb-6"
              />
              <div className="bg-secondary/50 rounded-xl p-6 mb-4">
                <h3 className="font-display font-semibold text-navy mb-4">
                  What We Clean in Your Oven
                </h3>
                <ul className="flex flex-col gap-3">
                  {ovenParts.map((item) => (
                    <li key={item} className="flex gap-3 items-start text-sm">
                      <CheckCircle
                        size={16}
                        className="text-gold flex-shrink-0 mt-0.5"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-navy/5 rounded-xl p-6">
                <h3 className="font-display font-semibold text-navy mb-4">
                  Other Appliances We Clean
                </h3>
                <ul className="flex flex-col gap-3">
                  {appliances.map((item) => (
                    <li key={item} className="flex gap-3 items-start text-sm">
                      <CheckCircle
                        size={16}
                        className="text-gold flex-shrink-0 mt-0.5"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-navy mb-4">
                No More Greasy Ovens at Final Inspection
              </h2>
              <div className="prose prose-sm max-w-none text-foreground leading-relaxed space-y-4">
                <p>
                  The oven is one of the most common reasons renters lose part
                  of their bond. Baked-on grease, burnt food, and grime build up
                  over months and years. By the time you move out, it can look
                  pretty bad. Property managers check the oven closely — inside
                  the oven, the glass door, the grill, the trays, and even the
                  storage drawer.
                </p>
                <p>
                  At Tru Bond Cleaning Adelaide, our oven cleaning service gets
                  your oven back to a near-showroom condition. We use
                  professional-grade degreasers that cut through even the
                  toughest baked-on grease. We do not just wipe the outside — we
                  clean every part of the oven.
                </p>
                <p>
                  Our cleaners use commercial-grade degreaser products that are
                  stronger and safer than standard supermarket products. The
                  process takes 1–2 hours for a standard oven and cooktop.
                </p>
                <p>
                  We recommend booking oven cleaning alongside your full bond
                  clean for the best outcome and the best price. Standalone oven
                  cleaning prices start from $80–$120 depending on the condition
                  of the oven. A heavily soiled oven may take longer and cost a
                  little more — we always give you a quote first.
                </p>
                <p>
                  Do not let a dirty oven cost you your bond. Book now and when
                  we are done, your oven will look so clean, you might think
                  twice about cooking in it again. We service all Adelaide
                  suburbs and are available 7 days a week.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="bg-gold text-navy hover:bg-gold/90 font-bold">
                    Get a Free Quote
                  </Button>
                </Link>
                <a href="tel:0488841883">
                  <Button
                    variant="outline"
                    className="border-navy text-navy hover:bg-navy hover:text-white"
                  >
                    <Phone size={16} className="mr-2" /> Call 0488841883
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
