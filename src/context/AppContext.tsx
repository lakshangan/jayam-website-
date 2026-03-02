import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
type Language = 'en' | 'ta';

interface AppContextType {
    theme: Theme;
    language: Language;
    toggleTheme: () => void;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const saved = localStorage.getItem('theme');
        return (saved as Theme) || 'dark';
    });

    const [language, setLanguageState] = useState<Language>(() => {
        const saved = localStorage.getItem('language');
        return (saved as Language) || 'en';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
    };

    const translations: Record<Language, Record<string, string>> = {
        en: {
            'nav.home': 'Home',
            'nav.about': 'About Us',
            'nav.programs': 'Courses',
            'nav.contact': 'Contact',
            'nav.admission': 'Join Now',
            'hero.title': 'Start Your Creative Journey Today',
            'hero.subtitle': 'Learn professional tailoring and design. Turn your passion into a successful business.',
            'hero.cta': 'Explore Courses',
            'hero.subtext.small': 'Your future starts here',
            'hero.subtext.main': 'Become a skilled tailor and confident designer.',
            'common.scroll': 'Scroll Down',
            'common.learnMore': 'Know More',
            'stats.alumni': 'Happy Students',
            'stats.legacy': 'Years of Trust',
            'stats.nsdc': 'Govt. Approved',
            'stats.partners': 'Industry Partners',
            'story.origin.subtitle': 'Our Roots',
            'story.origin.title': 'WHERE WE BEGAN',
            'story.origin.content': 'Since 1995, we have been teaching the true art of tailoring. What started small is now a trusted name in fashion education.',
            'story.mechanism.subtitle': 'How You Learn',
            'story.mechanism.title': '100% PRACTICAL',
            'story.mechanism.content': 'No boring lectures. You will learn by actually cutting, stitching, and creating real clothes from day one.',
            'story.craft.subtitle': 'The Secret',
            'story.craft.title': 'THE PERFECT FIT',
            'story.craft.content': 'We teach you the magic of making clothes that fit beautifully on any body type. That is what keeps customers coming back.',
            'story.legacy.subtitle': 'Your Goal',
            'story.legacy.title': 'START YOUR OWN SHOP',
            'story.legacy.content': 'Our biggest success is when you open your own boutique. We give you the skills and confidence to run a profitable business.',
            'story.conclusion.title': 'READY TO START?',
            'story.conclusion.subtitle': 'Join our community. Let us help you turn your creativity into a real career.',
            'story.conclusion.cta': 'See Course Details',
            'about.title.part1': 'Welcome to',
            'about.title.highlight': 'Jayam',
            'about.title.part2': 'Institute',
            'about.description': 'For over 25 years, we have kept things simple: we teach you how to sew like a professional. Whether you want to design for yourself or start a business, we guide you step-by-step.',
            'about.cta': 'Read Our Full Story',
            'programs.title.part1': 'Explore Our',
            'programs.title.highlight': 'Courses',
            'programs.cta': 'View All Options',
            'admission.badge': 'Admissions Open',
            'admission.title': 'Ready to Learn?',
            'admission.description': 'Master the skills you need to be financially independent. Simple teaching, practical classes, and a government certificate at the end.',
            'admission.cta': 'Apply Today',
            'admission.practical': 'Hands-On Training',
            'admission.job': 'Business Support',
            'admission.flexibility': 'Flexible Timings',
            'admission.benefit1.title': 'Learn from the Best',
            'admission.benefit1.desc': 'Our friendly teachers have years of real-world experience. They make learning easy.',
            'admission.benefit2.title': 'Be Your Own Boss',
            'admission.benefit2.desc': 'We do not just teach tailoring; we teach you how to start and run your own successful shop.',
            'admission.benefit3.title': 'Valuable Certificate',
            'admission.benefit3.desc': 'Graduate with an NSDC-approved government certificate that adds value to your profile.',
            'contact.title': 'Let Us Talk',
            'contact.subtitle': 'Have questions about classes or fees? Message us, and we will help you out.',
            'footer.tagline': 'Empowering students with real fashion skills since 1995.',
            'footer.quickLinks': 'Quick Links',
            'footer.programs': 'Our Classes',
            'footer.newsletter': 'Stay Updated',
        },
        ta: {
            'nav.home': 'முகப்பு',
            'nav.about': 'எங்களைப் பற்றி',
            'nav.programs': 'பயிற்சிகள்',
            'nav.contact': 'தொடர்பு கொள்ள',
            'nav.admission': 'இப்பொழுதே சேரவும்',
            'hero.title': 'உங்கள் சொந்த தொழிலை இன்றே தொடங்குங்கள்',
            'hero.subtitle': 'சிறந்த தையல் மற்றும் வடிவமைப்பைக் கற்று, உங்கள் திறமையை வெற்றிகரமான தொழிலாக மாற்றுங்கள்.',
            'hero.cta': 'பயிற்சிகளைப் பார்க்க',
            'hero.subtext.small': 'உங்கள் பயணம் இங்கிருந்து தொடங்குகிறது',
            'hero.subtext.main': 'ஒரு சிறந்த டெய்லராகவும், நம்பிக்கையான டிசைனராகவும் மாறுங்கள்.',
            'common.scroll': 'கீழே பார்க்க',
            'common.learnMore': 'மேலும் தெரிந்துகொள்ள',
            'stats.alumni': 'மகிழ்ச்சியான மாணவர்கள்',
            'stats.legacy': 'ஆண்டுகள் நம்பிக்கை',
            'stats.nsdc': 'அரசு அங்கீகாரம்',
            'stats.partners': 'கூட்டாளர்கள்',
            'story.origin.subtitle': 'எங்கள் தொடக்கம்',
            'story.origin.title': 'நாங்கள் உருவான விதம்',
            'story.origin.content': '1995 முதல், உண்மையான தையல் கலையை கற்பித்து வருகிறோம். சிறியதாக தொடங்கிய நாங்கள் இன்று ஒரு நம்பிக்கைக்குரிய கல்வி நிறுவனமாக வளர்ந்துள்ளோம்.',
            'story.mechanism.subtitle': 'கற்கும் முறை',
            'story.mechanism.title': 'முழுக்க முழுக்க செய்முறை பயற்சி',
            'story.mechanism.content': 'வெறும் தியரி வகுப்புகள் அல்ல. முதல் நாளிலிருந்தே துணிகளை வெட்டி, தைத்து, நிஜமான ஆடைகளை உருவாக்கி நீங்களே கற்றுக்கொள்வீர்கள்.',
            'story.craft.subtitle': 'ரகசியம்',
            'story.craft.title': 'சரியான அளவு (Perfect Fit)',
            'story.craft.content': 'எந்த உடலமைப்புக்கும் சரியாகப் பொருந்தும் சிறப்பான ஆடைகளை உருவாக்கும் கலையை நாங்கள் கற்றுத்தருகிறோம். இதுவே வாடிக்கையாளர்களைத் திரும்ப வரச் செய்யும்.',
            'story.legacy.subtitle': 'உங்கள் இலக்கு',
            'story.legacy.title': 'சொந்தமாக கடை தொடங்குங்கள்',
            'story.legacy.content': 'நீங்கள் சொந்தமாக தையல் கடை (Boutique) தொடங்குவதே எங்கள் மிகப்பெரிய வெற்றி. அதற்கான முழு பயிற்சியும் தைரியமும் உங்களுக்கு வழங்கப்படும்.',
            'story.conclusion.title': 'தயாரா?',
            'story.conclusion.subtitle': 'எங்களுடன் இணைந்து உங்கள் ஆர்வத்தை ஒரு நிரந்தர வருமானம் தரும் தொழிலாக மாற்றுங்கள்.',
            'story.conclusion.cta': 'பயிற்சி விவரங்கள்',
            'about.title.part1': 'வரவேற்கிறோம்',
            'about.title.highlight': 'ஜெயம்',
            'about.title.part2': 'இன்ஸ்டிடியூட்',
            'about.description': '25 ஆண்டுகளுக்கும் மேலாக, மிக எளிய முறையில், ஒரு நிபுணரைப் போல எப்படி தைப்பது என்பதை மட்டும்தான் கற்றுத்தருகிறோம். உங்கள் ஆசைகளை நிஜமாக்க படிப்படியாக வழிகாட்டுகிறோம்.',
            'about.cta': 'முழு விவரம் அறிய',
            'programs.title.part1': 'எங்கள்',
            'programs.title.highlight': 'பயிற்சிகள்',
            'programs.cta': 'அனைத்து வகுப்புகள்',
            'admission.badge': 'சேர்க்கை நடைபெறுகிறது',
            'admission.title': 'பயில தயாரா?',
            'admission.description': 'சுயதொழில் செய்து சொந்தக்காலில் நிற்க தேவையான அனைத்து திறன்களையும் கற்றுக்கொள்ளுங்கள். எளிய பயிற்சி மற்றும் அரசு சான்றிதழ்.',
            'admission.cta': 'இன்றே சேருங்கள்',
            'admission.practical': 'நேரடி செய்முறை பயிற்சி',
            'admission.job': 'தொழில் தொடங்க உதவி',
            'admission.flexibility': 'உங்களுக்கு ஏற்ற நேரம்',
            'admission.benefit1.title': 'சிறந்த ஆசிரியர்கள்',
            'admission.benefit1.desc': 'நீண்ட அனுபவமிக்க, அன்பான ஆசிரியர்கள் உங்களுக்கு மிக எளிமையாக கற்றுத்தருவார்கள்.',
            'admission.benefit2.title': 'நீங்களே முதலாளி',
            'admission.benefit2.desc': 'நாங்கள் தையல் மட்டும் கற்றுத்தருவதில்லை; சொந்தமாக வெற்றிகரமாக ஒரு கடையை எப்படி நடத்துவது என்பதையும் கற்றுத்தருகிறோம்.',
            'admission.benefit3.title': 'மதிப்புமிக்க சான்றிதழ்',
            'admission.benefit3.desc': 'பயிற்சி முடிந்ததும் NSDC அங்கீகரிக்கப்பட்ட அரசு சான்றிதழ் உங்களுக்கு வழங்கப்படும்.',
            'contact.title': 'தொடர்பு கொள்ள',
            'contact.subtitle': 'பயிற்சி அல்லது கட்டணம் பற்றி ஏதேனும் சந்தேகம் உள்ளதா? எங்களுக்கு மெசேஜ் செய்யுங்கள், நாங்கள் உங்களுக்கு உதவுகிறோம்.',
            'footer.tagline': '1995 முதல் உண்மையான ஃபேஷன் நிபுணர்களை உருவாக்குகிறோம்.',
            'footer.quickLinks': 'முக்கிய இணைப்புகள்',
            'footer.programs': 'எங்கள் வகுப்புகள்',
            'footer.newsletter': 'புதிய தகவல்கள்',
        },
    };

    const t = (key: string) => {
        return translations[language][key] || key;
    };

    return (
        <AppContext.Provider value={{ theme, language, toggleTheme, setLanguage, t }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
