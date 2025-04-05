import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1E] text-gray-300 border-t border-gray-700">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Company</h3>
            <a
              href="#"
              className="block text-sm hover:text-white transition-colors"
            >
              About Us
            </a>
            <a
              href="#"
              className="block text-sm hover:text-white transition-colors"
            >
              Our Team
            </a>
            <a
              href="#"
              className="block text-sm hover:text-white transition-colors"
            >
              Careers
            </a>
            <a
              href="#"
              className="block text-sm hover:text-white transition-colors"
            >
              News
            </a>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Products</h3>
            <a
              href="#"
              className="block text-sm hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#"
              className="block text-sm hover:text-white transition-colors"
            >
              Pricing
            </a>
            <a
              href="#"
              className="block text-sm hover:text-white transition-colors"
            >
              Documentation
            </a>
            <a
              href="#"
              className="block text-sm hover:text-white transition-colors"
            >
              Releases
            </a>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Resources</h3>
            <a
              href="#"
              className="block text-sm hover:text-white transition-colors"
            >
              Blog
            </a>
            <a
              href="#"
              className="block text-sm hover:text-white transition-colors"
            >
              Newsletter
            </a>
            <a
              href="#"
              className="block text-sm hover:text-white transition-colors"
            >
              Events
            </a>
            <a
              href="#"
              className="block text-sm hover:text-white transition-colors"
            >
              Help Center
            </a>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Contact</h3>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4" />
              <span>contact@example.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4" />
              <span>123 Street, City, Country</span>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                className="hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-700">
          <p className="text-sm">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
