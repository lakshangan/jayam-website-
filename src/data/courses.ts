
export const courseGroups = [
    {
        title: "Diploma Programs",
        subtitle: "Professional Certifications",
        courses: [
            {
                id: "commercial-master-designer",
                name: "Commercial Master Designer",
                description: "Launch your independent fashion brand with our comprehensive business-focused curriculum.",
                duration: "1 Year",
                certification: "Advanced",
                highlight: "Entrepreneurship",
                image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                modules: [
                    "Advanced Couture Pattern Drafting",
                    "Fashion Business & Marketing",
                    "Digital Design Portfolio",
                    "Commercial Apparel Production",
                    "Luxury Brand Positioning"
                ],
                details: "Covers the full spectrum from sketch to market launch, focusing on commercial viability."
            },
            {
                id: "diploma-fashion-designing",
                name: "Diploma in Fashion Designing",
                description: "Master textile science, trend forecasting, and technical design pillars.",
                duration: "1 Year",
                certification: "Technical",
                highlight: "Technical Mastery",
                image: "https://images.unsplash.com/photo-1537832816519-689ad163238b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                modules: [
                    "Textile & Fabric Science",
                    "Basic & Advanced Sewing",
                    "Trend Analysis & Forecasting",
                    "Garment Construction",
                    "Illustrative Design Techniques"
                ],
                details: "An intensive program transforming creative passion into industry-standard technical precision."
            },
            {
                id: "professional-tailoring",
                name: "Professional Tailoring",
                description: "Learn heritage techniques for bespoke men's and women's couture.",
                duration: "1 Year",
                certification: "Expert",
                highlight: "Bespoke Expert",
                image: "https://images.unsplash.com/photo-1593030942428-a5451dca4b42?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                modules: [
                    "Bespoke Menswear Tailoring",
                    "Intricate Women's Couture",
                    "Alteration & Fitting Mastery",
                    "Pattern Manipulation",
                    "Industrial Machine Handling"
                ],
                details: "Focuses on garment architecture for 100% precision in fitting and construction."
            }
        ]
    },
    {
        title: "Specialized Certifications",
        subtitle: "Focus Skill Modules",
        courses: [
            {
                id: "ethnic-wear-designing",
                name: "Ethnic Wear Designing",
                description: "Specialized training in Indian traditional wear and bridal bridal couture.",
                duration: "6 Months",
                certification: "Specialized",
                highlight: "Cultural Couture",
                image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                modules: [
                    "Bridal Wear Architecture",
                    "Embroidery & Surface Design",
                    "Traditional Draping Arts",
                    "Modernizing Ethnic Patterns"
                ],
                details: "Blend centuries-old craftsmanship with modern design sensibilities for today's brides."
            },
            {
                id: "advanced-beautician",
                name: "Advanced Beautician",
                description: "Professional training in bridal makeup and luxury salon management.",
                duration: "6 Months",
                certification: "Professional",
                highlight: "Salon Ready",
                image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                modules: [
                    "Advanced Skin Therapy",
                    "HD & Airbrush Bridal Makeup",
                    "Artistic Hair Styling",
                    "Aesthetics & Hygiene Standards"
                ],
                details: "A holistic approach preparing students for the competitive luxury grooming industry."
            }
        ]
    },
];

export const allCourses = courseGroups.flatMap(group => group.courses);
