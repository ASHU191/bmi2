import { blogPostTemplate } from "@/components/blog-post-template"

export default function BlogPost() {
  const postData = {
    title: "Sustainable Interior Designs in Dubai",
    date: "May 28, 2023",
    author: "Michael Chen",
    category: "Tips & Advice",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/fd4010225869163.6824a5dfacc28.jpg?height=1080&width=1920",
    content: [
      <content>
      <p className="text-gray-300 mb-4">As the world faces severe climate challenges and global warming impacts nearly every continent, the need for sustainable living solutions has never been more urgent. Over the past decade, we’ve seen intense heatwaves, hurricanes, floods, earthquakes, tsunamis, and other natural calamities that have damaged cities, properties, and ecosystems. Poor air quality and industrial pollution further threaten our environment.</p>
      <p className="text-gray-300 mb-4">In such conditions, it becomes essential to rethink how we design our indoor spaces. Interior design can play a vital role in promoting sustainability and reducing environmental impact.</p>
      </content>
    ],
    sections: [
      {
        title: "Why Sustainable Interior Design Matters",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/fd4010225869163.6824a5dfacc28.jpg?height=600&width=800",
        content: [
          <content>
            <p className="text-gray-300 mb-4">People invest years of hard work in building their homes and businesses. With increasing climate risks, it's crucial to adopt interior design strategies that can safeguard these spaces and contribute to a healthier environment.</p>
            <p className="text-gray-300 mb-4">By embracing eco-conscious interior design, you’re not just enhancing aesthetics—you're promoting a lifestyle that’s safer, smarter, and better for the planet.</p>
          </content>
        ],
      },
      {
        title: "Natural Elements for Sustainable Interiors",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/ed319a225869163.6824a5dfa9d75.jpg?height=600&width=800",
        content: [
          <content>
          <p className="text-gray-300 mb-4">Use natural materials like stone for countertops and bamboo for flooring and furniture.</p>
          <p className="text-gray-300 mb-4">Integrate green walls and vertical gardens to reduce indoor temperatures and improve air quality.</p>
          <p className="text-gray-300 mb-4">Grow trees and plants in outdoor and indoor areas to produce oxygen and reduce carbon footprint.</p>
          <p className="text-gray-300 mb-4">Encourage landscaping and proper drainage systems to manage rainwater effectively.</p>
          </content>
        ],
      },
      {
        title: "Water Conservation and Waste Reduction",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/57be19225869163.6824a5dfaf12e.jpg?height=600&width=800",
        content: [
          <content>
          <p className="text-gray-300 mb-4">Set up rainwater harvesting systems to reuse water for gardening.</p>
          <p className="text-gray-300 mb-4">Avoid throwing away reusable construction materials—repair, recycle, and upcycle whenever possible.</p>
          <p className="text-gray-300 mb-4">Create handmade décor items using used or discarded materials to reduce landfill waste.</p>
          <p className="text-gray-300 mb-4">Repair old furniture rather than disposing of it.</p>
          </content>
        ],
      },
    ],
    tags: ["sustainable design", "eco friendly spaces", "modern living"],
    relatedPosts: [],
  }

  return blogPostTemplate(postData)
}

