import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";

const windowItems = [
  "Inside glass — smudges, fingerprints, and grime",
  "Outside glass — dust, rain spots, and bird marks",
  "Window tracks and frames — dirt and build-up",
  "Window screens and flyscreens — dust and cobwebs",
  "Sliding door tracks — grime and debris",
];

export default function WindowCleaningPage() {
  return (
    <>
      <Helmet>
        <title>
          Window Cleaning Adelaide | Bond Clean Windows | Tru Bond Cleaning
        </title>
        <meta
          name="description"
          content="Professional window cleaning in Adelaide for bond cleans and regular maintenance. Crystal clear results guaranteed. WhatsApp 0488841883."
        />
      </Helmet>

      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Window Cleaning Adelaide
          </h1>
          <p className="text-white/75 max-w-2xl text-lg">
            Crystal-clear, streak-free windows that let in the light and impress
            at final inspection.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src="/assets/generated/window-cleaning-service.dim_800x500.jpg"
                alt="Professional window cleaning Adelaide - crystal clear windows by Tru Bond Cleaning"
                className="rounded-2xl w-full object-cover shadow-navy mb-6"
              />
              <div className="bg-secondary/50 rounded-xl p-6 mb-4">
                <h3 className="font-display font-semibold text-navy mb-4">
                  What Our Window Clean Covers
                </h3>
                <ul className="flex flex-col gap-3">
                  {windowItems.map((item) => (
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
                <h3 className="font-display font-semibold text-navy mb-3">
                  Pricing Guide
                </h3>
                <ul className="text-sm space-y-1.5">
                  <li className="flex justify-between">
                    <span>Small home (up to 8 windows)</span>
                    <span className="font-semibold">$60–$90</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Medium home (9–15 windows)</span>
                    <span className="font-semibold">$90–$130</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Large home (16+ windows)</span>
                    <span className="font-semibold">$130–$180</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-navy mb-4">
                Streak-Free Windows Every Time
              </h2>
              <div className="prose prose-sm max-w-none text-foreground leading-relaxed space-y-4">
                <p>
                  Clean windows make a huge difference to the look and feel of a
                  home. Dirty, smudged, or streaky windows are easy for a
                  property manager to spot — and they can lead to bond
                  deductions. At Tru Bond Cleaning Adelaide, we make sure every
                  window in your rental home is crystal clear and ready for
                  inspection.
                </p>
                <p>
                  We use a streak-free cleaning solution and professional
                  squeegees to leave every window sparkling. We do not leave
                  smears or drips. The result is crystal-clear glass that lets
                  in maximum light and looks great.
                </p>
                <p>
                  Clean windows are also important for first impressions. When a
                  potential tenant or property manager walks into a freshly
                  cleaned home, clean windows make the whole place feel brighter
                  and more cared for.
                </p>
                <p>
                  A standard 3-bedroom home with 10–15 windows takes about 1.5–2
                  hours to clean inside and outside. Larger homes may take
                  longer.
                </p>
                <p>
                  We recommend combining window cleaning with your bond clean
                  for convenience and the best possible result at final
                  inspection. When you book both together, we coordinate the
                  schedule so everything is done in one visit.
                </p>
                <p>
                  Tru Bond Cleaning Adelaide services all Adelaide suburbs
                  including the inner suburbs like Glenelg, Norwood, and Unley,
                  as well as outer suburbs like Salisbury, Elizabeth, Tea Tree
                  Gully, and Golden Grove. Available 7 days a week.
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
