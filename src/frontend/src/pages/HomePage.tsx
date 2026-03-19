import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { suburbs } from "@/data/suburbsData";
import { Link } from "@tanstack/react-router";
import {
  Award,
  Bath,
  CheckCircle,
  Clock,
  Eye,
  Home,
  Layers,
  MapPin,
  Phone,
  Shield,
  Sparkles,
  Star,
  Users,
  Wind,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const services = [
  {
    icon: Home,
    title: "Bond / End of Lease Cleaning",
    desc: "Full REISA-checklist clean so your property manager ticks every box.",
    to: "/services/bond-cleaning",
  },
  {
    icon: Layers,
    title: "Carpet Steam Cleaning",
    desc: "Hot water extraction removes deep stains, odours, and allergens.",
    to: "/services/carpet-cleaning",
  },
  {
    icon: Sparkles,
    title: "Oven & Appliance Cleaning",
    desc: "We blast through baked-on grease so your oven looks brand new.",
    to: "/services/oven-cleaning",
  },
  {
    icon: Eye,
    title: "Window Cleaning",
    desc: "Crystal-clear, streak-free windows inside and out.",
    to: "/services/window-cleaning",
  },
  {
    icon: Bath,
    title: "Bathroom & Toilet Cleaning",
    desc: "No mould, no soap scum — just sparkling tiles and chrome.",
    to: "/services/bathroom-cleaning",
  },
  {
    icon: Wind,
    title: "Wall Spot Cleaning",
    desc: "We remove scuffs, marks, and finger prints from painted walls.",
    to: "/services",
  },
];

const reasons = [
  {
    icon: CheckCircle,
    title: "100% Bond-Back Guarantee",
    desc: "If your property manager finds an issue, we come back for free. No arguments.",
  },
  {
    icon: Shield,
    title: "Fully Insured Team",
    desc: "All our cleaners carry public liability insurance. Your home is protected.",
  },
  {
    icon: Award,
    title: "REISA Checklist Compliant",
    desc: "We follow the exact checklist your agent uses — nothing gets missed.",
  },
  {
    icon: Clock,
    title: "Same-Day Bookings Available",
    desc: "Moving out tomorrow? No worries. Call us and we will make it happen.",
  },
  {
    icon: Users,
    title: "Experienced Local Team",
    desc: "Our cleaners know Adelaide rental properties inside out. Literally.",
  },
];

const testimonials = [
  {
    id: "sarah",
    text: "Got my full $2,800 bond back! The team cleaned things I didn't even notice were dirty. Amazing service.",
    name: "Sarah M.",
    suburb: "Norwood",
  },
  {
    id: "james",
    text: "Booked them the day before my lease ended. They were on time, professional, and the landlord was impressed. Highly recommend.",
    name: "James T.",
    suburb: "Glenelg",
  },
  {
    id: "priya",
    text: "The oven was disgusting when we moved in. They made it look brand new. Worth every cent.",
    name: "Priya K.",
    suburb: "Unley",
  },
];

const starKeys = ["star-1", "star-2", "star-3", "star-4", "star-5"];

const faqs = [
  {
    q: "What is Bond Cleaning and Why Is It Required?",
    a: `Bond cleaning (also called end of lease cleaning or vacate cleaning) is a super thorough clean of your rental home when you move out. Think of it like this — when you moved in, the house was spotless. When you move out, it needs to be just as spotless. That is the rule.

In South Australia, landlords can use your bond money (usually 4 weeks rent) to pay for cleaning if the property is not clean enough. Bond cleaning makes sure everything is sparkling — the kitchen, bathrooms, carpets, windows, walls, and even inside the oven. It follows the REISA checklist, which is the same list your property manager uses to check the property.

If you skip a proper bond clean, you risk losing hundreds or even thousands of dollars. A professional bond cleaner knows exactly what to look for and what to clean, so you get your money back. In Adelaide, the average bond is between $1,500 and $4,000. That is a lot of money to lose over dirty grout or a greasy oven. Tru Bond Cleaning Adelaide gives you peace of mind with our 100% bond-back guarantee.`,
  },
  {
    q: "Why Is Bond Cleaning Important?",
    a: `Bond cleaning is important because it is your money on the line. In South Australia, when you sign a lease, you pay a bond — usually 4 weeks of rent. When you move out, the landlord or property manager inspects the property. If it is not clean, they take money from your bond to pay for cleaning.

Bond cleaning protects your money. It also protects your rental history. If you have a bad rental history, it is harder to rent another home. A professional bond clean makes sure the property meets the condition report from when you moved in. It gives you proof that you left the property in good shape.

Tru Bond Cleaning Adelaide uses the REISA checklist and takes detailed photos after every clean. This protects you if there is ever a dispute.`,
  },
  {
    q: "How Much Does a Bond Clean Cost?",
    a: `The cost of a bond clean in Adelaide depends on the size of your home and what extra services you need. Here is a rough guide:

• Studio / 1 bedroom: $180 – $280
• 2 bedrooms: $260 – $380
• 3 bedrooms: $350 – $480
• 4 bedrooms: $450 – $600+

If you add carpet steam cleaning or window cleaning, prices go up a little. But here is the thing — a professional bond clean is always worth it. Losing your bond costs far more than the price of a clean.

At Tru Bond Cleaning Adelaide, we give you a clear quote upfront. No hidden fees, no surprises. We offer competitive prices and include a free re-clean if your property manager finds any issues. Call or WhatsApp us on 0488841883 for a free quote today.`,
  },
  {
    q: "What Is a Full Bond Clean?",
    a: `A full bond clean is a top-to-bottom, inside-out clean of your entire rental property. It covers everything listed on the REISA property condition report. That means:

• Kitchen (inside oven, rangehood, cupboards, benchtops, splashback)
• All bathrooms and toilets
• Bedrooms (inside wardrobes, light fittings, skirting boards)
• Living areas
• Laundry
• Balconies and outdoor areas
• Windows (inside and outside)
• Walls (spot cleaning marks and scuffs)
• Carpets (vacuum and sometimes steam clean)

A full bond clean is more detailed than a regular house clean. It is designed to get the property back to the condition it was in when you first moved in. At Tru Bond Cleaning Adelaide, our full bond clean follows the exact REISA checklist. We do not cut corners. Every item gets ticked off before we leave.`,
  },
  {
    q: "Which Are the Top Rated Bond Cleaning Companies Near Me?",
    a: `Here are 5 top-rated bond cleaning companies in Adelaide and South Australia:

1. Fantastic Cleaners Adelaide — fantasticcleaners.com.au
Fantastic Cleaners is a well-known national cleaning company with a strong Adelaide presence. They offer bond cleaning, carpet cleaning, and general house cleaning. Their online booking system is easy to use. They follow the REISA checklist and offer a re-clean guarantee. Great for renters who want a reliable, well-established service with lots of online reviews.

2. Jim's Cleaning Adelaide — jimscleaning.com.au
Jim's Cleaning is part of the famous Jim's Group franchise. They have local operators across Adelaide. Bond cleaning, carpet cleaning, and window cleaning are all available. Jim's cleaners are police checked and insured. Good for people who prefer a trusted Australian brand with a local touch.

3. Absolute Domestics Adelaide — absolutedomestics.com.au
Absolute Domestics specialises in residential cleaning including bond and end-of-lease cleans. Their cleaners are carefully vetted and experienced. Known for attention to detail and flexible scheduling. Good choice for renters looking for a personalised approach.

4. Clean to Perfection Adelaide — cleantoperfection.com.au
Clean to Perfection is a local Adelaide cleaning company focused on high-quality bond cleans. Known for thoroughness and a customer-first approach. They use professional-grade equipment and eco-friendly products. A great option for Adelaide renters who want a local expert.

5. Tru Bond Cleaning Adelaide — trubondcleaningbrisbane.com
Tru Bond Cleaning is Adelaide's dedicated bond cleaning specialist. The team follows the REISA checklist on every job and guarantees your bond back. They offer transparent pricing, same-day bookings, and a free re-clean if needed. Fully insured and equipped with professional tools, they make moving out stress-free. Customers love their friendly service, attention to detail, and honest communication. Whether you have a studio or a 5-bedroom house, Tru Bond Cleaning Adelaide delivers results you can count on. Call or WhatsApp 0488841883 today.`,
  },
  {
    q: "Which Cleaning Products Are Best for Bond Cleaning?",
    a: `The best cleaning products for bond cleaning are powerful but safe. Here are the top picks that professional cleaners use:

• Selleys Sugar Soap — great for walls and painted surfaces. Removes grease and marks without damaging paint.
• Exit Mould — the best for bathroom tiles, grout, and shower screens. Kills mould and leaves surfaces sparkling.
• Easy-Off BAM! Oven Cleaner — cuts through baked-on grease inside ovens and stovetops fast.
• White King Bleach — perfect for toilets, sinks, and tough stains.
• Windex Glass Cleaner — streak-free shine on windows and mirrors.
• Goo Gone — removes sticky labels, tape residue, and marks from surfaces.

For carpets, use a professional hot water extraction machine with a carpet shampoo like Bissell Professional Carpet Shampoo. Most of these products are available at Bunnings Warehouse, Woolworths, or Coles. Tru Bond Cleaning Adelaide uses professional-grade versions of these products on every job.`,
  },
  {
    q: "How Much Does a Professional Bond Clean Typically Cost?",
    a: `Professional bond cleaning in Adelaide typically costs between $180 and $600+, depending on property size. Here is a breakdown:

• 1 bedroom unit: $180–$280
• 2 bedroom home: $260–$380
• 3 bedroom home: $350–$480
• 4 bedroom home: $450–$600
• 5+ bedroom home: $600+

Add-ons like carpet steam cleaning ($80–$200), window cleaning ($50–$100), and garage cleaning ($30–$60) increase the total. These prices are for professional cleaners who follow the REISA checklist and include a re-clean guarantee.

DIY bond cleaning can save money upfront but risks losing your bond if standards are not met. Tru Bond Cleaning Adelaide offers fixed, transparent pricing with no hidden costs. WhatsApp us on 0488841883 for a personalised quote.`,
  },
  {
    q: "What Products Are Best for Bond Cleaning Carpets?",
    a: `Carpet cleaning during a bond clean requires the right products for the best results. Here are the best options:

1. Bissell Professional Carpet Shampoo (amazon.com.au) — Removes deep stains and deodorises carpets effectively.
2. Rug Doctor Carpet Detergent (bunnings.com.au) — Works with carpet cleaning machines for a deep clean.
3. Resolve Carpet Cleaner Spray (woolworths.com.au) — Great for spot-treating stains before the full clean.
4. Scotchgard Carpet & Fabric Protector (coles.com.au) — Protects carpets after cleaning and repels future stains.
5. Preen Carpet Fresh (bunnings.com.au) — Deodorises and freshens carpet fibres between cleans.

For bond cleaning, the best method is hot water extraction (steam cleaning) using a professional machine. Tru Bond Cleaning Adelaide uses commercial-grade steam cleaning equipment to get carpets spotless for your final inspection.`,
  },
  {
    q: "How to Choose a Reliable Bond Cleaner?",
    a: `Choosing the right bond cleaner is important — your bond money depends on it. Here is what to look for:

1. They follow the REISA checklist. In South Australia, property managers use the REISA condition report. Your cleaner should follow the same list.
2. They offer a re-clean guarantee. If the property manager is not happy, the cleaner should come back for free.
3. They are fully insured. If something gets damaged during the clean, insurance covers it.
4. They have real reviews. Check Google, Facebook, or True Local for honest customer reviews.
5. They give you a clear written quote. No surprises at the end.
6. They are experienced with local properties. Adelaide homes and rental standards are specific. A local cleaner knows what managers look for.

Tru Bond Cleaning Adelaide ticks all these boxes. We are local, insured, REISA-checklist trained, and we stand behind our work.`,
  },
  {
    q: "Can I Book a Bond Cleaning Company Online with a Satisfaction Guarantee?",
    a: `Yes! Booking a bond cleaning company online in Adelaide is easy and convenient. Tru Bond Cleaning Adelaide lets you request a quote and book directly through our website. We respond fast — usually within the hour.

Our 100% bond-back satisfaction guarantee means if your property manager is not satisfied with the clean, we come back and re-clean the areas for free. No arguments, no extra charges.

To book, simply fill in the contact form on our website or WhatsApp us directly on 0488841883. Tell us your property address, size, and moving-out date. We will send you a clear quote. You confirm, we show up, we clean, and you get your bond back. It really is that simple. Book now and take the stress out of moving.`,
  },
  {
    q: "How Much Is a Cleaner Per Hour in Adelaide?",
    a: `A professional cleaner in Adelaide typically charges between $35 and $60 per hour for regular house cleaning. For specialised services like bond cleaning, oven cleaning, or carpet steam cleaning, the rate can be $50 to $80 per hour due to the extra effort and equipment involved.

Some companies charge a fixed rate per job rather than per hour — this is common for bond cleans. A fixed rate is often better because you know exactly what you pay.

Hourly rates can vary based on: experience of the cleaner, size and condition of the property, type of service, and location within Adelaide.

At Tru Bond Cleaning Adelaide, we prefer to give you a fixed price quote so there are no surprises. WhatsApp 0488841883 for a free, no-obligation quote.`,
  },
  {
    q: "How Much Is an End of Lease Clean in Australia? How Much to Pay a Cleaner for 3 Hours? What Is the 20-Minute Rule in Cleaning?",
    a: `End of lease clean cost in Australia: Across Australia, end of lease cleaning costs between $200 and $700+ depending on the state and property size. In Adelaide, prices are: 1 bed: $180–$280 | 2 bed: $260–$380 | 3 bed: $350–$480 | 4 bed: $450–$600. Sydney and Melbourne prices tend to be 10–20% higher than Adelaide.

How much to pay a cleaner for 3 hours: At an average rate of $40–$55 per hour, 3 hours of regular cleaning costs $120–$165. For professional bond or deep cleaning at $60–$80 per hour, expect to pay $180–$240 for 3 hours.

The 20-minute rule in cleaning: The 20-minute rule is a cleaning habit where you clean for 20 minutes at a time without stopping. It helps make cleaning feel less overwhelming. You set a timer, focus hard for 20 minutes, then take a break. Professional cleaners do not use this rule — they clean until the job is done. But it is a great tip for everyday tidying at home.`,
  },
];

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>
          Bond Cleaning Adelaide | Tru Bond Cleaning | 100% Bond Back Guarantee
        </title>
        <meta
          name="description"
          content="Looking for professional bond cleaning in Adelaide? Tru Bond Cleaning delivers spotless end-of-lease cleans with a 100% bond-back guarantee. Call or WhatsApp 0488841883."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-banner.dim_1200x600.jpg"
            alt="Professional bond cleaning service in Adelaide by Tru Bond Cleaning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/75" />
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <div className="inline-block bg-gold text-navy text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              Adelaide&apos;s #1 Bond Cleaning Service
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Adelaide&apos;s Most Trusted Bond Cleaning Service
            </h1>
            <p className="text-xl text-white/85 mb-8 leading-relaxed">
              Get Your Full Bond Back — Guaranteed. We clean every corner so
              your landlord says yes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/contact">
                <Button
                  data-ocid="hero.primary_button"
                  size="lg"
                  className="bg-gold hover:bg-gold/90 text-navy font-bold text-base px-8 shadow-gold"
                >
                  Book a Free Quote
                </Button>
              </Link>
              <a href="tel:0488841883">
                <Button
                  data-ocid="hero.secondary_button"
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-navy font-bold text-base px-8"
                >
                  <Phone size={18} className="mr-2" />
                  Call Now: 0488841883
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                "100% Bond Back Guarantee",
                "REISA Checklist Compliant",
                "Fully Insured Team",
                "Same-Day Bookings",
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

      {/* SERVICES */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
              What We Clean For You
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We cover every part of your rental home so your property manager
              has nothing to complain about.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <Link key={svc.to + svc.title} to={svc.to}>
                <Card className="h-full hover:shadow-navy hover:-translate-y-1 transition-all group border-border">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center mb-4 group-hover:bg-navy group-hover:text-white transition-colors">
                      <svc.icon
                        size={22}
                        className="text-navy group-hover:text-white"
                      />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-navy mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {svc.desc}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <img
                src="/assets/generated/about-team.dim_800x500.jpg"
                alt="Tru Bond Cleaning Adelaide professional team"
                className="rounded-2xl w-full object-cover shadow-navy"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-6">
                Why Adelaide Renters Choose Us
              </h2>
              <p className="text-foreground leading-relaxed mb-8">
                We know moving out is stressful. Packing boxes, calling
                utilities, telling friends your new address... the last thing
                you need is to lose your bond. That is why Tru Bond Cleaning
                Adelaide takes the worry off your plate. Our trained cleaners
                follow the exact REISA checklist that your property manager
                uses. We clean every spot, every shelf, every grout line — so
                you get your full bond back. We have helped hundreds of Adelaide
                families and renters get their bond back without arguments. We
                are fully insured, on time, and we bring all our own equipment.
                If your property manager is not happy, we come back for free.
              </p>
              <div className="flex flex-col gap-4">
                {reasons.map((r) => (
                  <div key={r.title} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <r.icon size={20} className="text-gold" />
                    </div>
                    <div>
                      <div className="font-semibold text-navy">{r.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {r.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground">
              Real reviews from real Adelaide renters who got their bond back.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.id} className="border-border shadow-xs">
                <CardContent className="pt-6">
                  <div className="flex gap-0.5 mb-4">
                    {starKeys.map((k) => (
                      <Star key={k} size={16} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-foreground text-sm leading-relaxed mb-4 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="font-semibold text-navy text-sm">
                    {t.name}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {t.suburb}, Adelaide
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS WE SERVE */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
              Bond Cleaning Across All Adelaide Suburbs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide professional bond cleaning services throughout the
              greater Adelaide area. Click your suburb below to find out more
              about our service in your area.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {suburbs.map((s) => (
              <Link
                key={s.slug}
                to={`/suburbs/${s.slug}`}
                data-ocid="suburbs.link"
              >
                <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-gold hover:shadow-md hover:-translate-y-0.5 transition-all group">
                  <MapPin
                    size={16}
                    className="text-gold flex-shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <div>
                    <div className="font-semibold text-navy text-sm">
                      {s.name}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      SA {s.postcode}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-8">
            Don&apos;t see your suburb? We cover all of greater Adelaide.{" "}
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy font-semibold underline hover:text-gold"
            >
              Contact us
            </a>{" "}
            to check availability.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
              Bond Cleaning FAQ — All Your Questions Answered
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know about bond cleaning in Adelaide.
            </p>
          </div>
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`faq-${i}`}
                data-ocid={`faq.item.${i + 1}`}
                className="bg-card border border-border rounded-xl px-6 shadow-xs"
              >
                <AccordionTrigger className="font-semibold text-navy text-left py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground leading-relaxed pb-5 whitespace-pre-line">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Your Bond Back?
          </h2>
          <p className="text-white/75 mb-8 max-w-xl mx-auto">
            Book online in minutes. We respond fast. 100% bond-back guarantee —
            or we come back for free.
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
                WhatsApp Us Now
              </Button>
            </a>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold/90 text-navy font-bold px-8"
              >
                Book Online
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
