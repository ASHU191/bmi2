"use client";

import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Projects Done", value: 120 },
  { label: "Happy Clients", value: 100 },
  { label: "Team Members", value: 10 },
  { label: "Years Experience", value: 5 },
];

const team = [
  {
    name: "Muhammad Farhan",
    role: "Founder & Creative Director",
    image: "/farhan.png",
  },
  {
    name: "Muhammad Arsalan Aftab",
    role: "Full-Stack Developer",
    image: "/arsalan.jpg",
  },
];

export default function About() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <Image
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/37980d225869163.6824a5dfa3bf9.jpg?height=1080&width=1920"
          alt="About Us"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Learn about our journey, our mission, and the team behind BMI Interior.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="relative">
                <div className="aspect-[4/3] relative overflow-hidden rounded-lg gold-border">
                  <Image
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/e42067225869163.6824a5dfa714c.jpg?height=600&width=800"
                    alt="Our Story"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-dark-300 p-6 rounded-lg gold-border gold-glow">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <CountUp end={stat.value} className="text-3xl font-bold text-primary" />
                        <p className="text-sm text-gray-300">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-3xl font-bold mb-2">
                <span className="text-primary">Top-notch Interior Design and Fit Out Company in Dubai, UAE</span>
              </h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>
              <p className="text-gray-300 mb-6">
                Broad Mind Interior (BMI Interior) is a leading interior design and fit-out company based in Dubai, offering expert commercial and residential interior design and fit-out solutions across the UAE...
              </p>
              <Button className="bg-primary text-black hover:bg-primary/80 hover-glow" asChild>
                <Link href="/services">
                  Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-2">
          Meet Our <span className="text-primary">Team</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-gray-300 mb-12 max-w-xl mx-auto">
          Behind every great project is a talented and passionate team.
        </p>
        <div className="flex flex-wrap justify-center gap-10 px-4">
          {team.map((member, index) => (
            <div key={index} className="max-w-xs text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden bg-gray-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
