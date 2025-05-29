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
            {["Home", "About", "Services", "Projects", "Contact"].map(
              (link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-[#a0522d] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-l">
            {[
              "Roofing",
              "Consulting",
              "Renovation",
              "Construction",
              "Maintenance",
            ].map((service) => (
              <li key={service}>
                <a href="#" className="hover:text-[#a0522d] transition-colors">
                  {service}
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
              9390809036
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} />
              info@mycompany.com
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-[#a0522d] transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-[#a0522d] transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              aria-label="WhatsApp"
              className="hover:text-[#a0522d] transition-colors"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-[#a0522d] transition-colors"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#8B4513] mt-12 pt-6 text-center text-sm">
        &copy; {new Date().getFullYear()} MyCompany. All rights reserved.
      </div>
    </footer>
  );
}
