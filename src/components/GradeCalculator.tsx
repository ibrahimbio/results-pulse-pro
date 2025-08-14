import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calculator, Award, TrendingUp } from "lucide-react";

const GradeCalculator = () => {
  const gradingScale = [
    { grade: "A", points: 5.0, range: "70-100", color: "bg-success" },
    { grade: "B", points: 4.0, range: "60-69", color: "bg-primary" },
    { grade: "C", points: 3.0, range: "50-59", color: "bg-accent" },
    { grade: "D", points: 2.0, range: "45-49", color: "bg-warning" },
    { grade: "E", points: 1.0, range: "40-44", color: "bg-destructive/80" },
    { grade: "F", points: 0.0, range: "0-39", color: "bg-destructive" }
  ];

  const sampleCalculation = {
    student: "John Doe",
    semester: "Fall 2024",
    courses: [
      { code: "CS 101", title: "Computer Science Fundamentals", units: 3, score: 85, grade: "A", points: 15.0 },
      { code: "MTH 201", title: "Calculus II", units: 4, score: 72, grade: "A", points: 20.0 },
      { code: "PHY 101", title: "Physics I", units: 3, score: 68, grade: "B", points: 12.0 },
      { code: "ENG 101", title: "Technical Writing", units: 2, score: 75, grade: "A", points: 10.0 },
      { code: "CHE 101", title: "General Chemistry", units: 3, score: 62, grade: "B", points: 12.0 }
    ],
    totalUnits: 15,
    totalPoints: 69.0,
    cgpa: 4.6
  };

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Automated Grade Calculation
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Precise CGPA computation using the 5.0 grading scale with real-time updates
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Grading Scale */}
          <div>
            <Card className="bg-card/60 backdrop-blur-sm border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  Grading Scale
                </CardTitle>
                <CardDescription>5.0 Point System</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {gradingScale.map((grade, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full ${grade.color} flex items-center justify-center`}>
                          <span className="text-white font-bold text-sm">{grade.grade}</span>
                        </div>
                        <div>
                          <div className="font-semibold text-sm">{grade.points} points</div>
                          <div className="text-xs text-muted-foreground">{grade.range}%</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sample Calculation */}
          <div className="lg:col-span-2">
            <Card className="bg-card/60 backdrop-blur-sm border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-success" />
                  Sample CGPA Calculation
                </CardTitle>
                <CardDescription>
                  {sampleCalculation.student} - {sampleCalculation.semester}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* CGPA Summary */}
                <div className="mb-6 p-4 rounded-lg bg-gradient-to-r from-success/10 to-primary/10 border border-success/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Current CGPA</span>
                    <Badge variant="outline" className="bg-success/10 text-success border-success/30">
                      Excellent Performance
                    </Badge>
                  </div>
                  <div className="text-3xl font-bold text-success mb-2">{sampleCalculation.cgpa}/5.0</div>
                  <Progress value={(sampleCalculation.cgpa / 5.0) * 100} className="h-2" />
                  <div className="text-xs text-muted-foreground mt-1">
                    {sampleCalculation.totalPoints} points from {sampleCalculation.totalUnits} units
                  </div>
                </div>

                {/* Course Breakdown */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Course Breakdown
                  </h4>
                  {sampleCalculation.courses.map((course, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                      <div className="flex-1">
                        <div className="font-medium text-sm">{course.code}</div>
                        <div className="text-xs text-muted-foreground">{course.title}</div>
                      </div>
                      <div className="flex items-center gap-4 text-right">
                        <div className="text-xs">
                          <div className="font-semibold">{course.score}%</div>
                          <div className="text-muted-foreground">{course.units} units</div>
                        </div>
                        <Badge variant="outline" className={`${gradingScale.find(g => g.grade === course.grade)?.color} text-white border-0`}>
                          {course.grade}
                        </Badge>
                        <div className="text-sm font-bold text-primary min-w-[3rem]">
                          {course.points.toFixed(1)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Formula */}
                <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold text-sm mb-2">Calculation Formula</h4>
                  <div className="text-sm text-muted-foreground">
                    <div>CGPA = Total Grade Points ÷ Total Units</div>
                    <div>Grade Points = Course Units × Grade Value</div>
                    <div className="mt-2 text-primary font-medium">
                      {sampleCalculation.totalPoints} ÷ {sampleCalculation.totalUnits} = {sampleCalculation.cgpa}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GradeCalculator;