"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Search, Camera, Video, Calendar, MapPin, Play, X, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { galleryItems, categories, type GalleryItem } from "@/lib/imageData"

import teamlogo from "@/public/hisslogo2.jpg"
import { PageHeader } from "@/components/ui/page-header"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredItems = galleryItems.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
    const matchesSearch =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const openLightbox = (item: GalleryItem) => {
    setSelectedItem(item)
    setCurrentIndex(filteredItems.findIndex((i) => i.id === item.id))
  }

  const closeLightbox = () => {
    setSelectedItem(null)
  }

  const navigateLightbox = (direction: "prev" | "next") => {
    const newIndex =
      direction === "prev"
        ? (currentIndex - 1 + filteredItems.length) % filteredItems.length
        : (currentIndex + 1) % filteredItems.length

    setCurrentIndex(newIndex)
    setSelectedItem(filteredItems[newIndex])
  }

  return (
    <div className="">

     


            <PageHeader
              title="Academy Gallery & Memories"
                            description="Explore authentic moments from HISS Football Club Academy - our training sessions, team achievements,
              community events, and the proud young footballers representing Ghana."
              backgroundImage={teamlogo.src}
            >
              <Badge variant="secondary" className="mb-4">
                <Camera className="mr-1 h-3 w-3" />
                Photo & Video Gallery
              </Badge>
            </PageHeader>


      {/* Search and Filter Section */}
      <section className="py-8 border-b">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search photos and videos..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="py-8 bg-card">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">
                {galleryItems.filter((i) => i.type === "image").length}
              </div>
              <div className="text-sm text-muted-foreground">Photos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">
                {galleryItems.filter((i) => i.type === "video").length}
              </div>
              <div className="text-sm text-muted-foreground">Videos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">{categories.length - 1}</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">{filteredItems.length}</div>
              <div className="text-sm text-muted-foreground">Results</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No items found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              {filteredItems.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  onClick={() => openLightbox(item)}
                >
                  <div className="aspect-square relative">
                    <Image
                      src={item.type === "video" ? item.thumbnail || item.url : item.url}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, (max-width: 1536px) 25vw, 20vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      placeholder="blur"
                      blurDataURL={teamlogo.src}
                    />
                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                        <div className="bg-primary/90 rounded-full p-3">
                          <Play className="h-6 w-6 text-primary-foreground fill-current" />
                        </div>
                      </div>
                    )}
                    <Badge className="absolute top-2 left-2 text-xs">
                      {item.type === "video" ? <Video className="h-3 w-3 mr-1" /> : <Camera className="h-3 w-3 mr-1" />}
                      {item.category}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-sm mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(item.date).toLocaleDateString()}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {item.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs px-1 py-0">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <Dialog open={!!selectedItem} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-4xl w-full h-[90vh] p-0">
            <div className="relative h-full flex flex-col">
              {/* Header */}
              <DialogHeader className="p-6 pb-0">
                <div className="flex items-center justify-between">
                  <div>
                    <DialogTitle className="text-xl">{selectedItem.title}</DialogTitle>
                    <p className="text-sm text-muted-foreground mt-1">{selectedItem.description}</p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={closeLightbox}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </DialogHeader>

              {/* Media Content */}
              <div className="flex-1 relative p-6">
                {selectedItem.type === "video" ? (
                 
                  <div className="w-full h-full flex items-center justify-center bg-black rounded-lg">
                    <video controls className="max-w-full max-h-full" poster={selectedItem.thumbnail}>
                      <source src={selectedItem.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    
                    </video>
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center relative">
                    <Image
                      src={selectedItem.url || "/placeholder.svg"}
                      alt={selectedItem.title}
                      fill
                      sizes="90vw"
                      className="object-contain rounded-lg"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  </div>
                )}

                {/* Navigation Arrows */}
                {filteredItems.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
                      onClick={(e) => {
                        e.stopPropagation()
                        navigateLightbox("prev")
                      }}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
                      onClick={(e) => {
                        e.stopPropagation()
                        navigateLightbox("next")
                      }}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </>
                )}
              </div>

              {/* Footer */}
              <div className="p-6 pt-0 border-t">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(selectedItem.date).toLocaleDateString()}
                    </div>
                    <Badge variant="outline">{selectedItem.category}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {selectedItem.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Want to Be Part of Our Story?</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Join HISS Football Club Academy and create your own memorable moments. Register today and start your
              journey to football excellence in Ghana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Register Now
              </Button>
              <Button size="lg" variant="outline">
                Schedule a Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="w-full px-4 sm:px-6 lg:px-8">
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
              <h4 className="font-semibold mb-4">Gallery</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li>Training Sessions</li>
                <li>Academy Events</li>
                <li>Facilities Tour</li>
                <li>Success Stories</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-muted">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Nkawkaw, Abepotia, Ghana</span>
                </div>
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
