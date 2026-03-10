import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bath,
  Eye,
  Home,
  Layers,
  Sparkles,
  Wind,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const services = [
  {
    icon: Home,
    title: "Bond / End of Lease Cleaning",
    desc: "Our flagship service. We follow the REISA checklist on every job and guarantee your bond back. From kitchen to bathroom, oven to windows — we cover it all.",
    to: "/services/bond-cleaning",
    img: "/assets/generated/bond-cleaning-service.dim_800x500.jpg",
    alt: "Professional bond cleaning Adelaide - Tru Bond Cleaning team",
  },
  {
    icon: Layers,
    title: "Carpet Steam Cleaning",
    desc: "Hot water extraction removes stains, pet hair, allergens and odours. We use commercial-grade machines for results that impress every property manager.",
    to: "/services/carpet-cleaning",
    img: "/assets/generated/carpet-cleaning-service.dim_800x500.jpg",
    alt: "Professional carpet steam cleaning Adelaide",
  },
  {
    icon: Sparkles,
    title: "Oven & Appliance Cleaning",
    desc: "Baked-on grease, burnt food, filthy racks — we handle it all. Your oven, rangehood, and dishwasher will look practically new.",
    to: "/services/oven-cleaning",
    img: "/assets/generated/oven-cleaning-service.dim_800x500.jpg",
    alt: "Professional oven cleaning Adelaide",
  },
  {
    icon: Eye,
    title: "Window Cleaning",
    desc: "Crystal-clear, streak-free glass inside and out. We clean frames, tracks, and screens too. First impressions matter at final inspection.",
    to: "/services/window-cleaning",
    img: "/assets/generated/window-cleaning-service.dim_800x500.jpg",
    alt: "Professional window cleaning Adelaide",
  },
  {
    icon: Bath,
    title: "Bathroom & Toilet Cleaning",
    desc: "No soap scum, no mould, no limescale. We scrub every tile, polish every fixture, and leave your bathroom sparkling.",
    to: "/services/bathroom-cleaning",
    img: "/assets/generated/bathroom-cleaning-service.dim_800x500.jpg",
    alt: "Professional bathroom cleaning Adelaide",
  },
  {
    icon: Wind,
    title: "Wall Spot Cleaning",
    desc: "Scuffs, marks, fingerprints — we spot-clean your walls so they are fresh and ready. Included in our full bond clean.",
    to: "/services/bond-cleaning",
    img: "/assets/generated/bond-cleaning-service.dim_800x500.jpg",
    alt: "Wall spot cleaning as part of bond cleaning Adelaide",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Bond Cleaning Services Adelaide | Tru Bond Cleaning</title>
        <meta
          name="description"
          content="Explore all bond cleaning services offered by Tru Bond Cleaning Adelaide — end of lease, carpet, oven, window, and bathroom cleaning. 100% bond-back guarantee."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative py-20 bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/bond-cleaning-service.dim_800x500.jpg"
            alt="Tru Bond Cleaning Adelaide - professional end of lease cleaning service team"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Our Cleaning Services in Adelaide
          </h1>
          <p className="text-white/75 max-w-2xl mx-auto text-lg">
            From full bond cleans to carpet steam cleaning and sparkling
            bathrooms — we offer everything you need to pass your final
            inspection and get your bond back in full.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <Card
                key={svc.title}
                className="overflow-hidden border-border hover:shadow-navy hover:-translate-y-1 transition-all group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={svc.img}
                    alt={svc.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-navy/10 flex items-center justify-center">
                      <svc.icon size={18} className="text-navy" />
                    </div>
                    <h2 className="font-display font-semibold text-navy">
                      {svc.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {svc.desc}
                  </p>
                  <Link to={svc.to}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-navy text-navy hover:bg-navy hover:text-white"
                    >
                      Learn More <ArrowRight size={14} className="ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
