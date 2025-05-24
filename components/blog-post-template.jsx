import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User, Tag, Share2 } from "lucide-react"
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"

export const blogPostTemplate = (postData) => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <Image
          src={postData.image || "/placeholder.svg?height=1080&width=1920"}
          alt={postData.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl animate-fade-in">
              <Link href="/blogs" className="inline-flex items-center text-primary mb-4 hover:underline">
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to Blogs
              </Link>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{postData.title}</h1>
              <div className="flex flex-wrap items-center text-sm text-gray-300 gap-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-primary" />
                  <span>{postData.date}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2 text-primary" />
                  <span>{postData.author}</span>
                </div>
                <div className="flex items-center">
                  <Tag className="h-4 w-4 mr-2 text-primary" />
                  <span>{postData.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none animate-fade-in">
              {postData.content.map((paragraph, index) => (
                <p key={index} className="mb-6 text-gray-300">
                  {paragraph}
                </p>
              ))}

              {postData.sections &&
                postData.sections.slice(0, 3).map((section, index) => (
                  <div key={index} className="mt-10 mb-8">
                    <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                    {section.image && (
                      <div className="my-6 relative aspect-[16/9] rounded-lg overflow-hidden">
                        <Image
                          src={section.image || "/placeholder.svg"}
                          alt={section.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    {section.content.slice(0, 1).map((paragraph, pIndex) => (
                      <p key={pIndex} className="mb-6 text-gray-300">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}

              {/* Share */}
              <div className="border-t border-gray-800 pt-6 mt-8">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Share2 className="h-4 w-4 mr-2 text-primary" /> Share this article
                </h3>
                <div className="flex space-x-3">
                  <a
                    href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1877F2] text-white p-2 rounded-full hover:opacity-90 transition-opacity"
                  >
                    <FaFacebook className="h-5 w-5" />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}&text=${encodeURIComponent(postData.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1DA1F2] text-white p-2 rounded-full hover:opacity-90 transition-opacity"
                  >
                    <FaTwitter className="h-5 w-5" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}&title=${encodeURIComponent(postData.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0A66C2] text-white p-2 rounded-full hover:opacity-90 transition-opacity"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-dark-400">
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

