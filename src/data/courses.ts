export type Language = 'en' | 'ta';

export const getCourseGroups = (lang: Language) => [
    {
        title: lang === 'en' ? "Diploma Programs" : "பட்டயப் படிப்புகள்",
        subtitle: lang === 'en' ? "Professional Certifications" : "தொழில்முறை சான்றிதழ்கள்",
        courses: [
            {
                id: "commercial-master-designer",
                name: lang === 'en' ? "Commercial Master Designer" : "கமர்ஷியல் மாஸ்டர் டிசைனர்",
                description: lang === 'en' ? "Launch your independent fashion brand with our comprehensive business-focused curriculum." : "எங்கள் விரிவான தொழில்முறை பாடத்திட்டத்தின் மூலம் உங்கள் சொந்த ஃபேஷன் பிராண்டைத் தொடங்குங்கள்.",
                duration: lang === 'en' ? "1 Year" : "1 வருடம்",
                certification: lang === 'en' ? "Advanced" : "மேம்பட்ட நிலை",
                highlight: lang === 'en' ? "Entrepreneurship" : "தொழில்முனைவு",
                image: "/lovable-uploads/tamil_fashion_designer.png",
                modules: lang === 'en' ? [
                    "Advanced Couture Pattern Drafting",
                    "Fashion Business & Marketing",
                    "Digital Design Portfolio",
                    "Commercial Apparel Production",
                    "Luxury Brand Positioning"
                ] : [
                    "மேம்பட்ட ஆடை வடிவமைப்பு",
                    "ஃபேஷன் வணிகம் & சந்தைப்படுத்தல்",
                    "டிஜிட்டல் வடிவமைப்பு போர்ட்ஃபோலியோ",
                    "வணிக ஆடை உற்பத்தி",
                    "ஆடம்பர பிராண்ட் நிலைப்படுத்தல்"
                ],
                details: lang === 'en' ? "Covers the full spectrum from sketch to market launch, focusing on commercial viability." : "திட்ட வரைபடம் முதல் சந்தைப்படுத்துதல் வரை வணிக சாத்தியக்கூறுகளை மையமாகக் கொண்டு முழுமையான பயிற்சி."
            },
            {
                id: "diploma-fashion-designing",
                name: lang === 'en' ? "Diploma in Fashion Designing" : "ஃபேஷன் டிசைனிங்கில் டிப்ளோமா",
                description: lang === 'en' ? "Master textile science, trend forecasting, and technical design pillars." : "ஜவுளி அறிவியல், போக்கு முன்கணிப்பு மற்றும் தொழில்நுட்ப வடிவமைப்பு தூண்களில் தேர்ச்சி பெறுங்கள்.",
                duration: lang === 'en' ? "1 Year" : "1 வருடம்",
                certification: lang === 'en' ? "Technical" : "தொழில்நுட்ப நிலை",
                highlight: lang === 'en' ? "Technical Mastery" : "தொழில்நுட்ப தேர்ச்சி",
                image: "/lovable-uploads/tamil_tailoring_class.png",
                modules: lang === 'en' ? [
                    "Textile & Fabric Science",
                    "Basic & Advanced Sewing",
                    "Trend Analysis & Forecasting",
                    "Garment Construction",
                    "Illustrative Design Techniques"
                ] : [
                    "ஜவுளி மற்றும் துணி அறிவியல்",
                    "அடிப்படை மற்றும் மேம்பட்ட தையல்",
                    "போக்கு பகுப்பாய்வு மற்றும் முன்னறிவிப்பு",
                    "ஆடை உருவாக்கம்",
                    "விளக்கப்பட வடிவமைப்பு நுட்பங்கள்"
                ],
                details: lang === 'en' ? "An intensive program transforming creative passion into industry-standard technical precision." : "படைப்பு ஆர்வத்தை தொழில்துறை தரத்திலான தொழில்நுட்ப துல்லியமாக மாற்றும் ஒரு தீவிர திட்டம்."
            },
            {
                id: "professional-tailoring",
                name: lang === 'en' ? "Professional Tailoring" : "தொழில்முறை தையல்",
                description: lang === 'en' ? "Learn heritage techniques for bespoke men's and women's couture." : "ஆண்கள் மற்றும் பெண்களுக்கான சிறப்புத் தையல் பாரம்பரிய நுட்பங்களைக் கற்றுக்கொள்ளுங்கள்.",
                duration: lang === 'en' ? "1 Year" : "1 வருடம்",
                certification: lang === 'en' ? "Expert" : "நிபுணர் நிலை",
                highlight: lang === 'en' ? "Bespoke Expert" : "தனிப்பயன் நிபுணர்",
                image: "/lovable-uploads/tamil_tailor_1.png",
                modules: lang === 'en' ? [
                    "Bespoke Menswear Tailoring",
                    "Intricate Women's Couture",
                    "Alteration & Fitting Mastery",
                    "Pattern Manipulation",
                    "Industrial Machine Handling"
                ] : [
                    "ஆண்களுக்கான பிரத்யேக தையல்",
                    "சிக்கலான பெண்களுக்கான ஆடை வடிவமைப்பு",
                    "மாற்றியமைத்தல் & பொருத்துதல் தேர்ச்சி",
                    "பேட்டர்ன் கையாளுதல்",
                    "தொழில்துறை இயந்திர கையாளுதல்"
                ],
                details: lang === 'en' ? "Focuses on garment architecture for 100% precision in fitting and construction." : "100% துல்லியமான பொருத்தம் மற்றும் வடிவமைப்பிற்காக ஆடை கட்டமைப்பில் கவனம் செலுத்துகிறது."
            }
        ]
    },
    {
        title: lang === 'en' ? "Specialized Certifications" : "சிறப்பு சான்றிதழ்கள்",
        subtitle: lang === 'en' ? "Focus Skill Modules" : "திறன் தொகுதிகள்",
        courses: [
            {
                id: "ethnic-wear-designing",
                name: lang === 'en' ? "Ethnic Wear Designing" : "பாராம்பரிய ஆடை வடிவமைப்பு",
                description: lang === 'en' ? "Specialized training in Indian traditional wear and bridal couture." : "இந்திய பாரம்பரிய உடைகள் மற்றும் மணப்பெண் ஆடைகளில் சிறப்பு பயிற்சி.",
                duration: lang === 'en' ? "6 Months" : "6 மாதங்கள்",
                certification: lang === 'en' ? "Specialized" : "சிறப்பு பயிற்சி",
                highlight: lang === 'en' ? "Cultural Couture" : "கலாச்சார ஆடைகள்",
                image: "/lovable-uploads/tamil_student_1.png",
                modules: lang === 'en' ? [
                    "Bridal Wear Architecture",
                    "Embroidery & Surface Design",
                    "Traditional Draping Arts",
                    "Modernizing Ethnic Patterns"
                ] : [
                    "மணப்பெண் ஆடைகளின் கட்டமைப்பு",
                    "எம்பிராய்டரி மற்றும் மேற்பரப்பு வடிவமைப்பு",
                    "பாரம்பரிய ஆடை அணியும் கலை",
                    "பழங்கால வடிவங்களை நவீனப்படுத்துதல்"
                ],
                details: lang === 'en' ? "Blend centuries-old craftsmanship with modern design sensibilities for today's brides." : "இன்றைய மணப்பெண்களுக்காக நவீன வடிவமைப்பு உணர்வுகளுடன் பல நூற்றாண்டுகள் பழமையான கைவினைத்திறனைக் கலக்கவும்."
            },
            {
                id: "advanced-beautician",
                name: lang === 'en' ? "Advanced Beautician" : "மேம்பட்ட அழகுலை கலைஞர்",
                description: lang === 'en' ? "Professional training in bridal makeup and luxury salon management." : "மணப்பெண் ஒப்பனை மற்றும் ஆடம்பர சலூன் நிர்வாகத்தில் தொழில்முறை பயிற்சி.",
                duration: lang === 'en' ? "6 Months" : "6 மாதங்கள்",
                certification: lang === 'en' ? "Professional" : "தொழில்முறை",
                highlight: lang === 'en' ? "Salon Ready" : "சலூனுக்கு தயார்",
                image: "/lovable-uploads/tamil_student_3.png",
                modules: lang === 'en' ? [
                    "Advanced Skin Therapy",
                    "HD & Airbrush Bridal Makeup",
                    "Artistic Hair Styling",
                    "Aesthetics & Hygiene Standards"
                ] : [
                    "மேம்பட்ட சரும சிகிச்சை",
                    "HD & ஏர்பிரஷ் பிரைடல் மேக்கப்",
                    "கலைநயமிக்க சிகை அலங்காரம்",
                    "அழகியல் மற்றும் சுகாதார தரநிலைகள்"
                ],
                details: lang === 'en' ? "A holistic approach preparing students for the competitive luxury grooming industry." : "போட்டி நிறைந்த ஆடம்பர அழகுசாதனத் துறைக்கு மாணவர்களை தயார்படுத்தும் ஒரு முற்போக்கான அணுகுமுறை."
            }
        ]
    },
];

export const getAllCourses = (lang: Language) => getCourseGroups(lang).flatMap(group => group.courses);
