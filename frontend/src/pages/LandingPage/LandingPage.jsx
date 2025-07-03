import { Button } from "../../components/ui/Button"
import { Input } from "../../components/ui/Input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/Card"
import { Badge } from "../../components/ui/Badge"
import {
    GraduationCap,
    Users,
    BookOpen,
    Calendar,
    DollarSign,
    BarChart3,
    MessageSquare,
    Shield,
    CheckCircle,
    Star,
} from "lucide-react"
import { Link } from "react-router-dom"
import "../../styles/index.css"
import "../../styles/button.css"
import "../../styles/input.css"
import "../../styles/card.css"
import "../../styles/badge.css"
import "../../styles/layout.css"

export default function SchoolERPLanding() {
    return (
        <div className="flex flex-col h-full w-full">
            {/* Header */}
            <header className="header">
                <Link className="logo" href="#">
                    <GraduationCap className="icon-xl text-blue-600" />
                    <span className="logo-text">CampusHub</span>
                </Link>
                <nav className="nav">
                    <Link className="nav-link" href="#features">
                        Features
                    </Link>
                    <Link className="nav-link" href="#benefits">
                        Benefits
                    </Link>
                    <Link className="nav-link" href="#pricing">
                        Pricing
                    </Link>
                    <Link className="nav-link" href="#contact">
                        Contact
                    </Link>
                </nav>
                <div className="header-actions">
                    <Button variant="ghost" size="md" redirect="/login">
                        Login
                    </Button>
                    <Button size="sm">Get Started</Button>
                </div>
            </header>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="hero">
                    <div className="container">
                        <div className="hero-grid">
                            <div className="hero-content">
                                <div className="space-y-4">
                                    <Badge className="badge-blue">#1 School Management System</Badge>
                                    <h1 className="hero-title">Complete School ERP Solution for Modern Education</h1>
                                    <p className="hero-description">
                                        Streamline your school operations with our comprehensive ERP system. Manage students, teachers,
                                        academics, and finances all in one powerful platform.
                                    </p>
                                </div>
                                <div className="hero-actions">
                                    <Button size="lg">Start Free Trial</Button>
                                    <Button variant="outline" size="lg">
                                        Schedule Demo
                                    </Button>
                                </div>
                                <div className="hero-features">
                                    <div className="hero-feature">
                                        <CheckCircle className="icon-sm text-green-500" />
                                        <span>30-day free trial</span>
                                    </div>
                                    <div className="hero-feature">
                                        <CheckCircle className="icon-sm text-green-500" />
                                        <span>No setup fees</span>
                                    </div>
                                    <div className="hero-feature">
                                        <CheckCircle className="icon-sm text-green-500" />
                                        <span>24/7 support</span>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-image">
                                <img
                                    alt="School ERP Dashboard"
                                    height="400"
                                    src="https://imgs.search.brave.com/6WDCzPPYkuwMj6pKKUH5-SjzHAvVYP2tYdCOymm4IIs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Ym9sbHl3b29kc2hh/YWRpcy5jb20vaW1n/L2FydGljbGUtMjAy/MjcxODgxNjQ0NTk2/MDI5OTAwMC5QTkc?height=400&width=600"
                                    width="600"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="section">
                    <div className="container">
                        <div className="section-header">
                            <div className="space-y-4">
                                <h2 className="section-title">Everything Your School Needs</h2>
                                <p className="section-description">
                                    Our comprehensive ERP system covers every aspect of school management, from admissions to graduation.
                                </p>
                            </div>
                        </div>
                        <div className="features-grid">
                            <Card hover={true}>
                                <CardHeader>
                                    <Users className="icon-lg text-blue-600" />
                                    <CardTitle>Student Management</CardTitle>
                                    <CardDescription>Complete student lifecycle management from admission to graduation</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="feature-list">
                                        <li>
                                            <CheckCircle className="check-icon" />
                                            Student profiles & records
                                        </li>
                                        <li>
                                            <CheckCircle className="check-icon" />
                                            Admission management
                                        </li>
                                        <li>
                                            <CheckCircle className="check-icon" />
                                            ID card generation
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card hover={true}>
                                <CardHeader>
                                    <BookOpen className="icon-lg text-blue-600" />
                                    <CardTitle>Academic Management</CardTitle>
                                    <CardDescription>Streamline curriculum, timetables, and academic processes</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="feature-list">
                                        <li>
                                            <CheckCircle className="check-icon" />
                                            Timetable management
                                        </li>
                                        <li>
                                            <CheckCircle className="check-icon" />
                                            Exam & grading system
                                        </li>
                                        <li>
                                            <CheckCircle className="check-icon" />
                                            Report card generation
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card hover={true}>
                                <CardHeader>
                                    <Calendar className="icon-lg text-blue-600" />
                                    <CardTitle>Attendance Tracking</CardTitle>
                                    <CardDescription>Real-time attendance monitoring for students and staff</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="feature-list">
                                        <li>
                                            <CheckCircle className="check-icon" />
                                            Digital attendance
                                        </li>
                                        <li>
                                            <CheckCircle className="check-icon" />
                                            Automated notifications
                                        </li>
                                        <li>
                                            <CheckCircle className="check-icon" />
                                            Attendance reports
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card hover={true}>
                                <CardHeader>
                                    <DollarSign className="icon-lg text-blue-600" />
                                    <CardTitle>Fee Management</CardTitle>
                                    <CardDescription>Comprehensive financial management and fee collection</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="feature-list">
                                        <li>
                                            <CheckCircle className="check-icon" />
                                            Online fee payment
                                        </li>
                                        <li>
                                            <CheckCircle className="check-icon" />
                                            Fee structure setup
                                        </li>
                                        <li>
                                            <CheckCircle className="check-icon" />
                                            Financial reports
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card hover={true}>
                                <CardHeader>
                                    <MessageSquare className="icon-lg text-blue-600" />
                                    <CardTitle>Communication Hub</CardTitle>
                                    <CardDescription>Seamless communication between school, parents, and students</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="feature-list">
                                        <li>
                                            <CheckCircle className="check-icon" />
                                            SMS & email alerts
                                        </li>
                                        <li>
                                            <CheckCircle className="check-icon" />
                                            Parent portal
                                        </li>
                                        <li>
                                            <CheckCircle className="check-icon" />
                                            Notice board
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card hover={true}>
                                <CardHeader>
                                    <BarChart3 className="icon-lg text-blue-600" />
                                    <CardTitle>Analytics & Reports</CardTitle>
                                    <CardDescription>Comprehensive insights and detailed reporting</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="feature-list">
                                        <li>
                                            <CheckCircle className="check-icon" />
                                            Performance analytics
                                        </li>
                                        <li>
                                            <CheckCircle className="check-icon" />
                                            Custom reports
                                        </li>
                                        <li>
                                            <CheckCircle className="check-icon" />
                                            Data visualization
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section id="benefits" className="section section-gray">
                    <div className="container">
                        <div className="benefits-grid">
                            <div className="benefits-content">
                                <div className="space-y-4">
                                    <Badge className="badge-green">Proven Results</Badge>
                                    <h2 className="section-title">Why Schools Choose CampusHub</h2>
                                    <p className="section-description">
                                        Join thousands of schools worldwide who have transformed their operations with our ERP system.
                                    </p>
                                </div>
                                <div className="benefits-list">
                                    <div className="benefit-item">
                                        <div className="benefit-icon">
                                            <Shield className="icon-md text-blue-600" />
                                        </div>
                                        <div className="benefit-content">
                                            <h3>Secure & Reliable</h3>
                                            <p>Bank-level security with 99.9% uptime guarantee</p>
                                        </div>
                                    </div>
                                    <div className="benefit-item">
                                        <div className="benefit-icon">
                                            <Users className="icon-md text-blue-600" />
                                        </div>
                                        <div className="benefit-content">
                                            <h3>Easy to Use</h3>
                                            <p>Intuitive interface that requires minimal training</p>
                                        </div>
                                    </div>
                                    <div className="benefit-item">
                                        <div className="benefit-icon">
                                            <BarChart3 className="icon-md text-blue-600" />
                                        </div>
                                        <div className="benefit-content">
                                            <h3>Cost Effective</h3>
                                            <p>Reduce operational costs by up to 40%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <img
                                    alt="Benefits illustration"
                                    height="400"
                                    src="https://imgs.search.brave.com/rukM38O2p6A7ylJOmZU8BiWGayWRerFVmZ4Wah-NmG4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL3Av/QUYxUWlwT3dGZUtw/VVNfOW5PSElZanlM/ZURwVWhSTUs5NTFG/ZE95cXduVkw9czEz/NjAtdzEzNjAtaDEw/MjA?height=400&width=550"
                                    width="550"
                                    className="rounded-xl IllustrationImage"
                                    style={{
                                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1);"
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="section">
                    <div className="container">
                        <div className="section-header">
                            <div className="space-y-4">
                                <h2 className="section-title">Trusted by Educational Leaders</h2>
                                <p className="section-description">
                                    See what school administrators and educators are saying about CampusHub.
                                </p>
                            </div>
                        </div>
                        <div className="testimonials-grid">
                            <Card>
                                <CardHeader>
                                    <div className="testimonial-rating">
                                        <div className="stars">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="star" />
                                            ))}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="testimonial-content">
                                        "CampusHub has completely transformed how we manage our school. The automation features have saved
                                        us countless hours."
                                    </p>
                                    <div className="testimonial-author">
                                        <div className="author-avatar">
                                            <span className="author-initials">SM</span>
                                        </div>
                                        <div className="author-info">
                                            <h4>Govind Upadhyay</h4>
                                            <p>Principal, Greenwood High</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="testimonial-rating">
                                        <div className="stars">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="star" />
                                            ))}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="testimonial-content">
                                        "The parent portal is fantastic. Parents love being able to track their child's progress in
                                        real-time."
                                    </p>
                                    <div className="testimonial-author">
                                        <div className="author-avatar">
                                            <span className="author-initials">RJ</span>
                                        </div>
                                        <div className="author-info">
                                            <h4>Akshay Kumar</h4>
                                            <p>Administrator, Oak Valley School</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="testimonial-rating">
                                        <div className="stars">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="star" />
                                            ))}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="testimonial-content">
                                        "Implementation was smooth and the support team is incredibly responsive. Highly recommended!"
                                    </p>
                                    <div className="testimonial-author">
                                        <div className="author-avatar">
                                            <span className="author-initials">LC</span>
                                        </div>
                                        <div className="author-info">
                                            <h4>Black Devil(Devi prasad)</h4>
                                            <p>IT Director, Metro Academy</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section id="pricing" className="section section-gray">
                    <div className="container">
                        <div className="section-header">
                            <div className="space-y-4">
                                <h2 className="section-title">Simple, Transparent Pricing</h2>
                                <p className="section-description">
                                    Choose the plan that fits your school size and needs. All plans include core features and 24/7
                                    support.
                                </p>
                            </div>
                        </div>
                        <div className="pricing-grid">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Starter</CardTitle>
                                    <CardDescription>Perfect for small schools</CardDescription>
                                    <div className="pricing-price">
                                        4,000 INR<span className="period">/month</span>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="pricing-features">
                                        <li>
                                            <CheckCircle className="check-icon" />
                                            Up to 200 students
                                        </li>
                                        <li>
                                            <CheckCircle className="check-icon" />
                                            Basic features
                                        </li>
                                        <li>
                                            <CheckCircle className="check-icon" />
                                            Email support
                                        </li>
                                    </ul>
                                    <Button className="w-full bg-transparent" variant="outline" style={{ width: "16vw" }}>
                                        Get Started
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card className="card-popular">
                                <Badge className="badge-popular">Most Popular</Badge>
                                <CardHeader>
                                    <CardTitle>Professional</CardTitle>
                                    <CardDescription>Ideal for medium schools</CardDescription>
                                    <div className="pricing-price">
                                        6,763.98 INR<span className="period">/month</span>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="pricing-features">
                                        <li>
                                            <CheckCircle className="check-icon" />
                                            Up to 1000 students
                                        </li>
                                        <li>
                                            <CheckCircle className="check-icon" />
                                            All features included
                                        </li>
                                        <li>
                                            <CheckCircle className="check-icon" />
                                            Priority support
                                        </li>
                                    </ul>
                                    <Button className="w-full">Get Started</Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Enterprise</CardTitle>
                                    <CardDescription>For large institutions</CardDescription>
                                    <div className="pricing-price">Custom</div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="pricing-features">
                                        <li>
                                            <CheckCircle className="check-icon" />
                                            Unlimited students
                                        </li>
                                        <li>
                                            <CheckCircle className="check-icon" />
                                            Custom integrations
                                        </li>
                                        <li>
                                            <CheckCircle className="check-icon" />
                                            Dedicated support
                                        </li>
                                    </ul>
                                    <Button className="w-full bg-transparent" variant="outline">
                                        Contact Sales
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section id="contact" className="section section-blue">
                    <div className="container">
                        <div className="section-header">
                            <div className="space-y-4">
                                <h2 className="section-title">Ready to Transform Your School?</h2>
                                <p className="section-description">
                                    Join thousands of schools worldwide. Start your free trial today and see the difference CampusHub can
                                    make.
                                </p>
                            </div>
                            <div className="cta-form">
                                <form className="cta-form-inner">
                                    <Input type="email" placeholder="Enter your school email" />
                                    <Button type="submit" variant="outline">
                                        Start Free Trial
                                    </Button>
                                </form>
                                <p className="cta-disclaimer">30-day free trial • No credit card required • Setup in minutes</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-brand">
                    <GraduationCap className="icon-md text-blue-600" />
                    <span className="footer-brand-text">CampusHub</span>
                </div>
                <p className="footer-copyright">© 2024 CampusHub. All rights reserved.</p>
                <nav className="footer-nav">
                    <Link href="#">Privacy Policy</Link>
                    <Link href="#">Terms of Service</Link>
                    <Link href="#">Support</Link>
                </nav>
            </footer>
        </div>
    )
}
