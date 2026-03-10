import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";

const removes = [
  "Pet hair and dander",
  "Food stains and drink spills",
  "Mud and dirt tracked in from outside",
  "Mould and mildew odours",
  "Dust mites and allergens",
  "General wear and grime",
];

export default function CarpetCleaningPage() {
  return (
    <>
      <Helmet>
        <title>
          Carpet Cleaning Adelaide | Steam Cleaning | Tru Bond Cleaning
        </title>
        <meta
          name="description"
          content="Professional carpet steam cleaning in Adelaide for bond cleans and general cleaning. Book online or WhatsApp 0488841883."
        />
      </Helmet>

      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Carpet Steam Cleaning Adelaide
          </h1>
          <p className="text-white/75 max-w-2xl text-lg">
            Professional hot water extraction for carpets that pass every final
            inspection.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src="/assets/generated/carpet-cleaning-service.dim_800x500.jpg"
                alt="Professional carpet steam cleaning Adelaide - Tru Bond Cleaning technician cleaning carpets"
                className="rounded-2xl w-full object-cover shadow-navy mb-6"
              />
              <div className="bg-secondary/50 rounded-xl p-6">
                <h3 className="font-display font-semibold text-navy mb-4">
                  What Steam Cleaning Removes
                </h3>
                <ul className="flex flex-col gap-3">
                  {removes.map((item) => (
                    <li key={item} className="flex gap-3 items-center text-sm">
                      <CheckCircle
                        size={16}
                        className="text-gold flex-shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-navy/5 rounded-xl p-6 mt-4">
                <h3 className="font-display font-semibold text-navy mb-3">
                  Pricing Guide
                </h3>
                <ul className="text-sm space-y-1.5">
                  <li className="flex justify-between">
                    <span>1 bedroom</span>
                    <span className="font-semibold">$80–$120</span>
                  </li>
                  <li className="flex justify-between">
                    <span>2 bedrooms</span>
                    <span className="font-semibold">$120–$160</span>
                  </li>
                  <li className="flex justify-between">
                    <span>3 bedrooms</span>
                    <span className="font-semibold">$150–$200</span>
                  </li>
                  <li className="flex justify-between">
                    <span>4 bedrooms</span>
                    <span className="font-semibold">$180–$240</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-navy mb-4">
                Carpets That Impress at Final Inspection
              </h2>
              <div className="prose prose-sm max-w-none text-foreground leading-relaxed space-y-4">
                <p>
                  Carpets are one of the first things a property manager checks
                  during a final inspection. Dirty, stained, or smelly carpets
                  almost always lead to bond deductions. That is why Tru Bond
                  Cleaning Adelaide offers professional carpet steam cleaning as
                  part of our bond cleaning service or as a standalone service.
                </p>
                <p>
                  We use hot water extraction — the most effective method for
                  deep cleaning carpets. The machine heats water to a high
                  temperature and injects it deep into the carpet fibres. This
                  loosens dirt, dust mites, pet hair, and stains. Then it sucks
                  everything out, leaving your carpets clean, fresh, and nearly
                  dry.
                </p>
                <p>
                  Many landlords and property managers require professional
                  carpet steam cleaning as a condition of the lease. If your
                  lease agreement says carpets must be professionally cleaned,
                  we can provide a receipt and certificate for your records.
                </p>
                <p>
                  A 3-bedroom home with standard carpet takes about 2–3 hours to
                  steam clean. Carpets are usually dry within 2–4 hours after
                  cleaning, depending on ventilation and weather.
                </p>
                <p>
                  We combine carpet cleaning with bond cleaning for the best
                  result. When the two services are done on the same day,
                  everything is fresh and ready for the final inspection. We
                  treat stubborn stains before the full steam clean. Stains we
                  treat include red wine, coffee, pet urine, and ink.
                </p>
                <p>
                  We service all Adelaide suburbs including Norwood, Glenelg,
                  Unley, Prospect, Mitcham, Marion, Salisbury, Tea Tree Gully,
                  and more.
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
