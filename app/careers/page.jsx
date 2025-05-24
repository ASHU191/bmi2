"use client"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Check, Briefcase, Users, Heart, Sparkles } from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState("openings")

  const jobOpenings = [
    {
      title: "Senior Interior Designer",
      location: "New York, NY",
      type: "Full-time",
      description:
        "We're looking for an experienced interior designer to join our team and lead residential and commercial projects.",
      requirements: [
        "5+ years of experience in interior design",
        "Bachelor's degree in Interior Design or related field",
        "Proficiency in AutoCAD, SketchUp, and Adobe Creative Suite",
        "Strong portfolio demonstrating design excellence",
        "Excellent communication and client management skills",
      ],
      responsibilities: [
        "Lead design projects from concept to completion",
        "Collaborate with clients to understand their needs and vision",
        "Create design concepts, mood boards, and presentations",
        "Oversee project execution and coordinate with contractors",
        "Mentor junior designers and contribute to team growth",
      ],
    },
    {
      title: "3D Visualization Specialist",
      location: "Remote",
      type: "Full-time",
      description:
        "Join our team as a 3D visualization specialist to create photorealistic renderings and animations of our design concepts.",
      requirements: [
        "3+ years of experience in 3D visualization for interior design",
        "Proficiency in 3ds Max, V-Ray, and Adobe Creative Suite",
        "Strong understanding of lighting, materials, and composition",
        "Ability to translate design concepts into realistic visualizations",
        "Attention to detail and commitment to quality",
      ],
      responsibilities: [
        "Create photorealistic 3D renderings of interior spaces",
        "Develop animations and virtual walkthroughs",
        "Collaborate with designers to understand project requirements",
        "Maintain a library of 3D models and materials",
        "Stay updated on the latest visualization techniques and trends",
      ],
    },
    {
      title: "Project Manager",
      location: "New York, NY",
      type: "Full-time",
      description:
        "We're seeking a detail-oriented project manager to oversee the execution of our interior design projects.",
      requirements: [
        "3+ years of experience in project management for interior design or construction",
        "Strong organizational and time management skills",
        "Excellent communication and negotiation abilities",
        "Knowledge of construction processes and materials",
        "Ability to manage multiple projects simultaneously",
      ],
      responsibilities: [
        "Coordinate project timelines, budgets, and resources",
        "Liaise between clients, designers, and contractors",
        "Ensure projects are completed on time and within budget",
        "Manage procurement and installation processes",
        "Identify and resolve issues that arise during project execution",
      ],
    },
  ]

  const benefits = [
    {
      title: "Competitive Compensation",
      description:
        "We offer competitive salaries and performance-based bonuses to reward your hard work and dedication.",
      icon: <Briefcase className="h-6 w-6 text-primary" />,
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and wellness programs to keep you at your best.",
      icon: <Heart className="h-6 w-6 text-primary" />,
    },
    {
      title: "Professional Growth",
      description: "Continuous learning opportunities, mentorship programs, and career advancement paths.",
      icon: <Sparkles className="h-6 w-6 text-primary" />,
    },
    {
      title: "Collaborative Culture",
      description: "Work in a supportive environment that values creativity, diversity, and teamwork.",
      icon: <Users className="h-6 w-6 text-primary" />,
    },
  ]

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Careers at BMI Interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Build your career with BMI Interior and be part of a team that's transforming spaces and creating
              extraordinary experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="openings" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 mb-12 bg-dark-300 p-1 rounded-lg">
              <TabsTrigger value="openings" className="data-[state=active]:bg-primary data-[state=active]:text-black">
                Job Openings
              </TabsTrigger>
              <TabsTrigger value="benefits" className="data-[state=active]:bg-primary data-[state=active]:text-black">
                Benefits & Culture
              </TabsTrigger>
              <TabsTrigger value="process" className="data-[state=active]:bg-primary data-[state=active]:text-black">
                Application Process
              </TabsTrigger>
            </TabsList>

            <TabsContent value="openings" className="animate-fade-in">
              <div className="grid grid-cols-1 gap-8">
                {jobOpenings.map((job, index) => (
                  <Card key={index} className="bg-dark-300 border-gray-800 hover-glow">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                          <div className="flex flex-wrap gap-3 mb-4">
                            <span className="bg-dark-400 text-gray-300 px-3 py-1 rounded-full text-sm">
                              {job.location}
                            </span>
                            <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                              {job.type}
                            </span>
                          </div>
                          <p className="text-gray-300 mb-6">{job.description}</p>
                        </div>
                        <Button
                          className="bg-primary text-black hover:bg-primary/80 hover-glow mt-4 md:mt-0 md:ml-4 whitespace-nowrap"
                          asChild
                        >
                          <Link href="/contact">Apply Now</Link>
                        </Button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        <div>
                          <h4 className="text-lg font-semibold mb-4">Requirements</h4>
                          <ul className="space-y-3">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start">
                                <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                                <span className="text-gray-300">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-4">Responsibilities</h4>
                          <ul className="space-y-3">
                            {job.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start">
                                <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                                <span className="text-gray-300">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-gray-300 mb-6">
                  Don't see a position that matches your skills? We're always looking for talented individuals to join
                  our team.
                </p>
                <Button className="bg-primary text-black hover:bg-primary/80 hover-glow" asChild>
                  <Link href="/contact">
                    Send Spontaneous Application <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="benefits" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h2 className="text-3xl font-bold mb-2">
                    Why Work With <span className="text-primary">Us</span>
                  </h2>
                  <div className="w-20 h-1 bg-primary mb-6"></div>
                  <p className="text-gray-300 mb-6">
                    At BMI Interior, we believe that our team is our greatest asset. We're committed to creating a
                    supportive, inclusive, and inspiring work environment where you can grow professionally and
                    personally.
                  </p>
                  <p className="text-gray-300 mb-6">
                    We foster a culture of creativity, collaboration, and continuous learning. Our team members are
                    encouraged to share ideas, take initiative, and push the boundaries of design innovation.
                  </p>
                  <p className="text-gray-300">
                    Join us and be part of a team that's passionate about creating extraordinary spaces and delivering
                    exceptional client experiences.
                  </p>
                </div>
                <div className="relative">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-lg gold-border">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Team at BMI Interior"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-8 text-center">Our Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="bg-dark-300 border-gray-800 hover-glow">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="bg-primary/10 p-4 rounded-full mb-4">{benefit.icon}</div>
                      <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                      <p className="text-gray-300">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="process" className="animate-fade-in">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-2 text-center">
                  Our Application <span className="text-primary">Process</span>
                </h2>
                <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                <p className="text-gray-300 text-center mb-12">
                  We've designed a straightforward application process to help us find the right talent for our team.
                </p>

                <div className="space-y-12">
                  {[
                    {
                      step: "01",
                      title: "Application Submission",
                      description:
                        "Submit your application through our online portal. Include your resume, portfolio (if applicable), and a cover letter explaining why you're interested in joining BMI Interior.",
                    },
                    {
                      step: "02",
                      title: "Initial Screening",
                      description:
                        "Our HR team will review your application and assess your qualifications against the job requirements. If there's a good match, we'll contact you for the next step.",
                    },
                    {
                      step: "03",
                      title: "Interview Process",
                      description:
                        "The interview process typically includes a phone screening, followed by one or two in-person or virtual interviews with the hiring manager and team members.",
                    },
                    {
                      step: "04",
                      title: "Skills Assessment",
                      description:
                        "Depending on the role, you may be asked to complete a skills assessment or design challenge to demonstrate your capabilities and approach to problem-solving.",
                    },
                    {
                      step: "05",
                      title: "Final Decision & Offer",
                      description:
                        "After the interviews and assessments, we'll make our final decision. If selected, you'll receive a job offer with details about compensation, benefits, and start date.",
                    },
                  ].map((step, index) => (
                    <div key={index} className="flex">
                      <div className="mr-6">
                        <div className="bg-primary text-black w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                          {step.step}
                        </div>
                        {index < 4 && <div className="h-24 w-0.5 bg-primary/30 mx-auto mt-2"></div>}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-gray-300">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-16 text-center">
                  <h3 className="text-xl font-bold mb-4">Ready to Apply?</h3>
                  <p className="text-gray-300 mb-6">
                    Browse our current openings and submit your application today. We look forward to learning more
                    about you!
                  </p>
                  <Button className="bg-primary text-black hover:bg-primary/80 hover-glow" asChild>
                    <Link href="#openings">
                      View Job Openings <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

