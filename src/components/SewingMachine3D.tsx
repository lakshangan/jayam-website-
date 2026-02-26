import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment, ContactShadows, Center, Html, useProgress, SpotLight } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function Loader() {
    const { progress } = useProgress();
    return (
        <Html center>
            <div className="flex flex-col items-center justify-center text-white/50 space-y-3 font-sans min-w-[200px] mix-blend-screen pointer-events-none">
                <div className="w-12 h-12 border-2 border-[#c5a358] border-t-transparent rounded-full animate-spin"></div>
                <p className="text-[10px] uppercase tracking-[0.4em] font-light">{progress.toFixed(0)}% Loading Core Engine</p>
            </div>
        </Html>
    );
}

const ExperienceScene = ({ animData }: { animData: React.MutableRefObject<any> }) => {
    const { scene } = useGLTF('/sewing-machine.glb');
    const { camera } = useThree();
    const modelGroup = useRef<THREE.Group>(null);
    const spotLightRef = useRef<THREE.SpotLight>(null);

    React.useEffect(() => {
        scene.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
                const mesh = child as THREE.Mesh;
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                if (mesh.material instanceof THREE.MeshStandardMaterial) {
                    mesh.material.envMapIntensity = 2; // boost reflections
                    mesh.material.roughness = 0.2; // shiny metallic
                    mesh.material.metalness = 0.8;
                }
            }
        });
    }, [scene]);

    useFrame(() => {
        const data = animData.current;

        // Smoothly interpolate Camera
        camera.position.lerp(new THREE.Vector3(data.cameraPos.x, data.cameraPos.y, data.cameraPos.z), 0.05);
        camera.lookAt(data.cameraLookAt.x, data.cameraLookAt.y, data.cameraLookAt.z);

        if (modelGroup.current) {
            // Smoothly interpolate Model
            modelGroup.current.rotation.x = THREE.MathUtils.lerp(modelGroup.current.rotation.x, data.modelRot.x, 0.05);
            modelGroup.current.rotation.y = THREE.MathUtils.lerp(modelGroup.current.rotation.y, data.modelRot.y, 0.05);
            modelGroup.current.rotation.z = THREE.MathUtils.lerp(modelGroup.current.rotation.z, data.modelRot.z, 0.05);

            const s = data.modelScale.value;
            modelGroup.current.scale.lerp(new THREE.Vector3(s, s, s), 0.05);

            // Subtle hover independent of scroll
            modelGroup.current.position.y = Math.sin(Date.now() / 1500) * 0.05;
        }

        if (spotLightRef.current) {
            spotLightRef.current.intensity = THREE.MathUtils.lerp(spotLightRef.current.intensity, data.lightIntensity.value, 0.05);
            spotLightRef.current.position.lerp(new THREE.Vector3(data.lightPos.x, data.lightPos.y, data.lightPos.z), 0.05);
        }
    });

    return (
        <group>
            <SpotLight
                ref={spotLightRef}
                angle={0.5}
                penumbra={1}
                castShadow
                color="#c5a358"
                distance={40}
                intensity={0}
            />
            <group ref={modelGroup}>
                <Center>
                    <primitive object={scene} />
                </Center>
            </group>
        </group>
    );
};

export default function SewingMachine3D() {
    const containerRef = useRef<HTMLElement>(null);

    // Shared state proxy object between GSAP timeline and R3F animation loop
    const animData = useRef({
        cameraPos: { x: 0, y: 0.5, z: 8 },
        cameraLookAt: { x: 0, y: 0, z: 0 },
        lightPos: { x: -5, y: 5, z: -5 },
        lightIntensity: { value: 50 },
        modelRot: { x: 0, y: -Math.PI / 4, z: 0 },
        modelScale: { value: 0.8 }
    });

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=500%",
                scrub: 1.5,
                pin: true,
            }
        });

        const data = animData.current;

        // --- CHAPTER 1: Precision Engineered ---
        // Slide text in, animate camera wrapping around the right
        tl.to("#text-chap-1", { opacity: 1, y: 0, duration: 1 }, 0)
            .to(data.cameraPos, { x: 3, y: 1.5, z: 4, duration: 1 }, 0)
            .to(data.modelRot, { y: Math.PI / 3, duration: 1 }, 0)
            .to(data.modelScale, { value: 1.2, duration: 1 }, 0)
            .to(data.lightIntensity, { value: 300, duration: 1 }, 0)
            .to(data.lightPos, { x: 3, y: 5, z: 2, duration: 1 }, 0);

        // Hold Chapter 1
        tl.to(data.cameraPos, { x: 3.5, duration: 0.5 }, 1);

        // --- CHAPTER 2: Timeless Rhythm ---
        // Fade out Ch 1
        tl.to("#text-chap-1", { opacity: 0, y: -40, duration: 1 }, 1.5)
            // Fade in Ch 2
            .to("#text-chap-2", { opacity: 1, y: 0, duration: 1 }, 1.5)
            // Pan camera wide across the front to the left side
            .to(data.cameraPos, { x: -3, y: 2, z: 3.5, duration: 1.5 }, 1.5)
            .to(data.modelRot, { x: 0.1, y: Math.PI * 1.5, z: 0.05, duration: 1.5 }, 1.5)
            .to(data.modelScale, { value: 1.4, duration: 1.5 }, 1.5)
            .to(data.lightPos, { x: -3, y: 6, z: 4, duration: 1.5 }, 1.5)
            .to(data.lightIntensity, { value: 400, duration: 1.5 }, 1.5);

        // Hold Chapter 2
        tl.to(data.cameraPos, { z: 4, duration: 0.5 }, 3);

        // --- CHAPTER 3: Master Your Craft ---
        // Fade out Ch 2
        tl.to("#text-chap-2", { opacity: 0, y: -40, duration: 1 }, 3.5)
            // Fade in final CTA
            .to("#text-chap-3", { opacity: 1, y: 0, duration: 1 }, 3.5)
            // Camera pulls wide, framing perfectly center
            .to(data.cameraPos, { x: 0, y: 3, z: 7, duration: 1.5 }, 3.5)
            .to(data.cameraLookAt, { x: 0, y: 1, z: 0, duration: 1.5 }, 3.5)
            .to(data.modelRot, { x: 0, y: Math.PI * 2.5, z: 0, duration: 1.5 }, 3.5)
            .to(data.modelScale, { value: 1.0, duration: 1.5 }, 3.5)
            .to(data.lightPos, { x: 0, y: 10, z: 5, duration: 1.5 }, 3.5)
            .to(data.lightIntensity, { value: 600, duration: 1.5 }, 3.5);

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative h-screen w-full bg-[#020617] text-white selection:bg-[#c5a358]/30 overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center">

                {/* Ambient Cinematic Grain and Vignette */}
                <div
                    className="absolute inset-0 pointer-events-none z-20 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.95)_100%)] w-full h-full mix-blend-multiply"
                />

                {/* DOM Text Overlay Timeline Layer */}
                <div className="absolute inset-x-0 h-full max-w-7xl mx-auto pointer-events-none z-30 px-6 md:px-12 flex items-center">

                    {/* Scene 1 */}
                    <div
                        id="text-chap-1"
                        className="absolute left-6 md:left-16 opacity-0 translate-y-10 w-full max-w-lg"
                    >
                        <span className="text-[#c5a358] text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4 block">The Foundation</span>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white drop-shadow-2xl mb-6">
                            Where Art<br />Meets Craft.
                        </h2>
                        <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed border-l border-[#c5a358]/30 pl-4 py-1">
                            Your journey starts with a single thread. Master the tools and techniques that turn raw fabric into breathtaking fashion.
                        </p>
                    </div>

                    {/* Scene 2 */}
                    <div
                        id="text-chap-2"
                        className="absolute right-6 md:right-16 text-right w-full flex flex-col justify-end items-end opacity-0 translate-y-10"
                    >
                        <div className="max-w-lg">
                            <span className="text-[#c5a358] text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4 block">The Process</span>
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white drop-shadow-2xl mb-6">
                                Rhythm &<br />Momentum.
                            </h2>
                            <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed border-r border-[#c5a358]/30 pr-4 py-1 flex-end text-end self-end">
                                Feel the hum of the machine as your imagination takes shape. Every stitch is a step closer to your masterpiece.
                            </p>
                        </div>
                    </div>

                    {/* Scene 3 */}
                    <div
                        id="text-chap-3"
                        className="absolute left-1/2 -translate-x-1/2 top-1/4 md:top-1/3 max-w-3xl text-center w-full px-4 flex flex-col items-center opacity-0 translate-y-10"
                    >
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white/80 to-transparent drop-shadow-[0_20px_40px_rgba(197,163,88,0.2)] mb-8 pb-4">
                            Shape The Future of Fashion.
                        </h2>
                        <div className="pointer-events-auto mt-4 group">
                            <Link to="/courses" className="relative overflow-hidden inline-flex px-10 py-5 rounded-full bg-white text-slate-950 font-bold uppercase tracking-[0.2em] text-sm md:text-base transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
                                <span className="relative z-10">Begin Your Journey</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#c5a358] to-[#dfbf79] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* 3D Canvas */}
                <div className="absolute inset-0 z-0 bg-[#020617]">
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 35 }} gl={{ antialias: true, alpha: false, toneMapping: THREE.ACESFilmicToneMapping }}>
                        <color attach="background" args={['#020617']} />

                        {/* Dramatic Lighting Pipeline */}
                        <ambientLight intensity={0.2} />
                        <directionalLight position={[-5, 5, 5]} intensity={1} color="#ffffff" castShadow shadow-mapSize={2048} />
                        <directionalLight position={[5, -2, -5]} intensity={0.5} color="#c5a358" />

                        <Environment preset="studio" environmentIntensity={0.8} />

                        <Suspense fallback={<Loader />}>
                            <ExperienceScene animData={animData} />

                            {/* Cinematic shadow floor */}
                            <ContactShadows
                                position={[0, -2.5, 0]}
                                opacity={1}
                                scale={25}
                                blur={3}
                                far={5}
                                resolution={1024}
                                color="#000000"
                            />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </section>
    );
}

useGLTF.preload('/sewing-machine.glb');
