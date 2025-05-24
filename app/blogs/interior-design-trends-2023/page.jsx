import { blogPostTemplate } from "@/components/blog-post-template"

export default function BlogPost() {
  const postData = {
    title: "Top 10 Interior Design Trends in 2025",
    date: "June 15, 2023",
    author: "Emily Johnson",
    category: "Trends",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/41f4fe225869163.6824a5df9fab4.jpg?height=1080&width=1920",
    content: [
      <content>
      <p className="text-gray-300 mb-4">Are you tired of the outdated design of your home? Ready for a fresh, modern transformation? Look no further! At BMI Interiors, we bring innovative and personalized interior design solutions tailored to suit your lifestyle and preferences.</p>
      <p className="text-gray-300 mb-4">Say goodbye to copying trends and hello to one-of-a-kind interior styles crafted just for you. Our expert team specializes in delivering luxury home interior designs in Dubai that are both functional and visually stunning.</p>
      <p className="text-gray-300 mb-4">Whether you're planning a full home renovation or just looking to revamp a specific space, we offer creative design ideas that you’ve never seen before. Let us help you turn your vision into reality with customized interior plans that reflect your personality and elevate your living experience.</p>
      </content>
    ],
    sections: [
      {
        title: "1. Smart Home Integration in Dubai",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/41f4fe225869163.6824a5df9fab4.jpg?height=600&width=800",
        content: [
          <content>
          <p className="text-gray-300 mb-4">In today’s fast-paced world, people are shifting towards a smarter and more convenient lifestyle, and smart homes are at the forefront of this transformation. With cutting-edge technology, high-quality materials, and thoughtfully designed features, smart homes in Dubai are revolutionizing the way we live—offering comfort, control, and luxury all in one place.</p>
          <p className="text-gray-300 mb-4">Smart homes are designed for efficiency, security, and ease of use. Every room is equipped with sensors and connected to computer-aided systems, many of which are integrated with smart applications that can be fully controlled from your mobile devices. From lighting to appliances, everything is at your fingertips.</p>
          <p className="text-gray-300 mb-4">We specialize in designing and transforming luxury homes in Dubai into intelligent living spaces. Our expert team ensures every element—from smart appliances to automated systems—is seamlessly integrated into your home’s aesthetic and function.</p>
          </content>
        ],
      },
      {
        title: "2. From Biophilic Beauty to Bold Smart Living",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/a95cbc225869163.6824a5df9f3cb.jpg?height=600&width=800",
        content: [
          "Looking to transform your space with the latest interior design trends in Dubai? Modern interiors are evolving with a strong focus on biophilic design, integrating nature through plants, natural materials, and open spaces that connect you to the outdoors. Bold lighting is playing a major role, with sculptural fixtures and smart LED setups becoming statement elements in rooms. Rich, saturated colors and dark, moody tones such as emerald green, navy, and charcoal are replacing neutrals, adding depth and elegance. There’s a rising demand for curved shapes in tiling, furniture, ceilings, and doors, bringing a soft, flowing aesthetic to interiors. The charm of Scandinavian design remains strong with its minimalism, natural textures, and light wood finishes, while updated Art Deco adds geometric elegance and metallic accents for a sophisticated edge.",
        ],
      },
      {
        title: "3. Multi Purpose and Multi-Functional Furniture",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/22b0fd225869163.6824a5df9e9fd.jpg?height=600&width=800",
        content: [
          "Multi-Purpose and Multi-Functional Furniture is becoming a key feature in today’s smart home interiors, especially in urban living spaces across Dubai where space optimization meets luxury design. These innovative furniture solutions are crafted to serve multiple purposes without compromising style or comfort. Imagine a folding bed that transforms into a sofa, or a table that cleverly converts into a chair—ideal for compact apartments or guest rooms. Custom-designed wooden units are also gaining popularity, with multi-functional pieces that switch from wardrobes to sleeping beds, offering both elegance and utility. Even bookshelves are being creatively designed to double as dining tables, enhancing functionality while maintaining an aesthetic look. At BMI Interiors, we specialize in providing bespoke multi-functional furniture that suits your space, lifestyle, and smart home integration needs, helping you achieve a perfect balance of style and practicality.",
        ],
      },
      {
        title: "4. Bold, Saturated Colors",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/e37092225869163.6824a5dfa2bf0.jpg?height=600&width=800",
        content: [
          "After years of neutral dominance, bold and saturated colors are making a strong comeback in 2023. Deep jewel tones like emerald green, sapphire blue, and ruby red are appearing in everything from wall colors to upholstery and accessories.",
        ],
      },
    ],
    tags: ["Interior Design", "Design Trends", "Home Decor"],
    relatedPosts: [],
  }

  return blogPostTemplate(postData)
}

