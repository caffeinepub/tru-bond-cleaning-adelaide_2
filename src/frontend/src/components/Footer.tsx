import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <img
              src="/assets/generated/logo-transparent.dim_400x120.png"
              alt="Tru Bond Cleaning Adelaide Logo"
              className="h-12 w-auto mb-4"
            />
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Adelaide&apos;s trusted bond cleaning specialists. We follow the
              REISA checklist on every job and guarantee your full bond back.
            </p>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-gold" />
                <span>WhatsApp: 0488 841 883</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-gold" />
                <span>Adelaide, South Australia</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold" />
                <span>Available 7 days a week</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-gold mb-4">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-white/70">
              <li>
                <Link
                  to="/services/bond-cleaning"
                  className="hover:text-gold transition-colors"
                >
                  Bond Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/services/carpet-cleaning"
                  className="hover:text-gold transition-colors"
                >
                  Carpet Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/services/oven-cleaning"
                  className="hover:text-gold transition-colors"
                >
                  Oven Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/services/window-cleaning"
                  className="hover:text-gold transition-colors"
                >
                  Window Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/services/bathroom-cleaning"
                  className="hover:text-gold transition-colors"
                >
                  Bathroom Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-gold mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-white/70">
              <li>
                <Link to="/about" className="hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-gold transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-gold transition-colors"
                >
                  All Services
                </Link>
              </li>
            </ul>
            <div className="mt-4 text-sm text-white/50">
              <p>Service Area: Adelaide &amp; All SA Suburbs</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© {year} Tru Bond Cleaning Adelaide. All rights reserved.</p>
          <p>
            Built with ❤️ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
