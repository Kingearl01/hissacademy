import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { ResponsiveGrid } from "@/components/ui/responsive-grid";
import Herobg from "@/public/heroprogram.jpg"
import {  
  Users,
  Clock,
  Target,
  Trophy,
  CheckCircle,
  ArrowRight,
  Shield,
  Zap,
  Heart,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image"

import trainingkit from "@/public/training1.jpg"


export default function ProgramsPage() {
  return (
    <div>
      {/* Hero Section */}
      <PageHeader
        title="Comprehensive Football Development Programs"
        description="Our structured training programs are designed to develop young athletes through progressive skill building, tactical understanding, and character development."
        backgroundImage={Herobg.src}
      >
        <Badge variant="secondary" className="mb-4">
          <Trophy className="mr-1 h-3 w-3" />
          Training Programs
        </Badge>
      </PageHeader>

      {/* Age Group Programs */}
      <Section padding="xl" fullWidth>
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Age Group Programs
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Tailored training programs for different age groups, focusing on
            age-appropriate skill development
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="under11" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 max-w-2xl mx-auto">
              <TabsTrigger value="under11">U-11 (Under 11s)</TabsTrigger>
              <TabsTrigger value="under13">U-13 (Under 13s)</TabsTrigger>
              <TabsTrigger value="under15">U-15 (Under 15s)</TabsTrigger>
              <TabsTrigger value="under17">U-17 (Under 17s)</TabsTrigger>
            </TabsList>

            <TabsContent value="under11" className="space-y-6">
              <ResponsiveGrid cols={{ md: 2, xl: 2 }} gap="lg">
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Heart className="h-8 w-8 text-primary" />
                      <CardTitle className="text-xl">
                        Fun-Based Learning
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      This is where the journey begins! Our youngest players
                      learn the joy of football in a supportive and playful
                      environment, developing coordination and basic ball
                      mastery.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">
                          Basic ball control and dribbling
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">
                          Simple passing and receiving
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">
                          Coordination and balance exercises
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Team play introduction</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Clock className="h-8 w-8 text-secondary" />
                      <CardTitle className="text-xl">
                        Training Schedule
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Weekly Sessions</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          3 sessions per week, 60 minutes each
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Tuesday & Thursday</span>
                            <span className="text-primary">
                              4:30 PM - 5:30 PM
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Saturday</span>
                            <span className="text-primary">
                              8:00 AM - 9:00 AM
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Focus Areas</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Fun Games</Badge>
                          <Badge variant="outline">Basic Skills</Badge>
                          <Badge variant="outline">Teamwork</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ResponsiveGrid>
            </TabsContent>

            <TabsContent value="under13" className="space-y-6">
              <ResponsiveGrid cols={{ md: 2, xl: 2 }} gap="lg">
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Target className="h-8 w-8 text-primary" />
                      <CardTitle className="text-xl">
                        Skill Development
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      As players grow, we build on their foundations,
                      introducing more complex techniques and the basic of
                      teamwork, preparing them for competitive play.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Positioning</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Simple team play</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">
                          Developing Physical Skills
                        </span>
                      </li>

                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">
                          Shooting and finishing skills
                        </span>
                      </li>

                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">
                          individual skill development within team context
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Clock className="h-8 w-8 text-secondary" />
                      <CardTitle className="text-xl">
                        Training Schedule
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Weekly Sessions</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          4 sessions per week, 60 minutes each
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Mon, Wed, Fri</span>
                            <span className="text-primary">
                              4:30 PM - 5:30 PM
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Saturday</span>
                            <span className="text-primary">
                              9:00 AM - 10:15 AM
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Focus Areas</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Technical Skills</Badge>
                          <Badge variant="outline">Tactics</Badge>
                          <Badge variant="outline">Competition</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ResponsiveGrid>
            </TabsContent>

            <TabsContent value="under15" className="space-y-6">
              <ResponsiveGrid cols={{ md: 2, xl: 2 }} gap="lg">
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Zap className="h-8 w-8 text-primary" />
                      <CardTitle className="text-xl">
                        Advanced Training
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      This category focuses on horning skills, understanding
                      game dynamics, and developing the Physical and mental
                      resilience needed for high-level football.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">
                          Advanced technical skills
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">
                          Advance tactical systems
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Physical conditioning</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Mental preparation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">
                          Develping game intelligence
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Clock className="h-8 w-8 text-secondary" />
                      <CardTitle className="text-xl">
                        Training Schedule
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Weekly Sessions</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          5 sessions per week, 90 minutes each
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Mon - Fri</span>
                            <span className="text-primary">
                              4:00 PM - 5:30 PM
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Saturday</span>
                            <span className="text-primary">
                              10:00 AM - 12:00 PM
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Focus Areas</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Elite Skills</Badge>
                          <Badge variant="outline">Strategy</Badge>
                          <Badge variant="outline">Leadership</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ResponsiveGrid>
            </TabsContent>

            <TabsContent value="under17" className="space-y-6">
              <ResponsiveGrid cols={{ md: 2, xl: 2 }} gap="lg">
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Zap className="h-8 w-8 text-primary" />
                      <CardTitle className="text-xl">Elite Training</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Our most senior category is geared towards bridging the
                      gap to professional football. We provide intensive
                      training depth, and exposure to help players reach their
                      full potential.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">
                          Advance tactical systems
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">
                          Specialised position training
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Strength & conditioning</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Mental toughness</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Clock className="h-8 w-8 text-secondary" />
                      <CardTitle className="text-xl">
                        Training Schedule
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Weekly Sessions</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          5 sessions per week, 90 minutes each
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Mon - Fri</span>
                            <span className="text-primary">
                              4:00 PM - 5:30 PM
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Saturday</span>
                            <span className="text-primary">
                              10:00 AM - 12:00 PM
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Focus Areas</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Elite Skills</Badge>
                          <Badge variant="outline">Strategy</Badge>
                          <Badge variant="outline">Leadership</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ResponsiveGrid>
            </TabsContent>
          </Tabs>
        </div>
      </Section>

      {/* Coaching Methodology */}
      <Section background="muted" padding="xl" fullWidth>
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our Coaching Methodology
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            We follow internationally recognized coaching principles adapted for
            Ghanaian football culture
          </p>
        </div>

        <ResponsiveGrid
          cols={{ sm: 2, lg: 4 }}
          gap="lg"
          className="max-w-7xl mx-auto"
        >
          <Card className="text-center h-full">
            <CardHeader>
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg">Player-Centered</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Every training session is designed around the individual needs
                and development stage of each player.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center h-full">
            <CardHeader>
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg">Progressive Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Skills are built progressively from basic to advanced, ensuring
                solid foundations at each level.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center h-full">
            <CardHeader>
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg">Holistic Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We develop not just football skills but also character,
                leadership, and life skills.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center h-full">
            <CardHeader>
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg">Positive Environment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Creating a supportive, encouraging atmosphere where players can
                learn from mistakes and grow.
              </p>
            </CardContent>
          </Card>
        </ResponsiveGrid>
      </Section>

      {/* Training Facilities  and Support*/}
      <Section padding="xl" fullWidth>
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12 lg:gap-16 xl:gap-20 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Training Facilities and Support
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                At HISS Academy Football Club, located in Nkawkaw Abepotia, E/R
                Ghana, we are committed to providing an environment that
                supports optimal player develpment. We continually strive to
                enchance our infrastructure and offer comprehensive support for
                our young athletes.
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Our Environment & Vision for Growth
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                We provide dedicated training spaces in Nkawkaw Abepotia where
                our players can consistently develop their skills. We are always
                looking forward, planning and working towards the continous
                enchancement of our facilities and support systems to ensure
                every player has access to the best possible resources fir their
                growth.
              </p>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6">
                Key Areas of Development & Support
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      Quality Training Pitches
                    </h4>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      Modern Training Equipment
                    </h4>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      Player welfare Amenities
                    </h4>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      Holistic Athlete Support
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-4 lg:p-8">
                <Image
                  src={trainingkit.src}
                  alt="HISS Football Club training facilities"
                  className="w-full h-full object-cover rounded-xl"
                sizes="100vw"
               width={100}
               height={100}
                placeholder="blur"
                blurDataURL={trainingkit.src}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="primary" padding="xl" fullWidth>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Join Our Academy?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
            Take the first step towards your child's football journey. Register
            now for our comprehensive training programs and watch them develop
            into future football stars.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-4"
              >
                Register Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 bg-transparent"
              >
                Schedule a Visit
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-4"
              >
                Support Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
