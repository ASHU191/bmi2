import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, User } from "lucide-react"

export default function BlogsPage() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Interior Design Trends to Watch in 2023",
      excerpt: "Discover the latest interior design trends that are shaping homes and commercial spaces this year.",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/41f4fe225869163.6824a5df9fab4.jpg?height=600&width=800",
      date: "June 15, 2023",
      author: "Emily Johnson",
      category: "Trends",
      slug: "interior-design-trends-2023",
    },
    {
      id: 2,
      title: "Why Color Psychology Matters in Dubai Interior Design",
      excerpt:
        "Learn the principles of color theory and how to create a harmonious color scheme that reflects your personality.",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2e9125225869163.6824a5dfad71c.jpg?height=600&width=800",
      date: "May 28, 2023",
      author: "Michael Chen",
      category: "Tips & Advice",
      slug: "color-selection-guide-dubai-interior",
    },
    {
      id: 3,
      title: "Small Space Solutions: Maximizing Functionality in Compact Homes",
      excerpt:
        "Creative ideas and smart design solutions to make the most of limited square footage without sacrificing style.",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/af152d225869163.6824a5dfa8e38.jpg?height=600&width=800",
      date: "April 12, 2023",
      author: "Sarah Williams",
      category: "Tips & Advice",
      slug: "small-space-solutions",
    },
    {
      id: 4,
      title: "Biophilic Design: Bringing Nature Indoors",
      excerpt:
        "Explore how incorporating natural elements into your interior design can improve wellbeing and productivity.",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/51d590225869163.6824a5dfab17f.jpg?height=600&width=800",
      date: "March 5, 2023",
      author: "John Smith",
      category: "Design Philosophy",
      slug: "biophilic-design",
    },
    {
      id: 5,
      title: "The Art of Lighting: How to Transform Your Space with Light",
      excerpt:
        "Understanding the importance of lighting in interior design and how to create the perfect lighting plan.",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/674f1e225869163.6824a5dfa6255.jpg?height=600&width=800",
      date: "February 20, 2023",
      author: "Emily Johnson",
      category: "Tips & Advice",
      slug: "art-of-lighting",
    },
    {
      id: 6,
      title: "Sustainable Interior Design: Eco-Friendly Practices for Modern Homes",
      excerpt:
        "Discover how to create beautiful, environmentally conscious spaces with sustainable materials and practices.",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/fd4010225869163.6824a5dfacc28.jpg?height=600&width=800",
      date: "January 8, 2023",
      author: "Michael Chen",
      category: "Sustainability",
      slug: "sustainable-interior-design-dubai",
    },
    {
      id: 7,
      title: "Best 10 Interior Companies in UAE",
      excerpt:
        "Discover how to create beautiful, environmentally conscious spaces with sustainable materials and practices.",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/37980d225869163.6824a5dfa3bf9.jpg?height=600&width=800",
      date: "January 8, 2023",
      author: "Michael Chen",
      category: "Sustainability",
      slug: "top-10-interior-designer-in-dubai",
    },
  ]

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <Image src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/674f1e225869163.6824a5dfa6255.jpg?height=1080&width=1920" alt="Blog" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Insights, inspiration, and expert advice on interior design and home improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Main Content */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="bg-dark-300 border-gray-800 overflow-hidden hover-glow animate-fade-in">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-black px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-gray-400 mb-3">
                      <div className="flex items-center mr-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">
                      <Link href={`/blogs/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                    <Link href={`/blogs/${post.slug}`} className="text-primary flex items-center hover:underline">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {/* <div className="flex justify-center mt-12 animate-fade-in">
              <div className="flex space-x-2">
                <Button variant="outline" className="border-gray-700 hover:bg-dark-400 hover:text-white">
                  Previous
                </Button>
                <Button className="bg-primary text-black hover:bg-primary/80">1</Button>
                <Button variant="outline" className="border-gray-700 hover:bg-dark-400 hover:text-white">
                  2
                </Button>
                <Button variant="outline" className="border-gray-700 hover:bg-dark-400 hover:text-white">
                  3
                </Button>
                <Button variant="outline" className="border-gray-700 hover:bg-dark-400 hover:text-white">
                  Next
                </Button>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-2">
              Subscribe to Our <span className="text-primary">Newsletter</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-300 mb-8">
              Stay updated with our latest articles, design tips, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md bg-dark-300 border border-gray-700 focus:border-primary focus:outline-none"
              />
              <Button className="bg-primary text-black hover:bg-primary/80 hover-glow whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

