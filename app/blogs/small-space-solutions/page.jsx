import { blogPostTemplate } from "@/components/blog-post-template"

export default function BlogPost() {
  const postData = {
    title: "Small Space Solutions: Maximizing Functionality in Compact Homes",
    date: "April 12, 2023",
    author: "Sarah Williams",
    category: "Tips & Advice",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/af152d225869163.6824a5dfa8e38.jpg?height=1080&width=1920",
    content: [
      "Living in a small space doesn't mean sacrificing style or functionality. In fact, compact living can inspire creative solutions and thoughtful design choices that make every square foot count.",
    ],
    sections: [
      {
        title: "Embrace Multifunctional Furniture",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/af152d225869163.6824a5dfa8e38.jpg?height=600&width=800",
        content: [
          "One of the most effective strategies for small spaces is investing in furniture that serves multiple purposes. These versatile pieces reduce clutter and maximize functionality without requiring additional square footage.",
        ],
      },
      {
        title: "Maximize Vertical Space",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/b3d885225869163.6824a5dfadc3f.jpg?height=600&width=800",
        content: [
          "When floor space is limited, looking upward opens new possibilities. Utilizing vertical space effectively can dramatically increase storage capacity while drawing the eye upward to create the illusion of height.",
        ],
      },
      {
        title: "Choose Space-Enhancing Colors and Materials",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/41a6c3225869163.6824a5dfafa4d.jpg?height=600&width=800",
        content: [
          "Color and material choices significantly impact how spacious a room feels. Strategic selections can create the illusion of more space and light, even in the smallest rooms.",
        ],
      },
    ],
    tags: ["Small Spaces", "Interior Design", "Storage Solutions"],
    relatedPosts: [],
  }

  return blogPostTemplate(postData)
}

