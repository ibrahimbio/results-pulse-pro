import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  FileSpreadsheet, 
  Calculator, 
  BarChart3, 
  Shield, 
  Upload,
  BookOpen,
  TrendingUp 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Multi-Role Access",
      description: "Secure role-based access for admins, lecturers, and students with tailored dashboards.",
      color: "text-primary"
    },
    {
      icon: FileSpreadsheet,
      title: "Bulk Result Upload",
      description: "Upload CSV/Excel files with automatic validation and error handling for seamless data import.",
      color: "text-success"
    },
    {
      icon: Calculator,
      title: "Automated CGPA Calculation",
      description: "Instant grade point calculation using customizable grading scales and credit units.",
      color: "text-accent"
    },
    {
      icon: BarChart3,
      title: "Comprehensive Analytics",
      description: "Detailed performance reports, trends analysis, and statistical insights for better decisions.",
      color: "text-warning"
    },
    {
      icon: BookOpen,
      title: "Course Management",
      description: "Easy course creation, unit assignment, and curriculum organization tools.",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with data encryption and privacy compliance standards.",
      color: "text-success"
    },
    {
      icon: Upload,
      title: "File Validation",
      description: "Smart file processing with data validation, duplicate detection, and error reporting.",
      color: "text-accent"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Historical grade tracking with semester-wise performance analysis and trends.",
      color: "text-warning"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Powerful Features for Modern Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage student grades efficiently and accurately
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/60 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className={`inline-flex p-3 rounded-lg bg-secondary mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;