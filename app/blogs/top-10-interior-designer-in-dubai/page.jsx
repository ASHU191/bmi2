import { blogPostTemplate } from "@/components/blog-post-template"

export default function BlogPost() {
  const postData = {
    title: "Best 10 Interior Companies in UAE",
    date: "May 28, 2023",
    author: "Michael Chen",
    category: "Tips & Advice",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/37980d225869163.6824a5dfa3bf9.jpg?height=1080&width=1920",
    content: [
      "Dubai has regional and geographical importance due to many factors and its Luxury lifestyle is one of the main factor that’s why large number of people visit from all over the world for experiencing healthy living standards and stay here for a long period of time. Infrastructure of Dubai is inspiring for all visitors and locals. Unbelievable design structures made this beauty more attractive. As Dubai look luxurious from outside view of any building, homes and commercial spaces, we are witnessing brilliant interiors for all spaces whether it is residential or commercial. There are multiple Interior companies that can create stylish and modern inner spaces that you live or work but design long lasting and reliable spaces is not an easy task as it seen. We are going to discuss different designing company portfolio as well as their criteria of work as being a top and best interior designing company in Dubai. Some of these are working in residential operations, some are taking projects for commercial only, some are office design experts and rest of them are creating both commercial and residential interior design.",
    ],
    sections: [
      {
        title: "1. Motif Interior",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/37980d225869163.6824a5dfa3bf9.jpg?height=600&width=800",
        content: [
          "Motif Interior is the top name for transform Office spaces, it is renowned for most experienced fit out company in Dubai. Their design works are impressive and world class. They have big designers team can work in large scale. They are grabbing large number of businesses by their excellent work. Motif created hospitality designs like restaurants and hotels. As Dubai is Business hub for investors so they built and design many offices on main area of commercial properties.",
        ],
      },
      {
        title: "2. Broad Way Interior",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/a93a0a225869163.6824a5df9dba4.jpg?height=600&width=800",
        content: [
          "Broadway is an award winning commercial based company established in 1999 specialized in Hospitality design. Broadway as one of the leading Interior Design Consultancies have won local and international awards for high end interior.",
        ],
      },
      {
        title: "3. Broad Mind Interior (BMI Interior)",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/f3b0cb225869163.6824a5dfa2623.jpg?height=600&width=800",
        content: [
          "BMI Interior is a leading name in Dubai's interior design industry. BMI offers a wide range of services with dedication. BMI Interior is one the best Fit out company in Dubai that can reshape Offices and Commercial property of all sizes. Our 80% work is based on Commercial projects while we have also completed small numbers of residential spaces but they are designed perfectly as it should look according to home owner’s plan and requirement. We have gained experience and reputation in transforming offices with client centric designs. We have successfully completed and deliver Innovative Designs for corporate offices, Ware houses, Showrooms, Restaurants, Hotels, Mall, Salons, shops, storage units, Gym and many commercial projects within a budget. Our highly educated designers create budget friendly design and discuss design proposal with our clients once they approve we start execution as early as possible. We have understand the market of Dubai about how can we manage your budget to purchase good quality material to create desired space according to layout. BMI provide complete diagrams, drawings, layout, blueprints, 3D visuals and videos before starting work as client get complete satisfaction regarding how their asset will look after completion. BMI’s vision and mission is to develop state of the art spaces which fulfill and endorse beauty of Dubai. We are passionate to revamp your design so that you can impress your customers from productivity and they engage more with your brand. Don’t lose the potential by upgrading latest model. We will highly appreciate your association with best interior designer in Dubai and UAE. Read out our portfolio to explore uniqueness and then award your project once you have convinced with our expertise. We tackle all the issue regarding permissions and approvals from relevant bodies whether its Dubai municipality or other.",
        ],
      },
    ],
    tags: ["interior companies", "fit out experts", "architectural firm", "interior contractor"],
    relatedPosts: [],
  }

  return blogPostTemplate(postData)
}

