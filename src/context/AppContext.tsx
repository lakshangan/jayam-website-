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
        return (saved as Theme) || 'light';
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
            'nav.about': 'About',
            'nav.programs': 'Programs',
            'nav.contact': 'Contact',
            'nav.admission': 'Get Admission Info',
            'hero.title': 'Turn Your Fashion Passion Into a Career',
            'hero.subtitle': 'Master the art of design and tailoring at Jayam Institute of Design.',
            'hero.cta': 'Explore Programs',
            'hero.subtext.small': 'Start your career in fashion',
            'hero.subtext.main': 'Master Professional Tailoring & Entrepreneurship.',
            'common.scroll': 'Scroll',
            'common.learnMore': 'Learn More',
            'stats.alumni': 'Successful Alumni',
            'stats.legacy': 'Years of Legacy',
            'stats.nsdc': 'NSDC Approved',
            'stats.partners': 'Industry Partners',
            'story.origin.subtitle': 'The Origin',
            'story.origin.title': 'BORN IN IRON',
            'story.origin.content': 'In the late 19th century, precision was carved from steel. This machine represents the dawn of ready-to-wear fashion.',
            'story.mechanism.subtitle': 'The Mechanism',
            'story.mechanism.title': 'THE HEART BEAT',
            'story.mechanism.content': 'Every rotation of the wheel is a symphony of gears. At Jayam, we teach you to listen to this rhythm before you master the stitch.',
            'story.craft.subtitle': 'The Craft',
            'story.craft.title': 'MASTERING FORM',
            'story.craft.content': "It's not just about joining fabrics. It's about engineering a silhouette that breathes and moves with the human body.",
            'story.legacy.subtitle': 'The Legacy',
            'story.legacy.title': 'ETERNAL STITCH',
            'story.legacy.content': 'From the vintage iron heart to the digital needles of tomorrow, the art of sewing remains the soul of fashion design.',
            'story.conclusion.title': 'START YOUR JOURNEY',
            'story.conclusion.subtitle': 'Join the ranks of master designers at Jayam Fashion Institution.',
            'story.conclusion.cta': 'Explore Courses',
            'about.title.part1': 'Turn Your',
            'about.title.highlight': 'Fashion Passion',
            'about.title.part2': 'into a Successful Career',
            'about.description': "Stop dreaming and start creating. We don't just teach you how to sew—we show you how to build a future. Since 1995, we've helped thousands of students turn their passion into profitable businesses.",
            'about.cta': 'Start Your Journey',
            'programs.title.part1': 'What We',
            'programs.title.highlight': 'Are Doing',
            'programs.cta': 'Explore All Courses',
            'admission.badge': 'Start Learning Today',
            'admission.title': 'Become a Professional Tailor',
            'admission.description': 'Learn the best skills to grow your own successful fashion business. Simple, practical, and certified training.',
            'admission.cta': 'Inquire for Admission',
            'admission.practical': '100% Practical',
            'admission.job': 'Job Assistance',
            'admission.flexibility': 'Batch Flexibility',
            'admission.benefit1.title': 'Expert Mentorship',
            'admission.benefit1.desc': 'Learn directly from Dr. G. Sahayaselvam and a team of industry veterans.',
            'admission.benefit2.title': 'Business Support',
            'admission.benefit2.desc': "We don't just teach skills; we guide you on how to launch your own boutique.",
            'admission.benefit3.title': 'NSDC Certification',
            'admission.benefit3.desc': 'Gain Government-recognized certificates that validate your expertise.',
            'contact.title': 'Get In Touch',
            'contact.subtitle': 'Ready to start your fashion career? Contact us today.',
            'footer.tagline': 'Empowering future fashion leaders since 1995.',
            'footer.quickLinks': 'Quick Links',
            'footer.programs': 'Programs',
            'footer.newsletter': 'Newsletter',
        },
        ta: {
            'nav.home': 'முகப்பு',
            'nav.about': 'எங்களைப் பற்றி',
            'nav.programs': 'படிப்புகள்',
            'nav.contact': 'தொடர்பு',
            'nav.admission': 'சேர்க்கை விவரம்',
            'hero.title': 'உங்கள் ஃபேஷன் ஆர்வத்தை ஒரு தொழிலாக மாற்றவும்',
            'hero.subtitle': 'Master the art of design and tailoring at Jayam Institute of Design.',
            'hero.cta': 'படிப்புகளை ஆராயுங்கள்',
            'hero.subtext.small': 'ஃபேஷன் துறையில் உங்கள் பயணத்தைத் தொடங்குங்கள்',
            'hero.subtext.main': 'தொழில்முறை தையல் மற்றும் தொழில்முனைவில் தேர்ச்சி பெறுங்கள்.',
            'common.scroll': 'கீழே உருட்டவும்',
            'common.learnMore': 'மேலும் அறிய',
            'stats.alumni': 'வெற்றிகரமான முன்னாள் மாணவர்கள்',
            'stats.legacy': 'ஆண்டுகால பாரம்பரியம்',
            'stats.nsdc': 'NSDC அங்கீகரிக்கப்பட்டது',
            'stats.partners': 'தொழில் கூட்டாளிகள்',
            'story.origin.subtitle': 'தொடக்க நிலை',
            'story.origin.title': 'உலோகத்தில் உருவானது',
            'story.origin.content': '19 ஆம் நூற்றாண்டின் இறுதியில், துல்லியம் எஃகு மூலம் செதுக்கப்பட்டது. இந்த இயந்திரம் நவீன ஆடைகளின் ஆரம்பத்தை குறிக்கிறது.',
            'story.mechanism.subtitle': 'இயக்கமுறை',
            'story.mechanism.title': 'இதயத் துடிப்பு',
            'story.mechanism.content': 'சக்கரத்தின் ஒவ்வொரு சுழற்சியும் ஒரு கவிதை. தையல் கலையை கற்பதற்கு முன் அதன் தாளத்தை உணர கற்றுக்கொள்ளுங்கள்.',
            'story.craft.subtitle': 'கைவினைத் திறன்',
            'story.craft.title': 'வடிவமைப்பில் தேர்ச்சி',
            'story.craft.content': 'இது துணிகளை இணைப்பது மட்டுமல்ல. மனித உடலோடு இணைந்து செயல்படும் ஒரு அழகான வடிவமைப்பை உருவாக்குவது.',
            'story.legacy.subtitle': 'பாரம்பரியம்',
            'story.legacy.title': 'நித்திய தையல்',
            'story.legacy.content': 'பழைய இயந்திரங்கள் முதல் இன்றைய டிஜிட்டல் ஊசிகள் வரை, தையல் கலை என்றும் ஃபேஷன் உலகின் ஆன்மாவாகத் திகழ்கிறது.',
            'story.conclusion.title': 'உங்கள் பயணத்தை தொடங்குங்கள்',
            'story.conclusion.subtitle': 'ஜெயம் ஃபேஷன் நிறுவனத்தில் சேர்ந்து சிறந்த வடிவமைப்பாளராக மாறுங்கள்.',
            'story.conclusion.cta': 'படிப்புகளை ஆராயுங்கள்',
            'about.title.part1': 'உங்கள்',
            'about.title.highlight': 'ஃபேஷன் ஆர்வத்தை',
            'about.title.part2': 'வெற்றிகரமான தொழிலாக மாற்றவும்',
            'about.description': 'ஜெயம் ஃபேஷன் இன்ஸ்டிடியூட் 1995 முதல் ஆயிரக்கணக்கான மாணவர்களை சிறந்த வடிவமைப்பாளர்களாக மாற்றியுள்ளது.',
            'about.cta': 'உங்கள் பயணத்தை தொடங்குங்கள்',
            'programs.title.part1': 'எங்கள்',
            'programs.title.highlight': 'படிப்புகள்',
            'programs.cta': 'அனைத்து படிப்புகளையும் பாருங்கள்',
            'admission.badge': 'இன்றே பயிலத் தொடங்குங்கள்',
            'admission.title': 'தொழில்முறை தையல் கலைஞர் ஆகுங்கள்',
            'admission.description': 'உங்கள் சொந்த ஃபேஷன் தொழிலை வளர்க்க சிறந்த திறன்களைக் கற்றுக்கொள்ளுங்கள். எளிய, நடைமுறை மற்றும் சான்றிதழ் பெற்ற பயிற்சி.',
            'admission.cta': 'சேர்க்கைக்கு அணுகவும்',
            'admission.practical': '100% செய்முறைப் பயிற்சி',
            'admission.job': 'வேலை வாய்ப்பு உதவி',
            'admission.flexibility': 'நெகிழ்வான நேரங்கள்',
            'admission.benefit1.title': 'நிபுணர் வழிகாட்டுதல்',
            'admission.benefit1.desc': 'டாக்டர் ஜி. சகாயசெல்வம் மற்றும் 25+ ஆண்டுகள் அனுபவமுள்ள குழுவிடம் கற்றுக்கொள்ளுங்கள்.',
            'admission.benefit2.title': 'தொழில் ஆதரவு',
            'admission.benefit2.desc': 'நாங்கள் திறன்களை மட்டும் கற்பிப்பதில்லை; உங்கள் சொந்த வணிகத்தைத் தொடங்கவும் வழிகாட்டுகிறோம்.',
            'admission.benefit3.title': 'NSDC சான்றிதழ்',
            'admission.benefit3.desc': 'அரசாங்கத்தால் அங்கீகரிக்கப்பட்ட சான்றிதழ்களைப் பெறுங்கள்.',
            'contact.title': 'எங்களைத் தொடர்பு கொள்ளுங்கள்',
            'contact.subtitle': 'உங்கள் ஃபேஷன் பயணத்தைத் தொடங்க தயாரா? இன்றே எங்களை அழையுங்கள்.',
            'footer.tagline': '1995 முதல் ஃபேஷன் தலைவர்களை உருவாக்குகிறது.',
            'footer.quickLinks': 'விரைவான இணைப்புகள்',
            'footer.programs': 'படிப்புகள்',
            'footer.newsletter': 'செய்தி மடல்',
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
