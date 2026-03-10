import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";

const bathroomItems = [
  "Shower recess — scrub tiles, remove soap scum, clean grout, polish chrome fixtures",
  "Shower screen — remove limescale and soap build-up for streak-free glass",
  "Bathtub — scrub and polish inside and outside",
  "Toilet — clean bowl (inside with bleach), seat, lid, exterior, cistern, and base",
  "Vanity and sink — clean bowl, taps, and underneath",
  "Mirror — clean and streak-free",
  "Tiles and grout — scrub to remove mould, soap scum, and staining",
  "Floor tiles — scrub, mop, and dry",
  "Exhaust fan — remove dust and grime",
  "Towel rails and toilet roll holders — wipe clean",
];

export default function BathroomCleaningPage() {
  return (
    <>
      <Helmet>
        <title>
          Bathroom Cleaning Adelaide | Bond Clean Bathrooms | Tru Bond Cleaning
        </title>
        <meta
          name="description"
          content="Professional bathroom and toilet cleaning in Adelaide for bond cleans. Sparkling tiles, grout, and fixtures guaranteed. WhatsApp 0488841883."
        />
      </Helmet>

      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Bathroom Cleaning Adelaide
          </h1>
          <p className="text-white/75 max-w-2xl text-lg">
            Sparkling tiles, mould-free grout, and gleaming fixtures — every
            bathroom inspection passed.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src="/assets/generated/bathroom-cleaning-service.dim_800x500.jpg"
                alt="Professional bathroom cleaning Adelaide - sparkling clean bathroom by Tru Bond Cleaning"
                className="rounded-2xl w-full object-cover shadow-navy mb-6"
              />
              <div className="bg-secondary/50 rounded-xl p-6">
                <h3 className="font-display font-semibold text-navy mb-4">
                  Complete Bathroom Checklist
                </h3>
                <ul className="flex flex-col gap-3">
                  {bathroomItems.map((item) => (
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
                Bathrooms That Shine at Final Inspection
              </h2>
              <div className="prose prose-sm max-w-none text-foreground leading-relaxed space-y-4">
                <p>
                  Bathrooms are tough to clean — and they are tough to get right
                  during a bond clean. Soap scum, mould, limescale, and grime
                  build up in showers, on tiles, and around taps. Property
                  managers pay close attention to bathrooms and toilets at the
                  final inspection. One missed spot of mould or a dirty toilet
                  can cost you part of your bond.
                </p>
                <p>
                  At Tru Bond Cleaning Adelaide, we specialise in deep bathroom
                  and toilet cleaning that meets the highest rental standards.
                  We clean every single part of the bathroom.
                </p>
                <p>
                  We use professional-grade bathroom cleaners including mould
                  remover, limescale remover, and grout cleaner. These products
                  are stronger than what you can buy in a supermarket and they
                  are safe for tiles and fixtures.
                </p>
                <p>
                  Mould is a particular problem in Adelaide&apos;s humid
                  summers. If your bathroom has mould on the ceiling or walls,
                  we treat it with a specialised mould remover. We will remove
                  all visible mould at the time of cleaning.
                </p>
                <p>
                  Most rental properties in Adelaide have 1–3 bathrooms. Each
                  bathroom takes about 30–60 minutes to clean to bond standard.
                  Standalone deep bathroom cleaning prices start from $60–$80
                  per bathroom.
                </p>
                <p>
                  Book a professional bathroom clean in Adelaide today. We
                  service all Adelaide suburbs, available 7 days. Let us take
                  the scrubbing off your hands.
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
