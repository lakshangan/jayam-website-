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
            'nav.about': 'About',
            'nav.programs': 'Programs',
            'nav.contact': 'Contact',
            'nav.admission': 'Get Admission Info',
            'hero.title': 'Launch Your Fashion Career',
            'hero.subtitle': 'Learn professional tailoring and design at Jayam Institute.',
            'hero.cta': 'View Programs',
            'hero.subtext.small': 'Begin your journey',
            'hero.subtext.main': 'Become a Professional Tailor & Designer.',
            'common.scroll': 'Scroll',
            'common.learnMore': 'Learn More',
            'stats.alumni': 'Happy Alumni',
            'stats.legacy': 'Years Experience',
            'stats.nsdc': 'NSDC Approved',
            'stats.partners': 'Top Partners',
            'story.origin.subtitle': 'Our Origin',
            'story.origin.title': 'HOW WE STARTED',
            'story.origin.content': 'Since 1995, we have been teaching students the true art of professional tailoring and fashion design.',
            'story.mechanism.subtitle': 'Our Method',
            'story.mechanism.title': 'PRACTICAL LEARNING',
            'story.mechanism.content': 'We focus on 100% practical training. You learn by doing real work, not just reading books.',
            'story.craft.subtitle': 'Our Craft',
            'story.craft.title': 'PERFECT FIT',
            'story.craft.content': 'Learn the secrets of making clothes that fit perfectly and look amazing on any body type.',
            'story.legacy.subtitle': 'Our Future',
            'story.legacy.title': 'YOUR SUCCESS',
            'story.legacy.content': 'Our goal is to help you start your own successful boutique and become an independent designer.',
            'story.conclusion.title': 'START TODAY',
            'story.conclusion.subtitle': 'Join Jayam Institute and turn your passion into your profession.',
            'story.conclusion.cta': 'See Our Courses',
            'about.title.part1': 'About',
            'about.title.highlight': 'Jayam',
            'about.title.part2': 'Institute',
            'about.description': 'With over 25 years of experience, we provide practical, hands-on fashion training. We help you turn your creativity into a real, money-making career, guiding you every step of the way.',
            'about.cta': 'Read Our Story',
            'programs.title.part1': 'Our',
            'programs.title.highlight': 'Programs',
            'programs.cta': 'All Courses',
            'admission.badge': 'Enroll Now',
            'admission.title': 'Start Your Training',
            'admission.description': 'Learn the skills you need to open your own boutique. Simple, hands-on, and fully certified.',
            'admission.cta': 'Apply Today',
            'admission.practical': '100% Practical Classes',
            'admission.job': 'Job & Business Help',
            'admission.flexibility': 'Flexible Timings',
            'admission.benefit1.title': 'Learn from Experts',
            'admission.benefit1.desc': 'Get trained directly by experienced fashion professionals.',
            'admission.benefit2.title': 'Start Your Business',
            'admission.benefit2.desc': 'We give you the knowledge and support to open your own shop.',
            'admission.benefit3.title': 'Govt. Certificates',
            'admission.benefit3.desc': 'Get NSDC recognized certificates when you complete your course.',
            'contact.title': 'Get In Touch',
            'contact.subtitle': 'Have questions? We are here to help you start.',
            'footer.tagline': 'Building successful fashion careers since 1995.',
            'footer.quickLinks': 'Links',
            'footer.programs': 'Courses',
            'footer.newsletter': 'Updates',
        },
        ta: {
            'nav.home': 'முகப்பு',
            'nav.about': 'எங்களைப் பற்றி',
            'nav.programs': 'படிப்புகள்',
            'nav.contact': 'தொடர்பு',
            'nav.admission': 'சேர்க்கை விவரம்',
            'hero.title': 'உங்கள் ஃபேஷன் தொழிலைத் தொடங்குங்கள்',
            'hero.subtitle': 'ஜெயம் இன்ஸ்டிடியூட்டில் சிறந்த தையல் மற்றும் வடிவமைப்பைக் கற்றுக்கொள்ளுங்கள்.',
            'hero.cta': 'படிப்புகளைப் பார்க்க',
            'hero.subtext.small': 'உங்கள் பயணத்தைத் தொடங்குங்கள்',
            'hero.subtext.main': 'சரியான டெய்லர் மற்றும் டிசைனர் ஆகுங்கள்.',
            'common.scroll': 'கீழே செல்ல',
            'common.learnMore': 'மேலும் அறிய',
            'stats.alumni': 'வெற்றிகரமான மாணவர்கள்',
            'stats.legacy': 'வருட அனுபவம்',
            'stats.nsdc': 'NSDC அங்கீகாரம்',
            'stats.partners': 'சிறந்த கூட்டாளர்கள்',
            'story.origin.subtitle': 'எங்கள் வரலாறு',
            'story.origin.title': 'நாங்கள் தொடங்கிய விதம்',
            'story.origin.content': '1995 முதல், மாணவர்களுக்கு சிறந்த தையல் மற்றும் ஃபேஷன் டிசைனிங் கலையை கற்றுத்தருகிறோம்.',
            'story.mechanism.subtitle': 'எங்கள் முறை',
            'story.mechanism.title': 'செய்முறைப் பயிற்சி',
            'story.mechanism.content': 'நாங்கள் 100% செய்முறைப் பயிற்சியில் கவனம் செலுத்துகிறோம். நேரடி அனுபவம் மூலம் கற்றுக்கொள்ளுங்கள்.',
            'story.craft.subtitle': 'கலைத்திறன்',
            'story.craft.title': 'சரியான பொருத்தம்',
            'story.craft.content': 'எந்த உடல் அமைப்பிற்கும் சரியாக பொருந்தும் மற்றும் அழகாக தோன்றும் ஆடைகளை உருவாக்க கற்றுக்கொள்ளுங்கள்.',
            'story.legacy.subtitle': 'எதிர்காலம்',
            'story.legacy.title': 'உங்கள் வெற்றி',
            'story.legacy.content': 'நீங்கள் சொந்தமாக பூட்டிக் (Boutique) தொடங்கி சிறந்த டிசைனராக மாறுவதே எங்கள் இலக்கு.',
            'story.conclusion.title': 'இன்றே தொடங்குங்கள்',
            'story.conclusion.subtitle': 'ஜெயம் இன்ஸ்டிடியூட்டில் இணைந்து உங்கள் ஆர்வத்தை தொழிலாக மாற்றுங்கள்.',
            'story.conclusion.cta': 'படிப்புகளைப் பார்க்க',
            'about.title.part1': 'About',
            'about.title.highlight': 'Jayam',
            'about.title.part2': 'Institute',
            'about.description': '25 ஆண்டுகளுக்கும் மேலான அனுபவத்துடன், சிறந்த செய்முறைப் பயிற்சியை வழங்குகிறோம். உங்கள் கற்பனையை நிஜமான, லாபகரமான தொழிலாக மாற்ற வழிகாட்டுகிறோம்.',
            'about.cta': 'மேலும் அறிய',
            'programs.title.part1': 'எங்கள்',
            'programs.title.highlight': 'படிப்புகள்',
            'programs.cta': 'அனைத்து படிப்புகள்',
            'admission.badge': 'இன்றே சேருங்கள்',
            'admission.title': 'உங்கள் பயிற்சியைத் தொடங்குங்கள்',
            'admission.description': 'சொந்தமாக தொழில் தொடங்க தேவையான திறன்களைக் கற்றுக்கொள்ளுங்கள். எளிமையான மற்றும் சிறந்த பயிற்சி.',
            'admission.cta': 'இன்றே விண்ணப்பிக்க',
            'admission.practical': '100% செய்முறை வகுப்பு',
            'admission.job': 'வேலை மற்றும் தொழில் உதவி',
            'admission.flexibility': 'நெகிழ்வான நேரங்கள்',
            'admission.benefit1.title': 'நிபுணர்களிடம் கற்கலாம்',
            'admission.benefit1.desc': 'அனுபவமிக்க ஃபேஷன் நிபுணர்களிடமிருந்து நேரடியாக பயிற்சி பெறுங்கள்.',
            'admission.benefit2.title': 'சொந்த தொழில் தொடங்குங்கள்',
            'admission.benefit2.desc': 'உங்கள் சொந்த கடையைத் திறக்க முழுமையான வழிகாட்டுதல் தருகிறோம்.',
            'admission.benefit3.title': 'அரசு சான்றிதழ்கள்',
            'admission.benefit3.desc': 'படிப்பை முடிக்கும்போது NSDC அங்கீகரிக்கப்பட்ட சான்றிதழ்களைப் பெறுங்கள்.',
            'contact.title': 'தொடர்பு கொள்க',
            'contact.subtitle': 'சந்தேகங்கள் உள்ளதா? நாங்கள் உதவ காத்திருக்கிறோம்.',
            'footer.tagline': '1995 முதல் சிறந்த ஃபேஷன் நிபுணர்களை உருவாக்குகிறோம்.',
            'footer.quickLinks': 'இணைப்புகள்',
            'footer.programs': 'படிப்புகள்',
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
