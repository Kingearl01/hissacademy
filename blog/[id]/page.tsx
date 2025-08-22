import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar, User, ArrowLeft, Share2, Heart, MessageCircle, Tag } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Sample blog data (in a real app, this would come from a database)
const blogPosts = [
  {
    id: 1,
    title: "Kwame Asante Signs with Accra Hearts of Oak Academy",
    excerpt:
      "Former HISS FC player Kwame Asante has been selected to join the prestigious Accra Hearts of Oak Academy after outstanding performance in our Under 15 program.",
    content: `
      <p>We are incredibly proud to announce that Kwame Asante, who trained with HISS Football Club for three years, has been selected to join Accra Hearts of Oak Academy. This remarkable achievement represents not just Kwame's dedication and talent, but also the quality of training and development programs we provide at HISS FC.</p>

      <p>Kwame joined our Under 12 program at age 10 with raw talent but limited technical skills. Through our structured development program, he progressed rapidly, showing exceptional improvement in ball control, tactical awareness, and leadership qualities. His coaches consistently noted his work ethic and positive attitude during training sessions.</p>

      <h3>The Journey to Success</h3>
      <p>During his time at HISS FC, Kwame participated in numerous local tournaments and friendly matches. His breakthrough moment came during the Eastern Region Youth Championship, where he scored 8 goals in 6 matches, leading our Under 15 team to the semifinals. His performance caught the attention of scouts from several professional academies.</p>

      <p>"Kwame represents everything we strive to develop in our young players," said Coach Emmanuel, who worked closely with Kwame throughout his development. "His technical skills improved dramatically, but more importantly, he developed the character and mental strength needed to succeed at higher levels."</p>

      <h3>What This Means for HISS FC</h3>
      <p>Kwame's success validates our coaching methodology and development programs. It demonstrates that with proper guidance, dedication, and structured training, young players from our community can reach the highest levels of Ghanaian football.</p>

      <p>We wish Kwame all the best in his journey with Hearts of Oak Academy and look forward to watching his continued development. He remains an inspiration to all current and future HISS FC players, showing that dreams can become reality with hard work and determination.</p>

      <p>This achievement also strengthens our relationships with professional clubs and academies across Ghana, opening more pathways for our current and future players to advance their football careers.</p>
    `,
    category: "Success Stories",
    author: "Coach Emmanuel",
    date: "2024-01-15",
    image: "/blog-kwame-success.png",
    featured: true,
    tags: ["Success Story", "Hearts of Oak", "Under 15", "Player Development"],
    readTime: "5 min read",
  },
  // Add other posts here...
]

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === Number.parseInt(params.id))

  if (!post) {
    notFound()
  }

  // Related posts (simple logic - same category, excluding current post)
  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
              <span className="text-lg font-bold text-primary-foreground">H</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">HISS FC</h1>
              <p className="text-xs text-muted-foreground">Football Academy</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/programs" className="text-sm font-medium hover:text-primary transition-colors">
              Programs
            </Link>
            <Link href="/gallery" className="text-sm font-medium hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link href="/blog" className="text-sm font-medium text-primary">
              News
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Register Now
            </Button>
          </nav>
        </div>
      </header>

      {/* Back to Blog */}
      <section className="py-6 border-b">
        <div className="container px-4">
          <Link href="/blog">
            <Button variant="ghost" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
              <ArrowLeft className="h-4 w-4" />
              Back to News & Updates
            </Button>
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Badge variant="outline">{post.category}</Badge>
              <span className="text-sm text-muted-foreground">{post.readTime}</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight">{post.title}</h1>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <Heart className="h-4 w-4 mr-1" />
                  Like
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="aspect-video rounded-xl overflow-hidden">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-12">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div
              className="text-foreground leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="pb-12">
        <div className="container px-4 max-w-4xl mx-auto">
          <Separator className="mb-6" />
          <div className="flex items-center gap-2 flex-wrap">
            <Tag className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Tags:</span>
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-card">
          <div className="container px-4 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative">
                    <img
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <Badge variant="outline" className="w-fit text-xs mb-2">
                      {relatedPost.category}
                    </Badge>
                    <CardTitle className="text-lg leading-tight hover:text-primary transition-colors">
                      <Link href={`/blog/${relatedPost.id}`}>{relatedPost.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{relatedPost.excerpt}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {new Date(relatedPost.date).toLocaleDateString()}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Comments Section */}
      <section className="py-12">
        <div className="container px-4 max-w-4xl mx-auto">
          <Separator className="mb-8" />
          <div className="flex items-center gap-2 mb-6">
            <MessageCircle className="h-5 w-5" />
            <h3 className="text-xl font-bold">Comments</h3>
          </div>
          <div className="bg-muted/50 p-8 rounded-lg text-center">
            <p className="text-muted-foreground">
              Comments are coming soon! In the meantime, share your thoughts with us on social media or contact us
              directly.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                  <span className="text-lg font-bold text-primary-foreground">H</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">HISS FC</h3>
                  <p className="text-sm text-muted">Football Academy</p>
                </div>
              </Link>
              <p className="text-sm text-muted">Nurturing young football talent in Ghana since 2016.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li>
                  <Link href="/" className="hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="hover:text-primary transition-colors">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-primary transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-primary transition-colors">
                    News & Updates
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li>Success Stories</li>
                <li>Academy News</li>
                <li>Training Updates</li>
                <li>Community Outreach</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-muted">
                <div>Nkawkaw, Abepotia, Ghana</div>
                <div>+233 XX XXX XXXX</div>
              </div>
            </div>
          </div>

          <div className="border-t border-muted/20 mt-8 pt-8 text-center text-sm text-muted">
            <p>&copy; 2024 HISS Football Club Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
