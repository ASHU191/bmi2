"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"

// Project data for different projects
const projectsData = {
  "home-renovation-dubai": {
    title: "Modern Home Renovation in Dubai",
    category: "Residential",
    location: "Dubai",
    year: "2024",
    client: "Jumeirah Golf Estates Villa",
    description:
      "Explore the Best Residential Interior Design Services in Dubai. Our residential designs are unique and bespoke with luxuries.  BMI Interior is renowned for its luxurious and innovative interior design services. We turn your simple house into extraordinary living spaces.  Our creative and passionate home designers develop a detailed design plan, including mood boards and concept sketches.  We offer a wide range of living amenities with our elegant designs with modern decoration and classic renovation.",
    challenge:
      "Dubai is a leading destination for luxury living, attracting individuals from around the world due to its modern infrastructure, tax-free property investments, and premium lifestyle. As residential spaces in Dubai become more sought after and increasingly expensive, the demand for sophisticated yet affordable interior design solutions continues to rise. With the UAE’s booming real estate market, where investors are actively purchasing luxury villas and upscale apartments, the cost of living has significantly escalated. At BMI Interior, we provide professional interior design services in Dubai and across the UAE, offering creative and cost-effective solutions for every type of home, from apartments to grand villas. Our team is dedicated to crafting dream interiors that meet Dubai’s high standards while aligning with your personal style and budget. We are proud to offer free interior consultations to help bring your vision to life. Whether you're planning a full villa transformation or simply updating a bedroom, living room, kitchen, or bathroom, we are here to assist—even with small-scale renovation projects. Get inspired with expert ideas and personalized solutions from BMI Interior, your trusted partner for home renovation in Dubai.",
    solution:
      "Transform your home interiors in Dubai with expert design solutions for bedrooms, living rooms, bathrooms, kitchens, villas, and apartments. From luxury bedroom makeovers with personal touches to elegant living rooms featuring statement lighting and artistic elements, every space is styled for comfort and beauty. Elevate your lifestyle with modern bathroom renovations, complete with smart fittings and sleek surfaces. Upgrade your cooking experience with custom kitchen designs featuring premium countertops and space-efficient layouts. Our villa interior design in Dubai brings high ceilings, lavish exteriors, and serene outdoor setups. For luxury apartment interiors, we blend Italian finishes, smart planning, and timeless elegance into every corner.",
    features: [
      "Open-concept living and dining area",
      "Custom built-in storage solutions",
      "Minimalist kitchen with hidden appliances",
      "Smart home integration",
      "Energy-efficient lighting design",
      "Sustainable materials throughout",
    ],
    images: [
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/716567214915005.67611dd52f000.png?height=800&width=1200",
        alt: "Living Room",
      },
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/e03f10214915005.67611dd52b53c.png?height=800&width=1200",
        alt: "Kitchen",
      },
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/76209b214915005.67611dd528f3c.png?height=800&width=1200",
        alt: "Bedroom",
      },
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/6a435e214915005.67611dcf3ce57.png?height=800&width=1200",
        alt: "Bathroom",
      },
    ],
    relatedProjects: [
      {
        title: "Office Interior Fit out Expert in Dubai",
        category: "Residential",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/9d9f14225600833.68206a3792293.jpg?height=600&width=800",
        slug: "office-fitout-dubai",
      },
      {
        title: "shopping-malls",
        category: "Residential",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/999207206936899.66d568e26e400.png?height=600&width=800",
        slug: "shopping-malls",
      },
    ],
  },
  "office-fitout-dubai": {
    title: "Office Interior Fit out Expert in Dubai",
    category: "Commercial",
    location: "Empire Heights, business bay, Dubai",
    year: "2024",
    client: "2025",
    description:
      "We Offer Trustworthy Interior fit out services in UAE for all type of Offices either small or big businesses ensuring Brand Oriented Design, focusing on business themes, Understanding every nature of work, changing your existing space into desiring and exciting workplace. Consult us now for full-fledge operations to design your startups, upgradation from small local business to mega projects for large offices from sctrach to finish as we are highly professional Interior fitout contracters in Dubai.",
    challenge:
      "Designing an attractive executive office with precision is just one call away. At BMI Interiors, we specialize in crafting cutting-edge office interiors in Dubai with creative workstations tailored to perfection. Every dimension—length, width, and height—is carefully considered to ensure a flawless and functional layout. Our commitment to business owners goes beyond design; we strive to complete every commercial interior project ahead of schedule, so your workspace becomes operational as quickly as possible. We understand that time is critical, and our goal is to help you launch your business, enhance productivity, and start generating revenue without delay. Whether it’s a modern executive suite or a bespoke corporate space, BMI Interiors delivers excellence in every detail of workspace design and office fit-out in Dubai.",
    solution:
      "Transform your workspace with expert office interior design in Dubai tailored for a wide range of sectors including government entities, real estate firms, IT companies, and medical offices. We specialize in designing headquarters, embassies, courts, and metro stations with a focus on functionality, aesthetics, and regulatory compliance. Our solutions for customer care offices include ergonomic furniture, secure cash counters, machine kiosks, and integrated vocal systems. For money exchange centers, we craft efficient layouts that enhance customer flow and security. Real estate and investment offices are designed to impress, featuring virtual tour setups, multimedia displays, and luxurious client areas. Travel agencies benefit from welcoming, theme-based interiors, while law firms and educational offices enjoy custom-made furniture that ensures privacy and supports learning. In healthcare design, we prioritize hygiene, using antimicrobial surfaces, vinyl flooring, and strategic layouts. Creative studios and media offices are elevated with chroma rooms, soundproofing, and high-tech equipment. We also design smart breakout zones and storage offices with optimal shelving and surveillance, ensuring every office space in Dubai reflects innovation, efficiency, and modern professionalism.",
    features: [
      "Reception area with custom-designed welcome desk",
      "Open-plan workstations with ergonomic furniture",
      "Executive offices and conference rooms",
      "Collaborative breakout spaces and lounges",
      "State-of-the-art technology integration",
      "Employee wellness room and café",
    ],
    images: [
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/9d9f14225600833.68206a3792293.jpg?height=800&width=1200",
        alt: "Reception Area",
      },
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/6f9378225600833.68206a37949ad.jpg?height=800&width=1200",
        alt: "Open Workspace",
      },
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/fea60c225601393.68206d7826a32.jpeg?height=800&width=1200",
        alt: "Conference Room",
      },
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/dc5bc6225602705.68207501e212d.jpeg?height=800&width=1200",
        alt: "Executive Office",
      },
    ],
    relatedProjects: [
      {
        title: "Office Interior Fit out Expert in Dubai",
        category: "Residential",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/9d9f14225600833.68206a3792293.jpg?height=600&width=800",
        slug: "office-fitout-dubai",
      },
      {
        title: "shopping-malls",
        category: "Residential",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/999207206936899.66d568e26e400.png?height=600&width=800",
        slug: "shopping-malls",
      },
    ],
  },
  "hotel": {
    title: "Dubai's Best Hotel Interior Design",
    category: "Hospitality",
    location: "Park Inn Hotel Business bay, Dubai",
    year: "Aug 2023",
    client: "Dec 2023",
    description:
      "Crafting remarkable hospitality interiors in Dubai is an art that begins with deep insight and ends with unforgettable guest experiences. Our hotel interior design services across Dubai and the UAE cater to 5 star hotels, 4 star, and 3 star hotel categories, ultra luxury resorts, boutique stays, and hotel apartments in Dubai—blending elegance with functionality at every level. We design interior environments that reflect both global prestige and local cultural richness, creating hotel spaces that speak the language of comfort, grandeur, and timeless style.",
    challenge:
      "Each zone is designed with purpose—from the majestic entrance lobbies, mood-lit corridors, and custom reception counters to luxury hotel suites offering high-end furnishings, ambient lighting, modern room amenities, and acoustic privacy. Our ultra-luxury designs feature personalized guest experiences with in-room spa setups, walk-in wardrobes, and climate-smart technology. Whether it's a world class hotel chain or a bespoke hospitality project, our focus is on delivering holistic, luxurious environments tailored to the traveler’s needs.",
    solution:
      "Our team integrates interior architecture with smart systems and branded aesthetics, turning basic layouts into hospitality masterpieces. From hotel cafés and fine-dining restaurants to lounges, wellness centers, and commercial kitchens, we build fully functional, aesthetic interiors. Whether it’s a new concept or a renovation, we provide full-scale solutions for hospitality interiors across the UAE that meet international standards and enhance your identity in Dubai’s vibrant hotel market.",
    features: [
      "Custom-designed reception desk with backlit onyx",
      "Locally-inspired art and decorative elements",
      "Comfortable lounge seating in various configurations",
      "Integrated technology for check-in and guest services",
      "Dramatic lighting design with custom fixtures",
      "Indoor plants and biophilic elements",
    ],
    images: [
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/999207206936899.66d568e26e400.png?height=800&width=1200",
        alt: "Main Lobby",
      },
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/6c9c34206936899.66d568e26eed7.png?height=800&width=1200",
        alt: "Reception Desk",
      },
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/508202206936899.66d568e26f5f9.png?height=800&width=1200",
        alt: "Lounge Area",
      },
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/1fb612206936899.66d568e26c13d.png?height=800&width=1200",
        alt: "Business Center",
      },
    ],
    relatedProjects: [
      {
        title: "High End Restaurant Interior",
        category: "Hospitality",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/999207206936899.66d568e26e400.png?height=600&width=800",
        slug: "hotel",
      },
      {
        title: "Cozy Salon Interior Design",
        category: "Commercial",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/fa0136208111617.66e96c55b01f0.png?height=600&width=800",
        slug: "villa-design",
      },
    ],
  },
  "villa-design": {
    title: "Contemporary Villa Design",
    category: "Residential",
    location: "Jumeirah Golf Estates",
    year: "March 2024",
    client: "Sep 2024",
    description: (
      <div>
        <p className="text-gray-300 mb-4">
        Transform your dream residence into a living masterpiece with our specialized villa, palace, mansion, and townhouse interior and exterior design services across Dubai, Sharjah, and other emirates.
        </p>
        <p className="text-gray-300 mb-4">
          From Arabian Ranches to Damac Hills, Palm Jumeirah, and Dubai Marina, we redefine luxury living through innovative architecture, artistic facades, and breathtaking landscapes that truly reflect your lifestyle.
        </p>
      </div>
    ),
    
    challenge: (
      <div>
        <p className="text-gray-300 mb-4">
        Every home deserves an iconic identity. Our experts create distinctive elevations and facades that capture modern sophistication and timeless appeal. Whether it’s a contemporary villa in Jumeirah, a grand palace in Palm Jumeirah, or a stylish townhouse in Sharjah, we blend natural materials like stone, wood, and glass with advanced cladding and finishing techniques to deliver a striking visual presence. Our bespoke façade designs enhance both the beauty and value of your property, offering a unique statement in every neighborhood.
        </p>
        <p className="text-gray-300 mb-4">
          Clients seek both functionality and elegance, requiring designs that are personalized yet practical for daily living.
        </p>
        <p className="text-gray-300 mb-4">
          Choosing the right combination of glass, wood, stone, and cladding materials is crucial to achieve aesthetic harmony and withstand UAE’s climate.
        </p>
      </div>
    ),
    
    solution: (
      <div>
        <p className="text-gray-300 mb-4">
        Our dedication to contemporary, ultra-luxury villa and mansion designs ensures we deliver excellence across Dubai, Sharjah, Abu Dhabi, and other cities. Each project is a fusion of artistic elevation, lush landscaping, and smart architectural elements like pergolas, canopies, terraces, and vertical gardens. We pride ourselves on creating breathtaking exteriors that elevate your lifestyle, offering timeless sophistication, cutting-edge innovation, and the highest levels of craftsmanship tailored to UAE’s dynamic living standards.
        </p>
        <p className="text-gray-300 mb-4">
        Bring your vision to life with our specialized villa design, mansion design, and townhouse design expertise across Dubai and the UAE, offering bespoke exterior design solutions that reflect unparalleled luxury living and modern sophistication. We create timeless architectural designs tailored to perfection, blending artistry with functionality to craft extraordinary outdoor spaces. With meticulous project management and high-end fit-out services, we curate properties that embody distinction, style, and enduring value.
        </p>
      </div>
    ),
  
    features: [
      "Open-concept living spaces with panoramic views",
      "Custom kitchen with premium appliances and finishes",
      "Master suite with private terrace and luxury bathroom",
      "Home theater and entertainment area",
      "Indoor-outdoor living with expansive terraces",
      "Infinity pool and landscaped gardens",
    ],
    images: [
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/fa0136208111617.66e96c55b01f0.png?height=800&width=1200",
        alt: "Living Room with View",
      },
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/0cf05f208111617.66e96c55afa2b.png?height=800&width=1200",
        alt: "Gourmet Kitchen",
      },
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/3f8c87208111617.66e96c55b06e3.png?height=800&width=1200",
        alt: "Master Bedroom",
      },
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/4ef82b208111617.66e96c4c49d7f.png?height=800&width=1200",
        alt: "Outdoor Living Area",
      },
    ],
    relatedProjects: [
      {
        title: "Retail Store Interior Fit-out in Dubai",
        category: "Residential",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/0386fa215885955.67766fe6781a0.png?height=600&width=800",
        slug: "retail-store",
      },
      {
        title: "Modern Apartment",
        category: "Residential",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/330d07217045273.6789faf99518a.png?height=600&width=800",
        slug: "apartment-interior",
      },
    ],
  },
  "retail-store": {
    title: "Retail Store Interior Fit-out and Design Services in Dubai",
    category: "Commercial",
    location: "International City, Dubai",
    year: "Jan 2023",
    client: "March 2023",
    description:
      "At BMI Interior, we specialize in crafting tailored retail environments that amplify your brand identity, captivate your customers, and maximize your business potential across Dubai and the wider UAE. Whether you’re launching a high-end fashion brand, a cozy tea shop, or a dynamic shopping mall outlet, we design spaces that are both visually stunning and functionally perfect.",
    challenge:
      "Our expertise covers a wide spectrum of retail businesses including garment stores, cosmetic shops, grocery stores, medical stores, money exchanges, travel and tourist centers, small gyms, salons, typing centers, and customer care offices. We also partner with big brands and local entrepreneurs, delivering impeccable designs for brand chains, local shops, and commercial outlets.",
    solution: (
    <div>
      <p className="text-gray-300 mb-4">
      At the heart of our design philosophy lies the commitment to create inviting, welcoming, and inspirational spaces. From customized product displays and branded shelves to strategic customer pathways and lighting layouts, every element is crafted to strengthen brand value and encourage higher customer engagement.
      </p>
      <p className="text-gray-300 mb-4">
      Whether you’re setting up a luxury cosmetics boutique, an elegant hairdressing salon, a modern fashion outlet, or a stylish café, our full-service fit-out solutions offer end-to-end support — from conceptualization to final handover. Our team ensures clean execution, timely delivery, and a flawless finish that reflects your brand’s vision and values.
      </p>
    </div>
    ),
    features: [
      "Modular display systems for flexibility",
      "Interactive digital elements for product information",
      "Comfortable fitting rooms with adjustable lighting",
      "Sustainable materials and energy-efficient systems",
      "Dedicated event space for community engagement",
      "Efficient point-of-sale and inventory management",
    ],
    images: [
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/0386fa215885955.67766fe6781a0.png?height=800&width=1200",
        alt: "Store Entrance",
      },
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/2acc91215885955.67766fe678751.png?height=800&width=1200",
        alt: "Main Display Area",
      },
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/336a3c215885955.67766fe6777f0.png?height=800&width=1200",
        alt: "Fitting Rooms",
      },
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/208dbf215885955.67766fe678d06.png?height=800&width=1200",
        alt: "Checkout Counter",
      },
    ],
    relatedProjects: [
      {
        title: "Office Interior Fit out Expert in Dubai",
        category: "Residential",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/9d9f14225600833.68206a3792293.jpg?height=600&width=800",
        slug: "office-fitout-dubai",
      },
      {
        title: "shopping-malls",
        category: "Residential",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/999207206936899.66d568e26e400.png?height=600&width=800",
        slug: "shopping-malls",
      },
    ],
  },
  restaurant: {
    title: "Bespoke Restaurant Interiors",
    category: "Hospitality",
    location: "Dubai",
    year: "2024",
    client: "Chainak Cafe",
    description:
      "Every dining experience begins the moment a guest steps inside. At our design studio in Dubai, we specialize in delivering transformative restaurant interior design solutions across the UAE. Whether you operate a fine-dining restaurant, bustling café, artisanal coffee shop, or a fast-growing pizza chain, we craft environments that not only elevate your brand but also boost customer satisfaction and retention.",
    challenge:
      "Dubai’s dynamic dining culture demands more than aesthetics—it requires innovation. From indoor greenery to statement ceilings, open kitchens to artisan wall finishes, every element we select serves a purpose. Your hospitality space in Dubai or across the UAE should create not just a visit, but an experience that guests remember—and return to.",
    solution:
      "Whether you're launching a modern café in Business Bay, a pizza outlet in Sharjah, or a luxurious waterfront restaurant in Dubai Marina, we’re here to bring your culinary vision to life with precision, creativity, and commercial insight.",
    features: [
      "Bar and lounge area for casual dining",
      "Main dining room with flexible seating arrangements",
      "Private dining room for events and special occasions",
      "Open kitchen concept with chef's counter",
      "Custom lighting design to create ambiance",
      "Acoustic treatments for comfortable sound levels",
    ],
    images: [
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/72c2b9215493803.676d2a6620935.png?height=800&width=1200",
        alt: "Main Dining Area",
      },
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/4e714e215493803.676d2a6621889.png?height=800&width=1200",
        alt: "Bar and Lounge",
      },
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/03d530215493803.676d2a66212db.png?height=800&width=1200",
        alt: "Private Dining Room",
      },
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/8c6d01214913103.6761168194baf.png?height=800&width=1200",
        alt: "Open Kitchen",
      },
    ],
    relatedProjects: [
      {
        title: "Luxury Salon Fit-out Service in Dubai",
        category: "Hospitality",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/424a56214514771.6759704d61629.png?height=600&width=800",
        slug: "salon",
      },
      {
        title: "Shopping Mall Interior Architecture Design in Dubai",
        category: "Hospitality",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/a076f9225869163.6824a5dfa5a04.jpg?height=600&width=800",
        slug: "shopping-malls",
      },
    ],
  },
  "apartment-interior": {
    title: "Modern Apartment Interior in Dubai",
    category: "Residential",
    location: "Marina, Dubai",
    year: "Nov 2023",
    client: "Feb 2024",
    description:
      "Our residential apartment interior project in Dubai demonstrates BMI’s strength in delivering elegant and functional living spaces through expert interior design and fit-out services in Dubai. From spatial transformation to smart home features, the apartment was crafted to offer style, comfort, and intelligent living—all within a compact urban layout.",
    challenge:
      "Our team at Broad Mind Interior (BMI) followed a comprehensive and detail-driven approach to deliver high-end results for this project. With a focus on residential apartment interior design services in Dubai, we emphasized smart space planning, seamless functionality, and aesthetic harmony. By integrating custom joinery works, elegant ceiling designs, and tailored lighting solutions, we transformed the space into a modern, comfortable, and luxurious environment. Every design decision was made to optimize usability, improve flow, and reflect the client’s lifestyle—aligned with our expertise in luxury apartment fit-out solutions across the UAE.",
    solution:
      "BMI’s team carried out a full interior design and renovation service, including technical detailing and smart home integration. Every detail—from the choice of flooring materials to ceiling and lighting schemes—was curated to reflect a modern aesthetic. Custom-built furniture, paint finishes, and architectural enhancements turned the apartment into a personalized sanctuary.",
    features: [
      "Sleek living and dining area with neutral tones and ambient lighting",
      "Smart kitchen with high-gloss cabinetry and built-in appliances",
      "Custom-built bedroom wardrobes with soft-close systems",
      "Modern bathrooms with designer tiles, mirrors, and vanity units",
      "Home office corner integrated with natural daylight and ergonomic furniture",
      "Concealed AC ducting and intelligent thermostat systems",
    ],
    images: [
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/330d07217045273.6789faf99518a.png?height=800&width=1200",
        alt: "Living Area",
      },
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/23688b217045273.6789faf998c2f.png?height=800&width=1200",
        alt: "Industrial Kitchen",
      },
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/3df72d217045273.6789faf992df8.png?height=800&width=1200",
        alt: "Master Bedroom",
      },
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/17e088217045273.6789faf9974df.png?height=800&width=1200",
        alt: "Home Office",
      },
    ],
    relatedProjects: [
      {
        title: "Office Interior Fit out Expert in Dubai",
        category: "Residential",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/9d9f14225600833.68206a3792293.jpg?height=600&width=800",
        slug: "office-fitout-dubai",
      },
      {
        title: "shopping-malls",
        category: "Residential",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/999207206936899.66d568e26e400.png?height=600&width=800",
        slug: "shopping-malls",
      },
    ],
  },
  "shopping-malls": {
    title: "Shopping Mall Interior Architecture Design in Dubai",
    category: "Commercial",
    location: "Deira, Dubai",
    year: "2022",
    client: "2023",
    description:
      "We proudly offer complete shopping mall interior design and architecture services across Dubai and the UAE. Our expertise covers retail stores, branded outlets, fashion boutiques, luxury displays, electronic shops, supermarkets, and hypermarkets. Whether it’s a new mall development, renovation, or complete fit-out, we deliver iconic designs that elevate customer experiences.",
    challenge:
      "We design and build interiors for some of the most prominent malls in Dubai, including Dubai Mall, Mall of the Emirates, City Centre Deira, and Ibn Battuta Mall. Our services cover everything from walkways, flooring, ceiling design, and centralized AC unit installation to glass and woodwork, paint schemes, and luxury display setups. Whether you're planning a new mall or renovating an existing shopping center, our team ensures seamless project execution with world-class quality standards.",
    solution:
      "Our retail design expertise spans fashion outlets, garment stores, boutiques, high-profile brand displays, and supermarkets in Dubai and beyond. We pay close attention to customer flow, creating spacious walkways, smart display areas, and high-visibility store fronts that enhance shopping experiences. In malls like Dubai Festival City Mall, BurJuman Centre, and Dubai Hills Mall, our interior designs have helped businesses attract more visitors and boost retail sales through visual appeal and smart layouts.",
    features: [
      "Flexible interior layouts to accommodate diverse retail formats",
      "Elegant lighting schemes and decorative ceiling treatments",
      "Durable flooring finishes for high-traffic public zones",
      "Clearly defined navigation and circulation areas",
      "Dedicated areas for leisure, dining, and support facilities",
      "Smart building systems, air conditioning, and MEP integration",
    ],
    images: [
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/a076f9225869163.6824a5dfa5a04.jpg?height=800&width=1200",
        alt: "Open Workspace",
      },
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/656dbc225869163.6824a5df9ffd4.jpg?height=800&width=1200",
        alt: "Collaboration Area",
      },
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/039e2a225869163.6824a5dfa1b31.jpg?height=800&width=1200",
        alt: "Meeting Room",
      },
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/source/0159c0225869163.6824a5dfa365c.jpg?height=800&width=1200",
        alt: "Break Area",
      },
    ],
    relatedProjects: [
      {
        title: "Retail Store Interior Fit-out in Dubai",
        category: "Residential",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/0386fa215885955.67766fe6781a0.png?height=600&width=800",
        slug: "retail-store",
      },
      {
        title: "Modern Apartment",
        category: "Residential",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/330d07217045273.6789faf99518a.png?height=600&width=800",
        slug: "apartment-interior",
      },
    ],
  },
  "salon": {
    title: "Luxury Salon Fit-out Service in Dubai",
    category: "Commercial",
    location: "Ras al Khor, Dubai UAE",
    year: "Dec 2022",
    client: "Apr 2023",
    description:
      "BMI Interior offers luxury salon fit-out services in Dubai and across the UAE, delivering high-end, customized interior solutions tailored for beauty salons, spas, and wellness centers. Our designs are crafted to elevate brand identity while enhancing client comfort, ambiance, and operational functionality. From concept to completion, our expertise in commercial interior design and technical fit-out ensures elegant and efficient results.",
    challenge:
      "We deliver intelligent design solutions that cater to various beauty and wellness services. Through the use of natural materials, subtle lighting, harmonious color palettes, and ceiling and flooring enhancements, we create immersive spaces that invite relaxation and elevate the customer journey. Layouts are tailored for smooth transitions between zones—ensuring privacy, functionality, and luxury in equal measure.",
    solution:
      "We created a design that engages all the senses, with natural materials, soothing colors, subtle aromatherapy, acoustic treatments, and thoughtful lighting. The layout provides a logical flow from reception through treatment areas, with transitions that gradually increase privacy and relaxation.",
    features: [
      "Elegant reception and product display area with bespoke joinery",
      "Dedicated relaxation lounge and client waiting area",
      "PPrivate treatment rooms with ambient lighting and smart controls",
      "Hydrotherapy zones, manicure-pedicure stations, and wash areas",
      "Integrated biophilic design elements and soft ambient acoustics",
      "Smart HVAC, lighting automation, and custom ceiling designs",
    ],
    images: [
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/424a56214514771.6759704d61629.png?height=800&width=1200",
        alt: "Reception Area",
      },
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/d8952c214514771.6759704d62800.png?height=800&width=1200",
        alt: "Relaxation Lounge",
      },
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/279186214514771.6759704d61cc4.png?height=800&width=1200",
        alt: "Treatment Room",
      },
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/311464214514771.6759704d6233f.png?height=800&width=1200",
        alt: "Hydrotherapy Area",
      },
    ],
    relatedProjects: [
      {
        title: "Luxury Salon Fit-out Service in Dubai",
        category: "Hospitality",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/424a56214514771.6759704d61629.png?height=600&width=800",
        slug: "salon",
      },
      {
        title: "Shopping Mall Interior Architecture Design in Dubai",
        category: "Hospitality",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/a076f9225869163.6824a5dfa5a04.jpg?height=600&width=800",
        slug: "shopping-malls",
      },
    ],
  },
}

export default function ProjectDetailPage({ params }) {
  const { slug } = params
  const [currentImage, setCurrentImage] = useState(0)
  const [project, setProject] = useState(null)

  useEffect(() => {
    // Get project data based on slug
    if (projectsData[slug]) {
      setProject(projectsData[slug])
    } else {
      // Fallback to first project if slug not found
      setProject(projectsData["home-renovation-dubai"])
    }
  }, [slug])

  if (!project) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
  }

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[70vh]">
        <Image src={project.images[0].src || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <div className="max-w-3xl animate-fade-in">
              <Link href="/projects" className="inline-flex items-center text-primary mb-4 hover:underline">
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to Projects
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{project.title}</h1>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">{project.category}</span>
                <span className="bg-dark-400 text-gray-300 px-3 py-1 rounded-full text-sm">{project.location}</span>
                <span className="bg-dark-400 text-gray-300 px-3 py-1 rounded-full text-sm">{project.year}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Design Objective</h2>
              <p className="text-gray-300 mb-8 text-lg">{project.description}</p>

              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
                <p className="text-gray-300 mb-8">{project.challenge}</p>

                <h3 className="text-2xl font-bold mb-4">Design Solution</h3>
                <p className="text-gray-300 mb-8">{project.solution}</p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="animate-fade-in">
              <div className="bg-dark-300 p-6 rounded-lg border border-gray-800 sticky top-24">
                <h3 className="text-xl font-bold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm text-gray-400">Category</h4>
                    <p>{project.category}</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">Location</h4>
                    <p>{project.location}</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">Start Year</h4>
                    <p>{project.year}</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">Complete Year</h4>
                    <p>{project.client}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Interested in a similar project?</h3>
                  <Button className="w-full bg-primary text-black hover:bg-primary/80 hover-glow" asChild>
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Project Gallery</h2>

          <div className="relative">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg gold-border animate-fade-in">
              <Image
                src={project.images[currentImage].src || "/placeholder.svg"}
                alt={project.images[currentImage].alt}
                fill
                className="object-cover"
              />
            </div>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-primary text-white p-3 rounded-full transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-primary text-white p-3 rounded-full transition-colors"
            >
              <ArrowRight className="h-6 w-6" />
            </button>

            <div className="flex justify-center mt-6 space-x-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImage ? "bg-primary" : "bg-gray-600 hover:bg-gray-400"
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mt-8">
            {project.images.map((image, index) => (
              <div
                key={index}
                className={`aspect-[4/3] relative rounded-md overflow-hidden cursor-pointer transition-all ${
                  currentImage === index ? "ring-2 ring-primary" : "opacity-70 hover:opacity-100"
                }`}
                onClick={() => setCurrentImage(index)}
              >
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Related Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.relatedProjects.map((relatedProject, index) => (
              <Link
                key={index}
                href={`/projects/${relatedProject.slug}`}
                className="project-card rounded-lg overflow-hidden animate-fade-in"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={relatedProject.image || "/placeholder.svg"}
                    alt={relatedProject.title}
                    fill
                    className="object-cover project-image"
                  />
                  <div className="absolute inset-0 project-overlay flex flex-col justify-end p-6">
                    <span className="text-primary text-sm mb-2">{relatedProject.category}</span>
                    <h3 className="text-xl font-bold">{relatedProject.title}</h3>
                    <div className="flex items-center mt-3">
                      <span className="text-sm text-white/80">View Project</span>
                      <ArrowRight className="ml-2 h-4 w-4 text-primary" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-300">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free consultation and let's bring your vision to life.
            </p>
            <Button className="bg-primary text-black hover:bg-primary/80 hover-glow text-lg px-6 py-6" asChild>
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

