import { Button } from "@/components/ui/button";
import { GraduationCap, User, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary rounded-lg">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">GradeFlow</h1>
              <p className="text-xs text-muted-foreground">Student Management System</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#dashboard" className="text-foreground hover:text-primary transition-colors">
              Dashboard
            </a>
            <a href="#courses" className="text-foreground hover:text-primary transition-colors">
              Courses
            </a>
            <a href="#students" className="text-foreground hover:text-primary transition-colors">
              Students
            </a>
            <a href="#results" className="text-foreground hover:text-primary transition-colors">
              Results
            </a>
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <User className="h-4 w-4" />
              Login
            </Button>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;