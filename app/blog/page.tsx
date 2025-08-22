import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { ResponsiveGrid } from "@/components/ui/responsive-grid";
import {
  Calendar,
  User,
  Search,
  Trophy,
  Star,
  ArrowRight,
  ArrowLeftCircleIcon,
} from "lucide-react";
import Link from "next/link";

import team from "@/public/gallery/u13squad1.jpg";

// Sample blog data
const blogPosts = [
  {
    id: 2,
    title: "New Training Equipment Arrives at HISS FC",
    excerpt:
      "Thanks to community support and partnerships, we've received new professional training equipment to enhance our coaching programs.",
    content:
      "We're excited to share that HISS Football Club has received a significant donation of professional training equipment...",
    category: "Academy News",
    author: "Academy Director",
    date: "2024-01-10",
    image: "/blog-equipment.png",
    featured: false,
    tags: ["Equipment", "Community", "Training"],
  },
  {
    id: 3,
    title: "Under 13 Team Wins Regional Championship",
    excerpt:
      "Our Under 12 team has made history by winning the Eastern Region Youth Football Championship, defeating teams from across the region.",
    content:
      "In a thrilling final match, our Under 12 team showcased exceptional teamwork and skill to claim the Eastern Region Youth Football Championship...",
    category: "Achievements",
    author: "Coach Akosua",
    date: "2024-01-05",
    image: "/blog-championship.png",
    featured: true,
    tags: ["Championship", "Under 12", "Victory"],
  },
  {
    id: 4,
    title: "Introducing Our New Goalkeeper Training Program",
    excerpt:
      "We're launching a specialized goalkeeper training program led by former Black Stars goalkeeper coach to develop the next generation of shot-stoppers.",
    content:
      "HISS Football Club is proud to introduce our new specialized goalkeeper training program...",
    category: "Training Updates",
    author: "GK Coach Mensah",
    date: "2023-12-28",
    image: "/blog-goalkeeper.png",
    featured: false,
    tags: ["Goalkeeper", "Training", "Specialization"],
  },
  {
    id: 5,
    title: "Community Outreach: Football for All Initiative",
    excerpt:
      "Our 'Football for All' initiative brings free training sessions to underserved communities around Nkawkaw, expanding access to quality football education.",
    content:
      "As part of our commitment to community development, HISS Football Club has launched the 'Football for All' initiative...",
    category: "Community",
    author: "Community Coordinator",
    date: "2023-12-20",
    image: "/blog-community.png",
    featured: false,
    tags: ["Community", "Outreach", "Free Training"],
  },
  {
    id: 6,
    title: "Alumni Spotlight: Where Are They Now?",
    excerpt:
      "Catching up with former HISS FC players who have gone on to play for professional clubs and represent Ghana at various levels.",
    content:
      "Since our founding, HISS Football Club has been proud to see many of our alumni progress to higher levels of football...",
    category: "Alumni",
    author: "Alumni Relations",
    date: "2023-12-15",
    image: "/blog-alumni.png",
    featured: false,
    tags: ["Alumni", "Professional", "Success"],
  },
];

const categories = [
  "All",
  "Success Stories",
  "Academy News",
  "Achievements",
  "Training Updates",
  "Community",
  "Alumni",
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="">
      {/* Hero Section */}
      <PageHeader
        title="Academy News & Success Stories"
        description="Stay updated with the latest news, achievements, and inspiring success stories from HISS Football Club Academy."
        backgroundImage={team.src}
      >
        <Badge variant="secondary" className="mb-4">
          <Star className="mr-1 h-3 w-3" />
          News & Updates
        </Badge>
      </PageHeader>

      <div className="text-center py-8 bg-linear-to-r/increasing from-yellow-500 to-blue-950">
        <h1 className="pb-2">COMING SOON .........</h1>

        <Link href="/"> Back to Home Page</Link>
      </div>
      {/* Search and Filter Section */}
      {/* <Section padding="sm" fullWidth background="muted">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search articles..." className="pl-10" />
            </div>
            <div className="flex gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem
                      key={category}
                      value={category.toLowerCase().replace(" ", "-")}
                    >
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select defaultValue="newest">
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="popular">Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </Section> */}

      {/* Featured Posts */}
      {/* <Section padding="lg" fullWidth>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Trophy className="h-6 w-6 text-primary" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Featured Stories
            </h2>
          </div>

          <ResponsiveGrid cols={{ md: 2, xl: 2 }} gap="lg">
            {featuredPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-lg transition-shadow h-full"
              >
                <div className="aspect-video relative">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary">
                    Featured
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-primary/80"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </ResponsiveGrid>
        </div>
      </Section> */}

      {/* Regular Posts */}
      {/* <Section padding="lg" fullWidth background="muted"> */}
      {/* <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
            Latest News & Updates
          </h2> */}

      {/* <ResponsiveGrid cols={{ md: 2, lg: 3, xl: 4 }} gap="lg">
            {regularPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-lg transition-shadow h-full"
              >
                <div className="aspect-video relative">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight hover:text-primary transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-primary/80 text-xs"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </ResponsiveGrid> */}

      {/* Load More Button */}
      {/* <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 bg-transparent"
            >
              Load More Articles
            </Button>
          </div> */}
      {/* </div>
      // </Section> */}

      {/* Newsletter Signup */}
      {/* <Section padding="xl" fullWidth background="primary">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8">
            Subscribe to our newsletter to receive the latest news, success
            stories, and updates from HISS Football Club Academy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email address"
              type="email"
              className="flex-1"
            />
            <Button className="bg-primary hover:bg-primary/90">
              Subscribe
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </Section> */}
    </div>
  );
}
