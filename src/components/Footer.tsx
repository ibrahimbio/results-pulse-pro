import { GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">GradeFlow</h3>
                <p className="text-sm text-background/70">Student Management System</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Streamlining academic grade management with automated calculations, 
              comprehensive reporting, and secure role-based access.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li><a href="#features" className="hover:text-background transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-background transition-colors">Pricing</a></li>
              <li><a href="#demo" className="hover:text-background transition-colors">Demo</a></li>
              <li><a href="#integration" className="hover:text-background transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li><a href="#help" className="hover:text-background transition-colors">Help Center</a></li>
              <li><a href="#docs" className="hover:text-background transition-colors">Documentation</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Contact Us</a></li>
              <li><a href="#training" className="hover:text-background transition-colors">Training</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li><a href="#about" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="#careers" className="hover:text-background transition-colors">Careers</a></li>
              <li><a href="#privacy" className="hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-background transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/70 text-sm">
            © 2024 GradeFlow. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
              Terms
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;