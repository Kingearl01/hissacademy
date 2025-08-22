import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Users,
  Trophy,
  Target,
  Star,
  Calendar,
  Phone,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import heroImg from "@/public/herohome.jpg";
import logo from "@/public/hisslogo2.jpg";
import mission from "@/public/hiss03.jpg";
import vission from "@/public/hiss02.jpg";
import training1 from "@/public/training2.jpg";
import training2 from "@/public/training3.jpg";

export default function HomePage() {
  console.log(mission.src);
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full relative">
            <Image
              src={heroImg.src}
              alt="HISS Football Club Academy"
              className="w-full h-full object-cover"
              sizes="100vw"
              fill
              placeholder="blur"
              quality={100}
              style={{
                objectFit: "cover",
              }}
              blurDataURL={heroImg.blurDataURL}
            />
          </div>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>

        <div className="w-full px-4 lg:px-8 xl:px-12 relative z-20">
          <div className="text-center">
            <Badge
              variant="secondary"
              className="w-fit mx-auto mb-6 bg-white/90 dark:bg-black text-foreground"
            >
              <MapPin className="mr-1 h-3 w-3" />
              Nkawkaw, Abepotia, Ghana
            </Badge>

            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white">
                Nurturing Future
                <span className="text-primary"> Football Stars</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-5xl mx-auto leading-relaxed">
                At HISS Academy Football Club, we believe in the immense
                football talent present in Ghana, especially here in Nkawkaw
                Abepotia, Eastern Region. Our principal activity is to nurture
                and enlighten football talent from a young age.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/register">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3"
                >
                  Join Our Academy
                </Button>
              </Link>
              <Link href="/gallery">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-foreground px-8 py-3 bg-transparent"
                >
                  Watch Training Videos
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-8 lg:gap-16 pt-8 mt-12">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary">
                  30
                </div>
                <div className="text-sm lg:text-base text-white/80">
                  Young Athletes
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary">
                  5
                </div>
                <div className="text-sm lg:text-base text-white/80">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary">
                  5
                </div>
                <div className="text-sm lg:text-base text-white/80">
                  Success Stories
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our History */}
      <section className="py-20 bg-card">
        <div className="px-4 lg:px-8 xl:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Story</h2>
          </div>
          <div className=" max-w-7xl mx-auto">
            <Card className="border-l-4 border-l-primary">
              <CardContent>
                <div className="mb-6">
                  <Image
                    src={heroImg.src}
                    alt="Young Ghanaian football players training with coaches at HISS Academy"
                    className="w-full h-48 lg:h-56 object-cover rounded-lg"
                    sizes="100vw"
                    quality={100}
                    width={100}
                    height={100}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p className="text-muted-foreground leading-relaxed text-base lg:text-lg px-8">
                  HISS ACADEMY FOOOTBALL CLUB was founded on September 20th,
                  2020, right here in Nkawkaw Abepotia, Eastern Region, Ghana.
                  Born from a deep understanding of the local football
                  landscape, vibrant with raw talent but struggling with limited
                  resources, our vision was clear: to create a dedicated hub for
                  Nurturing young football minds and bodies. From our humble
                  beginnings, we've grown into a beacon of hope for aspiring
                  players, focusing on holistic development and providing the
                  foundational support often missing in the region.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Mission & Vision Section */}
      <section id="about" className="py-20 bg-card">
        <div className="px-4 lg:px-8 xl:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Building the foundation for Ghana's next generation of football
              excellence
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 xl:gap-16 max-w-7xl mx-auto">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Target className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <Image
                    src={mission.src}
                    alt="Young Ghanaian football players training with coaches at HISS Academy"
                    className="w-full h-48 lg:h-56 object-cover rounded-lg"
                    sizes="100vw"
                    width={100}
                    height={100}
                    quality={100}
                    placeholder="blur"
                    blurDataURL={mission.blurDataURL}
                    style={{
                      objectFit: "cover",
                      width: "auto",
                      height: "auto",
                    }}
                  />
                </div>
                <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                  Our principal activity is to nurture and enlighten football
                  talent by providing structured training, fostering skills
                  developement, and implementing comprehensive personal
                  development programs for young athletes across our U-11, U-13,
                  U-15 and U-17 categories. We are committed to fostering an
                  environment that promotes discipline, teamwork, academic
                  achievement, and a lifelong love for the game.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Star className="h-8 w-8 text-secondary" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <Image
                    src={vission.src}
                    alt="HISS Academy graduates celebrating success on international football stage"
                    className="w-full h-48 lg:h-56 object-cover rounded-lg"
                    sizes="100vw"
                    width={100}
                    height={100}
                    style={{
                      objectFit: "cover",
                      width: "auto",
                      height: "auto",
                    }}
                  />
                </div>
                <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                  To be a leading football academy in Ghana, renowned for
                  developing exceptional football talent through a blend of
                  professional training, academic support, and strong moral
                  values. We envision a future whwre HISS Academy graduates not
                  only excel on the global stage but also contribute positively
                  to their communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Core Values Section */}
      <section className="py-20">
        <div className="px-4 lg:px-8 xl:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              The principles that guide everything we do at HISS Football Club
              Academy
            </p>
            <div className="mt-8 mb-12">
              <Image
                src={logo.src}
                alt="HISS Academy players demonstrating teamwork, discipline and excellence on the training field"
                className="w-full max-w-6xl mx-auto h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
                sizes="100vw"
                width={100}
                height={100}
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8 max-w-7xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Community First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We believe in giving back to our community and creating
                  opportunities for local youth.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We strive for the highest standards in training, character
                  development, and performance.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Discipline</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We instill discipline, respect, and strong work ethic in all
                  our young athletes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We focus on continuous improvement and personal development
                  both on and off the field.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Quick Info Section */}
      <section className="py-20 bg-card">
        <div className="px-4 lg:px-8 xl:px-12">
          <div className="grid gap-8 md:grid-cols-3 xl:gap-12 max-w-7xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Training Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Image
                    src={mission.src}
                    alt="Daily training sessions at HISS Academy with structured schedule"
                    className="w-full h-32 lg:h-40 object-cover rounded-lg"
                    sizes="100vw"
                    width={100}
                    height={100}
                  />
                </div>
                <p className="text-muted-foreground mb-4">
                  Monday to Friday: 4:00 PM - 5:30 PM
                  <br />
                  Saturday: 8:00 AM - 12:00 PM
                  <br />
                  Sunday: Rest Day
                </p>
                <Link href="/programs">
                  <Button variant="outline" size="sm">
                    View Full Schedule
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Age Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Image
                    src={training2.src}
                    alt="Different age groups of young football players at HISS Academy"
                    className="w-full h-32 lg:h-40 object-cover rounded-lg"
                    sizes="100vw"
                    width={100}
                    height={100}
                  />
                </div>
                <p className="text-muted-foreground mb-4">
                  Under 11 (Ages 8-11)
                  <br />
                  Under 13 (Ages 12-13)
                  <br />
                  Under 15 (Ages 14-15)
                  <br />
                  Under 17 (Ages 14-15)
                </p>
                <Link href="/programs">
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Get In Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Image
                    src={training1.src}
                    alt="HISS Academy coaches welcoming new players and parents"
                    className="w-full h-32 lg:h-40 object-cover rounded-lg"
                    sizes="100vw"
                    width={100}
                    height={100}
                  />
                </div>
                <p className="text-muted-foreground mb-4">
                  Ready to join our academy?
                  <br />
                  Contact us for registration
                  <br />
                  and more information.
                </p>
                <Link href="/contact">
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Contact Us
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Footer */}
    </div>
  );
}
