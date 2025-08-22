"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { PageHeader } from "@/components/ui/page-header";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Users,
  Calendar,
  HelpCircle,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    inquiryType: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Contact form submitted:", formData)
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        inquiryType: "",
        message: "",
      })
    }, 3000)
  }

  const faqs = [
    {
      question: "What age groups do you accept?",
      answer:
        "We accept young athletes aged 7 to 17, divided into three groups: Under 10 (8-9 years), Under 12 (10-11 years), and Under 15 (12-15 years).",
    },
    {
      question: "How much does it cost to join the academy?",
      answer:
        "Our training fees are affordable and vary by program. Please contact us directly for current pricing and available payment plans.",
    },
    {
      question: "Do you provide equipment?",
      answer:
        "We provide balls and training cones during sessions. Players need to bring their own boots, shin guards, and appropriate training attire.",
    },
    {
      question: "Can my child join mid-season?",
      answer:
        "Yes, we accept new players throughout the year. We'll assess your child's current level and place them in the appropriate group.",
    },
    {
      question: "Do you offer trial sessions?",
      answer:
        "We encourage all new players to attend a trial session to experience our training methods and meet our coaches.",
    },
    {
      question: "What happens if my child gets injured?",
      answer:
        "We have first aid trained staff and follow strict safety protocols. We also require emergency contact information and medical consent forms.",
    },
  ]

  return (
    <div className="">
    
      {/* Hero Section */}

            <PageHeader
              title="Contact HISS Football Club"
              description="We welcome your inquiries, support, and interest"
              backgroundImage="/training-facilities.png"
            >
              <Badge variant="secondary" className="mb-4">
                <MessageCircle className="mr-1 h-3 w-3" />
                Get In Touch
              </Badge>
            </PageHeader>

      {/* Contact Information Cards */}
      <section className="py-12">
        <div className="container px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  HISS Academy Football Club
                  <br />
                  Nkawkaw, Abepotia
                  <br />
                  Eastern Region, Ghana
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  
               
                  <a href="tel:+233596084542">+233 59 608 4542</a>
                  <br />
                  {/* <strong>Emergency:</strong>
                  <br />
                  +233 XX XXX XXXX */}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  <strong>General Inquiries:</strong>
                  <br />
                  hissacademyfootballclub@gmail.com
                  <br />
                  {/* <strong>Registration:</strong>
                  <br />
                  register@hissfc.com */}
                </p>
              </CardContent>
            </Card>

       
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-12 bg-card">
        <div className="container px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              {isSubmitted ? (
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-8 text-center">
                    <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            placeholder="+233 XX XXX XXXX"
                          />
                        </div>
                        <div>
                          <Label htmlFor="inquiryType">Inquiry Type *</Label>
                          <Select
                            value={formData.inquiryType}
                            onValueChange={(value) => handleInputChange("inquiryType", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="registration">Registration Inquiry</SelectItem>
                              <SelectItem value="programs">Program Information</SelectItem>
                              <SelectItem value="facilities">Facilities Tour</SelectItem>
                              <SelectItem value="fees">Fees and Payment</SelectItem>
                              <SelectItem value="general">General Question</SelectItem>
                              <SelectItem value="partnership">Partnership/Sponsorship</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => handleInputChange("subject", e.target.value)}
                          placeholder="Brief subject of your message"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Please provide details about your inquiry..."
                          rows={5}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Find Us</h2>
                <Card>
                  <CardContent className="p-0">
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">Interactive Map Coming Soon</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Located in Nkawkaw, Abepotia, Eastern Region, Ghana
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link href="/register">
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <Calendar className="mr-2 h-4 w-4" />
                      Register Your Child
                    </Button>
                  </Link>
                  <Link href="/programs">
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <Users className="mr-2 h-4 w-4" />
                      View Programs
                    </Button>
                  </Link>
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule a Visit
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Link href="https://www.facebook.com/hissacademyfootballclub" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Facebook className="h-4 w-4 mr-2" />
                      Facebook
                    </Button>
                    </Link>
                    <Link href="https://youtube.com/@hissacademyfootballclub" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Youtube className="h-4 w-4 mr-2" />
                      Youtube
                    </Button>
                    </Link>
                    
                    <Link href="https://wa.me/233596084542" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <Phone className="h-4 w-4 mr-2" />
                        WhatsApp
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
              <HelpCircle className="h-8 w-8 text-primary" />
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about HISS Football Club Academy
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">Don't see your question answered?</p>
            <Button variant="outline">Contact Us Directly</Button>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-primary/5">
        <div className="container px-4">
          <Card className="max-w-2xl mx-auto border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-xl text-primary">Emergency Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                For urgent matters during training sessions or academy events:
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="font-semibold">Emergency Hotline: +233 59 608 4542</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>hissacademyfootballclub@gmail.com</span>
                </div>
              </div>
              <Separator className="my-4" />
              <p className="text-sm text-muted-foreground">Available during all training sessions and academy events</p>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  )
}
