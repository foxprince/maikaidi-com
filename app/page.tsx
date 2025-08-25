import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  ShoppingCart,
  Globe,
  Database,
  Users,
  Zap,
  Shield,
  TrendingUp,
  CheckCircle,
  Star,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg">M</span>
            </div>
            <span className="text-primary-foreground font-bold text-xl">Maikaidi Tech</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Services
            </a>
            <a href="#features" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Advantages
            </a>
            <a href="#cases" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Case Studies
            </a>
            <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Contact
            </a>
          </nav>
          <Button variant="secondary" size="sm">
            Free Consultation
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Professional Digital Solutions Provider
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Empowering Business
              <span className="text-primary"> Digital Transformation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Professional provider of comprehensive digital solutions including e-commerce platform development,
              website construction, and ERP system implementation. Drive business growth with technology and help your
              enterprise stand out in the digital era.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                View Cases
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Core Business Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Focused on providing comprehensive digital solutions for enterprises to accelerate business development
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <ShoppingCart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">E-commerce Platform Development</CardTitle>
                <CardDescription className="text-base">
                  Customized e-commerce solutions to create exclusive shopping experiences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Multi-platform Commerce System</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Payment & Logistics Integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>User Behavior Analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Marketing Tools Integration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Globe className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">Website Development</CardTitle>
                <CardDescription className="text-base">
                  Modern responsive websites to enhance brand image and user experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Responsive Design Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>SEO Optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Content Management System</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Performance Optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-chart-3/10 flex items-center justify-center group-hover:bg-chart-3/20 transition-colors">
                  <Database className="h-8 w-8 text-chart-3" />
                </div>
                <CardTitle className="text-2xl">ERP System Implementation</CardTitle>
                <CardDescription className="text-base">
                  Enterprise resource planning systems to improve operational efficiency and management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-chart-3" />
                    <span>Business Process Automation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-chart-3" />
                    <span>Unified Data Management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-chart-3" />
                    <span>Role-based Access Control</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-chart-3" />
                    <span>Reporting & Analytics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional team with mature technology, providing reliable digital solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Team</h3>
              <p className="text-muted-foreground">
                Experienced development team with rich project experience, ensuring high-quality delivery
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Agile development process, rapid response to requirements, shortened project cycles
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-chart-3/10 flex items-center justify-center group-hover:bg-chart-3/20 transition-colors">
                <Shield className="h-8 w-8 text-chart-3" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-muted-foreground">
                Strict security standards and comprehensive testing processes ensure stable system operation
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-chart-2/10 flex items-center justify-center group-hover:bg-chart-2/20 transition-colors">
                <TrendingUp className="h-8 w-8 text-chart-2" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Continuous Optimization</h3>
              <p className="text-muted-foreground">
                Ongoing technical support and system optimization to drive continuous business growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="cases" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We have helped numerous enterprises achieve digital transformation with consistent client satisfaction
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/50 backdrop-blur border-0">
              <CardHeader>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <CardTitle className="text-lg">Leading Fashion Brand</CardTitle>
                <CardDescription>E-commerce Platform Development</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Maikaidi Tech built us a comprehensive e-commerce platform with excellent user experience. After
                  launch, our sales increased by 300%. We're very satisfied with their professional service."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-0">
              <CardHeader>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <CardTitle className="text-lg">Manufacturing Enterprise</CardTitle>
                <CardDescription>ERP System Implementation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "After the ERP system went live, our production efficiency improved by 40%, inventory management
                  became more precise, and team collaboration efficiency increased significantly. ROI exceeded
                  expectations."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-0">
              <CardHeader>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <CardTitle className="text-lg">Educational Institution</CardTitle>
                <CardDescription>Website Redesign Project</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "The new website design is modern and beautiful with fast response times and excellent SEO results.
                  Website traffic increased by 200%, and student inquiries also increased significantly."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Start Your Digital Transformation Journey?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Contact our professional team for free project consultation and technical solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                View More Cases
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-sidebar border-t">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-sidebar-accent flex items-center justify-center">
                  <span className="text-sidebar-accent-foreground font-bold text-lg">M</span>
                </div>
                <span className="text-sidebar-foreground font-bold text-xl">Maikaidi Tech</span>
              </div>
              <p className="text-sidebar-foreground/70 text-sm">
                Professional digital solutions provider, empowering enterprises to achieve digital transformation and
                upgrade.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-sidebar-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-sidebar-foreground/70">
                <li>E-commerce Development</li>
                <li>Website Development</li>
                <li>ERP Implementation</li>
                <li>Technical Consulting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sidebar-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-sidebar-foreground/70">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Case Studies</li>
                <li>Tech Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sidebar-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-sidebar-foreground/70">
                <li>Phone: +1 (555) 123-4567</li>
                <li>Email: info@maikaidi.com</li>
                <li>Address: Tech Park, Silicon Valley</li>
                <li>LinkedIn: maikaidi-tech</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-sidebar-border mt-8 pt-8 text-center">
            <p className="text-sm text-sidebar-foreground/70">© 2024 Maikaidi Tech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
