import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  BookOpen, 
  FileText, 
  TrendingUp,
  Upload,
  Eye,
  Plus,
  Download
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Students",
      value: "2,847",
      change: "+12%",
      icon: Users,
      color: "text-primary"
    },
    {
      title: "Active Courses",
      value: "156",
      change: "+3%",
      icon: BookOpen,
      color: "text-success"
    },
    {
      title: "Results Uploaded",
      value: "1,234",
      change: "+18%",
      icon: FileText,
      color: "text-accent"
    },
    {
      title: "Average CGPA",
      value: "3.42",
      change: "+0.15",
      icon: TrendingUp,
      color: "text-warning"
    }
  ];

  const recentActivities = [
    {
      action: "Results uploaded for CS 301",
      user: "Dr. Sarah Johnson",
      time: "2 hours ago",
      type: "upload"
    },
    {
      action: "New course added: Data Structures",
      user: "Admin",
      time: "4 hours ago",
      type: "create"
    },
    {
      action: "CGPA calculated for Semester 2",
      user: "System",
      time: "6 hours ago",
      type: "calculate"
    },
    {
      action: "Student grades reviewed",
      user: "Prof. Michael Chen",
      time: "1 day ago",
      type: "review"
    }
  ];

  const quickActions = [
    {
      title: "Upload Results",
      description: "Bulk upload student scores via CSV/Excel",
      icon: Upload,
      variant: "hero" as const,
      action: "Upload Now"
    },
    {
      title: "Add New Course",
      description: "Create course with units and requirements",
      icon: Plus,
      variant: "success" as const,
      action: "Create Course"
    },
    {
      title: "View Reports",
      description: "Generate comprehensive grade reports",
      icon: Eye,
      variant: "accent" as const,
      action: "View Reports"
    },
    {
      title: "Export Data",
      description: "Download student data and analytics",
      icon: Download,
      variant: "outline" as const,
      action: "Export"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Admin Dashboard
          </h2>
          <p className="text-xl text-muted-foreground">
            Manage your institution's grade system efficiently
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="bg-card/60 backdrop-blur-sm border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <IconComponent className={`h-5 w-5 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <p className="text-xs text-success mt-1">
                    {stat.change} from last month
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <Card className="bg-card/60 backdrop-blur-sm border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks and operations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {quickActions.map((action, index) => {
                    const IconComponent = action.icon;
                    return (
                      <Card key={index} className="p-4 border hover:shadow-sm transition-shadow">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-secondary rounded-lg">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1 space-y-2">
                            <h4 className="font-semibold text-sm">{action.title}</h4>
                            <p className="text-xs text-muted-foreground">{action.description}</p>
                            <Button variant={action.variant} size="sm" className="w-full">
                              {action.action}
                            </Button>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card className="bg-card/60 backdrop-blur-sm border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest system updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.action}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {activity.user}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{activity.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;