import { useEffect, useRef } from "react"
import { GraduationCap, Users, Heart, Award, Sparkles } from "lucide-react"

const AboutJayam = () => {
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (imageRef.current) observer.observe(imageRef.current)
    if (contentRef.current) observer.observe(contentRef.current)
    textRefs.current.forEach((ref) => ref && observer.observe(ref))

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current)
      if (contentRef.current) observer.unobserve(contentRef.current)
      textRefs.current.forEach((ref) => ref && observer.unobserve(ref))
    }
  }, [])

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f6f0ff] via-[#f3ebff] to-[#faf5ff] -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-20 -right-20 w-56 h-56 sm:w-64 sm:h-64 bg-[#ecd74a]/10 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute top-1/3 -left-20 w-64 h-64 sm:w-72 sm:h-72 bg-[#46256c]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 sm:w-96 sm:h-96 bg-[#ecd74a]/10 rounded-full blur-3xl animate-pulse-soft"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center justify-center px-3 sm:px-4 py-1.5 rounded-full bg-[#46256c]/10 text-[#46256c] text-xs sm:text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 mr-2" /> Our Story
          </span>
          <h2
            ref={(el) => (textRefs.current[0] = el)}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#46256c] mb-4 md:mb-6 font-display opacity-0 translate-y-4 transition-all duration-700 ease-out"
          >
            About Jayam Institute
          </h2>
          <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-[#ecd74a] to-[#ffe195] mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-16 items-center max-w-7xl mx-auto">
          {/* Image */}
          <div
            ref={imageRef}
            className="lg:col-span-5 order-2 lg:order-1 opacity-0 -translate-x-8 transition-all duration-1000 ease-out flex justify-center lg:justify-start"
          >
            <div className="relative group w-full max-w-sm sm:max-w-md md:max-w-lg">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#ecd74a] to-[#46256c] rounded-xl opacity-30 blur-sm group-hover:opacity-70 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ecd74a]/20 to-[#46256c]/20 rounded-xl blur-lg transform group-hover:scale-105 transition-all duration-500"></div>
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img
                  src="/lovable-uploads/f12752c7-a9cd-4fe8-a9b1-95e2edd3052e.png"
                  alt="Founder"
                  className="rounded-xl w-full object-cover aspect-[4/5] transition-all duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute top-3 left-3 bg-gradient-to-r from-[#ecd74a] to-[#ffe195] rounded-full p-2 sm:p-3 shadow-lg z-20 transform opacity-0 group-hover:opacity-100 group-hover:-translate-x-0 group-hover:-translate-y-0 transition-all duration-500">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#46256c]" />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div
            ref={contentRef}
            className="lg:col-span-7 order-1 lg:order-2 opacity-0 translate-x-8 transition-all duration-1000 ease-out text-left"
          >
            <div className="prose max-w-none">
              <h3
                ref={(el) => (textRefs.current[1] = el)}
                className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#46256c] to-[#7c43a8] bg-clip-text text-transparent mb-4 sm:mb-6"
              >
                Our Legacy of Excellence
              </h3>

              <p
                ref={(el) => (textRefs.current[2] = el)}
                className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 sm:mb-6 opacity-0 translate-y-4 transition-all duration-700 delay-100 leading-relaxed"
              >
                Founded with a vision to empower individuals through quality education in fashion and design,
                Jayam Institute has been at the forefront of creative education for over two decades. Our
                institution stands as a beacon of innovation and excellence in the field of fashion and tailoring.
              </p>

              <p
                ref={(el) => (textRefs.current[3] = el)}
                className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-10 opacity-0 translate-y-4 transition-all duration-700 delay-200 leading-relaxed"
              >
                We take pride in our comprehensive curriculum that blends traditional craftsmanship with modern
                design techniques, preparing our students for successful careers in the fashion industry.
              </p>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {[
                  {
                    icon: <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-[#46256c]" />,
                    title: "Expert Faculty",
                    description: "Industry professionals with decades of experience",
                  },
                  {
                    icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 text-[#46256c]" />,
                    title: "5000+ Alumni",
                    description: "Successful graduates across the country",
                  },
                  {
                    icon: <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-[#46256c]" />,
                    title: "Passionate Teaching",
                    description: "Dedicated to student success",
                  },
                ].map((feature, index) => (
                  <div
                    key={feature.title}
                    ref={(el) => (textRefs.current[index + 4] = el)}
                    style={{ transitionDelay: `${index * 150 + 300}ms` }}
                    className="group relative bg-white/70 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-md hover:shadow-2xl transform transition-all duration-500 opacity-0 translate-y-4 hover:-translate-y-1"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ecd74a] to-[#46256c] rounded-xl opacity-0 group-hover:opacity-30 blur-sm transition-all duration-500"></div>
                    <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 relative z-10">
                      <div className="bg-[#f4f0ff] p-3 sm:p-4 rounded-full transform group-hover:scale-110 transition-all duration-500">
                        {feature.icon}
                      </div>
                      <h4 className="font-bold text-[#46256c] text-lg sm:text-xl">{feature.title}</h4>
                      <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutJayam