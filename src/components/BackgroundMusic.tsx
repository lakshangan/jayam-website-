
import { useEffect, useRef } from 'react';

const BackgroundMusic = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Main cinematic theme
    const mainMusicUrl = "https://cdn.pixabay.com/audio/2022/10/24/audio_332f1fd38a.mp3";

    useEffect(() => {
        const audio = new Audio(mainMusicUrl);
        audio.loop = true;
        audio.volume = 0;
        audioRef.current = audio;

        const handleStartMainMusic = () => {
            // Play main theme
            audio.play().then(() => {
                let vol = 0;
                const fadeIn = setInterval(() => {
                    if (vol < 0.4) {
                        vol += 0.02;
                        audio.volume = vol;
                    } else {
                        clearInterval(fadeIn);
                    }
                }, 100);
            }).catch(e => console.log("Main music blocked", e));
        };

        // Listen for the custom "Enter" event
        window.addEventListener('start-bg-music', handleStartMainMusic);

        return () => {
            window.removeEventListener('start-bg-music', handleStartMainMusic);
            audio.pause();
        };
    }, []);

    return null;
};

export default BackgroundMusic;
