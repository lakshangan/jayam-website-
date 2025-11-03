import { useEffect, useRef } from "react"
import { CheckCircle, Star, Award } from "lucide-react"

const AboutInstitute = () => {
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

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
    itemRefs.current.forEach((ref) => ref && observer.observe(ref))

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current)
      if (contentRef.current) observer.unobserve(contentRef.current)
      itemRefs.current.forEach((ref) => ref && observer.unobserve(ref))
    }
  }, [])

  return (
    <section id="why-choose-us" className="relative overflow-hidden py-12 sm:py-16 lg:py-24">
      {/* Background with gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f9f6ff] to-[#e8d7ff] -z-10"></div>
      <div className="absolute top-0 right-0 w-2/3 sm:w-1/2 h-1/2 bg-[#46256c]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 sm:w-1/3 h-1/3 bg-[#ecd74a]/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center px-3 sm:px-4 py-1.5 bg-[#46256c]/10 text-[#46256c] rounded-full text-xs sm:text-sm font-medium mb-4">
            <Star className="inline-block w-4 h-4 mr-2 text-[#ecd74a]" /> Why Choose Us
          </span>
          <h2
            ref={(el) => (itemRefs.current[0] = el as HTMLDivElement)}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#46256c] mb-4 font-display opacity-0 translate-y-4 transition-all duration-700 ease-out px-2 sm:px-4"
          >
            Why Choose Jayam Institute?
          </h2>
          <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-[#ecd74a] to-[#ffe195] mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center max-w-7xl mx-auto">
          {/* Image Section */}
          <div
            ref={imageRef}
            className="order-2 lg:order-1 opacity-0 -translate-x-8 transition-all duration-1000 ease-out group"
          >
            <div className="relative flex justify-center">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#ecd74a]/30 to-[#46256c]/30 rounded-2xl blur-lg transform group-hover:scale-105 transition-all duration-700"></div>
              <img
                src="/lovable-uploads/edbba000-eab6-4e02-9a4a-a593687c6004.png"
                alt="Jayam Institute"
                className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg rounded-2xl shadow-xl border-4 border-white bg-white p-3 sm:p-5 transition-all duration-700 transform group-hover:scale-[1.03]"
              />
              <div className="absolute -top-5 sm:-top-6 -right-5 sm:-right-8 bg-gradient-to-r from-[#ecd74a] to-[#ffe195] rounded-full p-2 sm:p-3 shadow-lg z-20 opacity-90">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#46256c]" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div
            ref={contentRef}
            className="order-1 lg:order-2 opacity-0 translate-x-8 transition-all duration-1000 ease-out"
          >
            <div className="space-y-5 sm:space-y-6 md:space-y-8">
              {[
                {
                  title: "Industry-Recognized Certification",
                  description:
                    "Our courses are certified by the National Skill Development Corporation (NSDC), ensuring your qualifications are recognized nationwide.",
                },
                {
                  title: "Expert Faculty",
                  description:
                    "Learn from experienced professionals with expertise in fashion design, tailoring, and beauty care.",
                },
                {
                  title: "Hands-On Training",
                  description:
                    "We emphasize practical learning — 70% of the curriculum is dedicated to real-world projects and skill-based applications.",
                },
                {
                  title: "Placement Assistance",
                  description:
                    "We maintain strong industry connections to help graduates secure opportunities in fashion houses, boutiques, and design studios.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  ref={(el) => (itemRefs.current[index + 1] = el)}
                  className="group relative bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 opacity-0 translate-y-4 border border-white/50 hover:-translate-y-1"
                  style={{ transitionDelay: `${index * 150 + 300}ms` }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ecd74a]/30 to-[#46256c]/30 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur"></div>
                  <div className="flex items-start gap-3 sm:gap-4 relative z-10">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#7c43a8] group-hover:text-[#46256c] transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#7c43a8] mb-2 group-hover:text-[#46256c] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutInstitute