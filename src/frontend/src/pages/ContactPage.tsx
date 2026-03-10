import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

const services = [
  "Bond / End of Lease Cleaning",
  "Carpet Steam Cleaning",
  "Oven & Appliance Cleaning",
  "Window Cleaning",
  "Bathroom & Toilet Cleaning",
  "Full Bond Clean Package",
  "Other",
];

const nextSteps = [
  { id: "receive", label: "We receive your enquiry" },
  { id: "quote", label: "We send you a fixed-price quote" },
  { id: "confirm", label: "You confirm your booking" },
  { id: "arrive", label: "Our team arrives on time" },
  { id: "clean", label: "We clean to REISA standard" },
  { id: "bond", label: "You get your full bond back!" },
];

const guaranteeItems = [
  "REISA checklist compliant",
  "Free re-clean if needed",
  "Fully insured team",
  "Same-day bookings",
];

export default function ContactPage() {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !service) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    try {
      if (actor) {
        await actor.submitContactForm(name, email, phone, service, message);
      }
    } catch {
      // Ignore backend errors — mailto still works
    }
    const body = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AService: ${service}%0AMessage: ${message}`;
    const subject = encodeURIComponent(
      `New Bond Cleaning Enquiry from ${name}`,
    );
    window.location.href = `mailto:humptydumptybondcleaning@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Opening your email client to send your enquiry...");
    setSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact Tru Bond Cleaning Adelaide | Get a Free Quote</title>
        <meta
          name="description"
          content="Contact Tru Bond Cleaning Adelaide for a free bond cleaning quote. WhatsApp 0488841883. Fast response, transparent pricing."
        />
      </Helmet>

      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Get a Free Quote
          </h1>
          <p className="text-white/75 max-w-2xl text-lg">
            Fill in the form below or WhatsApp us directly. We respond fast —
            usually within the hour.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <Card className="border-border shadow-xs">
                <CardContent className="pt-6">
                  <h2 className="font-display text-xl font-bold text-navy mb-6">
                    Send Us Your Enquiry
                  </h2>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          data-ocid="contact.input"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Sarah Johnson"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          data-ocid="contact.input"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          data-ocid="contact.input"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="04xx xxx xxx"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <Label>Service Required *</Label>
                        <Select onValueChange={setService} required>
                          <SelectTrigger data-ocid="contact.select">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((s) => (
                              <SelectItem key={s} value={s}>
                                {s}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea
                        id="message"
                        data-ocid="contact.textarea"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about your property — number of bedrooms, move-out date, any special requests..."
                        rows={5}
                      />
                    </div>
                    <Button
                      type="submit"
                      data-ocid="contact.submit_button"
                      disabled={submitting}
                      className="bg-gold text-navy hover:bg-gold/90 font-bold w-full sm:w-auto"
                    >
                      {submitting ? "Opening Email..." : "Send My Enquiry"}
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      * Required fields. Your enquiry will open in your email
                      app ready to send.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col gap-6">
              <Card className="border-border shadow-xs">
                <CardContent className="pt-6">
                  <h3 className="font-display font-semibold text-navy mb-4">
                    Contact Details
                  </h3>
                  <div className="flex flex-col gap-4 text-sm">
                    <a
                      href="https://wa.me/61488841883"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-green-600 hover:text-green-700 font-medium"
                    >
                      <MessageCircle size={18} />
                      WhatsApp: 0488 841 883
                    </a>
                    <a
                      href="tel:0488841883"
                      className="flex items-center gap-3 text-navy hover:text-navy/70"
                    >
                      <Phone size={18} />
                      Call: 0488 841 883
                    </a>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin size={18} />
                      Adelaide, South Australia
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Clock size={18} />7 days a week
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border shadow-xs bg-gold/10">
                <CardContent className="pt-6">
                  <h3 className="font-display font-semibold text-navy mb-3">
                    What Happens Next?
                  </h3>
                  <ul className="flex flex-col gap-3 text-sm">
                    {nextSteps.map((step, i) => (
                      <li key={step.id} className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-navy text-white text-xs flex items-center justify-center font-bold flex-shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-foreground">{step.label}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border shadow-xs bg-navy text-white">
                <CardContent className="pt-6">
                  <h3 className="font-display font-semibold text-gold mb-3">
                    100% Bond-Back Guarantee
                  </h3>
                  <div className="flex flex-col gap-2 text-sm text-white/80">
                    {guaranteeItems.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-gold" />
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
