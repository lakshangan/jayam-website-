import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Float, Center, ContactShadows, Html, useProgress, PerspectiveCamera, PresentationControls } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration, DepthOfField, Vignette } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { MotionValue } from 'framer-motion';

const Loader = () => {
    const { progress } = useProgress();
    return (
        <Html center>
            <div className="flex flex-col items-center bg-[#050508]/90 p-10 rounded-[3rem] border border-amber-500/30 backdrop-blur-3xl shadow-[0_0_50px_rgba(217,119,6,0.2)]">
                <div className="w-72 h-1.5 bg-white/5 rounded-full overflow-hidden mb-6">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        className="h-full bg-gradient-to-r from-amber-700 via-amber-500 to-amber-400"
                    />
                </div>
                <div className="flex flex-col items-center gap-2">
                    <span className="text-amber-200 text-[11px] uppercase tracking-[0.5em] font-bold animate-pulse">
                        Visualizing History
                    </span>
                    <span className="text-amber-500/50 text-[10px] uppercase tracking-[0.3em] font-medium">
                        {Math.round(progress)}%
                    </span>
                </div>
            </div>
        </Html>
    );
};

const CinematicCamera = ({ scrollProgress }: { scrollProgress: MotionValue<number> }) => {
    const cameraRef = useRef<THREE.PerspectiveCamera>(null);
    const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));

    useFrame((state) => {
        if (!cameraRef.current) return;
        const p = scrollProgress.get();

        // Far-field targets to ensure machine is always visible and framed
        let targetPos = new THREE.Vector3(0, 0, 25);
        let targetLookAt = new THREE.Vector3(0, 0, 0);

        if (p < 0.15) {
            // HERO: Full Machine Reveal (Side Angle)
            targetPos.set(4, 2, 22);
            targetLookAt.set(0, 0, 0);
        } else if (p < 0.35) {
            // SECTION 01: THE MACHINE HEAD
            // Pulling back to 12 units to keep it clear
            targetPos.set(3, 3, 12);
            targetLookAt.set(0, 2.5, 0);
        } else if (p < 0.55) {
            // SECTION 02: THE NEEDLE
            // Focused but with context
            targetPos.set(-5, 0.5, 8);
            targetLookAt.set(-3.5, 0.2, 0);
        } else if (p < 0.80) {
            // SECTION 03: THE CIRCLE WHEEL
            targetPos.set(6, 1.5, 10);
            targetLookAt.set(5, 0.5, 0);
        } else {
            // FINAL: Cinematic Pullback
            targetPos.set(0, 5, 25);
            targetLookAt.set(0, 0, 0);
        }

        // Ultra-smooth buttery interpolation
        state.camera.position.lerp(targetPos, 0.02);
        currentLookAt.current.lerp(targetLookAt, 0.02);
        state.camera.lookAt(currentLookAt.current);
        state.camera.updateProjectionMatrix();
    });

    return <PerspectiveCamera makeDefault ref={cameraRef} fov={35} far={1000} />;
};

const Model = ({ url, scrollProgress }: { url: string, scrollProgress: MotionValue<number> }) => {
    const { scene } = useGLTF(url);
    const modelRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (modelRef.current) {
            const p = scrollProgress ? scrollProgress.get() : 0;
            const time = state.clock.getElapsedTime();

            // Default orientation: Math.PI * 0.5 for the branded STITCHER side
            let targetRotation = Math.PI * 0.5;

            if (p < 0.15) {
                targetRotation = Math.PI * 0.5 + Math.sin(time * 0.1) * 0.1;
            } else if (p < 0.35) {
                targetRotation = Math.PI * 0.5 + 0.3; // Angle for head
            } else if (p < 0.55) {
                targetRotation = Math.PI * 0.5 - 0.2; // Angle for needle
            } else if (p < 0.80) {
                targetRotation = Math.PI * 0.5 + 0.5; // Angle for wheel
            } else {
                targetRotation = Math.PI * 0.5 + (p * 0.5);
            }

            modelRef.current.rotation.y = THREE.MathUtils.lerp(modelRef.current.rotation.y, targetRotation, 0.03);
            modelRef.current.position.y = Math.sin(time * 0.5) * 0.1;
        }
    });

    return (
        <primitive
            ref={modelRef}
            object={scene}
            scale={0.45}
        />
    );
};

export const SewingMachineScene = ({ scrollProgress }: { scrollProgress: MotionValue<number> }) => {
    return (
        <div className="w-full h-full relative">
            <Canvas shadows dpr={[1, 2]} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}>
                <CinematicCamera scrollProgress={scrollProgress} />

                <Suspense fallback={<Loader />}>
                    <Environment preset="studio" />

                    <ambientLight intensity={0.5} />

                    {/* Studio Key Lighting */}
                    <spotLight
                        position={[10, 20, 10]}
                        angle={0.25}
                        penumbra={1}
                        intensity={12}
                        color="#ffffff"
                        castShadow
                    />
                    <pointLight position={[-10, 5, 5]} intensity={5} color="#fbbf24" />
                    <pointLight position={[0, 10, -10]} intensity={4} color="#ffffff" />

                    <Center top>
                        <PresentationControls
                            global
                            cursor={false}
                            speed={1.5}
                            damping={0.15}
                            snap={true}
                            rotation={[0, 0.3, 0]}
                            polar={[-Math.PI / 18, Math.PI / 18]}
                            azimuth={[-Math.PI / 12, Math.PI / 12]}
                        >
                            <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.2}>
                                <Model url="/Sewing Machine 3D Model.glb" scrollProgress={scrollProgress} />
                            </Float>
                        </PresentationControls>
                    </Center>

                    <ContactShadows
                        position={[0, -2.5, 0]}
                        opacity={0.6}
                        scale={20}
                        blur={3}
                        far={6}
                        color="#000000"
                    />

                    <EffectComposer multisampling={4}>
                        <Bloom intensity={0.25} luminanceThreshold={0.9} blendFunction={BlendFunction.SCREEN} />
                        <Vignette darkness={1.1} offset={0.1} />
                    </EffectComposer>
                </Suspense>
            </Canvas>
        </div>
    );
};
