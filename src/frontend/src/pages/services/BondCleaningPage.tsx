import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";

const included = [
  "Kitchen — oven, rangehood, stovetop, cupboards (inside and out), benchtops, sink, splashback, dishwasher",
  "Bathrooms — shower screens, tiles, grout, taps, mirrors, vanity, toilet (inside and out)",
  "Bedrooms — inside wardrobes, light fittings, skirting boards, ceiling fans, spot-cleaned walls",
  "Living areas — vacuumed floors, mopped floors, skirting boards, light switches, door handles",
  "Laundry — inside and outside of washing machine, tub, lint filter",
  "Windows — inside glass, tracks, and frames",
  "Balcony or patio — swept and mopped",
];

export default function BondCleaningPage() {
  return (
    <>
      <Helmet>
        <title>
          Bond Cleaning Adelaide | End of Lease Cleaning | Tru Bond Cleaning
        </title>
        <meta
          name="description"
          content="Professional bond cleaning in Adelaide. We follow the REISA checklist and guarantee your bond back. Book online or WhatsApp 0488841883."
        />
      </Helmet>

      <section className="relative py-16 bg-navy">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Bond Cleaning Adelaide
          </h1>
          <p className="text-white/75 max-w-2xl text-lg">
            End of lease cleaning done right. REISA checklist compliant. 100%
            bond-back guarantee.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src="/assets/generated/bond-cleaning-service.dim_800x500.jpg"
                alt="Professional bond cleaning Adelaide - Tru Bond Cleaning team cleaning a rental home"
                className="rounded-2xl w-full object-cover shadow-navy mb-6"
              />
              <div className="bg-secondary/50 rounded-xl p-6">
                <h3 className="font-display font-semibold text-navy mb-4">
                  What&apos;s Included in Our Bond Clean
                </h3>
                <ul className="flex flex-col gap-3">
                  {included.map((item) => (
                    <li key={item} className="flex gap-3 items-start text-sm">
                      <CheckCircle
                        size={16}
                        className="text-gold flex-shrink-0 mt-0.5"
                      />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-navy mb-4">
                Adelaide&apos;s Most Thorough Bond Clean
              </h2>
              <div className="prose prose-sm max-w-none text-foreground leading-relaxed space-y-4">
                <p>
                  Bond cleaning (also called end of lease cleaning or vacate
                  cleaning) is the most important clean you do as a renter. It
                  is your chance to leave the property exactly how you found it
                  — spotless and ready for the next tenant. At Tru Bond Cleaning
                  Adelaide, we make it easy.
                </p>
                <p>
                  We follow the Real Estate Institute of South Australia (REISA)
                  checklist on every single job. That is the same checklist your
                  property manager uses. So nothing gets missed.
                </p>
                <p>
                  We bring all our own cleaning equipment and products. You do
                  not need to provide anything. Our team arrives on time, works
                  efficiently, and takes photos of everything after we finish.
                  These photos protect you if there is ever a dispute with your
                  landlord.
                </p>
                <p>
                  We offer a 100% bond-back guarantee. If your property manager
                  finds anything that needs more work, we come back and fix it
                  for free — no arguments, no extra charges.
                </p>
                <p>
                  Moving out of a 2-bedroom unit? Expect our bond clean to take
                  4–6 hours. A 4-bedroom house may take 8–10 hours. Prices start
                  from $180 for a 1-bedroom and go up based on size and
                  condition. We give you a clear fixed-price quote before we
                  start.
                </p>
                <p>
                  Adelaide&apos;s rental market is competitive. When your
                  landlord sees a perfectly clean home, they process your bond
                  refund faster. That means money back in your account sooner.
                  Do not risk your bond on a rushed DIY clean.
                </p>
                <p>
                  Book Tru Bond Cleaning Adelaide today and get your full bond
                  back. We are available 7 days a week, including weekends and
                  public holidays.
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
