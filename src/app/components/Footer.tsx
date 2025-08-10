import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f5f0e6] text-[#8B4513] border-t border-[#8B4513] py-12 px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
          <Image src="/logo.png" alt="Logo" width={160} height={80} />
          <p className="mt-4 text-lg leading-relaxed">
            We specialize in delivering high-quality services with
            professionalism, passion, and precision.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-l">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about-us" },
              { label: "Services", href: "/services" },
              { label: "Projects", href: "/portfolio" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-[#a0522d] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-l">
            {[
              { name: "Website Design", link: "/services/website-design" },
              { name: "Website Development", link: "/services/website-development" },
              { name: "Mobile Responsive Designs", link: "/services/mobile-responsive-designs" },
              { name: "Performance Optimization", link: "/services/performance-optimization" },
              { name: "Search Engine Optimization", link: "/services/seo" },
            ].map((service) => (
              <li key={service.name}>
                <a
                  href={service.link}
                  className="hover:text-[#a0522d] transition-colors"
                >
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info & Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="text-l space-y-3">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="mt-0.5" />
              Hyderabad, India
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} />
              <a href="tel:9390809036" className="hover:text-[#a0522d] transition-colors">
                9390809036
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} />
              <a href="mailto:info@bizoradev.com" className="hover:text-[#a0522d] transition-colors">
                info@bizoradev.com
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://facebook.com/yourpage"
              aria-label="Facebook"
              className="hover:text-[#a0522d] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com/yourusername"
              aria-label="Instagram"
              className="hover:text-[#a0522d] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://wa.me/9390809036"
              aria-label="WhatsApp"
              className="hover:text-[#a0522d] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              aria-label="Twitter"
              className="hover:text-[#a0522d] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#8B4513] mt-12 pt-6 text-center text-sm">
        &copy; {new Date().getFullYear()} BizoraDev. All rights reserved.
      </div>
    </footer>
  );
}
