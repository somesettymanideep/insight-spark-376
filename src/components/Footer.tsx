import logo from "@/assets/logo.jpeg";
import { Linkedin, Twitter, Mail } from "lucide-react";

const footerLinks = {
  Services: ["Data Analytics", "Data Visualization", "Business Intelligence", "AI & Predictive Analytics", "ERP Migration"],
  Company: ["About Us", "Case Studies", "Our Process", "Careers"],
  Contact: ["Amsterdam, Netherlands", "info@nextgenlytics.com", "+31 (0) 20 XXX XXXX"],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground/70 pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <img src={logo} alt="NextGenLytics" className="h-16 rounded mb-4" />
            <p className="text-sm leading-relaxed">
              AI-native data and transformation partner for mid-market enterprises.
            </p>
            <div className="flex gap-3 mt-5">
              {[Linkedin, Twitter, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all active:scale-95"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-primary-foreground font-semibold mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <span className="text-sm hover:text-primary-foreground transition-colors cursor-pointer">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


        <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} NextGenLytics. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
