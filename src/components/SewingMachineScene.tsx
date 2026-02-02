import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, ContactShadows, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Stable Model component with internal lerping
const Model = ({ url, progress }: { url: string, progress: number }) => {
    const { scene } = useGLTF(url);
    const modelRef = useRef<THREE.Group>(null);

    const cloned = useMemo(() => {
        if (!scene) return null;
        try {
            return scene.clone();
        } catch (e) {
            return null;
        }
    }, [scene]);

    // Smoothly interpolate rotation based on the simplified progress prop
    useFrame((state) => {
        if (!modelRef.current) return;

        const time = state.clock.getElapsedTime();
        // Default orientation: Math.PI * 0.5 for the branded STITCHER side
        let targetRot = Math.PI * 0.5;

        // Visual breakpoints for cinematic effect
        if (progress < 0.15) {
            targetRot = Math.PI * 0.5 + Math.sin(time * 0.1) * 0.1;
        } else if (progress < 0.35) {
            targetRot = Math.PI * 0.5 + 0.3;
        } else if (progress < 0.55) {
            targetRot = Math.PI * 0.5 - 0.2;
        } else if (progress < 0.80) {
            targetRot = Math.PI * 0.5 + 0.5;
        } else {
            targetRot = Math.PI * 0.5 + (progress * 0.5);
        }

        modelRef.current.rotation.y = THREE.MathUtils.lerp(modelRef.current.rotation.y, targetRot, 0.05);
        modelRef.current.position.y = THREE.MathUtils.lerp(modelRef.current.position.y, -1 + Math.sin(time * 0.5) * 0.1, 0.05);
    });

    if (!cloned) return null;

    return <primitive ref={modelRef} object={cloned} scale={0.45} position={[0, -1, 0]} />;
};

export const SewingMachineScene = ({ scrollValue }: { scrollValue: number }) => {
    return (
        <div className="w-full h-full">
            <Canvas
                gl={{ antialias: true, alpha: true, stencil: false, depth: true }}
                dpr={[1, 1.5]}
                shadows={false}
            >
                <PerspectiveCamera makeDefault position={[0, 2, 20]} fov={35} />
                <Suspense fallback={null}>
                    <Environment preset="studio" />
                    <ambientLight intensity={1.5} />
                    <pointLight position={[10, 10, 10]} intensity={2} />
                    <pointLight position={[-10, 5, 5]} intensity={2} color="#fbbf24" />

                    <Model url="/Sewing Machine 3D Model.glb" progress={scrollValue} />

                    <ContactShadows
                        position={[0, -1, 0]}
                        opacity={0.3}
                        scale={12}
                        blur={2.5}
                        far={4}
                        color="#000000"
                    />
                </Suspense>
            </Canvas>
        </div>
    );
};
