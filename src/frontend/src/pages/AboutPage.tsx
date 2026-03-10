import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Award, CheckCircle, Heart, Shield, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";

const values = [
  {
    icon: Award,
    title: "REISA Compliant",
    desc: "We follow the Real Estate Institute of South Australia checklist on every job, so nothing gets missed.",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    desc: "All our cleaners carry public liability insurance. Your property and belongings are protected.",
  },
  {
    icon: CheckCircle,
    title: "Bond-Back Guarantee",
    desc: "If your property manager is not satisfied, we come back and re-clean for free. Zero arguments.",
  },
  {
    icon: Users,
    title: "Local Adelaide Team",
    desc: "We are locals. We know Adelaide rental properties, suburbs, and what property managers look for.",
  },
  {
    icon: Heart,
    title: "We Genuinely Care",
    desc: "Moving is stressful. We take the cleaning worry off your plate so you can focus on your new home.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>
          About Tru Bond Cleaning Adelaide | Local Bond Cleaning Experts
        </title>
        <meta
          name="description"
          content="Learn about Tru Bond Cleaning Adelaide — local bond cleaning experts committed to getting your full bond back. Meet the team. WhatsApp 0488841883."
        />
      </Helmet>

      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            About Tru Bond Cleaning Adelaide
          </h1>
          <p className="text-white/75 max-w-2xl text-lg">
            Local bond cleaning experts who genuinely care about getting your
            bond back.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src="/assets/generated/about-team.dim_800x500.jpg"
                alt="Tru Bond Cleaning Adelaide team - professional and friendly bond cleaning experts"
                className="rounded-2xl w-full object-cover shadow-navy mb-6"
              />
              <div className="bg-gold/10 border border-gold/30 rounded-xl p-6">
                <h3 className="font-display font-semibold text-navy mb-2">
                  Our 100% Bond-Back Guarantee
                </h3>
                <p className="text-sm text-foreground leading-relaxed">
                  We stand behind every clean we do. If your property manager
                  finds any issue with our work, we come back and fix it for
                  free — no questions asked, no extra charges. That is our
                  promise to you.
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-navy mb-4">
                Adelaide&apos;s Dedicated Bond Cleaning Specialists
              </h2>
              <div className="prose prose-sm max-w-none text-foreground leading-relaxed space-y-4">
                <p>
                  Tru Bond Cleaning Adelaide started with one simple goal: help
                  Adelaide renters get their full bond back without the stress.
                  Moving out is already one of the most overwhelming things you
                  can do. The last thing you need is to lose hundreds — or
                  thousands — of dollars because a property manager found a spot
                  you missed.
                </p>
                <p>
                  Our team knows Adelaide rental properties inside out. We have
                  cleaned homes from Glenelg to Golden Grove, from Norwood to
                  Noarlunga. We understand what each property manager looks for,
                  what the REISA checklist covers, and what it takes to get that
                  final inspection tick.
                </p>
                <p>
                  Every single cleaner on our team is trained specifically in
                  bond cleaning — not just general house cleaning. Bond cleaning
                  is a different skill. It requires attention to the details
                  that property managers check: grout lines, oven interiors,
                  window tracks, and the inside of cupboards.
                </p>
                <p>
                  We bring all our own professional equipment and cleaning
                  products. You do not need to provide a thing. We arrive on
                  time, we work hard, we take photos when we finish, and we do
                  not leave until the job is done to a standard we are proud of.
                </p>
                <p>
                  We are fully insured. We are 100% local. We genuinely care
                  about getting you your bond back. And we back it all up with
                  our bond-back guarantee.
                </p>
                <p>
                  If you are moving out anywhere in Adelaide, call or WhatsApp
                  Tru Bond Cleaning Adelaide on 0488841883. We would love to
                  help.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="bg-gold text-navy hover:bg-gold/90 font-bold">
                    Get a Free Quote
                  </Button>
                </Link>
                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="border-navy text-navy hover:bg-navy hover:text-white"
                  >
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary/40">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-navy mb-10 text-center">
            Why We Are Different
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-card rounded-xl p-6 text-center border border-border shadow-xs"
              >
                <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-3">
                  <v.icon size={20} className="text-navy" />
                </div>
                <h3 className="font-semibold text-navy text-sm mb-2">
                  {v.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
