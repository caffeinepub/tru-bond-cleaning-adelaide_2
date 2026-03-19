import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { suburbsBySlug } from "@/data/suburbsData";
import { Link, useRouter } from "@tanstack/react-router";
import {
  Award,
  CheckCircle,
  MapPin,
  Phone,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const starKeys = ["s1", "s2", "s3", "s4", "s5"];

const highlights = [
  "100% Bond-Back Guarantee",
  "REISA Checklist Compliant",
  "Fully Insured Team",
  "Same-Day Bookings Available",
  "Professional Equipment Supplied",
  "Free Re-Clean If Needed",
];

const stats = [
  { icon: Users, value: "1,500+", label: "Cleans Completed" },
  { icon: Award, value: "98%", label: "Bond Recovery Rate" },
  { icon: Shield, value: "10+", label: "Years Experience" },
  { icon: CheckCircle, value: "100%", label: "Bond-Back Guarantee" },
];

const cleaningChecklist = [
  "Full kitchen clean (oven, rangehood, cupboards)",
  "Oven interior — racks, door glass, walls",
  "Bathrooms & toilets scrubbed top to bottom",
  "Shower screen descaled & streak-free",
  "All bedrooms & inside wardrobes",
  "All windows inside & out",
  "Window tracks vacuumed & wiped",
  "Walls spot-cleaned for marks & scuffs",
  "Floors vacuumed & mopped",
  "Laundry area fully cleaned",
  "Skirting boards & light fittings",
  "Power points & switches wiped",
];

export default function SuburbPage() {
  const router = useRouter();
  const pathname = router.state.location.pathname;
  const slug = pathname.replace("/suburbs/", "").replace(/\/+$/, "");
  const data = suburbsBySlug[slug];

  if (!data) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl font-bold text-navy mb-4">Suburb Not Found</h1>
        <p className="text-muted-foreground mb-8">
          Sorry, we could not find that suburb page.
        </p>
        <Link to="/">
          <Button className="bg-navy text-white">Back to Home</Button>
        </Link>
      </div>
    );
  }

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Tru Bond Cleaning Adelaide",
    description: data.metaDescription,
    telephone: "0488841883",
    areaServed: [
      {
        "@type": "Place",
        name: `${data.name}, SA ${data.postcode}`,
      },
    ],
    url: `https://trubondcleaningadelaide.com.au/suburbs/${data.slug}`,
    image:
      "https://trubondcleaningadelaide.com.au/assets/generated/hero-banner.dim_1200x600.jpg",
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Bond Cleaning Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `Bond Cleaning ${data.name}`,
            description: `Professional end of lease cleaning in ${data.name}, SA ${data.postcode} with 100% bond-back guarantee`,
          },
        },
      ],
    },
  };

  return (
    <>
      <Helmet>
        <title>{data.title}</title>
        <meta name="description" content={data.metaDescription} />
        <meta name="keywords" content={data.keywords} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.metaDescription} />
        <meta
          property="og:image"
          content="https://trubondcleaningadelaide.com.au/assets/generated/suburb-hero.dim_1200x500.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://trubondcleaningadelaide.com.au/suburbs/${data.slug}`}
        />
        <link
          rel="canonical"
          href={`https://trubondcleaningadelaide.com.au/suburbs/${data.slug}`}
        />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/suburb-hero.dim_1200x500.jpg"
            alt={`Professional bond cleaning service in ${data.name}, Adelaide SA ${data.postcode} — Tru Bond Cleaning Adelaide`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/78" />
        </div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={16} className="text-gold" />
              <span className="text-white/80 text-sm font-medium">
                {data.name}, SA {data.postcode}
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Bond Cleaning {data.name}
            </h1>
            <p className="text-xl text-white/85 mb-8 leading-relaxed">
              {data.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold/90 text-navy font-bold text-base px-8"
                >
                  Get a Free Quote
                </Button>
              </a>
              <a href="tel:0488841883">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-navy font-bold text-base px-8"
                >
                  <Phone size={18} className="mr-2" />
                  0488841883
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "100% Bond Back Guarantee",
                "REISA Checklist Compliant",
                "Fully Insured",
              ].map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1.5 bg-white/15 backdrop-blur text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20"
                >
                  <CheckCircle size={12} className="text-gold" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-navy py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon size={22} className="text-gold mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-white/65 text-xs font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article */}
            <article className="lg:col-span-2">
              <h2 className="font-display text-3xl font-bold text-navy mb-6">
                Bond Cleaning in {data.name}, Adelaide
              </h2>

              {/* First 3 paragraphs */}
              <div className="flex flex-col gap-5 mb-10">
                {data.body.slice(0, 3).map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 30)}
                    className="text-foreground leading-relaxed text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Inline kitchen image */}
              <figure className="mb-10 rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/assets/generated/suburb-kitchen-clean.dim_800x500.jpg"
                  alt={`Spotless kitchen after professional bond cleaning in ${data.name} Adelaide — Tru Bond Cleaning Adelaide`}
                  className="w-full object-cover max-h-72"
                />
                <figcaption className="text-xs text-muted-foreground text-center mt-2 italic">
                  A spotless kitchen after a Tru Bond Cleaning Adelaide end of
                  lease clean in {data.name}
                </figcaption>
              </figure>

              {/* Next 3 paragraphs */}
              <div className="flex flex-col gap-5 mb-10">
                {data.body.slice(3, 6).map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 30)}
                    className="text-foreground leading-relaxed text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Inline team image */}
              <figure className="mb-10 rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/assets/generated/suburb-team-working.dim_800x500.jpg"
                  alt={`Tru Bond Cleaning Adelaide professional team cleaning a rental property in ${data.name} SA ${data.postcode}`}
                  className="w-full object-cover max-h-72"
                />
                <figcaption className="text-xs text-muted-foreground text-center mt-2 italic">
                  Tru Bond Cleaning Adelaide's professional team at work in{" "}
                  {data.name}
                </figcaption>
              </figure>

              {/* Remaining paragraphs */}
              <div className="flex flex-col gap-5 mb-10">
                {data.body.slice(6).map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 30)}
                    className="text-foreground leading-relaxed text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Closing CTA box */}
              <div className="p-6 bg-navy/5 border border-navy/10 rounded-2xl">
                <p className="text-navy font-semibold text-base">
                  {data.closingCta}
                </p>
              </div>

              {/* Suburb-specific FAQ */}
              {data.suburbFaqs && data.suburbFaqs.length > 0 && (
                <div className="mt-12">
                  <h3 className="font-display text-2xl font-bold text-navy mb-6">
                    Frequently Asked Questions — Bond Cleaning {data.name}
                  </h3>
                  <Accordion
                    type="single"
                    collapsible
                    className="flex flex-col gap-3"
                  >
                    {data.suburbFaqs.map((faq, i) => (
                      <AccordionItem
                        key={faq.q}
                        value={`sfaq-${i}`}
                        className="bg-card border border-border rounded-xl px-5 shadow-xs"
                      >
                        <AccordionTrigger className="font-semibold text-navy text-left py-4 hover:no-underline">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-foreground leading-relaxed pb-4">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="flex flex-col gap-6">
              {/* Quick quote card */}
              <Card className="border-gold/30 shadow-md sticky top-24">
                <CardContent className="pt-6">
                  <h3 className="font-display font-bold text-navy text-lg mb-3">
                    Get a Free {data.name} Quote
                  </h3>
                  <p className="text-muted-foreground text-sm mb-5">
                    Fast response. Fixed price. 100% bond-back guarantee.
                  </p>
                  <div className="flex flex-col gap-3 mb-5">
                    <a
                      href="https://wa.me/61488841883"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold"
                        size="lg"
                      >
                        WhatsApp Us
                      </Button>
                    </a>
                    <Link to="/contact" className="block">
                      <Button
                        variant="outline"
                        className="w-full border-navy text-navy font-semibold"
                        size="lg"
                      >
                        Book Online
                      </Button>
                    </Link>
                  </div>

                  {/* Pricing guide */}
                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-navy text-sm mb-3">
                      Price Guide — {data.name}
                    </h4>
                    <ul className="flex flex-col gap-1.5 text-sm">
                      {[
                        { size: "1 Bed / Studio", price: "$180 – $280" },
                        { size: "2 Bedroom", price: "$260 – $380" },
                        { size: "3 Bedroom", price: "$350 – $480" },
                        { size: "4 Bedroom+", price: "$450 – $600+" },
                      ].map((row) => (
                        <li
                          key={row.size}
                          className="flex justify-between items-center"
                        >
                          <span className="text-muted-foreground">
                            {row.size}
                          </span>
                          <span className="font-semibold text-navy">
                            {row.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-muted-foreground mt-2">
                      *Fixed price includes all equipment & products. Carpet
                      steam cleaning available as an add-on.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* What's included */}
              <Card className="border-border">
                <CardContent className="pt-6">
                  <h3 className="font-display font-bold text-navy text-lg mb-4">
                    What&apos;s Included in Every Clean
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {cleaningChecklist.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <CheckCircle
                          size={15}
                          className="text-gold mt-0.5 flex-shrink-0"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Testimonial */}
              <Card className="border-border bg-secondary/30">
                <CardContent className="pt-6">
                  <div className="flex gap-0.5 mb-3">
                    {starKeys.map((k) => (
                      <Star key={k} size={15} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-foreground text-sm italic leading-relaxed mb-3">
                    &ldquo;{data.testimonial.text}&rdquo;
                  </p>
                  <p className="text-navy font-semibold text-sm">
                    — {data.testimonial.name}
                  </p>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-8 text-center">
            Why {data.name} Renters Trust Tru Bond Cleaning Adelaide
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {highlights.map((h) => (
              <div
                key={h}
                className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border"
              >
                <CheckCircle size={18} className="text-gold flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-white mb-3">
            Ready to Book Your {data.name} Bond Clean?
          </h2>
          <p className="text-white/75 mb-6">
            Get in touch now for a fast, free quote with our 100% bond-back
            guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white font-bold px-8"
              >
                WhatsApp Now
              </Button>
            </a>
            <Link to="/">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold/90 text-navy font-bold px-8"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
