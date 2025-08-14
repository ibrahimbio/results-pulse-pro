import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, Users, FileSpreadsheet, BarChart3 } from "lucide-react";
import heroImage from "@/assets/education-hero.jpg";

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Streamline Your{" "}
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Grade Management
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Powerful student information system for automated grade calculation, 
                CGPA tracking, and comprehensive academic reporting. Built for modern educational institutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Start Managing Grades
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                View Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Institutions</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Students using grade management system"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <Card className="absolute -left-4 top-8 p-4 bg-card/90 backdrop-blur-sm shadow-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-success rounded-lg">
                  <BarChart3 className="h-4 w-4 text-success-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-sm">CGPA: 4.2</div>
                  <div className="text-xs text-muted-foreground">John Doe</div>
                </div>
              </div>
            </Card>

            <Card className="absolute -right-4 bottom-8 p-4 bg-card/90 backdrop-blur-sm shadow-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent rounded-lg">
                  <FileSpreadsheet className="h-4 w-4 text-accent-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Results Uploaded</div>
                  <div className="text-xs text-muted-foreground">CS 101</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;